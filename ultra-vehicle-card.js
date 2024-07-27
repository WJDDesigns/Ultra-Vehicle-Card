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
        object-fit: contain;
      }
      .vehicle-name {
        font-size: 1.5em;
        margin-bottom: 16px;
        color: var(--primary-text-color);
      }
      .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
      .level-info {
        flex: 1;
      }
      .item_bar {
        position: relative;
        height: 1.5rem;
        width: 100%;
        background-color: #000;
        border-radius: 4px;
        overflow: hidden;
      }
      .progress {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0;
        height: 1.5rem;
        margin: 0;
        background-color: var(--primary-color);
        border-radius: 4px;
      }
      .level-text {
        font-size: 1.2em;
        font-weight: bold;
        color: var(--primary-text-color);
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
      }
      .range {
        text-align: right;
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
          ${level !== null ? html`
            <div class="level-info">
              <div class="item_bar">
                <div class="progress" style="width: ${level}%;"></div>
              </div>
              <div class="level-text">
                <span>${level}% ${levelUnit}</span>
                ${range !== null ? html`<span class="range">${range} ${rangeUnit}</span>` : ''}
              </div>
            </div>
          ` : ''}
          ${level === null && range !== null ? html`
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
      input[type="text"], ha-entity-picker {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.3s ease;
      }
      input[type="text"]:focus, ha-entity-picker:focus {
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

    const levelLabel = this.config.vehicle_type === "EV" ? "Charge" : "Fuel";

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
          <ha-entity-picker
            .hass=${this.hass}
            .value="${this.config.level_entity}"
            .configValue=${'level_entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="input-group">
          <label for="range_entity">Range Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value="${this.config.range_entity}"
            .configValue=${'range_entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
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