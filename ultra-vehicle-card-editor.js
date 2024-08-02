import { LitElement, html } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { styles } from "./styles.js";

export class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _levelEntityFilter: { type: String },
      _rangeEntityFilter: { type: String },
      _chargingStatusEntityFilter: { type: String },
      _locationEntityFilter: { type: String },
      _mileageEntityFilter: { type: String }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._levelEntityFilter = '';
    this._rangeEntityFilter = '';
    this._chargingStatusEntityFilter = '';
    this._locationEntityFilter = '';
    this._mileageEntityFilter = '';
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      unit_type: "mi",
      level_entity: "",
      range_entity: "",
      charging_status_entity: "",
      location_entity: "",
      mileage_entity: "",
      show_level: true,
      show_range: true,
      show_location: true,
      show_mileage: true,
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
          <label>Unit Type</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="unit_type" value="mi" ?checked="${this.config.unit_type === 'mi'}" @change="${this._unitTypeChanged}">
              Miles (mi)
            </label>
            <label>
              <input type="radio" name="unit_type" value="km" ?checked="${this.config.unit_type === 'km'}" @change="${this._unitTypeChanged}">
              Kilometers (km)
            </label>
          </div>
        </div>
        
        ${this._renderEntityPicker('level_entity', `${levelLabel} Level Entity`, 'This is used for percent and bar length.')}
        ${this._renderEntityPicker('range_entity', 'Range Entity', 'This is used for the range left.')}
        ${this.config.vehicle_type === 'EV' ? this._renderEntityPicker('charging_status_entity', 'Charging Status Entity', 'This is used for charging wording and bar animation.') : ''}
        ${this._renderEntityPicker('location_entity', 'Location Entity', 'This is used to display the vehicle location.')}
        ${this._renderEntityPicker('mileage_entity', 'Mileage Entity', 'This is used to display the vehicle mileage.')}
      </div>
    `;
  }

  _renderEntityPicker(configValue, labelText, description) {
    return html`
      <div class="input-group">
        <label for="${configValue}">${labelText}</label>
        <div class="entity-description">${description}</div>
        <div class="entity-row">
          <div class="entity-picker-container">
            <input
              type="text"
              class="entity-picker-input"
              .value="${this.config[configValue] || ''}"
              @input="${e => this._entityFilterChanged(e, configValue)}"
              placeholder="Search entities"
            >
            ${this[`_${configValue}Filter`] ? html`
              <div class="entity-picker-results">
                ${Object.keys(this.hass.states)
                  .filter(eid => eid.toLowerCase().includes(this[`_${configValue}Filter`].toLowerCase()))
                  .map(eid => html`
                    <div class="entity-picker-result" @click="${() => this._selectEntity(configValue, eid)}">
                      ${eid}
                    </div>
                  `)}
              </div>
            ` : ''}
          </div>
          ${['level_entity', 'range_entity', 'location_entity', 'mileage_entity'].includes(configValue) ? html`
            <label class="switch">
              <input type="checkbox" 
                ?checked="${this.config[`show_${configValue.split('_')[0]}`]}"
                @change="${this._toggleChanged}"
                .configValue="${`show_${configValue.split('_')[0]}`}"
              />
              <span class="slider round"></span>
            </label>
          ` : ''}
        </div>
      </div>
    `;
  }

  _getDisplayImageUrl(url) {
    return url && url.startsWith('data:image') ? 'Uploaded Image' : url;
  }

  _entityFilterChanged(e, configValue) {
    const filter = e.target.value;
    this[`_${configValue}Filter`] = filter;
    this.requestUpdate();
  }

  _selectEntity(configValue, entityId) {
    this.config = {
      ...this.config,
      [configValue]: entityId
    };
    this[`_${configValue}Filter`] = '';
    this.configChanged(this.config);
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

  _toggleChanged(ev) {
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.checked
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

  _unitTypeChanged(ev) {
    this.config = {
      ...this.config,
      unit_type: ev.target.value
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

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);