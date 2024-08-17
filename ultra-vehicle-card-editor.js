import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { styles } from "./styles.js";


const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};


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
      _currentEditingIconType: { type: String },
      _carStateEntityFilter: { type: String },
      _chargeLimitEntityFilter: { type: String },
      _cardBackgroundColor: { type: String },
      _barBackgroundColor: { type: String },
      _barFillColor: { type: String },
      _limitIndicatorColor: { type: String },
      _iconActiveColor: { type: String },
      _iconInactiveColor: { type: String },
      _draggedElement: { type: Object },
      _draggedIndex: { type: Number },
      _showEntityInformation: { type: Boolean },
      _iconSize: { type: Number },
      _iconGap: { type: Number },
      _iconSizes: { type: Object },
    };
  }

  static get styles() {
    return [styles];
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
    this._currentEditingIconType = null;
    this._carStateEntityFilter = "";
    this._chargeLimitEntityFilter = "";
    this._showEntityInformation = true;
    this._iconSize = 24;
    this._showEntityInformation = true;
    this._iconGap = 12;
    this._image_urlFilter = "";
  this._charging_image_urlFilter = "";
  this._iconSizes = {};
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      charging_image_url: "",
      image_url_type: config.image_url_type || "image",
      charging_image_url_type: config.charging_image_url_type || "image",
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
      custom_icons: config.custom_icons || {},
      icon_interactions: {},
      icon_styles: {},
      icon_labels: config.icon_labels || {},
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      icon_size: 24,
      icon_gap: 12,
      showEntityInformation: config.showEntityInformation !== undefined ? config.showEntityInformation : true,
      carStateTextColor: config.carStateTextColor || '',
      rangeTextColor: config.rangeTextColor || '',
      percentageTextColor: config.percentageTextColor || '',
      icon_sizes: config.icon_sizes || {},
      engine_on_entity: "",
      ...config,
    };
    this._selectedIconGridEntities = [...this.config.icon_grid_entities];
    this._customIcons = { ...this.config.custom_icons };
    this._iconInteractions = { ...this.config.icon_interactions };
    this._iconStyles = { ...this.config.icon_styles };
    this._iconSize = this.config.icon_size || 24;
    this._showEntityInformation = this.config.showEntityInformation;
    this._iconGap = this.config.icon_gap || 12;
    this._image_urlFilter = "";
  this._charging_image_urlFilter = "";
  this._iconSizes = { ...this.config.icon_sizes };
  }
  static getStubConfig() {
    return {
      // ... existing properties ...
      icon_labels: {},
      // ... other properties ...
    };
  }
  render() {
    if (!this.hass) {
      return html``;
    }

   return html`
    <div class="editor-container">
       ${this._renderBasicConfig()}
        ${this._renderEntityInformation()}
        ${this._renderIconGridConfig()}
        ${this._renderColorPickers()}
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
                    ?checked="${this.config.hybrid_display_order === "fuel_first"}"
                    @change="${this._hybridOrderChanged}"
                  />
                  Fuel First
                </label>
                <label>
                  <input
                    type="radio"
                    name="hybrid_display_order"
                    value="battery_first"
                    ?checked="${this.config.hybrid_display_order === "battery_first"}"
                    @change="${this._hybridOrderChanged}"
                  />
                  Battery First
                </label>
              </div>
            </div>
          `
        : ""}
  
      <div class="divider"></div>
  
      <h3>Images</h3>
      ${this._renderImageUploadField("Main Image", "image_url", "Enter image URL")}
      ${this._renderImageUploadField("Charging Image", "charging_image_url", "Enter charging image URL")}
    `;
  }

  _renderImageUploadField(label, configKey, placeholder) {
    const imageTypeKey = `${configKey}_type`;
    const currentType = this.config[imageTypeKey] || "image";

    return html`
      <div class="image-input-container">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label style="margin-right: 16px; font-size: 1.2em; font-weight: bold;">${label}</label>
          <div class="radio-group" style="justify-content: flex-end;">
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="none"
                ?checked="${currentType === 'none'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'none')}"
              />
              None
            </label>
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="image"
                ?checked="${currentType === 'image'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'image')}"
              />
              Local/Url
            </label>
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="entity"
                ?checked="${currentType === 'entity'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'entity')}"
              />
              Entity
            </label>
          </div>
        </div>

        ${currentType === 'image' 
          ? html`
              <div class="image-upload-container">
                <input
                  type="text"
                  .value="${this.config[configKey] || ''}"
                  placeholder="${placeholder}"
                  @input="${(e) => this._valueChanged(e)}"
                  .configValue="${configKey}"
                />
                <label class="file-upload-label" for="${configKey}-upload">Upload</label>
                <input
                  type="file"
                  id="${configKey}-upload"
                  style="display:none"
                  @change="${(e) => this._handleImageUpload(e, configKey)}"
                />
              </div>
            `
          : currentType === 'entity'
          ? this._renderEntityPickerWithoutToggle(configKey, "Select an Entity", "This entity provides the image for the display.")
          : ''}
      </div>
    `;
  }

  _renderEntityInformation() {
    return html`
      <div class="entity-information">
        <div class="entity-information-header" @click=${this._toggleEntityInformation}>
          <h3>Entity Information</h3>
          <ha-icon icon=${this._showEntityInformation ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
        </div>
        ${this._showEntityInformation ? this._renderEntityPickers() : ''}
      </div>
    `;
  }
  _toggleEntityInformation() {
  this._showEntityInformation = !this._showEntityInformation;
  this.config = {
    ...this.config,
    showEntityInformation: this._showEntityInformation,
  };
  this.configChanged(this.config);
  this.requestUpdate();
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
            ${this._renderEntityPicker(
              "engine_on_entity",
              "Engine On Entity",
              "This entity indicates whether the engine is running."
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
        <div class="icon-gap-slider">
          <label for="icon-gap">Icon Gap Size: ${this._iconGap}px</label>
          <input
            type="range"
            id="icon-gap"
            min="0"
            max="50"
            .value="${this._iconGap}"
            @input="${this._iconGapChanged}"
          />
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
    const sanitizedEntityId = entityId.replace(/\./g, '_');
    const entity = this.hass.states[entityId];
    const friendlyName = entity.attributes.friendly_name || entityId;
    const customIcon = this._customIcons[entityId] || {};
    const defaultIcon = entity.attributes.icon;
    const activeIcon = customIcon.active || defaultIcon || "mdi:help-circle";
    const inactiveIcon = customIcon.inactive || defaultIcon || "mdi:help-circle";
    const interaction = this._iconInteractions[entityId] || { type: 'none' };
    const buttonStyle = this._iconStyles[entityId] || 'icon';
    const activeColor = customIcon.activeColor || this.config.iconActiveColor || '';
    const inactiveColor = customIcon.inactiveColor || this.config.iconInactiveColor || '';
  
    return html`
      <div class="selected-entity" draggable="true" @dragstart="${(e) => this._onDragStart(e, index)}" data-entity-id="${entityId}">
        <div class="entity-header">
          <div class="handle" 
               @mousedown="${(e) => this._onDragStart(e, index)}"
               @touchstart="${(e) => this._onDragStart(e, index)}">
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <ha-icon
            class="toggle-details"
            icon="mdi:chevron-down"
            @click="${() => this._toggleEntityDetails(entityId)}"
          ></ha-icon>
          <span class="entity-name">${friendlyName}</span>
          <ha-icon
            class="remove-entity"
            icon="mdi:close"
            @click="${() => this._removeIconGridEntity(index)}"
          ></ha-icon>
        </div>
        <div class="entity-details" id="entity-details-${sanitizedEntityId}" style="display: none;">
          <div class="editor-row">
            <div class="editor-item">
              <label>Inactive Icon</label>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${inactiveIcon}
                @value-changed=${(e) => this._handleIconChange(e, 'inactive', entityId)}
              ></ha-icon-picker>
            </div>
            <div class="editor-item">
              <label>Active Icon</label>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${activeIcon}
                @value-changed=${(e) => this._handleIconChange(e, 'active', entityId)}
              ></ha-icon-picker>
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              ${this._renderIconColorPicker(`Inactive Color`, entityId, 'inactive', inactiveColor)}
            </div>
            <div class="editor-item">
              ${this._renderIconColorPicker(`Active Color`, entityId, 'active', activeColor)}
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              <label>Button Style</label>
              <select
                @change="${(e) => this._handleButtonStyleChange(entityId, e.target.value)}"
                .value="${buttonStyle}"
              >
                <option value="icon">Icon</option>
                <option value="round">Round</option>
                <option value="square">Square</option>
              </select>
            </div>
            <div class="editor-item">
              <label>Icon Size</label>
              <input
                type="number"
                .value="${this._getIconSize(entityId)}"
                @input="${(e) => this._iconSizeChanged(e, entityId)}"
                min="0"
                max="100"
              />
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              <label>Interaction</label>
              ${this._renderInteractionSelect(entityId, interaction)}
            </div>
            <div class="editor-item">
              <label>Icon Label Position</label>
              <select
                .value=${(this.config.icon_labels && this.config.icon_labels[entityId]) || 'none'}
                @change=${(e) => this._updateIconLabel(entityId, e.target.value)}
              >
                <option value="none">None</option>
                <option value="left">Left</option>
                <option value="top">Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  _handleButtonStyleChange(entityId, style) {
    this._iconStyles = {
      ...this._iconStyles,
      [entityId]: style,
    };
    this._updateIconStylesConfig();
  }
  
  _updateIconStylesConfig() {
    this.config = {
      ...this.config,
      icon_styles: this._iconStyles,
    };
    this.configChanged(this.config);
  }
  
  _renderIconColorPicker(label, entityId, colorType, defaultValue) {
    const currentValue = this._getIconColor(entityId, colorType) || defaultValue;
    const textColor = this._getContrastYIQ(currentValue);
  
    return html`
      <div class="color-picker">
        <label>${label}</label>
        <div class="color-input-wrapper">
          <input type="color" 
                 .value="${currentValue}" 
                 @change="${(e) => this._iconColorChanged(e, entityId, colorType)}"
                 style="opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer;">
          <div class="color-preview" style="background-color: ${currentValue}; color: ${textColor};">
            <span class="color-hex">${currentValue}</span>
            <ha-icon
              class="reset-icon"
              icon="mdi:refresh"
              @click="${(e) => this._resetIconColor(e, entityId, colorType, defaultValue)}"
            ></ha-icon>
          </div>
        </div>
      </div>
    `;
  }

_getIconColor(entityId, colorType) {
  const customColor = this._customIcons[entityId]?.[`${colorType}Color`];
  if (customColor === undefined) {
    return colorType === 'active' ? this.config.iconActiveColor : this.config.iconInactiveColor;
  }
  return customColor;
}

_iconColorChanged(e, entityId, colorType) {
  const color = e.target.value;

  this._customIcons = {
    ...this._customIcons,
    [entityId]: {
      ...this._customIcons[entityId],
      [`${colorType}Color`]: color,
    },
  };

  this._updateCustomIconsConfig();
  this.requestUpdate();
}

_resetIconColor(e, entityId, colorType, defaultValue) {
  e.stopPropagation();
  
  this._customIcons = {
    ...this._customIcons,
    [entityId]: {
      ...this._customIcons[entityId],
      [`${colorType}Color`]: undefined,
    },
  };
  
  this._updateCustomIconsConfig();
  this.requestUpdate();
}

_updateCustomIconsConfig() {
  const cleanedCustomIcons = Object.entries(this._customIcons).reduce((acc, [key, value]) => {
    const cleanedValue = {
      active: value.active,
      inactive: value.inactive,
      activeColor: value.activeColor,
      inactiveColor: value.inactiveColor,
    };
    acc[key] = cleanedValue;
    return acc;
  }, {});

  this.config = {
    ...this.config,
    custom_icons: cleanedCustomIcons,
  };
  this.configChanged(this.config);
}

_toggleEntityDetails(entityId) {
  // Sanitize the entity ID for use in the element ID
  const sanitizedEntityId = entityId.replace(/\./g, '_');
  
  // Find the details element using the sanitized ID
  const detailsElement = this.shadowRoot.querySelector(`#entity-details-${sanitizedEntityId}`);
  
  // Find the toggle icon within the correct entity's row
  const entityRow = this.shadowRoot.querySelector(`.selected-entity[data-entity-id="${entityId}"]`);
  const toggleIcon = entityRow ? entityRow.querySelector('.toggle-details') : null;
  
  if (detailsElement && toggleIcon) {
    const isHidden = detailsElement.style.display === 'none' || !detailsElement.style.display;
    detailsElement.style.display = isHidden ? 'block' : 'none';
    toggleIcon.icon = isHidden ? 'mdi:chevron-up' : 'mdi:chevron-down';
  } else {
    
  }
}

_getNavigationPaths() {
  return [
     "overview",
    "map",
    "logbook",
    "history",
    "energy",
    "config",
    "developer-tools",
    "lovelace",
    "devices",
    "integrations",
    "automations",
    "scenes",
    "scripts",
    "areas",
    "tags",
    "people",
  ];
}
_updateIndices() {
  const elements = this.shadowRoot.querySelectorAll('.selected-entity');
  elements.forEach((element, index) => {
    element.dataset.index = index;
  });
}
_renderInteractionSelect(entityId, interaction) {
  const interactions = [
    { value: "more-info", label: "More Info" },
      { value: "toggle", label: "Toggle" },
      { value: "navigate", label: "Navigate" },
      { value: "url", label: "URL" },
      { value: "automation", label: "Automation" },
      { value: "none", label: "None" },
  ];

return html`
      <select
        class="interaction-select"
        .value=${interaction.type}
        @change=${(e) => this._handleInteractionTypeChange(entityId, e.target.value)}
      >
        ${interactions.map(
          (int) => html`
            <option value=${int.value} ?selected=${interaction.type === int.value}>
              ${int.label}
            </option>
          `
        )}
      </select>
      ${this._renderInteractionOptions(entityId, interaction)}
    `;
  }

_renderInteractionOptions(entityId, interaction) {
    switch (interaction.type) {
      case 'navigate':
        return this._renderNavigationOption(entityId, interaction);
      case 'url':
        return this._renderUrlOption(entityId, interaction);
      case 'automation':
        return this._renderAutomationOption(entityId, interaction);
      default:
        return html``;
    }
  }

_renderNavigationOption(entityId, interaction) {
    const paths = this._getNavigationPaths();
    return html`
      <div class="interaction-option">
        <label>Navigation path:</label>
        <select
          @change=${(e) => this._updateInteractionOption(entityId, 'path', e.target.value)}
        >
          ${paths.map(path => html`
            <option value=${path} ?selected=${interaction.path === path}>${path}</option>
          `)}
        </select>
      </div>
    `;
  }

 _renderUrlOption(entityId, interaction) {
    return html`
      <div class="interaction-option">
        <label>URL:</label>
        <input
          type="text"
          .value=${interaction.url || ''}
          @input=${(e) => this._updateInteractionOption(entityId, 'url', e.target.value)}
        />
      </div>
    `;
  }
  
_renderAutomationOption(entityId, interaction) {
    const automations = this._getAutomations();
    return html`
      <div class="interaction-option">
        <label>Automation:</label>
        <select
          @change=${(e) => this._updateInteractionOption(entityId, 'automation', e.target.value)}
        >
          ${automations.map(automation => html`
            <option value=${automation.entity_id} ?selected=${interaction.automation === automation.entity_id}>
              ${automation.attributes.friendly_name || automation.entity_id}
            </option>
          `)}
        </select>
      </div>
    `;
  }

_getAutomations() {
    return Object.values(this.hass.states).filter(
      (entity) => entity.entity_id.startsWith("automation.")
    );
  }

_handleInteractionTypeChange(entityId, newType) {
    this._iconInteractions = {
      ...this._iconInteractions,
      [entityId]: { type: newType },
    };
    this._updateIconInteractionsConfig();
    this.requestUpdate();
  }
_getDisplayImageUrl(url) {
  return url && url.startsWith("data:image") ? "Uploaded Image" : url;
}
 _updateInteractionOption(entityId, option, value) {
  this._iconInteractions = {
    ...this._iconInteractions,
    [entityId]: {
      ...this._iconInteractions[entityId],
      [option]: value,
    },
  };
  this._updateIconInteractionsConfig();
}

_iconSizeChanged(e) {
  this._iconSize = parseInt(e.target.value);
  this.config = {
    ...this.config,
    icon_size: this._iconSize,
  };
  this.configChanged(this.config);
  fireEvent(this, 'config-changed', { config: this.config });
}
_onDragStart(e, index) {
  if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', index.toString());
  }
  // Store the index in a class property as a fallback
  this._draggedIndex = index;
}
_iconGapChanged(e) {
  this._iconGap = parseInt(e.target.value);
  this.config = {
    ...this.config,
    icon_gap: this._iconGap,
  };
  this.configChanged(this.config);
  fireEvent(this, 'config-changed', { config: this.config });
}
_onDragOver(e) {
  e.preventDefault();
}

_onDrop(e) {
  e.preventDefault();
  let fromIndex;
  if (e.dataTransfer) {
      fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
  } else {
      fromIndex = this._draggedIndex;
  }
  const toIndex = [...e.currentTarget.children].indexOf(e.target.closest('.selected-entity'));

  if (fromIndex !== undefined && fromIndex !== toIndex && toIndex !== -1) {
      const newOrder = [...this._selectedIconGridEntities];
      const [removed] = newOrder.splice(fromIndex, 1);
      newOrder.splice(toIndex, 0, removed);
      this._selectedIconGridEntities = newOrder;
      this._updateIconGridConfig();
  }
  // Reset the dragged index
  this._draggedIndex = undefined;
}
 
_handleIconChange(e, iconType, entityId) {
  const newIcon = e.detail.value;
  this._selectIcon(entityId, newIcon, iconType);
}

_selectIcon(entityId, icon, iconType) {
  this._customIcons = {
    ...this._customIcons,
    [entityId]: {
      ...this._customIcons[entityId],
      [iconType]: icon,
    },
  };
  this._updateCustomIconsConfig();
  this.requestUpdate();
}
  _updateIconInteractionsConfig() {
    this.config = {
      ...this.config,
      icon_interactions: this._iconInteractions,
    };
    this.configChanged(this.config);
  }

  _renderColorPickers() {
    const getDefaultColor = (property) => {
      const style = getComputedStyle(this);
      return style.getPropertyValue(property).trim() || style.getPropertyValue(`--${property}`).trim();
    };
  
    const defaultColors = {
      cardBackgroundColor: getDefaultColor('--card-background-color') || '#1c1c1c',
      barBackgroundColor: getDefaultColor('--secondary-text-color') || '#9E9E9E',
      barBorderColor: getDefaultColor('--secondary-text-color') || '#9E9E9E',
      barFillColor: getDefaultColor('--primary-color') || '#03a9f4',
      limitIndicatorColor: getDefaultColor('--primary-text-color') || '#FFFFFF',
      infoTextColor: getDefaultColor('--secondary-text-color') || '#9E9E9E',
      carStateTextColor: getDefaultColor('--primary-text-color') || '#FFFFFF',
      rangeTextColor: getDefaultColor('--primary-text-color') || '#FFFFFF',
      percentageTextColor: getDefaultColor('--primary-text-color') || '#FFFFFF'
    };
  
    return html`
      <div class="color-pickers">
        <h3>Custom Colors</h3>
        <div class="entity-description">
          Customize the colors of various elements in the card. Click on a color to change it, or use the reset icon to revert to the default color.
        </div>
        <div class="color-pickers-grid">
          ${Object.entries(defaultColors).map(([key, defaultValue]) => html`
            <div class="color-picker-item">
              ${this._renderColorPicker(this._formatLabel(key), key, defaultValue)}
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _renderColorPicker(label, configKey, defaultValue) {
    const currentValue = this.config[configKey] || defaultValue;
    const textColor = this._getContrastYIQ(currentValue);
  
    return html`
      <div class="color-picker">
        <label>${label}</label>
        <div class="color-input-wrapper">
          <input type="color" 
                 .value="${currentValue}" 
                 @change="${(e) => this._colorChanged(e, configKey)}"
                 style="opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer;">
          <div class="color-preview" style="background-color: ${currentValue}; color: ${textColor};">
            <span class="color-hex">${currentValue}</span>
            <ha-icon
              class="reset-icon"
              icon="mdi:refresh"
              @click="${(e) => this._resetColor(e, configKey, defaultValue)}"
            ></ha-icon>
          </div>
        </div>
      </div>
    `;
  }


  _colorChanged(e, configKey) {
    const color = e.target.value;
    if (configKey.includes('_')) {
      // This is an icon-specific color
      const [entityId, colorType] = configKey.split('_');
      this._customIcons = {
        ...this._customIcons,
        [entityId]: {
          ...this._customIcons[entityId],
          [colorType]: color,
        },
      };
      this._updateCustomIconsConfig();
    } else {
      // This is a global color
      this.config = {
        ...this.config,
        [configKey]: color,
      };
      this.configChanged(this.config);
    }
    this.requestUpdate();
  }

  _resetColor(e, configKey, defaultValue) {
    e.stopPropagation();
    this.config = {
      ...this.config,
      [configKey]: defaultValue,
    };
    this.configChanged(this.config);
    this.requestUpdate();
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
  _renderImageUploadField(label, configKey, placeholder) {
    const imageTypeKey = `${configKey}_type`;
    const currentType = this.config[imageTypeKey] || "image";

    return html`
      <div class="image-input-container">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label style="margin-right: 16px; font-size: 1.2em; font-weight: bold;">${label}</label>
          <div class="radio-group" style="justify-content: flex-end;">
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="none"
                ?checked="${currentType === 'none'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'none')}"
              />
              None
            </label>
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="image"
                ?checked="${currentType === 'image'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'image')}"
              />
              Local/Url
            </label>
            <label>
              <input
                type="radio"
                name="${imageTypeKey}"
                value="entity"
                ?checked="${currentType === 'entity'}"
                @change="${(e) => this._handleImageSourceChange(configKey, 'entity')}"
              />
              Entity
            </label>
          </div>
        </div>

        ${currentType === 'image' 
          ? html`
              <div class="image-upload-container">
                <input
                  type="text"
                  .value="${this.config[configKey] || ''}"
                  placeholder="${placeholder}"
                  @input="${(e) => this._valueChanged(e)}"
                  .configValue="${configKey}"
                />
                <label class="file-upload-label" for="${configKey}-upload">Upload</label>
                <input
                  type="file"
                  id="${configKey}-upload"
                  style="display:none"
                  @change="${(e) => this._handleImageUpload(e, configKey)}"
                />
              </div>
            `
          : currentType === 'entity'
          ? this._renderEntityPickerWithoutToggle(configKey, "Select an Entity", "This entity provides the image for the display.")
          : ''}
      </div>
    `;
  }
  _renderEntityPickerWithoutToggle(configValue, labelText, description) {
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
        </div>
      </div>
    `;
  }
  
  _renderImageInput(configKey, type, value, placeholder) {
    
    switch (type) {
      case 'entity':
        return html`
          <ha-entity-picker
            .hass=${this.hass}
            .value=${value.startsWith('entity:') ? value.slice(7) : value}
            .configValue=${configKey}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>
        `;
      case 'template':
       
        return html`
          <textarea
            .value=${value}
            .configValue="${configKey}"
            @input="${this._templateChanged}"
            placeholder="Enter template code here"
            rows="3"
          ></textarea>
        `;
      default: // 'image'
       
        return html`
          <input
            type="text"
            .value="${value}"
            .configValue="${configKey}"
            placeholder="${placeholder}"
            @input="${this._valueChanged}"
          />
          <label for="${configKey}_upload" class="file-upload-label">
            Upload
            <input
              type="file"
              id="${configKey}_upload"
              @change="${(e) => this._handleImageUpload(e, configKey)}"
              accept="image/*"
              style="display: none;"
            />
          </label>
        `;
    }
  }
  _templateChanged(ev, configKey) {
    const newValue = ev.target.value;
    try {
      const result = this._evaluateTemplate(newValue);
      if (result) {
        this._updateConfig(configKey, newValue);
      }
    } catch (error) {
      console.error('Error evaluating template:', error);
    }
  }

  _renderTemplatePicker(configKey, value) {
    const templates = this._getTemplateHelpers();
    return html`
      <ha-combo-box
        .hass=${this.hass}
        .value=${value}
        .items=${templates}
        .configValue="${configKey}"
        @value-changed="${this._templatePicked}"
        item-value-path="value"
        item-label-path="name"
      ></ha-combo-box>
    `;
  }
  _templatePicked(ev) {
    const target = ev.target;
    const configValue = target.configValue;
    const newValue = ev.detail.value || '';
    this._updateConfig(configValue, newValue);
  }
  _updateConfig(key, value) {
    this.config = {
      ...this.config,
      [key]: value,
    };
    this.configChanged(this.config);
  }
  _getTemplateHelpers() {
    return Object.keys(this.hass.states)
      .filter(entityId => entityId.startsWith('template.') || entityId.startsWith('input_text.'))
      .map(entityId => ({
        value: `{{ states('${entityId}') }}`,
        name: this.hass.states[entityId].attributes.friendly_name || entityId
      }));
  }
  _handleImageSourceChange(configKey, newType) {
    const imageTypeKey = `${configKey}_type`;
    let newValue = '';
  
    if (newType === 'entity') {
      newValue = ''; // Ensure this is properly set with the selected entity ID
    }
  
    this.config = {
      ...this.config,
      [imageTypeKey]: newType,
      [configKey]: newValue,
    };
  
    this.configChanged(this.config);
  }
  
  _selectImageEntity(configKey, entityId) {
    this.config = {
      ...this.config,
      [configKey]: `entity:${entityId}`,
    };
    this[`_${configKey}Filter`] = "";
    this.configChanged(this.config);
  }
  
  _templateChanged(ev) {
    const target = ev.target;
    const configValue = target.configValue;
    const newValue = target.value;
    this._updateConfig(configValue, newValue);
  }
  _entityPicked(ev) {
    const target = ev.target;
    const configValue = target.configValue;
    const newValue = ev.detail.value;
    this._updateConfig(configValue, newValue);
  }

  async _handleImageUpload(ev, configKey) {
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
        console.error("Response structure:", data);
        throw new Error("Image ID is missing in the response");
      }
  
      const imageUrl = `/api/image/serve/${imageId}/original`;
  
      if (this.config) {
        this.config = { ...this.config, [configKey]: imageUrl };
        this.configChanged(this.config);
        this.requestUpdate();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  _entityFilterChanged(e, configKey) {
    this[`_${configKey}Filter`] = e.target.value;
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


  _updateIconGridConfig() {
    this.config = {
        ...this.config,
        icon_grid_entities: this._selectedIconGridEntities,
    };
    this.configChanged(this.config);
}
_updateCustomIconsConfig() {
  const cleanedCustomIcons = Object.entries(this._customIcons).reduce((acc, [key, value]) => {
    const cleanedValue = {
      active: value.active,
      inactive: value.inactive,
      activeColor: value.activeColor,
      inactiveColor: value.inactiveColor,
    };
    acc[key] = cleanedValue;
    return acc;
  }, {});

  this.config = {
    ...this.config,
    custom_icons: cleanedCustomIcons,
  };
  
  this.configChanged(this.config);
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

  _formatLabel(key) {
    return key.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase());
  }

  _getContrastYIQ(hexcolor) {
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  configChanged(newConfig) {
    fireEvent(this, "config-changed", { config: { ...newConfig, icon_labels: this.config.icon_labels } });
  }

  _valueChanged(ev) {
    const target = ev.target;
    const configValue = target.configValue;
    const newValue = target.value;
    this._updateConfig(configValue, newValue);
  }

  _evaluateTemplate(template) {
   
    try {
      // Use Function constructor to create a function from the template string
      const templateFunction = new Function('states', 'user', `return \`${template}\`;`);
      // Call the function with the hass states and user object
      const result = templateFunction(this.hass.states, this.hass.user);
     
      return result;
    } catch (error) {
      console.error('Error evaluating template:', error);
      return null;
    }
  }

  _getIconSize(entityId) {
    return this._iconSizes[entityId] || this.config.icon_size || 24;
  }

  _iconSizeChanged(e, entityId) {
    const newSize = parseInt(e.target.value);
    this._iconSizes = {
      ...this._iconSizes,
      [entityId]: newSize,
    };
    this._updateIconSizesConfig();
  }

  _updateIconSizesConfig() {
    this.config = {
      ...this.config,
      icon_sizes: this._iconSizes,
    };
    this.configChanged(this.config);
  }

  _updateIconLabel(entityId, value) {
    if (!this.config.icon_labels) {
      this.config.icon_labels = {};
    }
    this.config.icon_labels[entityId] = value;
    console.log('Updated icon labels:', this.config.icon_labels);
    this.configChanged(this.config);
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
