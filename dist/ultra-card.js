/*! For license information please see ultra-card.js.LICENSE.txt */
(()=>{"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(i,e,o)},a=(o,i)=>{if(t)o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,f=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},x=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??x)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[f("elementProperties")]=new Map,$[f("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,k=w.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+T,M=`<${A}>`,I=document,R=()=>I.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,j="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,P=/>/g,N=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,B=/^(?:script|style|textarea|title)$/i,F=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),H=F(1),V=(F(2),F(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,q=I.createTreeWalker(I,129);function J(e,t){if(!E(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const K=(e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",a=O;for(let t=0;t<o;t++){const o=e[t];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===O?"!--"===l[1]?a=D:void 0!==l[1]?a=P:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=n??O,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?N:'"'===l[3]?U:L):a===U||a===L?a=N:a===D||a===P?a=O:(a=N,n=void 0);const p=a===N&&e[t+1].startsWith("/>")?" ":"";r+=a===O?o+M:c>=0?(i.push(s),o.slice(0,c)+S+o.slice(c)+T+p):o+T+(-2===c?t:p)}return[J(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Z{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,s=this.parts,[l,c]=K(e,t);if(this.el=Z.createElement(l,o),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=q.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=c[r++],o=i.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?te:"?"===a[1]?oe:"@"===a[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(B.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],R()),q.nextNode(),s.push({type:2,index:++n});i.append(e[t],R())}}}else if(8===i.nodeType)if(i.data===A)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const o=I.createElement("template");return o.innerHTML=e,o}}function Y(e,t,o=e,i){if(t===V)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=z(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=Y(e,n._$AS(e,t.values),n,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??I).importNode(t,!0);q.currentNode=i;let n=q.nextNode(),r=0,a=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new X(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=o[++a]}r!==s?.index&&(n=q.nextNode(),r++)}return q.currentNode=I,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),z(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>E(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Z.createElement(J(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Z(e)),t}k(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new X(this.O(R()),this.O(R()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=Y(this,e,t,0),r=!z(e)||e!==this._$AH&&e!==V,r&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=Y(this,i[o+a],t,a),s===V&&(s=this._$AH[a]),r||=!z(s)||s!==this._$AH[a],s===G?e=G:e!==G&&(e+=(s??"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ie extends ee{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??G)===V)return;const o=this._$AH,i=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==G&&(o===G||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const re=w.litHtmlPolyfillSupport;re?.(Z,X),(w.litHtmlVersions??=[]).push("3.2.1");class ae extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new X(t.insertBefore(R(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const se=globalThis.litElementPolyfillSupport;se?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.1.1");const le=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ce={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},de=(e=ce,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function pe(e){return(t,o)=>"object"==typeof o?de(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ue(e){return pe({...e,state:!0,attribute:!1})}class he{validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}generateId(e){return`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}renderFormField(e,t,o){return H`
      <div class="form-field">
        <label class="form-label">${e}</label>
        ${t} ${o?H`<div class="form-description">${o}</div>`:""}
      </div>
    `}renderColorPicker(e,t,o,i){return this.renderFormField(e,H`
        <input
          type="color"
          .value=${t||"#000000"}
          @change=${e=>o(e.target.value)}
        />
      `,i)}renderNumberInput(e,t,o,i={},n){return this.renderFormField(e,H`
        <input
          type="number"
          .value=${t||0}
          min=${i.min||0}
          max=${i.max||1e3}
          step=${i.step||1}
          @input=${e=>o(Number(e.target.value))}
        />
      `,n)}renderTextInput(e,t,o,i,n){return this.renderFormField(e,H`
        <input
          type="text"
          .value=${t||""}
          placeholder=${i||""}
          @input=${e=>o(e.target.value)}
        />
      `,n)}renderTextArea(e,t,o,i,n){return this.renderFormField(e,H`
        <textarea
          .value=${t||""}
          placeholder=${i||""}
          rows="3"
          @input=${e=>o(e.target.value)}
        ></textarea>
      `,n)}renderSelect(e,t,o,i,n){return this.renderFormField(e,H`
        <select
          .value=${t||""}
          @change=${e=>i(e.target.value)}
        >
          ${o.map((e=>H`<option value="${e.value}">${e.label}</option>`))}
        </select>
      `,n)}renderCheckbox(e,t,o,i){return this.renderFormField("",H`
        <label class="checkbox-wrapper">
          <input
            type="checkbox"
            .checked=${t||!1}
            @change=${e=>o(e.target.checked)}
          />
          ${e}
        </label>
      `,i)}}class ge extends he{constructor(){super(...arguments),this.metadata={type:"text",title:"Text Module",description:"Display custom text with full typography controls and template support",author:"WJD Designs",version:"1.0.0",icon:"mdi:format-text",category:"content",tags:["text","content","typography","template"]}}createDefault(e){return{id:e||this.generateId("text"),type:"text",text:"Sample Text",link:"",hide_if_no_link:!1,icon:"",icon_position:"before",font_size:16,font_family:"Roboto",color:"var(--primary-text-color)",alignment:"center",bold:!1,italic:!1,underline:!1,uppercase:!1,strikethrough:!1,template_mode:!1,template:""}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        <!-- Content & Link Section (Two Columns) -->
        <div class="wpbakery-section">
          <h4>Content & Link</h4>
          <div class="two-column-grid">
            <div class="ha-form-field">
              <ha-textfield
                .value=${n.text}
                .label=${"Text Content"}
                .placeholder=${"Enter your text"}
                @input=${e=>i({text:e.target.value})}
                outlined
              ></ha-textfield>
            </div>
            <div class="ha-form-field">
              <ha-textfield
                .value=${n.link||""}
                .label=${"Link URL (Optional)"}
                .placeholder=${"https://example.com"}
                @input=${e=>i({link:e.target.value})}
                outlined
              ></ha-textfield>
            </div>
          </div>
          <div class="toggle-section">
            <ha-formfield .label=${"Hide element if no link"}>
              <ha-switch
                .checked=${n.hide_if_no_link||!1}
                @change=${e=>i({hide_if_no_link:e.target.checked})}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>

        <!-- Icon & Position Section -->
        <div class="wpbakery-section">
          <h4>Icon</h4>
          <div class="two-column-grid">
            <div class="ha-form-field">
              <ha-icon-picker
                .hass=${t}
                .value=${n.icon||""}
                .label=${"Icon"}
                .placeholder=${"Select an icon"}
                @value-changed=${e=>i({icon:e.detail.value})}
              ></ha-icon-picker>
            </div>
            ${n.icon?H`
                  <div class="ha-form-field">
                    <label class="form-label">Icon Position</label>
                    <div class="radio-group">
                      <ha-formfield .label=${"Before text"}>
                        <ha-radio
                          .checked=${"before"===n.icon_position||!n.icon_position}
                          @change=${()=>i({icon_position:"before"})}
                          name="icon-position"
                        ></ha-radio>
                      </ha-formfield>
                      <ha-formfield .label=${"After text"}>
                        <ha-radio
                          .checked=${"after"===n.icon_position}
                          @change=${()=>i({icon_position:"after"})}
                          name="icon-position"
                        ></ha-radio>
                      </ha-formfield>
                    </div>
                  </div>
                `:H`<div></div>`}
          </div>
          ${n.icon?H`
                <div class="icon-preview-section">
                  <div class="icon-preview">
                    <ha-icon icon="${n.icon}"></ha-icon>
                  </div>
                  <span class="icon-name">${n.icon}</span>
                </div>
              `:""}
        </div>
      </div>
    `}renderPreview(e,t){const o=e;if(o.hide_if_no_link&&(!o.link||""===o.link.trim()))return H`<div class="text-module-hidden">Hidden (no link)</div>`;const i=[];o.underline&&i.push("underline"),o.strikethrough&&i.push("line-through");const n={fontSize:`${o.font_size||16}px`,fontFamily:o.font_family||"Roboto",color:o.color||"var(--primary-text-color)",textAlign:o.alignment||"center",fontWeight:o.bold?"bold":"normal",fontStyle:o.italic?"italic":"normal",textTransform:o.uppercase?"uppercase":"none",textDecoration:i.length>0?i.join(" "):"none",lineHeight:"1.4",margin:"0",padding:"8px 0",display:"flex",alignItems:"center",justifyContent:o.alignment||"center",gap:"8px"},r=o.icon?H`<ha-icon icon="${o.icon}"></ha-icon>`:"",a=H`<span>${o.text||"Sample Text"}</span>`;let s;s="before"===o.icon_position?H`${r}${a}`:"after"===o.icon_position?H`${a}${r}`:a;const l=o.link&&""!==o.link.trim()?H`<a href="${o.link}" style="color: inherit; text-decoration: inherit;"
            >${s}</a
          >`:s;return H`
      <div class="text-module-preview" style=${this.styleObjectToCss(n)}>${l}</div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];if(t.text&&""!==t.text.trim()||o.push("Text content is required"),t.font_size&&(t.font_size<1||t.font_size>200)&&o.push("Font size must be between 1 and 200 pixels"),t.icon&&""!==t.icon.trim()&&(t.icon.includes(":")||o.push('Icon must be in format "mdi:icon-name" or "hass:icon-name"')),t.link&&""!==t.link.trim())try{new URL(t.link)}catch(e){t.link.startsWith("/")||t.link.startsWith("#")||o.push('Link must be a valid URL or start with "/" for relative paths')}return{valid:0===o.length,errors:o}}getStyles(){return"\n      .text-module-preview {\n        min-height: 20px;\n        word-wrap: break-word;\n      }\n      \n      .text-module-hidden {\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: 4px;\n      }\n      \n      /* WPBakery-style sections */\n      .wpbakery-section {\n        margin-bottom: 32px;\n        border-bottom: 1px solid var(--divider-color);\n        padding-bottom: 24px;\n        background: var(--card-background-color);\n      }\n      \n      .wpbakery-section:last-child {\n        border-bottom: none;\n        margin-bottom: 0;\n      }\n      \n      .wpbakery-section h4 {\n        margin: 0 0 20px 0;\n        font-size: 18px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        padding-bottom: 8px;\n        border-bottom: 2px solid var(--primary-color);\n        width: fit-content;\n      }\n      \n      /* Two Column Grid Layout */\n      .two-column-grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 20px;\n        margin-bottom: 20px;\n      }\n      \n      @media (max-width: 768px) {\n        .two-column-grid {\n          grid-template-columns: 1fr;\n          gap: 16px;\n        }\n      }\n      \n      /* Home Assistant Form Fields */\n      .ha-form-field {\n        margin-bottom: 0;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n      \n      .ha-form-field ha-textfield,\n      .ha-form-field ha-select,\n      .ha-form-field ha-icon-picker,\n      .ha-form-field ha-color-picker {\n        width: 100%;\n      }\n      \n      .form-label {\n        display: block;\n        font-weight: 500;\n        margin-bottom: 8px;\n        font-size: 14px;\n        color: var(--primary-text-color);\n      }\n      \n      /* Toggle and Radio Sections */\n      .toggle-section {\n        margin-top: 16px;\n        padding: 16px;\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n      }\n      \n      .format-toggles {\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        padding: 20px;\n        border: 1px solid var(--divider-color);\n      }\n      \n      .toggle-row {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 20px;\n        margin-bottom: 16px;\n      }\n      \n      .toggle-row:last-child {\n        margin-bottom: 0;\n      }\n      \n      .radio-group {\n        display: flex;\n        gap: 16px;\n        margin-top: 8px;\n      }\n      \n      @media (max-width: 768px) {\n        .toggle-row {\n          grid-template-columns: 1fr;\n          gap: 12px;\n        }\n        \n        .radio-group {\n          flex-direction: column;\n          gap: 8px;\n        }\n      }\n      \n      /* Icon preview section */\n      .icon-preview-section {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin-top: 8px;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n      }\n      \n      .icon-preview {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 40px;\n        height: 40px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        color: white;\n        flex-shrink: 0;\n      }\n      \n      .icon-preview ha-icon {\n        font-size: 20px;\n      }\n      \n      .icon-name {\n        font-size: 14px;\n        color: var(--primary-text-color);\n        font-family: monospace;\n        background: var(--card-background-color);\n        padding: 4px 8px;\n        border-radius: 4px;\n        border: 1px solid var(--divider-color);\n      }\n      \n\n      \n\n      \n      /* Enhanced styling for HA components */\n      .ha-form-field ha-formfield {\n        --mdc-typography-body2-font-size: 14px;\n        --mdc-typography-body2-font-weight: 500;\n        margin: 8px 0;\n      }\n      \n      .ha-form-field ha-switch {\n        --mdc-switch-selected-track-color: var(--primary-color);\n        --mdc-switch-selected-handle-color: var(--primary-color);\n        --mdc-switch-selected-hover-handle-color: var(--primary-color);\n        --mdc-switch-selected-focus-handle-color: var(--primary-color);\n        --mdc-switch-selected-pressed-handle-color: var(--primary-color);\n      }\n      \n      .ha-form-field ha-radio {\n        --mdc-radio-selected-color: var(--primary-color);\n        --mdc-radio-unselected-color: var(--secondary-text-color);\n      }\n      \n      /* Button groups */\n      .alignment-buttons,\n      .format-buttons {\n        display: flex;\n        gap: 8px;\n        margin-top: 8px;\n        padding: 8px;\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n      }\n      \n      .alignment-btn,\n      .format-btn {\n        --mdc-theme-primary: var(--primary-color);\n        --mdc-icon-button-size: 40px;\n        --mdc-icon-size: 20px;\n        border-radius: 6px !important;\n        transition: all 0.2s ease;\n      }\n      \n      .alignment-btn.active,\n      .format-btn.active {\n        background: var(--primary-color) !important;\n        color: white !important;\n      }\n      \n      .alignment-btn.active ha-icon,\n      .format-btn.active ha-icon {\n        color: white !important;\n      }\n      \n      .alignment-btn:hover,\n      .format-btn:hover {\n        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1) !important;\n      }\n      \n      /* Modern visual improvements */\n      .module-general-settings {\n        padding: 4px 0;\n      }\n      \n      /* Clean spacing between components */\n      .ha-form-field + .ha-form-field {\n        margin-top: 4px;\n      }\n      \n      /* Icon picker specific styling */\n      ha-icon-picker {\n        --ha-icon-picker-width: 100%;\n        --ha-icon-picker-height: 56px;\n      }\n      \n      /* Color picker styling */\n      ha-color-picker {\n        --ha-color-picker-width: 100%;\n      }\n      \n      /* Text field and select consistency */\n      ha-textfield,\n      ha-select {\n        --mdc-shape-small: 8px;\n        --mdc-theme-primary: var(--primary-color);\n      }\n    "}styleObjectToCss(e){return Object.entries(e).map((([e,t])=>`${this.camelToKebab(e)}: ${t}`)).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}}class me extends he{constructor(){super(...arguments),this.metadata={type:"separator",title:"Separator Module",description:"Visual dividers with multiple styles including lines, dots, shadows, and spacing",author:"WJD Designs",version:"1.0.0",icon:"mdi:minus",category:"layout",tags:["separator","divider","spacing","layout"]}}createDefault(e){return{id:e||this.generateId("separator"),type:"separator",separator_style:"line",thickness:1,width_percent:100,color:"var(--divider-color)",show_title:!1,title:"",title_size:14,title_color:"var(--secondary-text-color)",title_bold:!1,title_italic:!1,title_uppercase:!1,title_strikethrough:!1}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        ${this.renderSelect("Separator Style",n.separator_style||"line",[{value:"line",label:"Solid Line"},{value:"double_line",label:"Double Line"},{value:"dotted",label:"Dotted Line"},{value:"double_dotted",label:"Double Dotted"},{value:"shadow",label:"Shadow"},{value:"blank",label:"Blank Space"}],(e=>i({separator_style:e})),"Choose the visual style of the separator")}
        ${"blank"!==n.separator_style?H`
              <div class="separator-appearance">
                <h4>Appearance</h4>

                ${this.renderNumberInput("Thickness (px)",n.thickness||1,(e=>i({thickness:e})),{min:1,max:20,step:1},"Thickness of the separator line")}
                ${this.renderNumberInput("Width (%)",n.width_percent||100,(e=>i({width_percent:e})),{min:10,max:100,step:5},"Width of the separator as percentage of container")}
                ${this.renderColorPicker("Color",n.color||"var(--divider-color)",(e=>i({color:e})),"Color of the separator")}
              </div>
            `:""}

        <div class="separator-title-section">
          <h4>Optional Title</h4>

          ${this.renderCheckbox("Show Title",n.show_title||!1,(e=>i({show_title:e})),"Display a title with the separator")}
          ${n.show_title?H`
                ${this.renderTextInput("Title Text",n.title||"",(e=>i({title:e})),"Enter title text...","Text to display with the separator")}
                ${this.renderNumberInput("Title Font Size (px)",n.title_size||14,(e=>i({title_size:e})),{min:8,max:48,step:1},"Size of the title text")}
                ${this.renderColorPicker("Title Color",n.title_color||"var(--secondary-text-color)",(e=>i({title_color:e})),"Color of the title text")}

                <div class="title-style-options">
                  <div class="checkbox-group">
                    ${this.renderCheckbox("Bold",n.title_bold||!1,(e=>i({title_bold:e})))}
                    ${this.renderCheckbox("Italic",n.title_italic||!1,(e=>i({title_italic:e})))}
                    ${this.renderCheckbox("Uppercase",n.title_uppercase||!1,(e=>i({title_uppercase:e})))}
                    ${this.renderCheckbox("Strikethrough",n.title_strikethrough||!1,(e=>i({title_strikethrough:e})))}
                  </div>
                </div>
              `:""}
        </div>
      </div>
    `}renderPreview(e,t){const o=e;if("blank"===o.separator_style)return H`
        <div
          class="separator-preview blank-separator"
          style="height: ${o.thickness||1}px;"
        >
          ${o.show_title&&o.title?H`
                <div class="separator-title" style=${this.getTitleStyles(o)}>
                  ${o.title}
                </div>
              `:""}
        </div>
      `;const i=this.getSeparatorStyles(o);return H`
      <div class="separator-preview" style="width: 100%; text-align: center; padding: 8px 0;">
        ${o.show_title&&o.title?H`
              <div class="separator-with-title">
                <div class="separator-title" style=${this.getTitleStyles(o)}>
                  ${o.title}
                </div>
                <div class="separator-line" style=${i}></div>
              </div>
            `:H` <div class="separator-line" style=${i}></div> `}
      </div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];return t.thickness&&(t.thickness<1||t.thickness>50)&&o.push("Thickness must be between 1 and 50 pixels"),t.width_percent&&(t.width_percent<1||t.width_percent>100)&&o.push("Width must be between 1 and 100 percent"),!t.show_title||t.title&&""!==t.title.trim()||o.push("Title text is required when show title is enabled"),{valid:0===o.length,errors:o}}getStyles(){return"\n      .separator-preview {\n        min-height: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      \n      .blank-separator {\n        background: transparent;\n        border: 1px dashed var(--divider-color);\n        opacity: 0.5;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: 20px;\n      }\n      \n      .separator-with-title {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n      }\n      \n      .separator-title {\n        margin: 0;\n        line-height: 1.2;\n      }\n      \n      .separator-line {\n        display: block;\n      }\n      \n      .separator-appearance,\n      .separator-title-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .separator-appearance h4,\n      .separator-title-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      \n      .title-style-options {\n        margin-top: 12px;\n      }\n      \n      .checkbox-group {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n      }\n    "}getSeparatorStyles(e){const t={width:`${e.width_percent||100}%`,height:`${e.thickness||1}px`,margin:"0 auto"};switch(e.separator_style){case"line":t.backgroundColor=e.color||"var(--divider-color)";break;case"double_line":t.borderTop=`${e.thickness||1}px solid ${e.color||"var(--divider-color)"}`,t.borderBottom=`${e.thickness||1}px solid ${e.color||"var(--divider-color)"}`,t.height=3*(e.thickness||1)+"px";break;case"dotted":t.borderTop=`${e.thickness||1}px dotted ${e.color||"var(--divider-color)"}`,t.height="0";break;case"double_dotted":t.borderTop=`${e.thickness||1}px dotted ${e.color||"var(--divider-color)"}`,t.borderBottom=`${e.thickness||1}px dotted ${e.color||"var(--divider-color)"}`,t.height=3*(e.thickness||1)+"px";break;case"shadow":t.boxShadow=`0 ${e.thickness||1}px ${2*(e.thickness||1)}px ${e.color||"rgba(0,0,0,0.2)"}`,t.height="0"}return Object.entries(t).map((([e,t])=>`${this.camelToKebab(e)}: ${t}`)).join("; ")}getTitleStyles(e){const t={fontSize:`${e.title_size||14}px`,color:e.title_color||"var(--secondary-text-color)",fontWeight:e.title_bold?"bold":"normal",fontStyle:e.title_italic?"italic":"normal",textTransform:e.title_uppercase?"uppercase":"none",textDecoration:e.title_strikethrough?"line-through":"none",margin:"0",padding:"4px 0"};return Object.entries(t).map((([e,t])=>`${this.camelToKebab(e)}: ${t}`)).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}}class ve extends he{constructor(){super(...arguments),this.metadata={type:"image",title:"Images",description:"Display vehicle and action images",author:"WJD Designs",version:"1.0.0",icon:"mdi:image",category:"media",tags:["image","media","display","vehicle"]}}createDefault(e){return{id:e||this.generateId("image"),type:"image",image_type:"default",image:"",image_entity:"",image_width:100,image_height:100,image_fit:"cover",border_radius:8,single_click_action:"none",single_entity:"",single_navigation_path:"",single_url:"",single_service:"",single_service_data:{},template_mode:!1,template:""}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        ${this.renderSelect("Image Type",n.image_type||"default",[{value:"default",label:"Default Image"},{value:"url",label:"URL"},{value:"upload",label:"Upload"},{value:"entity",label:"Entity Attribute"},{value:"none",label:"None"}],(e=>i({image_type:e})),"Source of the image to display")}
        ${"url"===n.image_type?H`
              ${this.renderTextInput("Image URL",n.image||"",(e=>i({image:e})),"https://example.com/image.jpg","Direct URL to the image file")}
            `:""}
        ${"entity"===n.image_type?H`
              ${this.renderTextInput("Entity ID",n.image_entity||"",(e=>i({image_entity:e})),"camera.front_door","Entity ID that provides the image")}
            `:""}

        <div class="image-sizing-section">
          <h4>Sizing</h4>

          ${this.renderNumberInput("Width (px)",n.image_width||100,(e=>i({image_width:e})),{min:50,max:500,step:10},"Width of the image in pixels")}
          ${this.renderNumberInput("Height (px)",n.image_height||100,(e=>i({image_height:e})),{min:50,max:500,step:10},"Height of the image in pixels")}
          ${this.renderSelect("Image Fit",n.image_fit||"cover",[{value:"cover",label:"Cover (crop to fit)"},{value:"contain",label:"Contain (fit within)"},{value:"fill",label:"Fill (stretch)"},{value:"none",label:"Original size"}],(e=>i({image_fit:e})),"How the image should fit within its container")}
          ${this.renderNumberInput("Border Radius (px)",n.border_radius||8,(e=>i({border_radius:e})),{min:0,max:50,step:1},"Rounded corners for the image")}
        </div>

        <div class="image-actions-section">
          <h4>Click Action</h4>

          ${this.renderSelect("Click Action",n.single_click_action||"none",[{value:"none",label:"No Action"},{value:"more-info",label:"More Info"},{value:"toggle",label:"Toggle Entity"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"service",label:"Call Service"}],(e=>i({single_click_action:e})),"Action to perform when image is clicked")}
          ${"more-info"===n.single_click_action||"toggle"===n.single_click_action?H`
                ${this.renderTextInput("Entity ID",n.single_entity||"",(e=>i({single_entity:e})),"light.living_room","Entity to interact with")}
              `:""}
          ${"navigate"===n.single_click_action?H`
                ${this.renderTextInput("Navigation Path",n.single_navigation_path||"",(e=>i({single_navigation_path:e})),"/lovelace/dashboard","Path to navigate to")}
              `:""}
          ${"url"===n.single_click_action?H`
                ${this.renderTextInput("URL",n.single_url||"",(e=>i({single_url:e})),"https://www.example.com","URL to open")}
              `:""}
          ${"service"===n.single_click_action?H`
                ${this.renderTextInput("Service",n.single_service||"",(e=>i({single_service:e})),"light.turn_on","Service to call")}
                ${this.renderTextArea("Service Data (YAML)",JSON.stringify(n.single_service_data||{},null,2),(e=>{try{const t=JSON.parse(e);i({single_service_data:t})}catch(e){}}),"entity_id: light.living_room\nbrightness: 255","Service data in JSON format")}
              `:""}
        </div>
      </div>
    `}renderPreview(e,t){const o=e,i={width:`${o.image_width||100}px`,height:`${o.image_height||100}px`,objectFit:o.image_fit||"cover",borderRadius:`${o.border_radius||8}px`,cursor:"none"!==o.single_click_action?"pointer":"default"};let n="";if("url"===o.image_type&&o.image)n=o.image;else if("entity"===o.image_type&&o.image_entity&&t){const e=t.states[o.image_entity];e&&e.attributes.entity_picture&&(n=e.attributes.entity_picture)}else"default"===o.image_type&&(n="/hacsfiles/Ultra-Card/assets/default-car.png");return H`
      <div class="image-module-preview">
        ${n?H`
              <img
                src="${n}"
                style=${this.styleObjectToCss(i)}
                alt="Preview"
                @error=${e=>{e.target.src="/hacsfiles/Ultra-Card/assets/default-car.png"}}
              />
            `:H`
              <div class="image-placeholder" style=${this.styleObjectToCss(i)}>
                <ha-icon icon="mdi:image"></ha-icon>
                <span>No Image</span>
              </div>
            `}
      </div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];return"url"!==t.image_type||t.image&&""!==t.image.trim()||o.push("Image URL is required when using URL type"),"entity"!==t.image_type||t.image_entity&&""!==t.image_entity.trim()||o.push("Entity ID is required when using entity type"),t.image_width&&(t.image_width<10||t.image_width>1e3)&&o.push("Image width must be between 10 and 1000 pixels"),t.image_height&&(t.image_height<10||t.image_height>1e3)&&o.push("Image height must be between 10 and 1000 pixels"),{valid:0===o.length,errors:o}}getStyles(){return"\n      .image-module-preview {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: 60px;\n      }\n      \n      .image-module-preview img {\n        max-width: 100%;\n        height: auto;\n        display: block;\n      }\n      \n      .image-placeholder {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        background: var(--secondary-background-color);\n        border: 1px dashed var(--divider-color);\n        color: var(--secondary-text-color);\n        font-size: 12px;\n      }\n      \n      .image-placeholder ha-icon {\n        font-size: 24px;\n      }\n      \n      .image-sizing-section,\n      .image-actions-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .image-sizing-section h4,\n      .image-actions-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n    "}styleObjectToCss(e){return Object.entries(e).map((([e,t])=>`${this.camelToKebab(e)}: ${t}`)).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}}class be extends he{constructor(){super(...arguments),this.metadata={type:"info",title:"Info Items",description:"Show entity information",author:"WJD Designs",version:"1.0.0",icon:"mdi:information",category:"data",tags:["info","entity","data","sensors"]}}createDefault(e){return{id:e||this.generateId("info"),type:"info",info_entities:[{id:this.generateId("entity"),entity:"",name:"Entity Name",icon:"",show_icon:!0,show_name:!0,text_size:14,name_size:12,icon_size:18,text_bold:!1,text_italic:!1,text_uppercase:!1,text_strikethrough:!1,name_bold:!1,name_italic:!1,name_uppercase:!1,name_strikethrough:!1,icon_color:"var(--primary-color)",name_color:"var(--secondary-text-color)",text_color:"var(--primary-text-color)",click_action:"more-info",navigation_path:"",url:"",service:"",service_data:{},template_mode:!1,template:"",dynamic_icon_template_mode:!1,dynamic_icon_template:"",dynamic_color_template_mode:!1,dynamic_color_template:""}],alignment:"left",vertical_alignment:"center",columns:1,gap:12,allow_wrap:!0}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        <div class="info-entities-section">
          <h4>Info Entities</h4>

          ${n.info_entities.map(((e,t)=>H`
              <div class="entity-item">
                <div class="entity-header">
                  <span>Entity ${t+1}</span>
                  <button
                    class="remove-entity-btn"
                    @click=${()=>this._removeEntity(n,t,i)}
                    ?disabled=${n.info_entities.length<=1}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </button>
                </div>

                ${this.renderTextInput("Entity ID",e.entity,(e=>this._updateEntity(n,t,{entity:e},i)),"sensor.temperature","Home Assistant entity ID")}
                ${this.renderTextInput("Display Name",e.name||"",(e=>this._updateEntity(n,t,{name:e},i)),"Temperature","Custom name to display (optional)")}
                ${this.renderTextInput("Icon",e.icon||"",(e=>this._updateEntity(n,t,{icon:e},i)),"mdi:thermometer","Custom icon (optional)")}

                <div class="entity-display-options">
                  ${this.renderCheckbox("Show Icon",e.show_icon||!1,(e=>this._updateEntity(n,t,{show_icon:e},i)))}
                  ${this.renderCheckbox("Show Name",e.show_name||!1,(e=>this._updateEntity(n,t,{show_name:e},i)))}
                </div>

                ${this.renderSelect("Click Action",e.click_action||"more-info",[{value:"none",label:"No Action"},{value:"more-info",label:"More Info"},{value:"toggle",label:"Toggle"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"service",label:"Call Service"}],(e=>this._updateEntity(n,t,{click_action:e},i)),"Action when entity is clicked")}
              </div>
            `))}

          <button class="add-entity-btn" @click=${()=>this._addEntity(n,i)}>
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Entity
          </button>
        </div>

        <div class="layout-section">
          <h4>Layout</h4>

          ${this.renderSelect("Alignment",n.alignment||"left",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"space-between",label:"Space Between"},{value:"space-around",label:"Space Around"}],(e=>i({alignment:e})),"Horizontal alignment of entities")}
          ${this.renderNumberInput("Columns",n.columns||1,(e=>i({columns:e})),{min:1,max:6,step:1},"Number of columns to display entities in")}
          ${this.renderNumberInput("Gap (px)",n.gap||12,(e=>i({gap:e})),{min:0,max:50,step:2},"Space between entities")}
          ${this.renderCheckbox("Allow Wrap",n.allow_wrap||!1,(e=>i({allow_wrap:e})),"Allow entities to wrap to next line")}
        </div>
      </div>
    `}renderPreview(e,t){const o=e;return H`
      <div class="info-module-preview">
        <div
          class="info-entities"
          style="
          display: grid;
          grid-template-columns: repeat(${o.columns||1}, 1fr);
          gap: ${o.gap||12}px;
          justify-content: ${o.alignment||"left"};
        "
        >
          ${o.info_entities.slice(0,3).map((e=>{var o,i,n;const r=null==t?void 0:t.states[e.entity],a=r?r.state:"N/A",s=e.name||(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.friendly_name)||e.entity,l=e.icon||(null===(i=null==r?void 0:r.attributes)||void 0===i?void 0:i.icon)||"mdi:help-circle";return H`
              <div class="info-entity-item">
                ${e.show_icon?H`
                      <ha-icon
                        icon="${l}"
                        style="color: ${e.icon_color||"var(--primary-color)"}; font-size: ${e.icon_size||18}px;"
                      ></ha-icon>
                    `:""}

                <div class="entity-content">
                  ${e.show_name?H`
                        <div
                          class="entity-name"
                          style="
                      color: ${e.name_color||"var(--secondary-text-color)"};
                      font-size: ${e.name_size||12}px;
                      font-weight: ${e.name_bold?"bold":"normal"};
                      font-style: ${e.name_italic?"italic":"normal"};
                      text-transform: ${e.name_uppercase?"uppercase":"none"};
                      text-decoration: ${e.name_strikethrough?"line-through":"none"};
                    "
                        >
                          ${s}
                        </div>
                      `:""}

                  <div
                    class="entity-value"
                    style="
                    color: ${e.text_color||"var(--primary-text-color)"};
                    font-size: ${e.text_size||14}px;
                    font-weight: ${e.text_bold?"bold":"normal"};
                    font-style: ${e.text_italic?"italic":"normal"};
                    text-transform: ${e.text_uppercase?"uppercase":"none"};
                    text-decoration: ${e.text_strikethrough?"line-through":"none"};
                  "
                  >
                    ${a}${(null===(n=null==r?void 0:r.attributes)||void 0===n?void 0:n.unit_of_measurement)||""}
                  </div>
                </div>
              </div>
            `}))}
          ${o.info_entities.length>3?H` <div class="more-entities">+${o.info_entities.length-3} more</div> `:""}
        </div>
      </div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];return t.info_entities&&0!==t.info_entities.length||o.push("At least one info entity is required"),t.info_entities.forEach(((e,t)=>{e.entity&&""!==e.entity.trim()||o.push(`Entity ${t+1}: Entity ID is required`)})),{valid:0===o.length,errors:o}}getStyles(){return"\n      .info-module-preview {\n        padding: 8px;\n        min-height: 40px;\n      }\n      \n      .info-entities {\n        width: 100%;\n      }\n      \n      .info-entity-item {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 4px;\n        border-radius: 4px;\n        background: var(--secondary-background-color);\n      }\n      \n      .entity-content {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        min-width: 0;\n        flex: 1;\n      }\n      \n      .entity-name {\n        font-size: 12px;\n        line-height: 1.2;\n      }\n      \n      .entity-value {\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1.2;\n      }\n      \n      .more-entities {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 8px;\n        color: var(--secondary-text-color);\n        font-size: 12px;\n        font-style: italic;\n      }\n      \n      .info-entities-section,\n      .layout-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .info-entities-section:first-child {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: none;\n      }\n      \n      .info-entities-section h4,\n      .layout-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      \n      .entity-item {\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        padding: 12px;\n        margin-bottom: 12px;\n        background: var(--card-background-color);\n      }\n      \n      .entity-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n        font-weight: 500;\n        font-size: 14px;\n      }\n      \n      .remove-entity-btn {\n        background: none;\n        border: none;\n        color: var(--error-color);\n        cursor: pointer;\n        padding: 4px;\n        border-radius: 4px;\n        font-size: 14px;\n      }\n      \n      .remove-entity-btn:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n      \n      .add-entity-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 12px;\n        border: 2px dashed var(--primary-color);\n        border-radius: 8px;\n        background: none;\n        color: var(--primary-color);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n      }\n      \n      .add-entity-btn:hover {\n        background: var(--primary-color);\n        color: white;\n      }\n      \n      .entity-display-options {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n        margin: 8px 0;\n      }\n    "}_addEntity(e,t){const o={id:this.generateId("entity"),entity:"",name:"Entity Name",icon:"",show_icon:!0,show_name:!0,text_size:14,name_size:12,icon_size:18,text_bold:!1,text_italic:!1,text_uppercase:!1,text_strikethrough:!1,name_bold:!1,name_italic:!1,name_uppercase:!1,name_strikethrough:!1,icon_color:"var(--primary-color)",name_color:"var(--secondary-text-color)",text_color:"var(--primary-text-color)",click_action:"more-info",navigation_path:"",url:"",service:"",service_data:{},template_mode:!1,template:"",dynamic_icon_template_mode:!1,dynamic_icon_template:"",dynamic_color_template_mode:!1,dynamic_color_template:""};t({info_entities:[...e.info_entities,o]})}_removeEntity(e,t,o){if(e.info_entities.length<=1)return;const i=e.info_entities.filter(((e,o)=>o!==t));o({info_entities:i})}_updateEntity(e,t,o,i){const n=e.info_entities.map(((e,i)=>i===t?Object.assign(Object.assign({},e),o):e));i({info_entities:n})}}class fe extends he{constructor(){super(...arguments),this.metadata={type:"bar",title:"Bars",description:"Progress bars for values",author:"WJD Designs",version:"1.0.0",icon:"mdi:chart-bar",category:"data",tags:["bar","progress","chart","value","sensor"]}}createDefault(e){return{id:e||this.generateId("bar"),type:"bar",entity:"",name:"Progress",show_percentage:!0,bar_color:"var(--primary-color)",background_color:"var(--secondary-background-color)",height:20,border_radius:10,show_value:!0,value_position:"inside",animation:!0,template_mode:!1,template:""}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        ${this.renderTextInput("Entity ID",n.entity,(e=>i({entity:e})),"sensor.battery_level","Entity that provides the numeric value for the bar")}
        ${this.renderTextInput("Display Name",n.name||"",(e=>i({name:e})),"Battery Level","Custom name to display with the bar")}

        <div class="bar-appearance-section">
          <h4>Appearance</h4>

          ${this.renderNumberInput("Bar Height (px)",n.height||20,(e=>i({height:e})),{min:10,max:100,step:5},"Height of the progress bar")}
          ${this.renderNumberInput("Border Radius (px)",n.border_radius||10,(e=>i({border_radius:e})),{min:0,max:50,step:1},"Rounded corners for the bar")}
          ${this.renderColorPicker("Bar Color",n.bar_color||"var(--primary-color)",(e=>i({bar_color:e})),"Color of the filled portion of the bar")}
          ${this.renderColorPicker("Background Color",n.background_color||"var(--secondary-background-color)",(e=>i({background_color:e})),"Color of the unfilled portion of the bar")}
        </div>

        <div class="bar-display-section">
          <h4>Display Options</h4>

          ${this.renderCheckbox("Show Percentage",n.show_percentage||!1,(e=>i({show_percentage:e})),"Display the value as a percentage")}
          ${this.renderCheckbox("Show Value",n.show_value||!1,(e=>i({show_value:e})),"Display the numeric value on the bar")}
          ${n.show_value?H`
                ${this.renderSelect("Value Position",n.value_position||"inside",[{value:"inside",label:"Inside Bar"},{value:"outside",label:"Outside Bar"},{value:"none",label:"Hidden"}],(e=>i({value_position:e})),"Where to display the value text")}
              `:""}
          ${this.renderCheckbox("Animation",!1!==n.animation,(e=>i({animation:e})),"Animate the bar when value changes")}
        </div>
      </div>
    `}renderPreview(e,t){var o,i,n,r;const a=e,s=null==t?void 0:t.states[a.entity];let l=0,c=100,d="";s&&(l=parseFloat(s.state)||0,d=(null===(o=s.attributes)||void 0===o?void 0:o.unit_of_measurement)||"",(null===(i=s.attributes)||void 0===i?void 0:i.max)?c=parseFloat(s.attributes.max):("%"===d||"battery"===(null===(n=s.attributes)||void 0===n?void 0:n.device_class))&&(c=100));const p=Math.min(Math.max(l/c*100,0),100),u=a.show_percentage?`${Math.round(p)}%`:`${l}${d}`,h=a.name||(null===(r=null==s?void 0:s.attributes)||void 0===r?void 0:r.friendly_name)||a.entity,g={width:"100%",height:`${a.height||20}px`,backgroundColor:a.background_color||"var(--secondary-background-color)",borderRadius:`${a.border_radius||10}px`,overflow:"hidden",position:"relative",transition:!1!==a.animation?"all 0.3s ease":"none"},m={width:`${p}%`,height:"100%",backgroundColor:a.bar_color||"var(--primary-color)",transition:!1!==a.animation?"width 0.3s ease":"none",borderRadius:`${a.border_radius||10}px`},v={position:"absolute",top:"50%",fontSize:"12px",fontWeight:"500",color:"inside"===a.value_position?"white":"var(--primary-text-color)",left:"inside"===a.value_position?"50%":"calc(100% + 8px)",transform:"inside"===a.value_position?"translate(-50%, -50%)":"translateY(-50%)",whiteSpace:"nowrap",zIndex:10};return H`
      <div class="bar-module-preview">
        ${h&&a.name?H`
              <div
                class="bar-name"
                style="
            font-size: 14px;
            font-weight: 500;
            color: var(--primary-text-color);
            margin-bottom: 4px;
          "
              >
                ${h}
              </div>
            `:""}

        <div class="bar-container" style=${this.styleObjectToCss(g)}>
          <div class="bar-fill" style=${this.styleObjectToCss(m)}></div>
          ${a.show_value&&"none"!==a.value_position?H`
                <div class="bar-value" style=${this.styleObjectToCss(v)}>
                  ${u}
                </div>
              `:""}
        </div>

        ${!s&&a.entity?H`
              <div
                class="entity-error"
                style="
            font-size: 12px;
            color: var(--error-color);
            margin-top: 4px;
          "
              >
                Entity not found: ${a.entity}
              </div>
            `:""}
      </div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];return t.entity&&""!==t.entity.trim()||o.push("Entity ID is required"),t.height&&(t.height<5||t.height>200)&&o.push("Bar height must be between 5 and 200 pixels"),t.border_radius&&(t.border_radius<0||t.border_radius>100)&&o.push("Border radius must be between 0 and 100 pixels"),{valid:0===o.length,errors:o}}getStyles(){return"\n      .bar-module-preview {\n        padding: 8px;\n        min-height: 40px;\n      }\n      \n      .bar-container {\n        display: flex;\n        align-items: center;\n        min-width: 100px;\n      }\n      \n      .bar-fill {\n        min-width: 2px;\n      }\n      \n      .bar-name {\n        margin-bottom: 4px;\n      }\n      \n      .entity-error {\n        font-style: italic;\n      }\n      \n      .bar-appearance-section,\n      .bar-display-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .bar-appearance-section h4,\n      .bar-display-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n    "}styleObjectToCss(e){return Object.entries(e).map((([e,t])=>`${this.camelToKebab(e)}: ${t}`)).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}}class ye extends he{constructor(){super(...arguments),this.metadata={type:"icon",title:"Icons",description:"Interactive icon buttons",author:"WJD Designs",version:"1.0.0",icon:"mdi:circle",category:"interactive",tags:["icon","button","interactive","control"]}}createDefault(e){return{id:e||this.generateId("icon"),type:"icon",icons:[{id:this.generateId("icon-item"),entity:"",name:"Icon",icon_inactive:"mdi:lightbulb-outline",icon_active:"mdi:lightbulb",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_state:"off",active_state:"on",show_state:!0,show_name:!0,icon_size:24,text_size:12,click_action:"toggle",navigation_path:"",url:"",service:"",service_data:{},template_mode:!1,template:"",dynamic_icon_template_mode:!1,dynamic_icon_template:"",dynamic_color_template_mode:!1,dynamic_color_template:""}],alignment:"center",vertical_alignment:"center",columns:3,gap:16}}renderGeneralTab(e,t,o,i){const n=e;return H`
      <div class="module-general-settings">
        <div class="icon-items-section">
          <h4>Icon Items</h4>

          ${n.icons.map(((e,t)=>H`
              <div class="icon-item">
                <div class="icon-header">
                  <span>Icon ${t+1}</span>
                  <button
                    class="remove-icon-btn"
                    @click=${()=>this._removeIcon(n,t,i)}
                    ?disabled=${n.icons.length<=1}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </button>
                </div>

                ${this.renderTextInput("Entity ID",e.entity,(e=>this._updateIcon(n,t,{entity:e},i)),"light.living_room","Home Assistant entity ID")}
                ${this.renderTextInput("Display Name",e.name||"",(e=>this._updateIcon(n,t,{name:e},i)),"Living Room","Custom name to display (optional)")}

                <div class="icon-states-section">
                  <h5>Icon States</h5>

                  ${this.renderTextInput("Inactive Icon",e.icon_inactive||"",(e=>this._updateIcon(n,t,{icon_inactive:e},i)),"mdi:lightbulb-outline","Icon when entity is inactive")}
                  ${this.renderTextInput("Active Icon",e.icon_active||"",(e=>this._updateIcon(n,t,{icon_active:e},i)),"mdi:lightbulb","Icon when entity is active")}
                  ${this.renderColorPicker("Inactive Color",e.color_inactive||"var(--secondary-text-color)",(e=>this._updateIcon(n,t,{color_inactive:e},i)),"Color when inactive")}
                  ${this.renderColorPicker("Active Color",e.color_active||"var(--primary-color)",(e=>this._updateIcon(n,t,{color_active:e},i)),"Color when active")}
                  ${this.renderTextInput("Inactive State",e.inactive_state||"",(e=>this._updateIcon(n,t,{inactive_state:e},i)),"off","Entity state considered inactive")}
                  ${this.renderTextInput("Active State",e.active_state||"",(e=>this._updateIcon(n,t,{active_state:e},i)),"on","Entity state considered active")}
                </div>

                <div class="icon-display-options">
                  ${this.renderCheckbox("Show State",e.show_state||!1,(e=>this._updateIcon(n,t,{show_state:e},i)))}
                  ${this.renderCheckbox("Show Name",e.show_name||!1,(e=>this._updateIcon(n,t,{show_name:e},i)))}
                </div>

                <div class="icon-sizing-section">
                  ${this.renderNumberInput("Icon Size (px)",e.icon_size||24,(e=>this._updateIcon(n,t,{icon_size:e},i)),{min:12,max:72,step:2},"Size of the icon")}
                  ${this.renderNumberInput("Text Size (px)",e.text_size||12,(e=>this._updateIcon(n,t,{text_size:e},i)),{min:8,max:24,step:1},"Size of the text")}
                </div>

                ${this.renderSelect("Click Action",e.click_action||"toggle",[{value:"none",label:"No Action"},{value:"more-info",label:"More Info"},{value:"toggle",label:"Toggle"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"service",label:"Call Service"}],(e=>this._updateIcon(n,t,{click_action:e},i)),"Action when icon is clicked")}
              </div>
            `))}

          <button class="add-icon-btn" @click=${()=>this._addIcon(n,i)}>
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Icon
          </button>
        </div>

        <div class="layout-section">
          <h4>Layout</h4>

          ${this.renderSelect("Alignment",n.alignment||"center",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"space-between",label:"Space Between"},{value:"space-around",label:"Space Around"}],(e=>i({alignment:e})),"Horizontal alignment of icons")}
          ${this.renderNumberInput("Columns",n.columns||3,(e=>i({columns:e})),{min:1,max:8,step:1},"Number of columns to display icons in")}
          ${this.renderNumberInput("Gap (px)",n.gap||16,(e=>i({gap:e})),{min:0,max:50,step:2},"Space between icons")}
        </div>
      </div>
    `}renderPreview(e,t){const o=e;return H`
      <div class="icon-module-preview">
        <div
          class="icon-grid"
          style="
          display: grid;
          grid-template-columns: repeat(${Math.min(o.columns||3,o.icons.length)}, 1fr);
          gap: ${o.gap||16}px;
          justify-content: ${o.alignment||"center"};
        "
        >
          ${o.icons.slice(0,6).map((e=>{var o;const i=null==t?void 0:t.states[e.entity],n=(null==i?void 0:i.state)||"unknown",r=n===e.active_state,a=r&&e.icon_active||e.icon_inactive,s=r?e.color_active:e.color_inactive,l=e.name||(null===(o=null==i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name)||e.entity;return H`
              <div
                class="icon-item-preview"
                style="
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                padding: 8px;
                border-radius: 8px;
                background: var(--secondary-background-color);
                cursor: pointer;
                transition: all 0.2s ease;
              "
              >
                <ha-icon
                  icon="${a||"mdi:help-circle"}"
                  style="
                    color: ${s||"var(--secondary-text-color)"};
                    font-size: ${e.icon_size||24}px;
                  "
                ></ha-icon>

                ${e.show_name?H`
                      <div
                        class="icon-name"
                        style="
                    font-size: ${e.text_size||12}px;
                    color: var(--primary-text-color);
                    text-align: center;
                    line-height: 1.2;
                    max-width: 60px;
                    word-wrap: break-word;
                  "
                      >
                        ${l}
                      </div>
                    `:""}
                ${e.show_state?H`
                      <div
                        class="icon-state"
                        style="
                    font-size: ${Math.max((e.text_size||12)-2,10)}px;
                    color: var(--secondary-text-color);
                    text-align: center;
                  "
                      >
                        ${n}
                      </div>
                    `:""}
              </div>
            `}))}
          ${o.icons.length>6?H`
                <div
                  class="more-icons"
                  style="
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 8px;
              color: var(--secondary-text-color);
              font-size: 12px;
              font-style: italic;
            "
                >
                  +${o.icons.length-6} more
                </div>
              `:""}
        </div>
      </div>
    `}validate(e){const t=e,o=[...super.validate(e).errors];return t.icons&&0!==t.icons.length||o.push("At least one icon is required"),t.icons.forEach(((e,t)=>{e.entity&&""!==e.entity.trim()||o.push(`Icon ${t+1}: Entity ID is required`),e.icon_inactive&&""!==e.icon_inactive.trim()||o.push(`Icon ${t+1}: Inactive icon is required`)})),{valid:0===o.length,errors:o}}getStyles(){return"\n      .icon-module-preview {\n        padding: 8px;\n        min-height: 60px;\n      }\n      \n      .icon-grid {\n        width: 100%;\n      }\n      \n      .icon-item-preview:hover {\n        background: var(--primary-color) !important;\n        color: white;\n      }\n      \n      .icon-item-preview:hover ha-icon {\n        color: white !important;\n      }\n      \n      .icon-item-preview:hover .icon-name,\n      .icon-item-preview:hover .icon-state {\n        color: white !important;\n      }\n      \n      .icon-items-section,\n      .layout-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .icon-items-section:first-child {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: none;\n      }\n      \n      .icon-items-section h4,\n      .layout-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      \n      .icon-item {\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        padding: 12px;\n        margin-bottom: 12px;\n        background: var(--card-background-color);\n      }\n      \n      .icon-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n        font-weight: 500;\n        font-size: 14px;\n      }\n      \n      .remove-icon-btn {\n        background: none;\n        border: none;\n        color: var(--error-color);\n        cursor: pointer;\n        padding: 4px;\n        border-radius: 4px;\n        font-size: 14px;\n      }\n      \n      .remove-icon-btn:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n      \n      .add-icon-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 12px;\n        border: 2px dashed var(--primary-color);\n        border-radius: 8px;\n        background: none;\n        color: var(--primary-color);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n      }\n      \n      .add-icon-btn:hover {\n        background: var(--primary-color);\n        color: white;\n      }\n      \n      .icon-states-section {\n        margin: 12px 0;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: 6px;\n      }\n      \n      .icon-states-section h5 {\n        margin: 0 0 8px 0;\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        text-transform: uppercase;\n      }\n      \n      .icon-display-options {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n        margin: 8px 0;\n      }\n      \n      .icon-sizing-section {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 12px;\n        margin: 8px 0;\n      }\n    "}_addIcon(e,t){const o={id:this.generateId("icon-item"),entity:"",name:"Icon",icon_inactive:"mdi:lightbulb-outline",icon_active:"mdi:lightbulb",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_state:"off",active_state:"on",show_state:!0,show_name:!0,icon_size:24,text_size:12,click_action:"toggle",navigation_path:"",url:"",service:"",service_data:{},template_mode:!1,template:"",dynamic_icon_template_mode:!1,dynamic_icon_template:"",dynamic_color_template_mode:!1,dynamic_color_template:""};t({icons:[...e.icons,o]})}_removeIcon(e,t,o){if(e.icons.length<=1)return;const i=e.icons.filter(((e,o)=>o!==t));o({icons:i})}_updateIcon(e,t,o,i){const n=e.icons.map(((e,i)=>i===t?Object.assign(Object.assign({},e),o):e));i({icons:n})}}class xe{constructor(){this.modules=new Map,this.modulesByCategory=new Map,this.registerCoreModules()}static getInstance(){return xe.instance||(xe.instance=new xe),xe.instance}registerCoreModules(){this.registerModule(new ge),this.registerModule(new me),this.registerModule(new ve),this.registerModule(new be),this.registerModule(new fe),this.registerModule(new ye)}registerModule(e){const t=e.metadata.type;this.modules.has(t)&&console.warn(`Module with type "${t}" is already registered. Overriding...`),this.modules.set(t,e),this.updateCategoryMap(e),console.log(`✅ Registered module: ${e.metadata.title} v${e.metadata.version} by ${e.metadata.author}`)}unregisterModule(e){return!!this.modules.get(e)&&(this.modules.delete(e),this.updateCategoryMaps(),console.log(`❌ Unregistered module: ${e}`),!0)}getModule(e){return this.modules.get(e)}getAllModules(){return Array.from(this.modules.values())}getModulesByCategory(e){return this.modulesByCategory.get(e)||[]}getCategories(){return Array.from(this.modulesByCategory.keys())}getAllModuleMetadata(){return this.getAllModules().map((e=>e.metadata))}searchModules(e){const t=e.toLowerCase();return this.getAllModules().filter((e=>{const o=e.metadata;return o.title.toLowerCase().includes(t)||o.description.toLowerCase().includes(t)||o.tags.some((e=>e.toLowerCase().includes(t)))||o.type.toLowerCase().includes(t)}))}createDefaultModule(e,t){console.log(`Creating default module for type: ${e}`);const o=this.getModule(e);if(!o)return console.error(`Module type "${e}" not found in registry`),console.log("Available module types:",Array.from(this.modules.keys())),null;try{const e=o.createDefault(t);return console.log("Successfully created default module:",e),e}catch(t){return console.error(`Error creating default module for type "${e}":`,t),null}}validateModule(e){const t=this.getModule(e.type);return t?t.validate(e):{valid:!1,errors:[`Unknown module type: ${e.type}`]}}getAllModuleStyles(){let e="";for(const t of this.getAllModules())t.getStyles&&(e+=`\n/* Styles for ${t.metadata.title} */\n`,e+=t.getStyles(),e+="\n");return e+=this.getCommonFormStyles(),e}isModuleRegistered(e){return this.modules.has(e)}getRegistryStats(){const e=this.getAllModules(),t={},o=new Set;return e.forEach((e=>{const i=e.metadata.category;t[i]=(t[i]||0)+1,o.add(e.metadata.author)})),{totalModules:e.length,modulesByCategory:t,authors:Array.from(o)}}updateCategoryMap(e){const t=e.metadata.category;this.modulesByCategory.has(t)||this.modulesByCategory.set(t,[]);const o=this.modulesByCategory.get(t),i=o.findIndex((t=>t.metadata.type===e.metadata.type));i>=0?o[i]=e:o.push(e)}updateCategoryMaps(){this.modulesByCategory.clear(),this.getAllModules().forEach((e=>this.updateCategoryMap(e)))}getCommonFormStyles(){return'\n      /* Common form styles for all modules */\n      .module-general-settings {\n        padding: 0;\n      }\n      \n      .form-field {\n        margin-bottom: 16px;\n      }\n      \n      .form-label {\n        display: block;\n        font-weight: 500;\n        margin-bottom: 4px;\n        font-size: 14px;\n        color: var(--primary-text-color);\n      }\n      \n      .form-description {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n        line-height: 1.3;\n      }\n      \n      .form-field input[type="text"],\n      .form-field input[type="number"],\n      .form-field select,\n      .form-field textarea {\n        width: 100%;\n        padding: 8px 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: 4px;\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        font-family: inherit;\n        box-sizing: border-box;\n      }\n      \n      .form-field input[type="color"] {\n        width: 60px;\n        height: 36px;\n        padding: 0;\n        border: 1px solid var(--divider-color);\n        border-radius: 4px;\n        cursor: pointer;\n        background: none;\n      }\n      \n      .form-field input:focus,\n      .form-field select:focus,\n      .form-field textarea:focus {\n        outline: none;\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 1px var(--primary-color);\n      }\n      \n      .form-field textarea {\n        resize: vertical;\n        min-height: 60px;\n        font-family: monospace;\n      }\n      \n      .checkbox-wrapper {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 14px;\n        cursor: pointer;\n        color: var(--primary-text-color);\n      }\n      \n      .checkbox-wrapper input[type="checkbox"] {\n        margin: 0;\n        cursor: pointer;\n      }\n      \n      .checkbox-group {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n        gap: 8px;\n        margin-top: 8px;\n      }\n    '}}const _e=()=>xe.getInstance();var $e=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let we=class extends ae{setConfig(e){if(!e)throw new Error("Invalid configuration");this.config=Object.assign({},e)}static getConfigElement(){return document.createElement("ultra-card-editor")}static getStubConfig(){return{type:"ultra-card",layout:{rows:[{id:"row1",columns:[{id:"col1",modules:[{type:"text",text:"Welcome to Ultra Card",font_size:24,color:"#2196f3",alignment:"center"}]}]}]}}}render(){return this.config&&this.hass?this.config.layout&&this.config.layout.rows&&0!==this.config.layout.rows.length?H`
      <div class="card-container">${this.config.layout.rows.map((e=>this._renderRow(e)))}</div>
    `:H`
        <div class="card-container">
          <div class="welcome-text">
            <h2>Ultra Card</h2>
            <p>Modular card builder for Home Assistant</p>
            <p>Configure using the visual editor</p>
          </div>
        </div>
      `:H`<div>Loading...</div>`}_renderRow(e){return H`
      <div
        class="card-row"
        style="
        display: grid;
        grid-template-columns: repeat(${e.columns.length}, 1fr);
        gap: ${e.gap||16}px;
        margin-bottom: 16px;
      "
      >
        ${e.columns.map((e=>this._renderColumn(e)))}
      </div>
    `}_renderColumn(e){return H`
      <div class="card-column">${e.modules.map((e=>this._renderModule(e)))}</div>
    `}_renderModule(e){const t=_e().getModule(e.type);return t&&this.hass?t.renderPreview(e,this.hass):H`
      <div class="unknown-module">
        <span>Unknown Module: ${e.type}</span>
      </div>
    `}static get styles(){return r`
      :host {
        display: block;
      }

      .card-container {
        background: var(--ha-card-background, white);
        border-radius: var(--ha-card-border-radius, 8px);
        box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
        padding: 16px;
      }

      .welcome-text {
        text-align: center;
        padding: 24px;
      }

      .welcome-text h2 {
        margin: 0 0 16px 0;
        color: var(--primary-text-color);
      }

      .welcome-text p {
        margin: 8px 0;
        color: var(--secondary-text-color);
      }

      .card-row {
        margin-bottom: 16px;
      }

      .card-row:last-child {
        margin-bottom: 0;
      }

      .card-column {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .unknown-module {
        padding: 16px;
        background: var(--error-color);
        color: white;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
      }
    `}};$e([pe({attribute:!1})],we.prototype,"hass",void 0),$e([pe({attribute:!1})],we.prototype,"config",void 0),we=$e([le("ultra-card")],we);var ke=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ce=class extends ae{render(){return H`
      <div class="about-tab">
        <div class="about-logo-container">
          <h1>Ultra Card</h1>
        </div>

        <div class="about-developed-by">
          Developed by
          <a href="https://wjddesigns.com" target="_blank" rel="noopener">WJD Designs</a>
        </div>

        <div class="about-description">
          <p>A powerful modular card builder for Home Assistant</p>
          <p>Create custom layouts with a professional page-builder interface</p>
        </div>

        <div class="about-buttons">
          <a
            href="https://github.com/WJDDesigns/Ultra-Card"
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
            GitHub Repository
          </a>
        </div>

        <div class="version-info">
          <p>Version 1.0.0</p>
          <p>Modular layout system with conditional logic and professional design tools</p>
        </div>
      </div>
    `}};Ce.styles=r`
    .about-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      max-width: 600px;
      margin: 0 auto;
      color: var(--primary-text-color);
    }

    .about-logo-container h1 {
      color: var(--primary-color);
      font-size: 2.5em;
      margin: 0 0 16px 0;
      text-align: center;
    }

    .about-developed-by {
      font-size: 1.2em;
      margin-bottom: 24px;
      color: var(--secondary-text-color);
      text-align: center;
    }

    .about-developed-by a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
    }

    .about-developed-by a:hover {
      text-decoration: underline;
    }

    .about-description {
      text-align: center;
      margin-bottom: 32px;
    }

    .about-description p {
      margin: 8px 0;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }

    .about-buttons {
      display: flex;
      justify-content: center;
      margin-bottom: 32px;
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
      color: white;
      border: none;
    }

    .about-button svg {
      margin-right: 8px;
      fill: currentColor;
    }

    .about-button.github {
      background-color: #24292e;
    }

    .about-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .version-info {
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }

    .version-info p {
      margin: 4px 0;
    }
  `,ke([pe({attribute:!1})],Ce.prototype,"hass",void 0),Ce=ke([le("ultra-about-tab")],Ce);var Se=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Te=class extends ae{constructor(){super(...arguments),this.showResetButton=!0}_getDisplayColor(e){var t;let o="string"==typeof e?e:void 0;if("object"==typeof e&&null!==e){const t=Object.keys(e);1===t.length&&"string"==typeof e[t[0]]?(o=e[t[0]],console.warn("ColorPicker received object, extracting value:",o)):(console.warn("ColorPicker received unexpected object:",e),o=void 0)}if(!o)return"#CCCCCC";if(o.startsWith("var(--"))try{const e=document.createElement("div");e.style.display="none",e.style.color=o,document.body.appendChild(e);const t=getComputedStyle(e).color;if(document.body.removeChild(e),t&&t.startsWith("rgb")){const e=t.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(e){const[t,o,i,n]=e;return this._rgbToHex(parseInt(o),parseInt(i),parseInt(n))}}return t||"#CCCCCC"}catch(e){console.warn("Error computing color from variable:",e);const i=null===(t=o.match(/var\(([^,)]+)/))||void 0===t?void 0:t[1];if(i){if(i.includes("--primary-text-color"))return"#FFFFFF";if(i.includes("--secondary-text-color"))return"#A0A0A0";if(i.includes("--primary-color"))return"#03A9F4";if(i.includes("--card-background-color"))return"#1C1C1C"}return"#CCCCCC"}return o}_rgbToHex(e,t,o){return"#"+[e,t,o].map((e=>{const t=e.toString(16);return 1===t.length?"0"+t:t})).join("")}_onColorChanged(e){let t=e.target.value;t||(t="#CCCCCC"),t!==this.value&&(this.value=t,this._fireChangeEvent())}_fireChangeEvent(){this.configValue?this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:this.value}},bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}_resetColor(){this.configValue&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:void 0}},bubbles:!0,composed:!0}))}render(){const e=this._getDisplayColor(this.value);return H`
      ${this.label?H`<div class="color-picker-label">${this.label}</div>`:""}
      <div class="color-picker-row">
        <input
          type="color"
          .value=${e}
          @change=${this._onColorChanged}
          class="color-input"
          aria-label=${this.label||"Color picker"}
        />
        ${this.showResetButton?H`
              <ha-icon-button
                class="reset-button"
                @click=${this._resetColor}
                title="Reset to default color"
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
              </ha-icon-button>
            `:""}
      </div>
    `}static get styles(){return r`
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
    `}};Se([pe()],Te.prototype,"value",void 0),Se([pe()],Te.prototype,"label",void 0),Se([pe()],Te.prototype,"configValue",void 0),Se([pe({type:Boolean})],Te.prototype,"showResetButton",void 0),Te=Se([le("color-picker")],Te);var Ae=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Me=class extends ae{constructor(){super(...arguments),this.disabled=!1}firstUpdated(){this._currentValue=this.value}updated(e){e.has("value")&&(this._currentValue=this.value)}_valueChanged(e){const t=e.detail.value;this._currentValue=t;const o=new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0});this.dispatchEvent(o)}_resetToDefault(){const e=this.defaultValue||"";this._currentValue=e;const t=new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_getDisplayValue(){return this._currentValue&&""!==this._currentValue?this._currentValue:this.defaultValue||""}_isDefaultValue(){return!this._currentValue||""===this._currentValue||this._currentValue===this.defaultValue}render(){const e=this._getDisplayValue();return H`
      <div class="ultra-color-picker-container">
        ${this.label?H`<label class="color-label">${this.label}</label>`:""}
        <div class="color-picker-wrapper">
          <div class="color-display" style="background-color: ${e}"></div>
          <ha-color-picker
            .value=${this._currentValue||""}
            .hass=${this.hass}
            .disabled=${this.disabled}
            @value-changed=${this._valueChanged}
          ></ha-color-picker>
          <ha-icon-button
            class="reset-button ${this._isDefaultValue()?"disabled":""}"
            .disabled=${this._isDefaultValue()}
            @click=${this._resetToDefault}
            .title=${"Reset to default"}
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}static get styles(){return r`
      .ultra-color-picker-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
      }

      .color-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 4px;
      }

      .color-picker-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
      }

      .color-display {
        min-width: 120px;
        height: 40px;
        border-radius: 8px;
        border: 2px solid var(--divider-color);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .color-display:hover {
        border-color: var(--primary-color);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      ha-color-picker {
        flex: 1;
        --ha-color-picker-width: 100%;
      }

      .reset-button {
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 20px;
        --mdc-theme-primary: var(--primary-color);
        border-radius: 6px;
        transition: all 0.2s ease;
      }

      .reset-button:not(.disabled):hover {
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        transform: rotate(180deg);
      }

      .reset-button.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .reset-button.disabled ha-icon {
        color: var(--disabled-text-color);
      }

      @media (max-width: 768px) {
        .color-picker-wrapper {
          flex-direction: column;
          gap: 8px;
          align-items: stretch;
        }

        .color-display {
          min-width: unset;
          width: 100%;
        }

        .reset-button {
          align-self: center;
        }
      }
    `}};Ae([pe({attribute:!1})],Me.prototype,"hass",void 0),Ae([pe()],Me.prototype,"value",void 0),Ae([pe()],Me.prototype,"label",void 0),Ae([pe()],Me.prototype,"defaultValue",void 0),Ae([pe({type:Boolean})],Me.prototype,"disabled",void 0),Ae([ue()],Me.prototype,"_currentValue",void 0),Me=Ae([le("ultra-color-picker")],Me);var Ie=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};const Re=[{value:"default",label:"– Default –",category:"default"}],ze=[{value:"Montserrat",label:"Montserrat (used as default font)",category:"typography"}],Ee=[{value:"Georgia, serif",label:"Georgia, serif",category:"websafe"},{value:"Palatino Linotype, Book Antiqua, Palatino, serif",label:"Palatino Linotype, Book Antiqua, Palatino, serif",category:"websafe"},{value:"Times New Roman, Times, serif",label:"Times New Roman, Times, serif",category:"websafe"},{value:"Arial, Helvetica, sans-serif",label:"Arial, Helvetica, sans-serif",category:"websafe"},{value:"Impact, Charcoal, sans-serif",label:"Impact, Charcoal, sans-serif",category:"websafe"},{value:"Lucida Sans Unicode, Lucida Grande, sans-serif",label:"Lucida Sans Unicode, Lucida Grande, sans-serif",category:"websafe"},{value:"Tahoma, Geneva, sans-serif",label:"Tahoma, Geneva, sans-serif",category:"websafe"},{value:"Trebuchet MS, Helvetica, sans-serif",label:"Trebuchet MS, Helvetica, sans-serif",category:"websafe"},{value:"Verdana, Geneva, sans-serif",label:"Verdana, Geneva, sans-serif",category:"websafe"},{value:"Courier New, Courier, monospace",label:"Courier New, Courier, monospace",category:"websafe"},{value:"Lucida Console, Monaco, monospace",label:"Lucida Console, Monaco, monospace",category:"websafe"}];let je=class extends ae{constructor(){super(...arguments),this._showModuleSelector=!1,this._selectedRowIndex=-1,this._selectedColumnIndex=-1,this._showModuleSettings=!1,this._selectedModule=null,this._activeModuleTab="general",this._activeDesignSubtab="text",this._showRowSettings=!1,this._selectedRowForSettings=-1,this._activeRowTab="general",this._showColumnSettings=!1,this._selectedColumnForSettings=null,this._activeColumnTab="general"}_configChanged(e){const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_updateConfig(e){const t=Object.assign(Object.assign({},this.config),e);this._configChanged(t)}_updateLayout(e){this._updateConfig({layout:e})}_addRow(){const e=this.config.layout||{rows:[]},t={id:`row-${Date.now()}`,columns:[{id:`col-${Date.now()}`,modules:[],vertical_alignment:"center",horizontal_alignment:"center"}],column_layout:"1-col"};e.rows.push(t),this._updateLayout(e)}_deleteRow(e){const t=this.config.layout||{rows:[]};t.rows.splice(e,1),this._updateLayout(t)}_openModuleSelector(e,t){console.log("_openModuleSelector called with:",{rowIndex:e,columnIndex:t}),this._selectedRowIndex=e,this._selectedColumnIndex=t,this._showModuleSelector=!0,console.log("Module selector opened, selected indices:",this._selectedRowIndex,this._selectedColumnIndex)}_addModule(e){if(console.log("_addModule called with type:",e),console.log("Selected row index:",this._selectedRowIndex),console.log("Selected column index:",this._selectedColumnIndex),-1===this._selectedRowIndex||-1===this._selectedColumnIndex)return void console.error("No row or column selected");const t=this.config.layout||{rows:[]};if(console.log("Current layout:",t),!t.rows[this._selectedRowIndex])return void console.error("Selected row does not exist:",this._selectedRowIndex);const o=t.rows[this._selectedRowIndex];if(console.log("Selected row:",o),!o.columns[this._selectedColumnIndex])return void console.error("Selected column does not exist:",this._selectedColumnIndex);const i=o.columns[this._selectedColumnIndex];console.log("Selected column:",i);const n=_e().createDefaultModule(e);if(console.log("Created module:",n),!n)return void console.error(`Failed to create module of type: ${e}`);const r=[...i.modules||[],n],a=Object.assign(Object.assign({},i),{modules:r}),s=o.columns.map(((e,t)=>t===this._selectedColumnIndex?a:e)),l=Object.assign(Object.assign({},o),{columns:s}),c=t.rows.map(((e,t)=>t===this._selectedRowIndex?l:e)),d=Object.assign(Object.assign({},t),{rows:c});console.log("Updated column with new module:",a),this._updateLayout(d),this._showModuleSelector=!1,this.requestUpdate()}_openModuleSettings(e,t,o){this._selectedModule={rowIndex:e,columnIndex:t,moduleIndex:o},this._showModuleSettings=!0}_updateModule(e){if(!this._selectedModule)return;const t=this.config.layout||{rows:[]},{rowIndex:o,columnIndex:i,moduleIndex:n}=this._selectedModule,r=JSON.parse(JSON.stringify(t)),a=r.rows[o].columns[i].modules[n];Object.assign(a,e),this._updateLayout(r)}_saveModule(){const e=document.querySelector(".save-button");e&&(e.innerHTML,e.innerHTML='<ha-icon icon="mdi:check"></ha-icon> Saved!',e.style.background="var(--success-color)",e.style.color="white",setTimeout((()=>{this._showModuleSettings=!1,this._selectedModule=null,this.requestUpdate()}),800))}_openRowSettings(e){this._selectedRowForSettings=e,this._showRowSettings=!0}_updateRow(e){if(-1===this._selectedRowForSettings)return;const t=this.config.layout||{rows:[]},o=JSON.parse(JSON.stringify(t)),i=o.rows[this._selectedRowForSettings];Object.assign(i,e),this._updateLayout(o)}_openColumnSettings(e,t){this._selectedColumnForSettings={rowIndex:e,columnIndex:t},this._showColumnSettings=!0}_updateColumn(e){if(!this._selectedColumnForSettings)return;const t=this.config.layout||{rows:[]},o=JSON.parse(JSON.stringify(t)),i=o.rows[this._selectedColumnForSettings.rowIndex].columns[this._selectedColumnForSettings.columnIndex];Object.assign(i,e),this._updateLayout(o)}_loadGoogleFont(e){if(!e||"default"===e||Ee.some((t=>t.value===e)))return;if(document.querySelector(`link[href*="${e.replace(/\s+/g,"+")}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=`https://fonts.googleapis.com/css2?family=${e.replace(/\s+/g,"+")}:wght@300;400;500;600;700&display=swap`,document.head.appendChild(t)}_renderModulePreview(){var e,t,o;if(!this._selectedModule)return H``;const{rowIndex:i,columnIndex:n,moduleIndex:r}=this._selectedModule,a=null===(o=null===(t=null===(e=this.config.layout)||void 0===e?void 0:e.rows[i])||void 0===t?void 0:t.columns[n])||void 0===o?void 0:o.modules[r];return a?H`
      <div class="module-preview">
        <div class="preview-header">Live Preview</div>
        <div class="preview-content">${this._renderSingleModule(a)}</div>
      </div>
    `:H``}_renderSingleModule(e){const t=_e().getModule(e.type);return t?t.renderPreview(e,this.hass):H`
      <div class="module-placeholder">
        <ha-icon icon="mdi:help-circle"></ha-icon>
        <span>Unknown Module: ${e.type}</span>
      </div>
    `}_renderModuleSettings(){var e,t,o;if(!this._selectedModule)return H``;const{rowIndex:i,columnIndex:n,moduleIndex:r}=this._selectedModule,a=null===(o=null===(t=null===(e=this.config.layout)||void 0===e?void 0:e.rows[i])||void 0===t?void 0:t.columns[n])||void 0===o?void 0:o.modules[r];return a?H`
      <div class="module-settings-popup">
        <div class="popup-overlay"></div>
        <div class="popup-content">
          <div class="popup-header">
            <h3>Module Settings - ${a.type.charAt(0).toUpperCase()+a.type.slice(1)}</h3>
            <div class="header-actions">
              <button class="save-button" @click=${()=>this._saveModule()}>
                <ha-icon icon="mdi:content-save"></ha-icon>
                Save
              </button>
              <button class="close-button" @click=${()=>this._showModuleSettings=!1}>
                ×
              </button>
            </div>
          </div>

          ${this._renderModulePreview()}

          <div class="module-tabs">
            <button
              class="module-tab ${"general"===this._activeModuleTab?"active":""}"
              @click=${()=>this._activeModuleTab="general"}
            >
              General
            </button>
            <button
              class="module-tab ${"logic"===this._activeModuleTab?"active":""}"
              @click=${()=>this._activeModuleTab="logic"}
            >
              Logic
            </button>
            <button
              class="module-tab ${"design"===this._activeModuleTab?"active":""}"
              @click=${()=>this._activeModuleTab="design"}
            >
              Design
            </button>
          </div>

          <div class="module-tab-content">
            ${"general"===this._activeModuleTab?this._renderGeneralTab(a):""}
            ${"logic"===this._activeModuleTab?this._renderLogicTab(a):""}
            ${"design"===this._activeModuleTab?this._renderDesignTab(a):""}
          </div>
        </div>
      </div>
    `:H``}_renderRowSettings(){var e;if(-1===this._selectedRowForSettings)return H``;const t=null===(e=this.config.layout)||void 0===e?void 0:e.rows[this._selectedRowForSettings];return t?H`
      <div class="settings-popup">
        <div class="popup-overlay" @click=${()=>this._showRowSettings=!1}></div>
        <div class="popup-content">
          <div class="popup-header">
            <h3>Row Settings</h3>
            <button class="close-button" @click=${()=>this._showRowSettings=!1}>×</button>
          </div>

          <div class="settings-tabs">
            <button
              class="settings-tab ${"general"===this._activeRowTab?"active":""}"
              @click=${()=>this._activeRowTab="general"}
            >
              General
            </button>
            <button
              class="settings-tab ${"logic"===this._activeRowTab?"active":""}"
              @click=${()=>this._activeRowTab="logic"}
            >
              Logic
            </button>
            <button
              class="settings-tab ${"design"===this._activeRowTab?"active":""}"
              @click=${()=>this._activeRowTab="design"}
            >
              Design
            </button>
          </div>

          <div class="settings-tab-content">
            ${"general"===this._activeRowTab?this._renderRowGeneralTab(t):""}
            ${"logic"===this._activeRowTab?this._renderRowLogicTab(t):""}
            ${"design"===this._activeRowTab?this._renderRowDesignTab(t):""}
          </div>
        </div>
      </div>
    `:H``}_renderColumnSettings(){var e,t;if(!this._selectedColumnForSettings)return H``;const{rowIndex:o,columnIndex:i}=this._selectedColumnForSettings,n=null===(t=null===(e=this.config.layout)||void 0===e?void 0:e.rows[o])||void 0===t?void 0:t.columns[i];return n?H`
      <div class="settings-popup">
        <div class="popup-overlay" @click=${()=>this._showColumnSettings=!1}></div>
        <div class="popup-content">
          <div class="popup-header">
            <h3>Column Settings</h3>
            <button class="close-button" @click=${()=>this._showColumnSettings=!1}>
              ×
            </button>
          </div>

          <div class="settings-tabs">
            <button
              class="settings-tab ${"general"===this._activeColumnTab?"active":""}"
              @click=${()=>this._activeColumnTab="general"}
            >
              General
            </button>
            <button
              class="settings-tab ${"logic"===this._activeColumnTab?"active":""}"
              @click=${()=>this._activeColumnTab="logic"}
            >
              Logic
            </button>
            <button
              class="settings-tab ${"design"===this._activeColumnTab?"active":""}"
              @click=${()=>this._activeColumnTab="design"}
            >
              Design
            </button>
          </div>

          <div class="settings-tab-content">
            ${"general"===this._activeColumnTab?this._renderColumnGeneralTab(n):""}
            ${"logic"===this._activeColumnTab?this._renderColumnLogicTab(n):""}
            ${"design"===this._activeColumnTab?this._renderColumnDesignTab(n):""}
          </div>
        </div>
      </div>
    `:H``}_renderRowGeneralTab(e){return H`
      <div class="settings-section">
        <label>Row Background Color:</label>
        <input
          type="color"
          .value=${e.background_color||"#ffffff"}
          @change=${e=>this._updateRow({background_color:e.target.value})}
        />
      </div>
      <div class="settings-section">
        <label>Column Gap (px):</label>
        <input
          type="number"
          min="0"
          max="50"
          .value=${e.gap||16}
          @change=${e=>this._updateRow({gap:Number(e.target.value)})}
        />
      </div>
    `}_renderRowLogicTab(e){return H`
      <div class="settings-section">
        <label>
          <input
            type="checkbox"
            .checked=${e.template_mode||!1}
            @change=${e=>this._updateRow({template_mode:e.target.checked})}
          />
          Enable Template Mode
        </label>
      </div>
      ${e.template_mode?H`
            <div class="settings-section">
              <label>Template:</label>
              <textarea
                .value=${e.template||""}
                @input=${e=>this._updateRow({template:e.target.value})}
                placeholder="{% if states('sensor.example') == 'on' %}Show this row{% endif %}"
              ></textarea>
            </div>
          `:""}
    `}_renderRowDesignTab(e){return H`
      <div class="settings-section">
        <label>Padding (px):</label>
        <input
          type="number"
          min="0"
          max="100"
          .value=${e.padding||16}
          @change=${e=>this._updateRow({padding:Number(e.target.value)})}
        />
      </div>
      <div class="settings-section">
        <label>Border Radius (px):</label>
        <input
          type="number"
          min="0"
          max="50"
          .value=${e.border_radius||0}
          @change=${e=>this._updateRow({border_radius:Number(e.target.value)})}
        />
      </div>
    `}_renderColumnGeneralTab(e){return H`
      <div class="settings-section">
        <label>Vertical Alignment:</label>
        <select
          .value=${e.vertical_alignment||"center"}
          @change=${e=>this._updateColumn({vertical_alignment:e.target.value})}
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
          <option value="stretch">Stretch</option>
        </select>
      </div>
      <div class="settings-section">
        <label>Horizontal Alignment:</label>
        <select
          .value=${e.horizontal_alignment||"center"}
          @change=${e=>this._updateColumn({horizontal_alignment:e.target.value})}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="stretch">Stretch</option>
        </select>
      </div>
    `}_renderColumnLogicTab(e){return H`
      <div class="settings-section">
        <label>
          <input
            type="checkbox"
            .checked=${e.template_mode||!1}
            @change=${e=>this._updateColumn({template_mode:e.target.checked})}
          />
          Enable Template Mode
        </label>
      </div>
      ${e.template_mode?H`
            <div class="settings-section">
              <label>Template:</label>
              <textarea
                .value=${e.template||""}
                @input=${e=>this._updateColumn({template:e.target.value})}
                placeholder="{% if states('sensor.example') == 'on' %}Show this column{% endif %}"
              ></textarea>
            </div>
          `:""}
    `}_renderColumnDesignTab(e){return H`
      <div class="settings-section">
        <ultra-color-picker
          .label=${"Background Color"}
          .value=${e.background_color||""}
          .defaultValue=${"var(--ha-card-background, var(--card-background-color, #fff))"}
          .hass=${this.hass}
          @value-changed=${e=>this._updateColumn({background_color:e.detail.value})}
        ></ultra-color-picker>
      </div>
      <div class="settings-section">
        <label>Padding (px):</label>
        <input
          type="number"
          min="0"
          max="100"
          .value=${e.padding||12}
          @change=${e=>this._updateColumn({padding:Number(e.target.value)})}
        />
      </div>
    `}_renderGeneralTab(e){const t=_e().getModule(e.type);return t?t.renderGeneralTab(e,this.hass,this.config,(e=>this._updateModule(e))):H`
      <div class="settings-section">
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <span>No settings available for module type: ${e.type}</span>
        </div>
      </div>
    `}_renderLogicTab(e){if("text"===e.type||"image"===e.type){const t=e,o="template_mode"in t;return H`
        <div class="settings-section">
          <label>
            <input
              type="checkbox"
              .checked=${o&&t.template_mode||!1}
              @change=${e=>this._updateModule({template_mode:e.target.checked})}
            />
            Enable Template Mode
          </label>
        </div>
        ${o&&t.template_mode?H`
              <div class="settings-section">
                <label>Template:</label>
                <textarea
                  .value=${t.template||""}
                  @input=${e=>this._updateModule({template:e.target.value})}
                  placeholder="{% if states('sensor.example') == 'on' %}Show this text{% endif %}"
                ></textarea>
              </div>
            `:""}
      `}return H`<div class="settings-section">
      <p>Logic settings not available for ${e.type} modules.</p>
    </div>`}_renderDesignTab(e){return H`
      <div class="design-subtabs">
        <button
          class="design-subtab ${"text"===this._activeDesignSubtab?"active":""}"
          @click=${()=>this._activeDesignSubtab="text"}
        >
          Text
        </button>
        <button
          class="design-subtab ${"background"===this._activeDesignSubtab?"active":""}"
          @click=${()=>this._activeDesignSubtab="background"}
        >
          Background
        </button>
        <button
          class="design-subtab ${"spacing"===this._activeDesignSubtab?"active":""}"
          @click=${()=>this._activeDesignSubtab="spacing"}
        >
          Spacing
        </button>
        <button
          class="design-subtab ${"border"===this._activeDesignSubtab?"active":""}"
          @click=${()=>this._activeDesignSubtab="border"}
        >
          Border
        </button>
      </div>

      <div class="design-subtab-content">
        ${"text"===this._activeDesignSubtab?this._renderTextDesignTab(e):""}
        ${"background"===this._activeDesignSubtab?this._renderBackgroundDesignTab(e):""}
        ${"spacing"===this._activeDesignSubtab?this._renderSpacingDesignTab(e):""}
        ${"border"===this._activeDesignSubtab?this._renderBorderDesignTab(e):""}
      </div>
    `}_renderTextDesignTab(e){if("text"===e.type){const t=e;return H`
        <!-- Text Color Section -->
        <div class="settings-section">
          <ultra-color-picker
            .label=${"Text Color"}
            .value=${t.color||""}
            .defaultValue=${"var(--primary-text-color)"}
            .hass=${this.hass}
            @value-changed=${e=>{const o=e.detail.value;this._updateModule({color:o}),this._loadGoogleFont(t.font_family)}}
          ></ultra-color-picker>
        </div>

        <!-- Font Family Dropdown -->
        <div class="settings-section">
          <label>Font:</label>
          <select
            .value=${t.font_family||"default"}
            @change=${e=>{const t=e.target.value;this._updateModule({font_family:t}),this._loadGoogleFont(t)}}
            class="font-dropdown"
          >
            ${Re.map((e=>H`
                <option value="${e.value}" ?selected=${t.font_family===e.value}>
                  ${e.label}
                </option>
              `))}
            <optgroup label="Fonts from Typography settings">
              ${ze.map((e=>H`
                  <option value="${e.value}" ?selected=${t.font_family===e.value}>
                    ${e.label}
                  </option>
                `))}
            </optgroup>
            <optgroup label="Web safe font combinations (do not need to be loaded)">
              ${Ee.map((e=>H`
                  <option value="${e.value}" ?selected=${t.font_family===e.value}>
                    ${e.label}
                  </option>
                `))}
            </optgroup>
          </select>
        </div>

        <!-- Font Size -->
        <div class="settings-section">
          <label>Font Size (px):</label>
          <input
            type="number"
            min="8"
            max="72"
            .value=${t.font_size||16}
            @input=${e=>this._updateModule({font_size:Number(e.target.value)})}
            class="font-size-input"
          />
        </div>

        <!-- Text Alignment -->
        <div class="settings-section">
          <label>Text Alignment:</label>
          <div class="alignment-buttons">
            ${["left","center","right"].map((e=>H`
                <button
                  class="alignment-btn ${t.alignment===e?"active":""}"
                  @click=${()=>this._updateModule({alignment:e})}
                >
                  <ha-icon icon="mdi:format-align-${e}"></ha-icon>
                </button>
              `))}
          </div>
        </div>

        <!-- Text Formatting -->
        <div class="settings-section">
          <label>Text Formatting:</label>
          <div class="format-buttons">
            <button
              class="format-btn ${t.bold?"active":""}"
              @click=${()=>this._updateModule({bold:!t.bold})}
            >
              <ha-icon icon="mdi:format-bold"></ha-icon>
            </button>
            <button
              class="format-btn ${t.italic?"active":""}"
              @click=${()=>this._updateModule({italic:!t.italic})}
            >
              <ha-icon icon="mdi:format-italic"></ha-icon>
            </button>
            <button
              class="format-btn ${t.uppercase?"active":""}"
              @click=${()=>this._updateModule({uppercase:!t.uppercase})}
            >
              <ha-icon icon="mdi:format-letter-case-upper"></ha-icon>
            </button>
            <button
              class="format-btn ${t.strikethrough?"active":""}"
              @click=${()=>this._updateModule({strikethrough:!t.strikethrough})}
            >
              <ha-icon icon="mdi:format-strikethrough"></ha-icon>
            </button>
          </div>
        </div>
      `}return"separator"===e.type?H`
        <div class="settings-section">
          <ultra-color-picker
            .label=${"Separator Color"}
            .value=${e.color||""}
            .defaultValue=${"var(--divider-color)"}
            .hass=${this.hass}
            @value-changed=${e=>{const t=e.detail.value;this._updateModule({color:t})}}
          ></ultra-color-picker>
        </div>
      `:H`<div class="settings-section">
      <p>Text design options not available for ${e.type} modules.</p>
    </div>`}_renderBackgroundDesignTab(e){return H`
      <div class="settings-section">
        <ultra-color-picker
          .label=${"Background Color"}
          .value=${e.background_color||""}
          .defaultValue=${"var(--ha-card-background, var(--card-background-color, #fff))"}
          .hass=${this.hass}
          @value-changed=${e=>{const t=e.detail.value;this._updateModule({background_color:t})}}
        ></ultra-color-picker>
      </div>
    `}_renderSpacingDesignTab(e){var t,o,i,n,r,a,s,l;return H`
      <div class="spacing-grid">
        <div class="spacing-section">
          <h4>Margin</h4>
          <div class="spacing-cross">
            <input
              type="number"
              placeholder="Top"
              .value=${(null===(t=e.margin)||void 0===t?void 0:t.top)||0}
              @input=${t=>this._updateModule({margin:Object.assign(Object.assign({},e.margin),{top:Number(t.target.value)})})}
            />
            <div class="spacing-row">
              <input
                type="number"
                placeholder="Left"
                .value=${(null===(o=e.margin)||void 0===o?void 0:o.left)||0}
                @input=${t=>this._updateModule({margin:Object.assign(Object.assign({},e.margin),{left:Number(t.target.value)})})}
              />
              <span class="spacing-center">M</span>
              <input
                type="number"
                placeholder="Right"
                .value=${(null===(i=e.margin)||void 0===i?void 0:i.right)||0}
                @input=${t=>this._updateModule({margin:Object.assign(Object.assign({},e.margin),{right:Number(t.target.value)})})}
              />
            </div>
            <input
              type="number"
              placeholder="Bottom"
              .value=${(null===(n=e.margin)||void 0===n?void 0:n.bottom)||0}
              @input=${t=>this._updateModule({margin:Object.assign(Object.assign({},e.margin),{bottom:Number(t.target.value)})})}
            />
          </div>
        </div>

        <div class="spacing-section">
          <h4>Padding</h4>
          <div class="spacing-cross">
            <input
              type="number"
              placeholder="Top"
              .value=${(null===(r=e.padding)||void 0===r?void 0:r.top)||0}
              @input=${t=>this._updateModule({padding:Object.assign(Object.assign({},e.padding),{top:Number(t.target.value)})})}
            />
            <div class="spacing-row">
              <input
                type="number"
                placeholder="Left"
                .value=${(null===(a=e.padding)||void 0===a?void 0:a.left)||0}
                @input=${t=>this._updateModule({padding:Object.assign(Object.assign({},e.padding),{left:Number(t.target.value)})})}
              />
              <span class="spacing-center">P</span>
              <input
                type="number"
                placeholder="Right"
                .value=${(null===(s=e.padding)||void 0===s?void 0:s.right)||0}
                @input=${t=>this._updateModule({padding:Object.assign(Object.assign({},e.padding),{right:Number(t.target.value)})})}
              />
            </div>
            <input
              type="number"
              placeholder="Bottom"
              .value=${(null===(l=e.padding)||void 0===l?void 0:l.bottom)||0}
              @input=${t=>this._updateModule({padding:Object.assign(Object.assign({},e.padding),{bottom:Number(t.target.value)})})}
            />
          </div>
        </div>
      </div>
    `}_renderBorderDesignTab(e){var t;return H`
      <div class="settings-section">
        <label>Border Radius (px):</label>
        <input
          type="number"
          min="0"
          max="50"
          .value=${(null===(t=e.border)||void 0===t?void 0:t.radius)||0}
          @input=${t=>this._updateModule({border:Object.assign(Object.assign({},e.border),{radius:Number(t.target.value)})})}
        />
      </div>
    `}render(){const e=this.config.layout||{rows:[]};return H`
      <div class="layout-builder">
        <div class="builder-header">
          <h3>Layout Builder</h3>
          <button class="add-row-btn" @click=${this._addRow}>
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Row
          </button>
        </div>

        <div class="rows-container">
          ${e.rows.map(((e,t)=>H`
              <div class="row-builder">
                <div class="row-header">
                  <span>Row ${t+1}</span>
                  <div class="row-actions">
                    <button
                      class="row-settings-btn"
                      @click=${()=>this._openRowSettings(t)}
                    >
                      <ha-icon icon="mdi:cog"></ha-icon>
                    </button>
                    <button class="delete-row-btn" @click=${()=>this._deleteRow(t)}>
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                  </div>
                </div>
                <div class="columns-container">
                  ${e.columns.map(((e,o)=>H`
                      <div class="column-builder">
                        <div class="column-header">
                          <span>Column ${o+1}</span>
                          <button
                            class="column-settings-btn"
                            @click=${()=>this._openColumnSettings(t,o)}
                          >
                            <ha-icon icon="mdi:cog"></ha-icon>
                          </button>
                        </div>
                        <div class="modules-container">
                          ${e.modules.map(((e,i)=>H`
                              <div
                                class="module-item"
                                @click=${()=>this._openModuleSettings(t,o,i)}
                              >
                                ${this._renderSingleModule(e)}
                                <div class="module-overlay">
                                  <ha-icon icon="mdi:cog"></ha-icon>
                                </div>
                              </div>
                            `))}
                          <button
                            class="add-module-btn"
                            @click=${()=>this._openModuleSelector(t,o)}
                          >
                            <ha-icon icon="mdi:plus"></ha-icon>
                            Add Module
                          </button>
                        </div>
                      </div>
                    `))}
                </div>
              </div>
            `))}
        </div>

        ${this._showModuleSelector?this._renderModuleSelector():""}
        ${this._showModuleSettings?this._renderModuleSettings():""}
        ${this._showRowSettings?this._renderRowSettings():""}
        ${this._showColumnSettings?this._renderColumnSettings():""}
      </div>
    `}_renderModuleSelector(){const e=_e().getAllModules();return H`
      <div class="module-selector-popup">
        <div class="popup-overlay" @click=${()=>this._showModuleSelector=!1}></div>
        <div class="selector-content">
          <div class="selector-header">
            <h3>Add Module</h3>
          </div>

          <div class="module-types">
            ${e.map((e=>{const t=e.metadata;return H`
                <button
                  class="module-type-btn"
                  @click=${()=>this._addModule(t.type)}
                  title="${t.description}"
                >
                  <ha-icon icon="${t.icon}"></ha-icon>
                  <div class="module-info">
                    <span class="module-title">${t.title}</span>
                    <span class="module-description">${t.description}</span>
                  </div>
                </button>
              `}))}
          </div>
        </div>
      </div>
    `}_formatCategoryTitle(e){return e.charAt(0).toUpperCase()+e.slice(1)}static get styles(){return r`
      .layout-builder {
        padding: 16px;
        background: var(--card-background-color);
        border-radius: 8px;
      }

      .builder-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .add-row-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .row-builder {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .row-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: var(--secondary-background-color);
        font-weight: 500;
      }

      .row-actions {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .row-settings-btn {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
      }

      .row-settings-btn:hover {
        background: var(--primary-color);
        color: white;
      }

      .delete-row-btn {
        background: none;
        border: none;
        color: var(--error-color);
        cursor: pointer;
        padding: 4px;
      }

      .columns-container {
        display: flex;
        min-height: 100px;
      }

      .column-builder {
        flex: 1;
        border-right: 1px solid var(--divider-color);
        padding: 16px;
      }

      .column-builder:last-child {
        border-right: none;
      }

      .column-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--secondary-text-color);
      }

      .column-settings-btn {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
        font-size: 12px;
      }

      .column-settings-btn:hover {
        background: var(--primary-color);
        color: white;
      }

      .modules-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .module-item {
        position: relative;
        padding: 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .module-item:hover {
        border-color: var(--primary-color);
      }

      .module-item:hover .module-overlay {
        opacity: 1;
      }

      .module-overlay {
        position: absolute;
        top: 4px;
        right: 4px;
        background: var(--primary-color);
        color: white;
        padding: 4px;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .add-module-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        border: 2px dashed var(--divider-color);
        border-radius: 4px;
        background: none;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .add-module-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      /* Module Selector Popup */
      .module-selector-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .popup-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
      }

      .selector-content {
        position: relative;
        background: var(--card-background-color);
        border-radius: 8px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      }

      .selector-header {
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 16px;
      }

      .selector-header h3 {
        margin: 0 0 4px 0;
      }

      .module-stats {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .module-category {
        margin-bottom: 20px;
      }

      .category-title {
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 8px 0;
        color: var(--primary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .module-types {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .module-type-btn {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
        width: 100%;
        min-height: 60px;
      }

      .module-type-btn:hover {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: white;
      }

      .module-type-btn ha-icon {
        font-size: 32px;
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        color: white;
        border-radius: 8px;
      }

      .module-type-btn:hover ha-icon {
        background: white;
        color: var(--primary-color);
      }

      .module-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
        flex: 1;
      }

      .module-title {
        font-weight: 500;
        font-size: 16px;
        color: var(--primary-text-color);
      }

      .module-description {
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.3;
      }

      .module-author,
      .module-version {
        display: none; /* Hide for cleaner look */
      }

      .module-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 16px;
        border: 1px dashed var(--divider-color);
        border-radius: 4px;
        color: var(--secondary-text-color);
        font-style: italic;
      }

      .error-message {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px;
        background: var(--error-color);
        color: white;
        border-radius: 4px;
        font-size: 14px;
      }

      /* General Settings Popup Styles */
      .settings-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1002;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px;
        overflow-y: auto;
      }

      .settings-tabs {
        display: flex;
        border-bottom: 1px solid var(--divider-color);
      }

      .settings-tab {
        flex: 1;
        padding: 12px 16px;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 14px;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
      }

      .settings-tab:hover {
        color: var(--primary-color);
      }

      .settings-tab.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
      }

      .settings-tab-content {
        padding: 24px;
        max-height: 400px;
        overflow-y: auto;
      }

      /* Module Settings Popup */
      .module-settings-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1001;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px;
        overflow-y: auto;
      }

      .popup-content {
        position: relative;
        background: var(--card-background-color);
        border-radius: 8px;
        width: 100%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
      }

      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        border-bottom: 1px solid var(--divider-color);
      }

      .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--secondary-text-color);
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .close-button:hover {
        color: var(--primary-color);
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .save-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.2s ease;
      }

      .save-button:hover {
        background: var(--primary-color);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .save-button ha-icon {
        --mdc-icon-size: 16px;
      }

      /* Module Preview */
      .module-preview {
        margin: 16px 24px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .preview-header {
        padding: 12px 16px;
        background: var(--secondary-background-color);
        font-weight: 500;
        font-size: 14px;
      }

      .preview-content {
        padding: 16px;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Module Tabs */
      .module-tabs {
        display: flex;
        border-bottom: 1px solid var(--divider-color);
      }

      .module-tab {
        flex: 1;
        padding: 12px 16px;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 14px;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
      }

      .module-tab:hover {
        color: var(--primary-color);
      }

      .module-tab.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
      }

      .module-tab-content {
        padding: 24px;
        max-height: 400px;
        overflow-y: auto;
      }

      /* Design Subtabs */
      .design-subtabs {
        display: flex;
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        overflow: hidden;
      }

      .design-subtab {
        flex: 1;
        padding: 8px 12px;
        background: var(--secondary-background-color);
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 12px;
        transition: all 0.2s ease;
      }

      .design-subtab:hover {
        color: var(--primary-color);
      }

      .design-subtab.active {
        background: var(--primary-color);
        color: white;
      }

      /* Settings Sections */
      .settings-section {
        margin-bottom: 20px;
      }

      .settings-section label {
        display: block;
        font-weight: 500;
        margin-bottom: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      /* Color Section Styling */
      .color-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .color-picker-wrapper {
        display: flex;
        align-items: center;
      }

      .color-picker-wrapper color-picker {
        width: 100%;
        max-width: 300px;
      }

      /* Font Dropdown Styling */
      .font-dropdown {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
      }

      .font-dropdown:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .font-dropdown optgroup {
        font-weight: 600;
        color: var(--secondary-text-color);
        background: var(--card-background-color);
        padding: 4px 0;
      }

      .font-dropdown option {
        padding: 4px 8px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
      }

      /* Font Size Input Styling */
      .font-size-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
      }

      .font-size-input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      /* Enhanced Alignment Buttons */
      .alignment-buttons {
        display: flex;
        gap: 6px;
        margin-top: 4px;
      }

      .alignment-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .alignment-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .alignment-btn.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .alignment-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      .settings-section input,
      .settings-section select,
      .settings-section textarea {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
      }

      .settings-section textarea {
        min-height: 60px;
        resize: vertical;
      }

      /* Button Groups */
      .alignment-buttons,
      .format-buttons {
        display: flex;
        gap: 4px;
      }

      .alignment-btn,
      .format-btn {
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .alignment-btn:hover,
      .format-btn:hover {
        border-color: var(--primary-color);
      }

      .alignment-btn.active,
      .format-btn.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      /* Spacing Grid */
      .spacing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }

      .spacing-section h4 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 500;
      }

      .spacing-cross {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        align-items: center;
        max-width: 120px;
        margin: 0 auto;
      }

      .spacing-row {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 8px;
        align-items: center;
      }

      .spacing-center {
        width: 32px;
        height: 32px;
        background: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 12px;
      }

      .spacing-cross input {
        width: 60px;
        text-align: center;
        padding: 4px 8px;
        font-size: 12px;
      }

      /* Module Rendering */
      .text-module {
        word-wrap: break-word;
      }

      .separator-module {
        width: 100%;
      }

      .image-module {
        text-align: center;
      }

      .image-placeholder {
        padding: 20px;
        border: 2px dashed var(--divider-color);
        border-radius: 4px;
        color: var(--secondary-text-color);
        font-style: italic;
      }

      .module-placeholder {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-style: italic;
      }

      @media (max-width: 768px) {
        .columns-container {
          flex-direction: column;
        }

        .column-builder {
          border-right: none;
          border-bottom: 1px solid var(--divider-color);
        }

        .column-builder:last-child {
          border-bottom: none;
        }

        .module-types {
          grid-template-columns: repeat(2, 1fr);
        }

        .spacing-grid {
          grid-template-columns: 1fr;
        }
      }
    `}};Ie([pe({attribute:!1})],je.prototype,"hass",void 0),Ie([pe({attribute:!1})],je.prototype,"config",void 0),Ie([ue()],je.prototype,"_showModuleSelector",void 0),Ie([ue()],je.prototype,"_selectedRowIndex",void 0),Ie([ue()],je.prototype,"_selectedColumnIndex",void 0),Ie([ue()],je.prototype,"_showModuleSettings",void 0),Ie([ue()],je.prototype,"_selectedModule",void 0),Ie([ue()],je.prototype,"_activeModuleTab",void 0),Ie([ue()],je.prototype,"_activeDesignSubtab",void 0),Ie([ue()],je.prototype,"_showRowSettings",void 0),Ie([ue()],je.prototype,"_selectedRowForSettings",void 0),Ie([ue()],je.prototype,"_activeRowTab",void 0),Ie([ue()],je.prototype,"_showColumnSettings",void 0),Ie([ue()],je.prototype,"_selectedColumnForSettings",void 0),Ie([ue()],je.prototype,"_activeColumnTab",void 0),je=Ie([le("ultra-layout-tab")],je);var Oe=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let De=class extends ae{constructor(){super(...arguments),this._activeTab="layout"}setConfig(e){this.config=e||{type:"ultra-card",layout:{rows:[]}}}_configChanged(e){const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_updateConfig(e){const t=Object.assign(Object.assign({},this.config),e);this._configChanged(t)}render(){return this.hass&&this.config?H`
      <div class="card-config">
        <div class="tabs">
          <button
            class="tab ${"layout"===this._activeTab?"active":""}"
            @click=${()=>this._activeTab="layout"}
          >
            Layout Builder
          </button>
          <button
            class="tab ${"settings"===this._activeTab?"active":""}"
            @click=${()=>this._activeTab="settings"}
          >
            Settings
          </button>
          <button
            class="tab ${"about"===this._activeTab?"active":""}"
            @click=${()=>this._activeTab="about"}
          >
            About
          </button>
        </div>

        <div class="tab-content">
          ${"layout"===this._activeTab?H`<ultra-layout-tab .hass=${this.hass} .config=${this.config}></ultra-layout-tab>`:"settings"===this._activeTab?this._renderSettingsTab():H`<ultra-about-tab .hass=${this.hass}></ultra-about-tab>`}
        </div>
      </div>
    `:H`<div>Loading...</div>`}_renderSettingsTab(){return H`
      <div class="settings-tab">
        <div class="settings-section">
          <h3>Card Settings</h3>
          <p>Configure global card appearance and behavior.</p>

          <div class="form-row">
            <ultra-color-picker
              .label=${"Card Background Color"}
              .value=${this.config.card_background||""}
              .defaultValue=${"var(--ha-card-background, var(--card-background-color, #fff))"}
              .hass=${this.hass}
              @value-changed=${e=>this._updateConfig({card_background:e.detail.value})}
            ></ultra-color-picker>
          </div>

          <div class="form-row">
            <label>Card Border Radius (px):</label>
            <input
              type="number"
              min="0"
              max="50"
              .value=${this.config.card_border_radius||8}
              @change=${e=>this._updateConfig({card_border_radius:Number(e.target.value)})}
            />
          </div>

          <div class="form-row">
            <label>Card Padding (px):</label>
            <input
              type="number"
              min="0"
              max="100"
              .value=${this.config.card_padding||16}
              @change=${e=>this._updateConfig({card_padding:Number(e.target.value)})}
            />
          </div>
        </div>
      </div>
    `}static get styles(){return r`
      .card-config {
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .tabs {
        display: flex;
        border-bottom: 2px solid var(--divider-color);
        margin-bottom: 16px;
      }

      .tab {
        background: none;
        border: none;
        padding: 12px 16px;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 14px;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
        flex: 1;
        text-align: center;
      }

      .tab:hover {
        color: var(--primary-color);
      }

      .tab.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
      }

      .tab-content {
        min-height: 400px;
      }

      .settings-tab {
        padding: 16px 0;
      }

      .settings-section {
        background: var(--card-background-color);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .settings-section h3 {
        margin-top: 0;
        color: var(--primary-text-color);
      }

      .form-row {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        gap: 12px;
      }

      .form-row label {
        min-width: 180px;
        color: var(--primary-text-color);
        font-size: 14px;
        font-weight: 500;
      }

      .form-row input {
        flex: 1;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .form-row input[type='color'] {
        width: 60px;
        height: 36px;
        cursor: pointer;
      }
    `}};Oe([pe({attribute:!1})],De.prototype,"hass",void 0),Oe([pe({attribute:!1})],De.prototype,"config",void 0),Oe([ue()],De.prototype,"_activeTab",void 0),De=Oe([le("ultra-card-editor")],De);var Pe=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ne=class extends ae{static get styles(){return r`
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
    `}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}};Pe([pe({attribute:!1})],Ne.prototype,"hass",void 0),Pe([pe()],Ne.prototype,"label",void 0),Pe([pe()],Ne.prototype,"value",void 0),Pe([pe()],Ne.prototype,"entityFilter",void 0),Ne=Pe([le("ultra-card-entity-picker")],Ne);var Le=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ue=class extends ae{constructor(){super(...arguments),this.value="",this.label="Navigation Target",this.disabled=!1}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}render(){return H`
      <div class="navigation-picker">
        ${this.label?H`<label class="label">${this.label}</label>`:""}
        ${this.helper?H`<div class="helper">${this.helper}</div>`:""}

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this.value}
          .disabled=${this.disabled}
          @value-changed=${this._valueChanged}
        ></ha-selector>
      </div>
    `}};Ue.styles=r`
    :host {
      display: block;
    }

    .navigation-picker {
      width: 100%;
    }

    .label {
      display: block;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .helper {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    ha-selector {
      width: 100%;
      display: block;
    }
  `,Le([pe({attribute:!1})],Ue.prototype,"hass",void 0),Le([pe()],Ue.prototype,"value",void 0),Le([pe()],Ue.prototype,"label",void 0),Le([pe()],Ue.prototype,"helper",void 0),Le([pe({type:Boolean})],Ue.prototype,"disabled",void 0),Ue=Le([le("navigation-picker")],Ue);const Be="1.0.0",Fe=_e();console.log(`🚀 Ultra Card v${Be} loaded with ${Fe.getRegistryStats().totalModules} modules`),window.customCards=window.customCards||[],customElements.whenDefined("ultra-card").then((()=>{console.log("✅ Ultra Card custom element registered successfully")})).catch((e=>{console.error("❌ Ultra Card registration failed:",e)})),window.customCards.push({type:"ultra-card",name:"Ultra Card",description:"A modular card builder for Home Assistant with professional layout tools and conditional logic.",preview:!0,documentationURL:"https://github.com/WJDDesigns/Ultra-Card",version:Be}),console.log("📋 Ultra Card added to customCards registry")})();