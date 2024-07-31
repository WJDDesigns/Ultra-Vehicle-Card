import { LitElement, html } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { styles } from "./styles.js";

export class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _levelEntityFilter: { type: String },
      _rangeEntityFilter: { type: String }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._levelEntityFilter = '';
    this._rangeEntityFilter = '';
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      level_entity: "",
      range_entity: "",
      show_level: true,
      show_range: true,
      ...config
    };
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
            .value="${this._getDisplayImageUrl(this.config.image_url)}"
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
          <div class="entity-row">
            <div class="entity-picker-wrapper">
              ${this._renderEntityPicker('level_entity', this._levelEntityFilter)}
            </div>
            <label class="switch">
              <input type="checkbox" 
                ?checked="${this.config.show_level}"
                @change="${this._toggleChanged}"
                .configValue="${'show_level'}"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="input-group">
          <label for="range_entity">Range Entity</label>
          <div class="entity-row">
            <div class="entity-picker-wrapper">
              ${this._renderEntityPicker('range_entity', this._rangeEntityFilter)}
            </div>
            <label class="switch">
              <input type="checkbox" 
                ?checked="${this.config.show_range}"
                @change="${this._toggleChanged}"
                .configValue="${'show_range'}"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    `;
  }

  _getDisplayImageUrl(url) {
    return url && url.startsWith('data:image') ? 'Uploaded Image' : url;
  }

  _renderEntityPicker(configValue, filter) {
    const entities = Object.keys(this.hass.states)
      .filter(eid => eid.toLowerCase().includes(filter.toLowerCase()));

    return html`
      <div class="entity-picker-container">
        <input
          type="text"
          placeholder="Filter entities"
          .value="${filter}"
          @input="${(e) => this._entityFilterChanged(e, configValue)}"
        />
        <select @change="${this._valueChanged}" .configValue="${configValue}">
          <option value="">Select an entity</option>
          ${entities.map(entityId => html`
            <option value="${entityId}" ?selected="${entityId === this.config[configValue]}">${entityId}</option>
          `)}
        </select>
      </div>
    `;
  }

  _entityFilterChanged(event, configValue) {
    if (configValue === 'level_entity') {
      this._levelEntityFilter = event.target.value;
    } else if (configValue === 'range_entity') {
      this._rangeEntityFilter = event.target.value;
    }
  }

  _valueChanged(event) {
    if (!this.config || !this.hass) {
      return;
    }

    const target = event.target;
    const value = target.value;
    const configValue = target.configValue;

    if (this.config[configValue] !== value) {
      this.config = { ...this.config, [configValue]: value };
      this.configChanged(this.config);
    }
  }

  _toggleChanged(event) {
    if (!this.config || !this.hass) {
      return;
    }

    const target = event.target;
    const configValue = target.configValue;

    this.config = { ...this.config, [configValue]: target.checked };
    this.configChanged(this.config);
  }

  _vehicleTypeChanged(event) {
    if (!this.config || !this.hass) {
      return;
    }

    const target = event.target;
    const value = target.value;

    this.config = { ...this.config, vehicle_type: value };
    this.configChanged(this.config);
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

  configChanged(config) {
    const event = new CustomEvent("config-changed", {
      detail: { config }
    });
    this.dispatchEvent(event);
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
