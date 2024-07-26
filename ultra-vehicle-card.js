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
      .vehicle-card-content {
        padding: 16px;
      }
      .vehicle-image-container {
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
        position: relative;
        overflow: hidden;
        margin-bottom: 16px;
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
      .range {
        text-align: center;
        margin-top: 8px;
        font-size: 1.2em;
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
            <div class="vehicle-info">
              <div class="level-info">
                <span class="level-label">${levelUnit} Level</span>
                <div class="level-meter">
                  <div class="level-meter-fill" style="width: ${level}%"></div>
                </div>
                <div class="level-details">
                  <span class="level-percentage">${level}%</span>
                </div>
              </div>
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
      .radio-group {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .radio-group label {
        margin-right: 8px;
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