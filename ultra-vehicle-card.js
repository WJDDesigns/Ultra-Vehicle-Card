import { LitElement, html } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { UltraVehicleCardEditor } from "./ultra-vehicle-card-editor.js";
import { styles } from "./styles.js";

// Console title
console.log(
  '%c Ultra Vehicle Card %c v1.0.0 ',
  'color: #4CAF50; font-weight: bold; font-size: 14px;',
  'color: #fff; background: #4CAF50; font-weight: bold; font-size: 14px;'
);

class UltraVehicleCard extends LitElement {
  constructor() {
    super();
    console.log('UltraVehicleCard constructor called');
    this.hass = null;
    this.config = null;
  }

  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    console.log('Styles getter called');
    return styles;
  }

  setConfig(config) {
    console.log('setConfig called with:', config);
    if (!config.title) {
      throw new Error("You need to define a title");
    }
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      show_level: true,
      show_range: true,
      ...config
    };
    console.log('Config set:', this.config);
  }

  updated(changedProperties) {
    console.log('Updated called, changed properties:', changedProperties);
    super.updated(changedProperties);
  }

  render() {
    console.log('Render method called');
    if (!this.hass || !this.config) {
      console.log('Hass or config not set, returning empty template');
      return html``;
    }
    
    try {
      const levelEntity = this.config.level_entity ? this.hass.states[this.config.level_entity] : null;
      const level = levelEntity ? parseFloat(levelEntity.state) : null;
      const levelUnit = this.config.vehicle_type === "EV" ? "Charge" : "Fuel";
      
      const rangeEntity = this.config.range_entity ? this.hass.states[this.config.range_entity] : null;
      const range = rangeEntity ? Math.round(parseFloat(rangeEntity.state)) : null;
      const rangeUnit = this._getRangeUnit();

      return html`
        <ha-card>
          <div class="vehicle-card-content">
            <h2 class="vehicle-name">${this.config.title}</h2>
            ${this.config.image_url ? html`
              <div class="vehicle-image-container">
                <img class="vehicle-image" src="${this.config.image_url}" alt="Vehicle Image">
              </div>
            ` : ''}
            ${this.config.show_level && this.config.level_entity && level !== null ? html`
              <div class="level-info">
                <div class="item_bar">
                  <div class="progress" style="width: ${level}%;"></div>
                </div>
                <div class="level-text">
                  <span>${level}% ${levelUnit}</span>
                  ${this.config.show_range && this.config.range_entity && range !== null ? html`<span class="range">${range} ${rangeUnit}</span>` : ''}
                </div>
              </div>
            ` : ''}
            ${!this.config.show_level && this.config.show_range && this.config.range_entity && range !== null ? html`
              <div class="level-text">
                <span class="range">${range} ${rangeUnit}</span>
              </div>
            ` : ''}
          </div>
        </ha-card>
      `;
    } catch (error) {
      console.error('Error in render method:', error);
      return html`
        <ha-card>
          <div class="vehicle-card-content">
            <h2>Error rendering Ultra Vehicle Card</h2>
            <p>${error.message}</p>
          </div>
        </ha-card>
      `;
    }
  }

  _getRangeUnit() {
    const locale = this.hass.language || 'en';
    const useMetric = ['en-GB', 'en-AU', 'en-NZ'].includes(locale) || !locale.startsWith('en');
    return useMetric ? 'kilometers' : 'miles';
  }

  static getConfigElement() {
    return document.createElement("ultra-vehicle-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      level_entity: "",
      range_entity: "",
      show_level: true,
      show_range: true
    };
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);
customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level and range.",
  preview: true
});