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
      .vehicle-image-container {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
      }
      .vehicle-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      show_level: true,
      show_range: true,
      image_crop: { top: 0, bottom: 0 },
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

    const imageStyle = `
      top: ${this.config.image_crop.top}px;
      bottom: ${this.config.image_crop.bottom}px;
    `;

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${this.config.title}</h2>
          ${this.config.image_url ? html`
            <div class="vehicle-image-container">
              <img class="vehicle-image" src="${this.config.image_url}" alt="Vehicle Image" style="${imageStyle}">
            </div>
          ` : ''}
          ${this.config.show_level && level !== null ? html`
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
          ${this.config.show_range && range !== null ? html`
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
      show_level: true,
      show_range: true,
      image_crop: { top: 0, bottom: 0 }
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
      .switch-with-entity {
        display: flex;
        flex-direction: column;
      }
      .switch-with-entity ha-entity-picker {
        margin-top: 8px;
      }
      .crop-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
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
      ...config,
      show_level: config.show_level !== false,
      show_range: config.show_range !== false,
      image_crop: { ...config.image_crop } || { top: 0, bottom: 0 }
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
            .value="${this._getShortImageUrl(this.config.image_url) || ''}"
            @input="${this._valueChanged}"
            .configValue="${'image_url'}"
          ></ha-textfield>
        </div>
        
        <div class="input-group">
          <label for="image_upload">Upload Image</label>
          <input type="file" id="image_upload" @change="${this._handleImageUpload}" accept="image/*">
        </div>

        <div class="input-group">
          <label>Image Crop (px)</label>
          <div class="crop-inputs">
            <ha-textfield
              label="Top"
              .value="${this.config.image_crop.top}"
              @input="${this._cropChanged}"
              .configValue="${'top'}"
            ></ha-textfield>
            <ha-textfield
              label="Bottom"
              .value="${this.config.image_crop.bottom}"
              @input="${this._cropChanged}"
              .configValue="${'bottom'}"
            ></ha-textfield>
          </div>
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
        
        <div class="switch-with-entity">
          <ha-formfield .label="${`Show ${levelLabel} Level`}">
            <ha-switch
              .checked="${this.config.show_level}"
              .configValue="${'show_level'}"
              @change="${this._valueChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>
        ${this.config.show_level ? html`
          <div class="input-group">
            <label>${levelLabel} Level Entity</label>
            <ha-entity-picker
              .hass="${this.hass}"
              .value="${this.config.level_entity || ''}"
              @value-changed="${this._valueChanged}"
              .configValue="${'level_entity'}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>
        ` : ''}

        <div class="switch-with-entity">
          <ha-formfield label="Show Range">
            <ha-switch
              .checked="${this.config.show_range}"
              .configValue="${'show_range'}"
              @change="${this._valueChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>
        ${this.config.show_range ? html`
          <div class="input-group">
            <label>Range Entity</label>
            <ha-entity-picker
              .hass="${this.hass}"
              .value="${this.config.range_entity || ''}"
              @value-changed="${this._valueChanged}"
              .configValue="${'range_entity'}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>
        ` : ''}
      </div>
    `;
  }

  _getShortImageUrl(url) {
    if (url && url.startsWith('data:image')) {
      return 'Uploaded image';
    }
    return url;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      let newValue;
      if (target.type === 'checkbox') {
        newValue = target.checked;
      } else if (target.value === undefined) {
        newValue = ev.detail.value;
      } else {
        newValue = target.value;
      }
      this.config = {
        ...this.config,
        [target.configValue]: newValue
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

  _cropChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        image_crop: {
          ...this.config.image_crop,
          [target.configValue]: parseInt(target.value) || 0
        }
      };
      this.configChanged(this.config);
    }
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

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level and range.",
  preview: true
});