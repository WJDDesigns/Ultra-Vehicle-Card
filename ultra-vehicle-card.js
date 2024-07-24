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
        align-items: center;
        margin-top: 8px;
      }
      .level-meter {
        flex-grow: 1;
        height: 8px;
        background-color: var(--secondary-background-color);
        border-radius: 4px;
        overflow: hidden;
        margin: 0 8px;
      }
      .level-meter-fill {
        height: 100%;
        background-color: var(--primary-color);
        transition: width 0.5s ease-in-out;
      }
      .level-details {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
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
      show_battery_percentage: true,
      show_range: true,
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
    
    const rangeEntity = this.config.range_entity ? this.hass.states[this.config.range_entity] : null;
    const range = rangeEntity ? parseFloat(rangeEntity.state) : null;
    const rangeUnit = this.config.vehicle_type === "EV" ? "mi" : "miles";

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
              <div class="level-meter">
                <div class="level-meter-fill" style="width: ${level}%"></div>
              </div>
              <div class="level-details">
                ${this.config.show_battery_percentage ? html`<span class="level-percentage">${level}%</span>` : ''}
                ${this.config.show_range && range !== null ? html`<span class="range">${range} ${rangeUnit}</span>` : ''}
              </div>
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
      level_entity: "",
      range_entity: "",
      show_battery_percentage: true,
      show_range: true
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

  static get styles() {
    return css`
      .form {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 8px;
      }
      .input-group {
        display: flex;
        flex-direction: column;
      }
      .input-group label {
        margin-bottom: 4px;
        font-weight: 500;
        color: var(--primary-text-color);
      }
    `;
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
      <div class="form">
        <div class="input-group">
          <label for="title">Title</label>
          <ha-textfield
            id="title"
            .value="${this.config.title || ''}"
            @input="${this._valueChanged}"
            .configValue="${'title'}"
          ></ha-textfield>
        </div>
        
        <div class="input-group">
          <label for="image_url">Image URL</label>
          <ha-textfield
            id="image_url"
            .value="${this.config.image_url || ''}"
            @input="${this._valueChanged}"
            .configValue="${'image_url'}"
          ></ha-textfield>
        </div>
        
        <div class="input-group">
          <label for="vehicle_type">Vehicle Type</label>
          <ha-select
            id="vehicle_type"
            .value="${this.config.vehicle_type || 'EV'}"
            @selected="${this._valueChanged}"
            .configValue="${'vehicle_type'}"
          >
            <mwc-list-item value="EV">Electric Vehicle</mwc-list-item>
            <mwc-list-item value="Fuel">Fuel Vehicle</mwc-list-item>
          </ha-select>
        </div>
        
        <div class="input-group">
          <label for="level_entity">Fuel/Charge Level Sensor</label>
          <ha-entity-picker
            id="level_entity"
            .hass="${this.hass}"
            .value="${this.config.level_entity || ''}"
            @value-changed="${this._valueChanged}"
            .configValue="${'level_entity'}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="input-group">
          <label for="range_entity">Range Sensor</label>
          <ha-entity-picker
            id="range_entity"
            .hass="${this.hass}"
            .value="${this.config.range_entity || ''}"
            @value-changed="${this._valueChanged}"
            .configValue="${'range_entity'}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="input-group">
          <ha-formfield label="Show Battery Percentage">
            <ha-switch
              .checked="${this.config.show_battery_percentage !== false}"
              .configValue="${'show_battery_percentage'}"
              @change="${this._valueChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="input-group">
          <ha-formfield label="Show Range">
            <ha-switch
              .checked="${this.config.show_range !== false}"
              .configValue="${'show_range'}"
              @change="${this._valueChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      if (target.type === 'checkbox') {
        this.config = {
          ...this.config,
          [target.configValue]: target.checked
        };
      } else {
        this.config = {
          ...this.config,
          [target.configValue]: target.value
        };
      }
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
  description: "A card that displays vehicle information with fuel/charge level and range.",
  preview: true
});