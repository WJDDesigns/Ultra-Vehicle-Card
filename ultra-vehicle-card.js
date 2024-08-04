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
        .icon-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin: 16px 0;
        }
        .icon-item {
          display: flex;
          align-items: center;
        }
        .icon-item ha-icon {
          width: 24px;
          height: 24px;
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
      icon_grid_entities: [],
      custom_icons: {},
      ...config
    };
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          ${this._renderHeader()}
          ${this._renderVehicleImage()}
          ${this._renderIconGrid()}
          ${this._renderLevelAndRange()}
        </div>
      </ha-card>
    `;
  }

  _renderHeader() {
    const locationEntity = this.config.location_entity ? this.hass.states[this.config.location_entity] : null;
    const location = locationEntity ? locationEntity.state : null;

    const mileageEntity = this.config.mileage_entity ? this.hass.states[this.config.mileage_entity] : null;
    let mileage = mileageEntity ? parseFloat(mileageEntity.state) : null;
    mileage = mileage !== null ? Math.round(mileage).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;

    return html`
      <h2 class="vehicle-name">${this.config.title}</h2>
      ${this._renderInfoLine(location, mileage)}
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

_renderVehicleImage() {
  if (!this.config.image_url) return '';

  return html`
    <div class="vehicle-image-container">
      <img class="vehicle-image" src="${this.config.image_url}" alt="Vehicle Image">
    </div>
  `;
}
  _renderLevelAndRange() {
    const levelEntity = this.config.level_entity ? this.hass.states[this.config.level_entity] : null;
    const level = levelEntity ? parseFloat(levelEntity.state) : null;
    const levelUnit = this.config.vehicle_type === "EV" ? "Charge" : "Fuel";
    
    const rangeEntity = this.config.range_entity ? this.hass.states[this.config.range_entity] : null;
    const range = rangeEntity ? Math.round(parseFloat(rangeEntity.state)) : null;
    const rangeUnit = this.config.unit_type;

    const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
    const isCharging = chargingStatusEntity && chargingStatusEntity.state.toLowerCase() === 'on';

    if (!this.config.show_level && !this.config.show_range) return '';

    return html`
      <div class="level-info">
        ${this.config.show_level && level !== null ? html`
          <div class="item_bar">
            <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${level}%;"></div>
          </div>
          <div class="level-text">
            <span>${level}% ${isCharging ? 'Charging' : levelUnit}</span>
            ${this.config.show_range && range !== null ? html`<span class="range">${range} ${rangeUnit}</span>` : ''}
          </div>
        ` : ''}
        ${!this.config.show_level && this.config.show_range && range !== null ? html`
          <div class="level-text">
            <span class="range">${range} ${rangeUnit}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  _renderIconGrid() {
    const { icon_grid_entities } = this.config;
    
    if (!icon_grid_entities || icon_grid_entities.length === 0) {
      return '';
    }

    return html`
      <div class="icon-grid">
        ${icon_grid_entities.map(entityId => this._renderIconItem(entityId))}
      </div>
    `;
  }

  _renderIconItem(entityId) {
    const entity = this.hass.states[entityId];
    if (!entity) return '';

    const icon = this.config.custom_icons[entityId] || 'mdi:help-circle';
    const state = entity.state;

    const isActive = ['on', 'open', 'true', 'unlocked'].includes(state.toLowerCase());
    const iconColor = isActive ? 'var(--accent-color)' : 'var(--secondary-text-color)';

    return html`
      <div class="icon-item">
        <ha-icon .icon="${icon}" style="color: ${iconColor};"></ha-icon>
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
      show_mileage: true,
      icon_grid_entities: [],
      custom_icons: {}
    };
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",
  preview: true
});