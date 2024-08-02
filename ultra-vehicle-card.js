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
        @keyframes move-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }

        .progress.charging {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: 50px 50px;
          animation: move-stripes 2s linear infinite;
        }

        .info-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .location, .mileage {
          font-size: 0.9em;
          color: var(--secondary-text-color);
        }

        .location ha-icon, .mileage ha-icon {
          margin-right: 4px;
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
      unit_type: "mi",
      show_level: true,
      show_range: true,
      charging_status_entity: "",
      location_entity: "",
      show_location: true,
      mileage_entity: "",
      show_mileage: true,
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
    const rangeUnit = this.config.unit_type;

    const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
    const isCharging = chargingStatusEntity && chargingStatusEntity.state.toLowerCase() === 'on';

    const locationEntity = this.config.location_entity ? this.hass.states[this.config.location_entity] : null;
    const location = locationEntity ? locationEntity.state : null;

    const mileageEntity = this.config.mileage_entity ? this.hass.states[this.config.mileage_entity] : null;
    let mileage = mileageEntity ? parseFloat(mileageEntity.state) : null;
    mileage = mileage !== null ? Math.round(mileage).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${this.config.title}</h2>
          ${this._renderInfoLine(location, mileage)}
          ${this.config.image_url ? html`
            <div class="vehicle-image-container">
              <img class="vehicle-image" src="${this.config.image_url}" alt="Vehicle Image">
            </div>
          ` : ''}
          ${this.config.show_level && this.config.level_entity && level !== null ? html`
            <div class="level-info">
              <div class="item_bar">
                <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${level}%;"></div>
              </div>
              <div class="level-text">
                <span>${level}% ${isCharging ? 'Charging' : levelUnit}</span>
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

  _renderInfoLine(location, mileage) {
    if (!this.config.show_location && !this.config.show_mileage) return '';

    return html`
      <div class="info-line">
        ${this.config.show_location && location ? html`
          <span class="location">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${location}
          </span>
        ` : ''}
        ${this.config.show_mileage && mileage ? html`
          <span class="mileage">
            <ha-icon icon="mdi:speedometer"></ha-icon>
            ${mileage} ${this.config.unit_type}
          </span>
        ` : ''}
      </div>
    `;
  }

  static getConfigElement() {
    return document.createElement("ultra-vehicle-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      unit_type: "mi",
      level_entity: "",
      range_entity: "",
      charging_status_entity: "",
      location_entity: "",
      mileage_entity: "",
      show_level: true,
      show_range: true,
      show_location: true,
      show_mileage: true
    };
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level, range, location, and mileage.",
  preview: true
});