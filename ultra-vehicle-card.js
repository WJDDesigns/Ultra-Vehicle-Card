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
    console.log("Editor rendering", this.hass, this.config);
    if (!this.hass) {
      return html`<div>No hass object available</div>`;
    }

    return html`
      <div class="card-config">
        <div>
          <label for="title">Title:</label>
          <input id="title" 
                 .value="${this.config.title || 'My Vehicle'}"
                 @input="${this._valueChanged}"
                 data-config-field="title">
        </div>
        
        <div>
          <label for="image_url">Image URL:</label>
          <input id="image_url" 
                 .value="${this.config.image_url || 'https://pngimg.com/d/tesla_car_PNG56.png'}"
                 @input="${this._valueChanged}"
                 data-config-field="image_url">
        </div>
        
        <div>
          <label for="vehicle_type">Vehicle Type:</label>
          <select id="vehicle_type" 
                  .value="${this.config.vehicle_type || 'EV'}"
                  @change="${this._valueChanged}"
                  data-config-field="vehicle_type">
            <option value="EV">Electric Vehicle</option>
            <option value="Fuel">Fuel Vehicle</option>
          </select>
        </div>
        
        <div>
          <label for="level_entity">Fuel/Charge Level Sensor:</label>
          <select id="level_entity"
                  .value="${this.config.level_entity || ''}"
                  @change="${this._valueChanged}"
                  data-config-field="level_entity">
            ${Object.keys(this.hass.states).map(entity => html`
              <option value="${entity}">${entity}</option>
            `)}
          </select>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    const field = target.dataset.configField;
    if (field) {
      this.config = {
        ...this.config,
        [field]: target.value
      };
    }
    console.log("Config changed", this.config);
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