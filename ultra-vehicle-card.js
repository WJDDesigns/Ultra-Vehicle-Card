import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class UltraVehicleCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        --primary-color: #4CAF50;
        --background-color: #f5f5f5;
      }
      .vehicle-card-content {
        padding: 16px;
      }
      .vehicle-image-container {
        width: 100%;
        padding-top: 56.25%;
        position: relative;
        overflow: hidden;
        margin-bottom: 16px;
        border-radius: 12px;
      }
      .vehicle-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .vehicle-name {
        font-size: 1.5em;
        margin-bottom: 16px;
        color: var(--primary-text-color);
      }
      .level-info {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }
      .battery {
        width: 100px;
        height: 50px;
        border: 3px solid #333;
        border-radius: 5px;
        position: relative;
        margin-right: 12px;
      }
      .battery::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 20px;
        background: #333;
        top: 50%;
        right: -11px;
        transform: translateY(-50%);
        border-radius: 0 3px 3px 0;
      }
      .battery-level {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
        transition: width 0.5s ease-in-out;
      }
      .battery-level::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          linear-gradient(
            to right,
            rgba(255, 255, 255, 0.3) 1px,
            transparent 1px
          );
        background-size: 10px 100%;
      }
      .battery-bolt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 35px;
        background: #fff;
        clip-path: polygon(45% 0, 100% 45%, 60% 45%, 60% 100%, 0 55%, 40% 55%, 40% 0);
      }
      .level-text {
        font-size: 1.2em;
        font-weight: bold;
        color: var(--primary-text-color);
      }
      .range {
        margin-top: 16px;
        font-size: 1.2em;
        color: var(--primary-text-color);
      }
      @keyframes charge {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
  }

  setConfig(config) {
    if (!config.title) {
      throw new Error("You need to define a title");
    }
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      ...config
    };
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const levelEntity = this.config.level_entity ? this.hass.states[this.config.level_entity] : null;
    const level = levelEntity ? parseFloat(levelEntity.state) : null;
    const levelUnit = this.config.vehicle_type === "EV" ? "Battery" : "Fuel";
    
    const rangeEntity = this.config.range_entity ? this.hass.states[this.config.range_entity] : null;
    const range = rangeEntity ? Math.round(parseFloat(rangeEntity.state)) : null;
    const rangeUnit = this.config.vehicle_type === "EV" ? "mi" : "miles";

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${this.config.title}</h2>
          ${this.config.image_url ? html`
            <div class="vehicle-image-container">
              <img class="vehicle-image" src="${this.config.image_url}" alt="Vehicle Image">
            </div>
          ` : ''}
          ${level !== null ? html`
            <div class="level-info">
              <div class="battery">
                <div class="battery-level" style="width: ${level}%;">
                  <div class="battery-bolt" style="animation: charge 2s infinite;"></div>
                </div>
              </div>
              <span class="level-text">${level}% ${levelUnit}</span>
            </div>
          ` : ''}
          ${range !== null ? html`
            <div class="range">${range} ${rangeUnit}</div>
          ` : ''}
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
      image_url: "",
      vehicle_type: "EV",
      level_entity: "",
      range_entity: ""
    };
  }
}

class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object }
    };
  }

  static get styles() {
    return css`
      .form {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;
      }
      .input-group {
        display: flex;
        flex-direction: column;
      }
      .input-group label {
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--primary-text-color);
      }
      input[type="text"], select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.3s ease;
      }
      input[type="text"]:focus, select:focus {
        border-color: var(--primary-color);
        outline: none;
      }
      .radio-group {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .radio-group label {
        margin-right: 16px;
        display: flex;
        align-items: center;
      }
      input[type="radio"] {
        margin-right: 8px;
      }
      input[type="file"] {
        margin-top: 8px;
      }
    `;
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      level_entity: "",
      range_entity: "",
      ...config
    };
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

    const levelLabel = this.config.vehicle_type === "EV" ? "Battery" : "Fuel";

    return html`
      <div class="form">
        <div class="input-group">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            .value="${this.config.title}"
            @input="${this._valueChanged}"
            .configValue="${'title'}"
          />
        </div>
        
        <div class="input-group">
          <label for="image_url">Image URL</label>
          <input
            id="image_url"
            type="text"
            .value="${this.config.image_url}"
            @input="${this._valueChanged}"
            .configValue="${'image_url'}"
          />
        </div>
        
        <div class="input-group">
          <label for="image_upload">Upload Image</label>
          <input type="file" id="image_upload" @change="${this._handleImageUpload}" accept="image/*">
        </div>
        
        <div class="input-group">
          <label>Vehicle Type</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="vehicle_type" value="EV" ?checked="${this.config.vehicle_type === 'EV'}" @change="${this._vehicleTypeChanged}">
              Electric Vehicle
            </label>
            <label>
              <input type="radio" name="vehicle_type" value="Fuel" ?checked="${this.config.vehicle_type === 'Fuel'}" @change="${this._vehicleTypeChanged}">
              Fuel Vehicle
            </label>
          </div>
        </div>
        
        <div class="input-group">
          <label for="level_entity">${levelLabel} Level Entity</label>
          <select
            id="level_entity"
            .value="${this.config.level_entity}"
            @change="${this._valueChanged}"
            .configValue="${'level_entity'}"
          >
            <option value="">Select an entity</option>
            ${Object.keys(this.hass.states).map(entity => html`
              <option value="${entity}" ?selected="${entity === this.config.level_entity}">${entity}</option>
            `)}
          </select>
        </div>

        <div class="input-group">
          <label for="range_entity">Range Entity</label>
          <select
            id="range_entity"
            .value="${this.config.range_entity}"
            @change="${this._valueChanged}"
            .configValue="${'range_entity'}"
          >
            <option value="">Select an entity</option>
            ${Object.keys(this.hass.states).map(entity => html`
              <option value="${entity}" ?selected="${entity === this.config.range_entity}">${entity}</option>
            `)}
          </select>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.value
      };
      this.configChanged(this.config);
    }
  }

  _vehicleTypeChanged(ev) {
    this.config = {
      ...this.config,
      vehicle_type: ev.target.value
    };
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _handleImageUpload(ev) {
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.config = {
          ...this.config,
          image_url: e.target.result
        };
        this.configChanged(this.config);
      };
      reader.readAsDataURL(file);
    }
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