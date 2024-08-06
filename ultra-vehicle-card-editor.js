import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { styles } from "./styles.js";

function compressImage(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = document.createElement("canvas");
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
        const ctx = elem.getContext("2d");

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        const fileType = file.type || "image/jpeg";
        let data;

        if (fileType === "image/png") {
          data = elem.toDataURL("image/png");
        } else {
          data = elem.toDataURL("image/jpeg", quality);
        }

        resolve(data);
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
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
      _currentEditingEntity: { type: String },
      _carStateEntityFilter: { type: String },
      _chargeLimitEntityFilter: { type: String },
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
          background-color: var(--primary-color);
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
          width: 300px;
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
      `,
    ];
  }

  constructor() {
    super();
    this._batteryLevelEntityFilter = "";
    this._batteryRangeEntityFilter = "";
    this._fuelLevelEntityFilter = "";
    this._fuelRangeEntityFilter = "";
    this._chargingStatusEntityFilter = "";
    this._locationEntityFilter = "";
    this._mileageEntityFilter = "";
    this._iconGridFilter = "";
    this._selectedIconGridEntities = [];
    this._customIcons = {};
    this._iconSearchFilter = "";
    this._currentEditingEntity = null;
    this._carStateEntityFilter = "";
    this._chargeLimitEntityFilter = "";
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
      show_car_state: true,
      show_charge_limit: true,
      icon_grid_entities: [],
      custom_icons: {},
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      ...config,
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
        ${this._renderBasicConfig()} ${this._renderEntityPickers()}
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
          .configValue="${"title"}"
        />
      </div>

      <div class="input-group">
        <label for="image_url">Image URL</label>
        <input
          id="image_url"
          type="text"
          .value="${this._getDisplayImageUrl(this.config.image_url)}"
          @input="${this._valueChanged}"
          .configValue="${"image_url"}"
        />
      </div>

      <div class="input-group">
        <label for="image_upload">Upload Image</label>
        <input
          type="file"
          id="image_upload"
          @change="${this._handleImageUpload}"
          accept="image/*"
        />
      </div>

      <div class="input-group">
        <label>Vehicle Type</label>
        <div class="radio-group">
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="EV"
              ?checked="${this.config.vehicle_type === "EV"}"
              @change="${this._vehicleTypeChanged}"
            />
            Electric Vehicle
          </label>
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="Fuel"
              ?checked="${this.config.vehicle_type === "Fuel"}"
              @change="${this._vehicleTypeChanged}"
            />
            Fuel Vehicle
          </label>
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="Hybrid"
              ?checked="${this.config.vehicle_type === "Hybrid"}"
              @change="${this._vehicleTypeChanged}"
            />
            PHEV (Hybrid)
          </label>
        </div>
      </div>

      <div class="input-group">
        <label>Unit Type</label>
        <div class="radio-group">
          <label>
            <input
              type="radio"
              name="unit_type"
              value="mi"
              ?checked="${this.config.unit_type === "mi"}"
              @change="${this._unitTypeChanged}"
            />
            Miles (mi)
          </label>
          <label>
            <input
              type="radio"
              name="unit_type"
              value="km"
              ?checked="${this.config.unit_type === "km"}"
              @change="${this._unitTypeChanged}"
            />
            Kilometers (km)
          </label>
        </div>
      </div>

      ${this.config.vehicle_type === "Hybrid"
        ? html`
            <div class="input-group">
              <label>Hybrid Display Order</label>
              <div class="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hybrid_display_order"
                    value="fuel_first"
                    ?checked="${this.config.hybrid_display_order ===
                    "fuel_first"}"
                    @change="${this._hybridOrderChanged}"
                  />
                  Fuel First
                </label>
                <label>
                  <input
                    type="radio"
                    name="hybrid_display_order"
                    value="battery_first"
                    ?checked="${this.config.hybrid_display_order ===
                    "battery_first"}"
                    @change="${this._hybridOrderChanged}"
                  />
                  Battery First
                </label>
              </div>
            </div>
          `
        : ""}
    `;
  }

  _renderEntityPickers() {
    const { vehicle_type } = this.config;
    return html`
      ${vehicle_type === "EV" || vehicle_type === "Hybrid"
        ? html`
            ${this._renderEntityPicker(
              "battery_level_entity",
              "Battery Level Entity",
              "This is used for battery percent and bar length."
            )}
            ${this._renderEntityPicker(
              "battery_range_entity",
              "Battery Range Entity",
              "This is used for the battery range left."
            )}
            ${this._renderEntityPicker(
              "charging_status_entity",
              "Charging Status Entity",
              "This is used for charging wording and bar animation."
            )}
            ${this._renderEntityPicker(
              "charge_limit_entity",
              "Charge Limit Entity",
              "This is used to display the charge limit on the battery bar."
            )}
          `
        : ""}
      ${vehicle_type === "Fuel" || vehicle_type === "Hybrid"
        ? html`
            ${this._renderEntityPicker(
              "fuel_level_entity",
              "Fuel Level Entity",
              "This is used for fuel percent and bar length."
            )}
            ${this._renderEntityPicker(
              "fuel_range_entity",
              "Fuel Range Entity",
              "This is used for the fuel range left."
            )}
          `
        : ""}
      ${this._renderEntityPicker(
        "location_entity",
        "Location Entity",
        "This is used to display the vehicle location."
      )}
      ${this._renderEntityPicker(
        "mileage_entity",
        "Mileage Entity",
        "This is used to display the vehicle mileage."
      )}
      ${this._renderEntityPicker(
        "car_state_entity",
        "Car State Entity",
        "This is used to display the current state of the car (e.g., offline, charging)."
      )}
    `;
  }

  _renderEntityPicker(configValue, labelText, description) {
    const toggleName = this._getToggleName(configValue);
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
                .value="${this.config[configValue] || ""}"
                @input="${(e) => this._entityFilterChanged(e, configValue)}"
                placeholder="Search entities"
              />
              ${this[`_${configValue}Filter`]
                ? html`
                    <div class="entity-picker-results">
                      ${Object.keys(this.hass.states)
                        .filter((eid) =>
                          eid
                            .toLowerCase()
                            .includes(
                              this[`_${configValue}Filter`].toLowerCase()
                            )
                        )
                        .map(
                          (eid) => html`
                            <div
                              class="entity-picker-result"
                              @click="${() =>
                                this._selectEntity(configValue, eid)}"
                            >
                              ${eid}
                            </div>
                          `
                        )}
                    </div>
                  `
                : ""}
            </div>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              ?checked="${this.config[toggleName]}"
              @change="${this._toggleChanged}"
              .configValue="${toggleName}"
            />
            <span class="slider round"></span>
          </label>
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
            Search and select entities to add to the icon grid. Use the drag
            handle (≡) to reorder entities. Click on the icon to change it, and
            use the (×) to remove an entity from the grid.
          </div>
          <div class="entity-picker-container">
            <input
              id="icon_grid_search"
              type="text"
              class="entity-picker-input"
              placeholder="Search entities"
              .value="${this._iconGridFilter}"
              @input="${this._iconGridFilterChanged}"
            />
            ${this._renderIconGridResults()}
          </div>
        </div>
        <div
          class="selected-entities"
          @dragover="${this._onDragOver}"
          @drop="${this._onDrop}"
        >
          ${this._selectedIconGridEntities.map((entityId, index) =>
            this._renderSelectedEntity(entityId, index)
          )}
        </div>
      </div>
    `;
  }

  _renderIconGridResults() {
    if (!this._iconGridFilter) return "";

    const filteredEntities = Object.keys(this.hass.states)
      .filter((eid) =>
        eid.toLowerCase().includes(this._iconGridFilter.toLowerCase())
      )
      .filter((eid) => !this._selectedIconGridEntities.includes(eid));

    return html`
      <div class="entity-picker-results">
        ${filteredEntities.map(
          (eid) => html`
            <div
              class="entity-picker-result"
              @click="${() => this._addIconGridEntity(eid)}"
            >
              ${eid}
            </div>
          `
        )}
      </div>
    `;
  }

  _renderSelectedEntity(entityId, index) {
    const entity = this.hass.states[entityId];
    const friendlyName = entity.attributes.friendly_name || entityId;

    // Check for custom icon first, then entity's default icon, then fallback icon
    const customIcon = this._customIcons[entityId];
    const defaultIcon = entity.attributes.icon;
    const currentIcon = customIcon || defaultIcon || "mdi:help-circle";

    return html`
      <div
        class="selected-entity"
        draggable="true"
        @dragstart="${(e) => this._onDragStart(e, index)}"
      >
        <div class="handle">
          <ha-svg-icon
            .path="${"M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"}"
          ></ha-svg-icon>
        </div>
        <div class="entity-content">
          <div class="icon-wrapper">
            <ha-icon
              .icon="${currentIcon}"
              @mousedown="${(e) => e.stopPropagation()}"
              @click="${(e) => this._openIconPicker(e, entityId)}"
              class="custom-icon"
            ></ha-icon>
            ${this._currentEditingEntity === entityId
              ? this._renderIconPicker()
              : ""}
          </div>
          <span class="entity-name">${friendlyName}</span>
        </div>
        <span
          class="remove-entity"
          @click="${() => this._removeIconGridEntity(index)}"
          >×</span
        >
      </div>
    `;
  }

  _getToggleName(configValue) {
    switch (configValue) {
      case "battery_level_entity":
        return this.config.vehicle_type === "EV"
          ? "show_battery"
          : "show_battery";
      case "battery_range_entity":
        return this.config.vehicle_type === "EV"
          ? "show_battery_range"
          : "show_battery_range";
      case "fuel_level_entity":
        return "show_fuel";
      case "fuel_range_entity":
        return "show_fuel_range";
      case "location_entity":
        return "show_location";
      case "mileage_entity":
        return "show_mileage";
      case "car_state_entity":
        return "show_car_state";
      case "charge_limit_entity":
        return "show_charge_limit";
      default:
        return `show_${configValue.split("_")[0]}`;
    }
  }

  _renderIconPicker() {
    return html`
      <div class="icon-picker-popup" @click="${(e) => e.stopPropagation()}">
        <ha-icon-picker
          .hass=${this.hass}
          .value=${this._customIcons[this._currentEditingEntity] || ""}
          @value-changed=${this._handleIconChange}
        ></ha-icon-picker>
      </div>
    `;
  }

  _getDisplayImageUrl(url) {
    return url && url.startsWith("data:image") ? "Uploaded Image" : url;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.value,
      };
      this.configChanged(this.config);
    }
  }

  _toggleChanged(ev) {
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.checked,
      };
      this.configChanged(this.config);
    }
  }

  _vehicleTypeChanged(ev) {
    this.config = {
      ...this.config,
      vehicle_type: ev.target.value,
    };
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _unitTypeChanged(ev) {
    this.config = {
      ...this.config,
      unit_type: ev.target.value,
    };
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _hybridOrderChanged(ev) {
    this.config = {
      ...this.config,
      hybrid_display_order: ev.target.value,
    };
    this.configChanged(this.config);
  }

  async _handleImageUpload(ev) {
    const input = ev.target;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${this.hass.auth.data.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      const imageId = data.id;

      if (!imageId) {
        console.error("Response structure:", data); // Log the response structure for debugging
        throw new Error("Image ID is missing in the response");
      }

      const imageUrl = `/api/image/serve/${imageId}/original`;
      // console.log("Uploaded image URL:", imageUrl);

      // Add the new image URL to the list of image links
      if (this.config) {
        this.config = { ...this.config, image_url: imageUrl };
        this.configChanged(this.config);
        this.requestUpdate();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
  // async _handleImageUpload(ev) {
  //   const file = ev.target.files[0];
  //   if (file) {
  //     try {
  //       let quality = 0.7;
  //       let compressedImage = await compressImage(file, 800, 600, quality);

  //       if (file.type !== 'image/png') {
  //         while (compressedImage.length > 500000 && quality > 0.1) {
  //           quality -= 0.1;
  //           compressedImage = await compressImage(file, 800, 600, quality);
  //         }
  //       }

  //       if (compressedImage.length > 500000) {
  //         throw new Error("Image is too large even after compression");
  //       }

  //       this.config = {
  //         ...this.config,
  //         image_url: compressedImage
  //       };
  //       this.configChanged(this.config);
  //     } catch (error) {
  //       console.error('Error processing image:', error);
  //       alert("Failed to process image. Please try a smaller or less complex image.");
  //     }
  //   }
  // }

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
      [configValue]: entityId,
    };
    this[`_${configValue}Filter`] = "";
    this.configChanged(this.config);
  }

  _iconGridFilterChanged(e) {
    this._iconGridFilter = e.target.value;
    this.requestUpdate();
  }

  _addIconGridEntity(entityId) {
    if (!this._selectedIconGridEntities.includes(entityId)) {
      this._selectedIconGridEntities = [
        ...this._selectedIconGridEntities,
        entityId,
      ];
      this._iconGridFilter = "";
      this._updateIconGridConfig();
    }
  }

  _removeIconGridEntity(index) {
    const removedEntityId = this._selectedIconGridEntities[index];
    this._selectedIconGridEntities = this._selectedIconGridEntities.filter(
      (_, i) => i !== index
    );
    const { [removedEntityId]: _, ...restIcons } = this._customIcons;
    this._customIcons = restIcons;
    this._updateIconGridConfig();
    this._updateCustomIconsConfig();
  }

  _onDragStart(e, index) {
    e.dataTransfer.setData("text/plain", index);
  }

  _onDragOver(e) {
    e.preventDefault();
  }

  _onDrop(e) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const toIndex = [...e.currentTarget.children].indexOf(
      e.target.closest(".selected-entity")
    );

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
    this._iconSearchFilter = "";
    this.requestUpdate();

    setTimeout(() => {
      window.addEventListener("click", this._closeIconPicker);
    }, 0);
  }

  _closeIconPicker = (e) => {
    if (e.target.closest(".icon-picker-popup")) return;
    this._currentEditingEntity = null;
    this.requestUpdate();
    window.removeEventListener("click", this._closeIconPicker);
  };

  _selectIcon(entityId, icon) {
    this._customIcons = {
      ...this._customIcons,
      [entityId]: icon,
    };
    this._currentEditingEntity = null;
    this._updateCustomIconsConfig();
    this.requestUpdate();
    window.removeEventListener("click", this._closeIconPicker);
  }

  _updateIconGridConfig() {
    this.config = {
      ...this.config,
      icon_grid_entities: this._selectedIconGridEntities,
    };
    this.configChanged(this.config);
  }

  _updateCustomIconsConfig() {
    this.config = {
      ...this.config,
      custom_icons: this._customIcons,
    };
    this.configChanged(this.config);
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
