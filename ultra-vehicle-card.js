import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class UltraVehicleCard extends LitElement {
  // ... (keep the existing UltraVehicleCard class as is)
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
            .value="${this.config.title || ''}"
            @input="${this._valueChanged}"
            .configValue="${'title'}"
          />
        </div>
        
        <div class="input-group">
          <label for="image_url">Image URL</label>
          <input
            id="image_url"
            type="text"
            .value="${this._getShortImageUrl(this.config.image_url) || ''}"
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
            .value="${this.config.level_entity || ''}"
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
            .value="${this.config.range_entity || ''}"
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

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level and range.",
  preview: true
});