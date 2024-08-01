import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { UltraVehicleCardEditor } from "./ultra-vehicle-card-editor.js";
import { styles } from "./styles.js";

class UltraVehicleCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    return [
      styles,
      css`
        @keyframes pulse-blue {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
          }
          
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
          }
          
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
          }
        }

        .charging {
          animation: pulse-blue 2s infinite;
        }
      `
    ];
  }

  setConfig(config) {
    if (!config.title) {
      throw new Error("You need to define a title");
    }
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      show_level: true,
      show_range: true,
      charging_status_entity: "",
      ...config
    };
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const levelEntity = this.config.level_entity ? this.hass.states[this.config.level_entity] : null;
    const level = levelEntity ? parseFloat(levelEntity.state) : null;
    const levelUnit = this.config.vehicle_type === "EV" ? "Charge" : "Fuel";
    
    const rangeEntity = this.config.range_entity ? this.hass.states[this.config.range_entity] : null;
    const range = rangeEntity ? Math.round(parseFloat(rangeEntity.state)) : null;
    const rangeUnit = this._getRangeUnit();

    const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
    const isCharging = chargingStatusEntity && chargingStatusEntity.state.toLowerCase() === 'charging';

    return html`
      <ha-card class="${isCharging ? 'charging' : ''}">
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
                <span>${isCharging ? 'Charging' : `${level}% ${levelUnit}`}</span>
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
      charging_status_entity: "",
      show_level: true,
      show_range: true
    };
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level and range.",
  preview: true
});