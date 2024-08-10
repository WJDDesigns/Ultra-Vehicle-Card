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
      icon_interactions: {},
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      ...config,
    };
    this._selectedIconGridEntities = [...this.config.icon_grid_entities];
    this._customIcons = { ...this.config.custom_icons };
    this._iconInteractions = { ...this.config.icon_interactions };
  }

  render() {
    if (!this.hass) {
      return html``;
    }

   return html`
    <div class="editor-container">
      ${this._renderBasicConfig()}
      ${this._renderEntityPickers()}
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
  const sanitizedEntityId = entityId.replace(/\./g, '_');
  const entity = this.hass.states[entityId];
  const friendlyName = entity.attributes.friendly_name || entityId;
  const customIcon = this._customIcons[entityId] || {};
  const defaultIcon = entity.attributes.icon;
  const activeIcon = customIcon.active || defaultIcon || "mdi:help-circle";
  const inactiveIcon = customIcon.inactive || defaultIcon || "mdi:help-circle";
  const interaction = this._iconInteractions[entityId] || { type: 'none' };
  const useActiveColor = customIcon.useActiveColor !== false;

  return html`
    <div class="selected-entity" data-entity-id="${entityId}" data-index="${index}">
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
      <div class="entity-details" style="display: none;" data-entity-id="${entityId}">
        <div class="icon-row">
          <div class="icon-wrapper">
            <label>Inactive:</label>
            <ha-icon-picker
              .hass=${this.hass}
              .value=${inactiveIcon}
              @value-changed=${(e) => this._handleIconChange(e, 'inactive', entityId)}
            ></ha-icon-picker>
          </div>
          <div class="icon-wrapper">
            <label>Active:</label>
            <ha-icon-picker
              .hass=${this.hass}
              .value=${activeIcon}
              @value-changed=${(e) => this._handleIconChange(e, 'active', entityId)}
            ></ha-icon-picker>
          </div>
          <div class="checkbox-wrapper">
    <input
      type="checkbox"
      id="use-active-color-${sanitizedEntityId}"
      ?checked=${useActiveColor}
      @change="${(e) => this._toggleActiveColor(entityId, e.target.checked)}"
    />
    <label for="use-active-color-${sanitizedEntityId}">Use Active Color</label>
  </div>
        </div>
        <div class="interaction-row">
          <label>Interaction:</label>
          ${this._renderInteractionSelect(entityId, interaction)}
        </div>
      </div>
    </div>
  `;
}
_toggleEntityDetails(entityId) {
  const detailsElement = this.shadowRoot.querySelector(`.entity-details[data-entity-id="${entityId}"]`);
  const toggleIcon = this.shadowRoot.querySelector(`.selected-entity[data-entity-id="${entityId}"] .toggle-details`);
  
  if (detailsElement && toggleIcon) {
    const isHidden = detailsElement.style.display === 'none' || !detailsElement.style.display;
    detailsElement.style.display = isHidden ? 'block' : 'none';
    toggleIcon.icon = isHidden ? 'mdi:chevron-up' : 'mdi:chevron-down';
  } else {
    console.error('Details or toggle icon not found for entityId:', entityId);
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

_toggleActiveColor(entityId, useActiveColor) {
  this._customIcons = {
    ...this._customIcons,
    [entityId]: {
      ...this._customIcons[entityId],
      useActiveColor,
    },
  };
  this._updateCustomIconsConfig();
}

_onDragStart(e, index) {
  e.stopPropagation();
  this._draggedElement = e.target.closest('.selected-entity');
  this._draggedIndex = index;
  this._draggedElement.classList.add('dragging');

  const moveHandler = (moveEvent) => {
    this._onDragMove(moveEvent);
  };

  const endHandler = (endEvent) => {
    this._onDragEnd(endEvent);
    document.removeEventListener('mousemove', moveHandler);
    document.removeEventListener('touchmove', moveHandler);
    document.removeEventListener('mouseup', endHandler);
    document.removeEventListener('touchend', endHandler);
  };

  document.addEventListener('mousemove', moveHandler);
  document.addEventListener('touchmove', moveHandler);
  document.addEventListener('mouseup', endHandler);
  document.addEventListener('touchend', endHandler);
}

_onDragEnd(e) {
  e.preventDefault();
  e.stopPropagation();

  this._draggedElement.classList.remove('dragging');
  this._draggedElement.style.removeProperty('position');
  this._draggedElement.style.removeProperty('z-index');
  this._draggedElement.style.removeProperty('top');

  const newIndex = parseInt(this._draggedElement.dataset.index);
  if (newIndex !== this._draggedIndex) {
    const newOrder = [...this._selectedIconGridEntities];
    const [removed] = newOrder.splice(this._draggedIndex, 1);
    newOrder.splice(newIndex, 0, removed);
    this._selectedIconGridEntities = newOrder;
    this._updateIconGridConfig();
  }

  this._draggedElement = null;
  this._draggedIndex = null;

  this.requestUpdate();
}

_onDragMove(e) {
  e.preventDefault();
  const containerRect = this.shadowRoot.querySelector('.selected-entities').getBoundingClientRect();
  const y = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

  this._draggedElement.style.position = 'absolute';
  this._draggedElement.style.zIndex = '1000';
  this._draggedElement.style.top = `${y - containerRect.top - 20}px`;

  const elements = this.shadowRoot.querySelectorAll('.selected-entity:not(.dragging)');
  let closestElement = null;
  let closestDistance = Infinity;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - y);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestElement = element;
    }
  });

  if (closestElement) {
    const closestIndex = parseInt(closestElement.dataset.index);
    if (closestIndex > this._draggedIndex) {
      closestElement.parentNode.insertBefore(this._draggedElement, closestElement.nextSibling);
    } else {
      closestElement.parentNode.insertBefore(this._draggedElement, closestElement);
    }
    this._updateIndices();
  }
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
    { value: "call-service", label: "Perform action" },
    { value: "assist", label: "Assist" },
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
     case 'call-service':
      return this._renderServiceOption(entityId, interaction);
    case 'assist':
      return this._renderAssistOption(entityId, interaction);
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

_renderServiceOption(entityId, interaction) {
  const services = this._getAvailableServices();
  return html`
    <div class="interaction-option">
      <label>Action:</label>
      <select
        @change=${(e) => this._updateInteractionOption(entityId, 'service', e.target.value)}
      >
        ${services.map(service => html`
          <option value=${service.service} ?selected=${interaction.service === service.service}>
            ${service.name}
          </option>
        `)}
      </select>
      ${interaction.service ? html`
        <div class="service-description">${this._getServiceDescription(interaction.service)}</div>
        <div class="targets">
          <button @click=${() => this._openTargetSelector(entityId, 'area')}>Choose area</button>
          <button @click=${() => this._openTargetSelector(entityId, 'device')}>Choose device</button>
          <button @click=${() => this._openTargetSelector(entityId, 'entity')}>Choose entity</button>
          <button @click=${() => this._openTargetSelector(entityId, 'label')}>Choose label</button>
        </div>
      ` : ''}
    </div>
  `;
}
_getServiceDescription(service) {
  // Implement this function to return the description of the selected service
  // You may need to fetch this information from Home Assistant
}
_getServiceDescription(service) {
  // Implement this function to return the description of the selected service
  // You may need to fetch this information from Home Assistant
}

_renderAssistOption(entityId, interaction) {
  const assistants = this._getAvailableAssistants();
  return html`
    <div class="interaction-option">
      <label>Assistant:</label>
      <select
        @change=${(e) => this._updateInteractionOption(entityId, 'assistant', e.target.value)}
      >
        ${assistants.map(assistant => html`
          <option value=${assistant.id} ?selected=${interaction.assistant === assistant.id}>
            ${assistant.name}
          </option>
        `)}
      </select>
      <div class="checkbox-wrapper">
        <input
          type="checkbox"
          id="start-listening-${entityId}"
          ?checked=${interaction.startListening}
          @change=${(e) => this._updateInteractionOption(entityId, 'startListening', e.target.checked)}
        />
        <label for="start-listening-${entityId}">Start listening</label>
      </div>
    </div>
  `;
}

_getAvailableAssistants() {
  // Implement this function to fetch the available assistants from Home Assistant
  // You may need to use the hass object to get this information
  return [
    { id: 'last_used', name: 'Last Used Assistant' },
    { id: 'home_assistant', name: 'Home Assistant (English)' },
    { id: 'home_assistant_cloud', name: 'Home Assistant Cloud (English)' },
  ];
}

_handleInteractionTypeChange(entityId, newType) {
  this._iconInteractions = {
    ...this._iconInteractions,
    [entityId]: { type: newType },
  };
  this._updateIconInteractionsConfig();
  this.requestUpdate();
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

_getAvailableServices() {
  const services = [];
  if (this.hass) {
    Object.keys(this.hass.services).forEach(domain => {
      Object.keys(this.hass.services[domain]).forEach(service => {
        services.push({
          service: `${domain}.${service}`,
          name: `${domain}.${service}`
        });
      });
    });
  }
  return services;
}

_getAvailableAssistants() {
  // This is a placeholder. You'll need to implement this based on how
  // assistants are managed in your Home Assistant setup.
  return [
    { id: 'default', name: 'Default Assistant' },
    { id: 'google', name: 'Google Assistant' },
    { id: 'alexa', name: 'Alexa' }
  ];
}
  _handleInteractionChange(entityId, newInteraction) {
    this._iconInteractions = {
      ...this._iconInteractions,
      [entityId]: newInteraction,
    };
    this._updateIconInteractionsConfig();
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
      barBackgroundColor: getDefaultColor('--uvc-bar-background-color') || '#595959',
      barBorderColor: getDefaultColor('--uvc-bar-border-color') || '#595959',
      barFillColor: getDefaultColor('--uvc-primary-color') || '#4CAF50',
      limitIndicatorColor: '#FFFFFF',
      iconActiveColor: getDefaultColor('--uvc-primary-color') || '#4CAF50',
      iconInactiveColor: getDefaultColor('--secondary-text-color') || '#9E9E9E',
      infoTextColor: getDefaultColor('--secondary-text-color') || '#9E9E9E'
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
        <div class="color-input-wrapper" @click="${(e) => this._openColorPicker(e, configKey)}">
          <div class="color-preview" style="background-color: ${currentValue}; color: ${textColor};">
            <span class="color-hex">${currentValue}</span>
            <ha-icon
              class="reset-icon"
              icon="mdi:refresh"
              @click=${(e) => this._resetColor(e, configKey, defaultValue)}
            ></ha-icon>
          </div>
          <input
            type="color"
            .value=${currentValue}
            @change=${(e) => this._colorChanged(e, configKey)}
            style="display: none;"
          >
        </div>
      </div>
    `;
  }

  _openColorPicker(e, configKey) {
    e.stopPropagation();
    const colorInput = e.target.closest('.color-input-wrapper').querySelector('input[type="color"]');
    colorInput.click();
    
    const rect = e.target.getBoundingClientRect();
    const pickerPopup = e.target.closest('.color-input-wrapper').querySelector('.color-picker-popup');
    pickerPopup.style.top = `${rect.bottom}px`;
    pickerPopup.style.left = `${rect.left}px`;

    const hideColorPicker = (event) => {
        if (!event.target.closest('.color-input-wrapper')) {
            colorInput.style.display = 'none';
            document.removeEventListener('click', hideColorPicker);
        }
    };

    setTimeout(() => {
        document.addEventListener('click', hideColorPicker);
    }, 0);
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

  _colorChanged(e, configKey) {
    const color = e.target.value;
    this.config = {
      ...this.config,
      [configKey]: color,
    };
    this.configChanged(this.config);
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
        console.error("Response structure:", data);
        throw new Error("Image ID is missing in the response");
      }

      const imageUrl = `/api/image/serve/${imageId}/original`;

      if (this.config) {
        this.config = { ...this.config, image_url: imageUrl };
        this.configChanged(this.config);
        this.requestUpdate();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
    fireEvent(this, "config-changed", { config: newConfig });
  }
}

customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);