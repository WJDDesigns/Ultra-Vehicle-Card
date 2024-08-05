import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { styles } from "./styles.js";

function compressImage(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext('2d');

        // Clear the canvas to ensure transparency
        ctx.clearRect(0, 0, width, height);

        ctx.drawImage(img, 0, 0, width, height);

        // Determine the file type
        const fileType = file.type || 'image/jpeg';
        let data;

        if (fileType === 'image/png') {
          // For PNGs, use lossless compression
          data = elem.toDataURL('image/png');
        } else {
          // For other formats, use JPEG compression
          data = elem.toDataURL('image/jpeg', quality);
        }

        resolve(data);
      };
      img.onerror = error => reject(error);
    };
    reader.onerror = error => reject(error);
  });
}

export class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _batteryLevelEntityFilter: { type: String },
      _batteryRangeEntityFilter: { type: String },
      _fuelLevelEntityFilter: { type: String },
      _fuelRangeEntityFilter: { type: String },
      _chargingStatusEntityFilter: { type: String },
      _locationEntityFilter: { type: String },
      _mileageEntityFilter: { type: String },
      _iconGridFilter: { type: String },
      _selectedIconGridEntities: { type: Array },
      _customIcons: { type: Object },
      _iconSearchFilter: { type: String },
      _currentEditingEntity: { type: String }
    };
  }

  static get styles() {
    return [
      styles,
      css`
        .icon-grid-container {
          margin-top: 16px;
        }

        .selected-entities {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .selected-entity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 8px;
          background-color: var(--accent-color);
          color: var(--text-primary-color);
          border-radius: 4px;
        }

        .entity-content {
          display: flex;
          align-items: center;
        }

        .custom-icon {
          margin-right: 8px;
          cursor: pointer;
        }

        .entity-name {
          flex-grow: 1;
        }

        .remove-entity {
          cursor: pointer;
        }

        .icon-wrapper {
          position: relative;
        }

        .icon-picker-popup {
          position: absolute;
          left: 0;
          top: 100%;
          z-index: 1;
          background-color: var(--card-background-color);
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          padding: 8px;
          width: 300px; // Increased width to accommodate ha-icon-picker
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        .icon-option {
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .icon-option:hover {
          background-color: var(--secondary-background-color);
        }

        .icon-search {
          width: 100%;
          margin-bottom: 8px;
        }
      `
    ];
  }

  constructor() {
    super();
    this._batteryLevelEntityFilter = '';
    this._batteryRangeEntityFilter = '';
    this._fuelLevelEntityFilter = '';
    this._fuelRangeEntityFilter = '';
    this._chargingStatusEntityFilter = '';
    this._locationEntityFilter = '';
    this._mileageEntityFilter = '';
    this._iconGridFilter = '';
    this._selectedIconGridEntities = [];
    this._customIcons = {};
    this._iconSearchFilter = '';
    this._currentEditingEntity = null;
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      vehicle_type: "EV",
      unit_type: "mi",
      battery_level_entity: "",
      battery_range_entity: "",
      fuel_level_entity: "",
      fuel_range_entity: "",
      charging_status_entity: "",
      location_entity: "",
      mileage_entity: "",
      show_battery_level: true,
      show_battery_range: true,
      show_fuel_level: true,
      show_fuel_range: true,
      show_location: true,
      show_mileage: true,
      icon_grid_entities: [],
      custom_icons: {},
      ...config
    };
    this._selectedIconGridEntities = [...this.config.icon_grid_entities];
    this._customIcons = { ...this.config.custom_icons };
  }
  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        ${this._renderBasicConfig()}
        ${this._renderEntityPickers()}
        ${this._renderIconGridConfig()}
      </div>
    `;
  }

  _renderBasicConfig() {
    return html`
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
          <label>
            <input type="radio" name="vehicle_type" value="Hybrid" ?checked="${this.config.vehicle_type === 'Hybrid'}" @change="${this._vehicleTypeChanged}">
            PHEV (Hybrid)
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
    `;
  }

  _renderEntityPickers() {
    const { vehicle_type } = this.config;
    return html`
      ${(vehicle_type === 'EV' || vehicle_type === 'Hybrid') ? this._renderEntityPicker('battery_level_entity', 'Battery Level Entity', 'This is used for battery percent and bar length.') : ''}
      ${(vehicle_type === 'EV' || vehicle_type === 'Hybrid') ? this._renderEntityPicker('battery_range_entity', 'Battery Range Entity', 'This is used for the battery range left.') : ''}
      ${(vehicle_type === 'Fuel' || vehicle_type === 'Hybrid') ? this._renderEntityPicker('fuel_level_entity', 'Fuel Level Entity', 'This is used for fuel percent and bar length.') : ''}
      ${(vehicle_type === 'Fuel' || vehicle_type === 'Hybrid') ? this._renderEntityPicker('fuel_range_entity', 'Fuel Range Entity', 'This is used for the fuel range left.') : ''}
      ${(vehicle_type === 'EV' || vehicle_type === 'Hybrid') ? this._renderEntityPicker('charging_status_entity', 'Charging Status Entity', 'This is used for charging wording and bar animation.') : ''}
      ${this._renderEntityPicker('location_entity', 'Location Entity', 'This is used to display the vehicle location.')}
      ${this._renderEntityPicker('mileage_entity', 'Mileage Entity', 'This is used to display the vehicle mileage.')}
    `;
  }

  _renderEntityPicker(configValue, labelText, description) {
    return html`
    <div class="input-group">
      <label for="${configValue}">${labelText}</label>
      <div class="entity-description">${description}</div>
      <div class="entity-row">
        <div class="entity-picker-wrapper">
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
        </div>
        ${['battery_level_entity', 'battery_range_entity', 'fuel_level_entity', 'fuel_range_entity', 'location_entity', 'mileage_entity'].includes(configValue) ? html`
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

  _renderIconGridConfig() {
    return html`
    <div class="icon-grid-container">
      <h3>Icon Grid</h3>
      <div class="input-group">
        <label for="icon_grid_search">Add entities to the icon grid</label>
        <div class="entity-description">
          Search and select entities to add to the icon grid. Use the drag handle (≡) to reorder entities.
          Click on the icon to change it, and use the (×) to remove an entity from the grid.
        </div>
        <div class="entity-picker-container">
          <input
            id="icon_grid_search"
            type="text"
            class="entity-picker-input"
            placeholder="Search entities"
            .value="${this._iconGridFilter}"
            @input="${this._iconGridFilterChanged}"
          >
          ${this._renderIconGridResults()}
        </div>
      </div>
      <div class="selected-entities" @dragover="${this._onDragOver}" @drop="${this._onDrop}">
        ${this._selectedIconGridEntities.map((entityId, index) => this._renderSelectedEntity(entityId, index))}
      </div>
    </div>
  `;
  }

  _renderIconGridResults() {
    if (!this._iconGridFilter) return '';

    const filteredEntities = Object.keys(this.hass.states)
      .filter(eid => eid.toLowerCase().includes(this._iconGridFilter.toLowerCase()))
      .filter(eid => !this._selectedIconGridEntities.includes(eid));

    return html`
    <div class="entity-picker-results">
      ${filteredEntities.map(eid => html`
        <div class="entity-picker-result" @click="${() => this._addIconGridEntity(eid)}">
          ${eid}
        </div>
      `)}
    </div>
  `;
  }
  _renderSelectedEntity(entityId, index) {
    const entity = this.hass.states[entityId];
    const friendlyName = entity.attributes.friendly_name || entityId;

    // Check for custom icon first, then entity's default icon, then fallback icon
    const customIcon = this._customIcons[entityId];
    const defaultIcon = entity.attributes.icon;
    const currentIcon = customIcon || defaultIcon || 'mdi:help-circle';

    return html`
    <div class="selected-entity" draggable="true" @dragstart="${(e) => this._onDragStart(e, index)}">
      <div class="handle">
        <ha-svg-icon .path="${"M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"}"></ha-svg-icon>
      </div>
      <div class="entity-content">
        <div class="icon-wrapper">
          <ha-icon
            .icon="${currentIcon}"
            @mousedown="${(e) => e.stopPropagation()}"
            @click="${(e) => this._openIconPicker(e, entityId)}"
            class="custom-icon"
          ></ha-icon>
          ${this._currentEditingEntity === entityId ? this._renderIconPicker() : ''}
        </div>
        <span class="entity-name">${friendlyName}</span>
      </div>
      <span class="remove-entity" @click="${() => this._removeIconGridEntity(index)}">×</span>
    </div>
  `;
  }

  _renderIconPicker() {
    return html`
    <div class="icon-picker-popup" @click="${(e) => e.stopPropagation()}">
      <ha-icon-picker
        .hass=${this.hass}
        .value=${this._customIcons[this._currentEditingEntity] || ''}
        @value-changed=${this._handleIconChange}
      ></ha-icon-picker>
    </div>
  `;
  }

  _getDisplayImageUrl(url) {
    return url && url.startsWith('data:image') ? 'Uploaded Image' : url;
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

  async _handleImageUpload(ev) {
    const file = ev.target.files[0];
    if (file) {
      try {
        let quality = 0.7;
        let compressedImage = await compressImage(file, 800, 600, quality);

        // For PNGs, we don't reduce quality further as it's lossless
        if (file.type !== 'image/png') {
          // Check the length of the base64 string
          while (compressedImage.length > 500000 && quality > 0.1) {
            quality -= 0.1;
            compressedImage = await compressImage(file, 800, 600, quality);
          }
        }

        if (compressedImage.length > 500000) {
          throw new Error("Image is too large even after compression");
        }

        this.config = {
          ...this.config,
          image_url: compressedImage
        };
        this.configChanged(this.config);
      } catch (error) {
        console.error('Error processing image:', error);
        alert("Failed to process image. Please try a smaller or less complex image.");
      }
    }
  }

  _handleIconChange(e) {
    const newIcon = e.detail.value;
    this._selectIcon(this._currentEditingEntity, newIcon);
  }

  _entityFilterChanged(e, configValue) {
    this[`_${configValue}Filter`] = e.target.value;
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

  _iconGridFilterChanged(e) {
    this._iconGridFilter = e.target.value;
    this.requestUpdate();
  }

  _addIconGridEntity(entityId) {
    if (!this._selectedIconGridEntities.includes(entityId)) {
      this._selectedIconGridEntities = [...this._selectedIconGridEntities, entityId];
      this._iconGridFilter = '';
      this._updateIconGridConfig();
    }
  }

  _removeIconGridEntity(index) {
    const removedEntityId = this._selectedIconGridEntities[index];
    this._selectedIconGridEntities = this._selectedIconGridEntities.filter((_, i) => i !== index);
    const { [removedEntityId]: _, ...restIcons } = this._customIcons;
    this._customIcons = restIcons;
    this._updateIconGridConfig();
    this._updateCustomIconsConfig();
  }

  _onDragStart(e, index) {
    e.dataTransfer.setData('text/plain', index);
  }

  _onDragOver(e) {
    e.preventDefault();
  }

  _onDrop(e) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const toIndex = [...e.currentTarget.children].indexOf(e.target.closest('.selected-entity'));

    if (fromIndex !== toIndex) {
      const newOrder = [...this._selectedIconGridEntities];
      const [removed] = newOrder.splice(fromIndex, 1);
      newOrder.splice(toIndex, 0, removed);
      this._selectedIconGridEntities = newOrder;
      this._updateIconGridConfig();
    }
  }

  _openIconPicker(e, entityId) {
    e.stopPropagation();
    this._currentEditingEntity = entityId;
    this._iconSearchFilter = '';
    this.requestUpdate();

    // Add click event listener to close picker when clicking outside
    setTimeout(() => {
      window.addEventListener('click', this._closeIconPicker);
    }, 0);
  }

  _closeIconPicker = (e) => {
    if (e.target.closest('.icon-picker-popup')) return;
    this._currentEditingEntity = null;
    this.requestUpdate();
    window.removeEventListener('click', this._closeIconPicker);
  }

  _selectIcon(entityId, icon) {
    this._customIcons = {
      ...this._customIcons,
      [entityId]: icon
    };
    this._currentEditingEntity = null;
    this._updateCustomIconsConfig();
    this.requestUpdate();
    window.removeEventListener('click', this._closeIconPicker);
  }

  _updateIconGridConfig() {
    this.config = {
      ...this.config,
      icon_grid_entities: this._selectedIconGridEntities
    };
    this.configChanged(this.config);
  }

  _updateCustomIconsConfig() {
    this.config = {
      ...this.config,
      custom_icons: this._customIcons
    };
    this.configChanged(this.config);
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