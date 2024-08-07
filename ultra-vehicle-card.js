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
        :host {
          --uvc-card-background: var(--card-background-color, #fff);
          --uvc-bar-background: var(--uvc-bar-background-color, #595959);
          --uvc-bar-fill: var(--uvc-primary-color);
          --uvc-limit-indicator: white;
          --uvc-icon-active: var(--uvc-primary-color);
          --uvc-icon-inactive: var(--secondary-text-color);
        }
        
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
        .level-info.hybrid {
          display: flex;
          flex-direction: column;
        }
        .item_bar {
          background-color: var(--uvc-bar-background);
          border: 2px solid var(--uvc-bar-border-color);
        }
        .progress {
          background-color: var(--uvc-bar-fill);
        }
        .selected-entity {
          background-color: var(--uvc-primary-color);
        }
        .charge-limit-indicator {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--uvc-limit-indicator);
          z-index: 1;
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
    battery_level_entity: "",
    battery_range_entity: "",
    fuel_level_entity: "",
    fuel_range_entity: "",
    charging_status_entity: "",
    location_entity: "",
    mileage_entity: "",
    show_battery: true,
    show_battery_range: true,
    show_fuel: true,
    show_fuel_range: true,
    show_location: true,
    show_mileage: true,
    show_car_state: true,
    show_charge_limit: true,
    icon_grid_entities: [],
    custom_icons: {},
    hybrid_display_order: 'fuel_first',
    car_state_entity: "",
    charge_limit_entity: "",
    cardBackgroundColor: "",
    barBackgroundColor: "",
    barFillColor: "",
    limitIndicatorColor: "",
    iconActiveColor: "",
    iconInactiveColor: "",
    barBorderColor: "",
    ...config
    };
    // Handle backward compatibility for entity names
if (this.config.level_entity && !this.config.battery_level_entity) {
  this.config.battery_level_entity = this.config.level_entity;
}
if (this.config.range_entity && !this.config.battery_range_entity) {
  this.config.battery_range_entity = this.config.range_entity;
}
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <ha-card style="background-color: var(--uvc-card-background);">
        <div class="vehicle-card-content">
          ${this._renderHeader()}
          ${this._renderCarState()}
          ${this._renderVehicleImage()}
          ${this._renderIconGrid()}
          ${this._renderVehicleInfo()}
        </div>
      </ha-card>
    `;
  }

_renderVehicleInfo() {
  const { vehicle_type } = this.config;
  
  switch(vehicle_type) {
    case 'EV':
      return this._renderEVInfo();
    case 'Fuel':
      return this._renderFuelInfo();
    case 'Hybrid':
      return this._renderHybridInfo();
    default:
      return html`<div class="error">Invalid vehicle type</div>`;
  }
}

_renderEVInfo() {
  const batteryLevelEntity = this.config.battery_level_entity ? this.hass.states[this.config.battery_level_entity] : null;
  const batteryRangeEntity = this.config.battery_range_entity ? this.hass.states[this.config.battery_range_entity] : null;
  const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
  const chargeLimitEntity = this.config.charge_limit_entity ? this.hass.states[this.config.charge_limit_entity] : null;

  const batteryLevel = batteryLevelEntity ? parseFloat(batteryLevelEntity.state) : null;
  const batteryRange = batteryRangeEntity ? Math.round(parseFloat(batteryRangeEntity.state)) : null;
  const isCharging = chargingStatusEntity && chargingStatusEntity.state.toLowerCase() === 'charging';
  const chargeLimit = chargeLimitEntity && this.config.show_charge_limit ? parseFloat(chargeLimitEntity.state) : null;

    return html`
      <div class="level-info">
        ${this.config.show_battery && batteryLevel !== null ? html`
          <div class="item_bar">
            <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${batteryLevel}%;"></div>
            ${chargeLimit !== null ? html`
              <div class="charge-limit-indicator" style="left: ${chargeLimit}%;"></div>
            ` : ''}
          </div>
          <div class="level-text">
            <span>${batteryLevel}% ${isCharging ? 'Charging' : 'Charge'}</span>
            ${this.config.show_battery_range && batteryRange !== null ? html`
              <span class="range">${batteryRange} ${this.config.unit_type}</span>
            ` : ''}
          </div>
        ` : this.config.show_battery_range && batteryRange !== null ? html`
          <div class="level-text">
            <span class="range" style="float: right;">${batteryRange} ${this.config.unit_type}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

 _renderFuelInfo() {
  const fuelLevelEntity = this.config.fuel_level_entity ? this.hass.states[this.config.fuel_level_entity] : null;
  const fuelRangeEntity = this.config.fuel_range_entity ? this.hass.states[this.config.fuel_range_entity] : null;

  const fuelLevel = fuelLevelEntity ? parseFloat(fuelLevelEntity.state) : null;
  const fuelRange = fuelRangeEntity ? Math.round(parseFloat(fuelRangeEntity.state)) : null;

  return html`
    <div class="level-info">
      ${this.config.show_fuel && fuelLevel !== null ? html`
        <div class="item_bar">
          <div class="progress" style="width: ${fuelLevel}%;"></div>
        </div>
        <div class="level-text">
          <span>${fuelLevel}% Fuel</span>
          ${this.config.show_fuel_range && fuelRange !== null ? html`
            <span class="range">${fuelRange} ${this.config.unit_type}</span>
          ` : ''}
        </div>
      ` : this.config.show_fuel_range && fuelRange !== null ? html`
        <div class="level-text">
          <span class="range" style="float: right;">${fuelRange} ${this.config.unit_type}</span>
        </div>
      ` : ''}
    </div>
  `;
}

_renderHybridInfo() {
  const batteryLevelEntity = this.config.battery_level_entity ? this.hass.states[this.config.battery_level_entity] : null;
  const batteryRangeEntity = this.config.battery_range_entity ? this.hass.states[this.config.battery_range_entity] : null;
  const fuelLevelEntity = this.config.fuel_level_entity ? this.hass.states[this.config.fuel_level_entity] : null;
  const fuelRangeEntity = this.config.fuel_range_entity ? this.hass.states[this.config.fuel_range_entity] : null;
  const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
  const chargeLimitEntity = this.config.charge_limit_entity ? this.hass.states[this.config.charge_limit_entity] : null;

  const batteryLevel = batteryLevelEntity ? parseFloat(batteryLevelEntity.state) : null;
  const batteryRange = batteryRangeEntity ? Math.round(parseFloat(batteryRangeEntity.state)) : null;
  const fuelLevel = fuelLevelEntity ? parseFloat(fuelLevelEntity.state) : null;
  const fuelRange = fuelRangeEntity ? Math.round(parseFloat(fuelRangeEntity.state)) : null;
  const isCharging = chargingStatusEntity && chargingStatusEntity.state.toLowerCase() === 'charging';
  const chargeLimit = chargeLimitEntity && this.config.show_charge_limit ? parseFloat(chargeLimitEntity.state) : null;

  const batteryFirst = this.config.hybrid_display_order === 'battery_first';

  return html`
    <div class="level-info hybrid">
      ${batteryFirst ? html`
        ${this._renderBatteryBar(batteryLevel, batteryRange, isCharging, chargeLimit)}
        <div class="hybrid-separator"></div>
        ${this._renderFuelBar(fuelLevel, fuelRange)}
      ` : html`
        ${this._renderFuelBar(fuelLevel, fuelRange)}
        <div class="hybrid-separator"></div>
        ${this._renderBatteryBar(batteryLevel, batteryRange, isCharging, chargeLimit)}
      `}
    </div>
  `;
}

  _renderBatteryBar(level, range, isCharging, chargeLimit) {
    return html`
      ${this.config.show_battery && level !== null ? html`
        <div class="item_bar">
          <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${level}%;"></div>
          ${chargeLimit !== null ? html`
            <div class="charge-limit-indicator" style="left: ${chargeLimit}%;"></div>
          ` : ''}
        </div>
        <div class="level-text">
          <span>${level}% ${isCharging ? 'Charging' : 'Charge'}</span>
          ${this.config.show_battery_range && range !== null ? html`
            <span class="range">${range} ${this.config.unit_type}</span>
          ` : ''}
        </div>
      ` : this.config.show_battery_range && range !== null ? html`
        <div class="level-text">
          <span class="range" style="float: right;">${range} ${this.config.unit_type}</span>
        </div>
      ` : ''}
    `;
  }

  _renderFuelBar(level, range) {
    return html`
      ${this.config.show_fuel && level !== null ? html`
        <div class="item_bar">
          <div class="progress" style="width: ${level}%;"></div>
        </div>
        <div class="level-text">
          <span>${level}% Fuel</span>
          ${this.config.show_fuel_range && range !== null ? html`
            <span class="range">${range} ${this.config.unit_type}</span>
          ` : ''}
        </div>
      ` : this.config.show_fuel_range && range !== null ? html`
        <div class="level-text">
          <span class="range" style="float: right;">${range} ${this.config.unit_type}</span>
        </div>
      ` : ''}
    `;
  }

  _renderHeader() {
    return html`
       <h2 class="vehicle-name">${this.config.title}</h2>
    ${this._renderInfoLine()}
    `;
  }

  _renderCarState() {
  if (!this.config.show_car_state || !this.config.car_state_entity) return '';

  const carStateEntity = this.hass.states[this.config.car_state_entity];
  if (!carStateEntity) return '';

  const state = this._formatState(carStateEntity.state);

  return html`
    <div class="car-state" style="text-align: center;">${state}</div>
  `;
}

  _formatState(state) {
    return state.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

_renderInfoLine() {
  const locationEntity = this.config.location_entity ? this.hass.states[this.config.location_entity] : null;
  const location = locationEntity ? this._capitalizeFirstLetter(locationEntity.state) : null;

  const mileageEntity = this.config.mileage_entity ? this.hass.states[this.config.mileage_entity] : null;
  let mileage = mileageEntity ? parseFloat(mileageEntity.state) : null;
  mileage = mileage !== null ? Math.round(mileage).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;

  if (!this.config.show_location && !this.config.show_mileage) return '';

  const infoTextColor = `var(--uvc-info-text-color, var(--secondary-text-color))`;

  return html`
    <div class="info-line" style="color: ${infoTextColor};">
      ${this.config.show_location && location ? html`
        <span class="location">
          <ha-icon icon="mdi:map-marker" style="color: ${infoTextColor};"></ha-icon>
          ${location}
        </span>
      ` : ''}
      ${this.config.show_mileage && mileage ? html`
        <span class="mileage">
          <ha-icon icon="mdi:speedometer" style="color: ${infoTextColor};"></ha-icon>
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

    const customIcon = this.config.custom_icons[entityId];
    const defaultIcon = entity.attributes.icon;
    const icon = customIcon || defaultIcon || 'mdi:help-circle';
    
    const state = entity.state;
    const isActive = ['on', 'open', 'true', 'unlocked'].includes(state.toLowerCase());
    const iconColor = isActive ? 'var(--uvc-icon-active)' : 'var(--uvc-icon-inactive)';

    return html`
      <div class="icon-item">
        <ha-icon .icon="${icon}" style="color: ${iconColor};"></ha-icon>
      </div>
    `;
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
      battery_level_entity: "",
      battery_range_entity: "",
      fuel_level_entity: "",
      fuel_range_entity: "",
      charging_status_entity: "",
      location_entity: "",
      mileage_entity: "",
      show_battery: true,
      show_battery_range: true,
      show_fuel: true,
      show_fuel_range: true,
      show_location: true,
      show_mileage: true,
      icon_grid_entities: [],
      custom_icons: {},
      hybrid_display_order: 'fuel_first',
      car_state_entity: "",
      charge_limit_entity: "",
      show_car_state: true,
      show_charge_limit: true,
      cardBackgroundColor: "",
      barBackgroundColor: "",
      barFillColor: "",
      limitIndicatorColor: "",
      iconActiveColor: "",
      iconInactiveColor: ""
    };
  }

 updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('config') || changedProps.has('hass')) {
      const style = getComputedStyle(this);
      const primaryColor = style.getPropertyValue('--primary-color').trim();
      
      this.style.setProperty('--uvc-primary-color', this.config.barFillColor || primaryColor);
      this.style.setProperty('--uvc-card-background', this.config.cardBackgroundColor || style.getPropertyValue('--card-background-color').trim());
      this.style.setProperty('--uvc-bar-background', this.config.barBackgroundColor || '#595959');
      this.style.setProperty('--uvc-bar-border-color', this.config.barBorderColor || '#595959');
      this.style.setProperty('--uvc-limit-indicator', this.config.limitIndicatorColor || 'white');
      this.style.setProperty('--uvc-icon-active', this.config.iconActiveColor || primaryColor);
      this.style.setProperty('--uvc-icon-inactive', this.config.iconInactiveColor || style.getPropertyValue('--secondary-text-color').trim());
      this.style.setProperty('--uvc-info-text-color', this.config.infoTextColor || style.getPropertyValue('--secondary-text-color').trim());
    }
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