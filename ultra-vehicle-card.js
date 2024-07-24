import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class UltraVehicleCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  static get styles() {
    return css`
      .vehicle-card-content {
        padding: 16px;
      }
      .vehicle-image img {
        width: 100%;
        max-height: 200px;
        object-fit: contain;
      }
      .vehicle-name {
        font-size: 1.5em;
        margin-bottom: 8px;
      }
      .level-info {
        display: flex;
        justify-content: space-between;
      }
      .level-meter {
        width: 100%;
        height: 8px;
        background-color: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
      }
      .level-meter-fill {
        height: 100%;
        background-color: var(--primary-color);
        transition: width 0.5s ease-in-out;
      }
    `;
  }

  setConfig(config) {
    if (!config.level_entity) {
      throw new Error("You need to define a level entity");
    }
    this.config = {
      title: "My Vehicle",
      image_url: "https://pngimg.com/d/tesla_car_PNG56.png",
      vehicle_type: "EV",
      ...config
    };
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const levelEntity = this.hass.states[this.config.level_entity];
    const level = levelEntity ? parseFloat(levelEntity.state) : 0;
    const levelUnit = this.config.vehicle_type === "EV" ? "Battery" : "Fuel";

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${this.config.title}</h2>
          <div class="vehicle-image">
            <img src="${this.config.image_url}" alt="Vehicle Image">
          </div>
          <div class="vehicle-info">
            <div class="level-info">
              <span class="level-label">${levelUnit} Level</span>
              <span class="level-percentage">${level}%</span>
            </div>
            <div class="level-meter">
              <div class="level-meter-fill" style="width: ${level}%"></div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement("ultra-vehicle-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Vehicle",
      image_url: "https://pngimg.com/d/tesla_car_PNG56.png",
      vehicle_type: "EV",
      level_entity: ""
    };
  }
}

class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  setConfig(config) {
    this.config = config;
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="card-config">
        <paper-input
          label="Title"
          .value="${this.config.title || 'My Vehicle'}"
          .configValue="${'title'}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        
        <paper-input
          label="Image URL"
          .value="${this.config.image_url || 'https://pngimg.com/d/tesla_car_PNG56.png'}"
          .configValue="${'image_url'}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        
        <ha-select
          label="Vehicle Type"
          .value="${this.config.vehicle_type || 'EV'}"
          .configValue="${'vehicle_type'}"
          @selected="${this._valueChanged}"
        >
          <mwc-list-item value="EV">Electric Vehicle</mwc-list-item>
          <mwc-list-item value="Fuel">Fuel Vehicle</mwc-list-item>
        </ha-select>
        
        <ha-entity-picker
          label="Fuel/Charge Level Sensor"
          .hass="${this.hass}"
          .value="${this.config.level_entity || ''}"
          .configValue="${'level_entity'}"
          @value-changed="${this._valueChanged}"
        ></ha-entity-picker>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.value
      };
    }
    this.configChanged(this.config);
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level.",
  preview: true
});