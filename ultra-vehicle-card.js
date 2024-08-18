import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { UltraVehicleCardEditor } from "./ultra-vehicle-card-editor.js";
import { styles } from "./styles.js";


const version = "V1.3.3";


class UltraVehicleCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

 static get version() {
    return version;
  }

  static get styles() {
  return [styles];
}

setConfig(config) {
  if (!config.title) {
    throw new Error("You need to define a title");
  }

  // Get the default color as hex
  const defaultColor = this._getDefaultColorAsHex();

  const defaultImageUrl = 'https://github.com/user-attachments/assets/4ef72288-5ee9-4fa6-b2f3-c34c4160cf42';

  this.config = {
    title: "My Vehicle",
    image_url: config.image_url || defaultImageUrl,
    charging_image_url: config.charging_image_url || defaultImageUrl,
    image_url_type: "image",
    charging_image_url_type: "image",
    vehicle_type: "EV",
    unit_type: "mi",
    battery_level_entity: "",
    battery_range_entity: "",
    fuel_level_entity: "",
    fuel_range_entity: "",
    charging_status_entity: "",
    location_entity: "",
    mileage_entity: "",
    show_battery: true,
    show_battery_range: true,
    show_fuel: true,
    show_fuel_range: true,
    show_location: true,
    show_mileage: true,
    show_car_state: true,
    show_charge_limit: true,
    icon_grid_entities: [],
    custom_icons: {},
    icon_interactions: {},
    icon_styles: config.icon_styles || {},
    hybrid_display_order: 'fuel_first',
    car_state_entity: "",
    charge_limit_entity: "",
    cardBackgroundColor: "",
    barBackgroundColor: "",
    barFillColor: "",
    limitIndicatorColor: "",
    iconActiveColor: "",
    iconInactiveColor: "",
    barBorderColor: "",
    icon_size: 28,
    icon_gap: config.icon_gap || 20,
    image_entity: "",
    charging_image_entity: "",
    carStateTextColor: config.carStateTextColor || '',
    rangeTextColor: config.rangeTextColor || '',
    percentageTextColor: config.percentageTextColor || '',
    icon_sizes: config.icon_sizes || {},
    engine_on_entity: "",
    icon_labels: config.icon_labels || {},
    row_separators: config.row_separators || {},
    ...config
  };

  // Handle backward compatibility for entity names
  if (this.config.level_entity && !this.config.battery_level_entity) {
    this.config.battery_level_entity = this.config.level_entity;
  }
  if (this.config.range_entity && !this.config.battery_range_entity) {
    this.config.battery_range_entity = this.config.range_entity;
  }

  // Ensure image_url_type and charging_image_url_type are set correctly
  this.config.image_url_type = this.config.image_url_type || "image";
  this.config.charging_image_url_type = this.config.charging_image_url_type || "image";

  // Handle image entities
  if (this.config.image_url_type === "entity") {
    this.config.image_entity = this.config.image_entity || this.config.image_url;
    this.config.image_url = ""; // Clear image_url if using an entity
  }
  if (this.config.charging_image_url_type === "entity") {
    this.config.charging_image_entity = this.config.charging_image_entity || this.config.charging_image_url;
    this.config.charging_image_url = ""; // Clear charging_image_url if using an entity
  }

  // Validate entity configurations
  this._validateEntityConfig('image_entity', this.config.image_url_type);
  this._validateEntityConfig('charging_image_entity', this.config.charging_image_url_type);

  // Initialize row_separators if not present
  if (!this.config.row_separators) {
    this.config.row_separators = {};
  }

  // Ensure all row separators have proper default values
  this.config.icon_grid_entities.forEach((entityId, index) => {
    if (entityId === 'row-separator' && !this.config.row_separators[index]) {
      this.config.row_separators[index] = {
        color: defaultColor, // Use hex color instead of CSS variable
        height: 1,
        icon_gap: 20,
        horizontalAlignment: 'center',
        verticalAlignment: 'middle'
      };
    }
  });
}

// Add this method to validate entity configurations
_validateEntityConfig(entityKey, urlType) {
  if (urlType === 'entity' && !this.config[entityKey]) {
    console.warn(`${entityKey} is set to use an entity, but no entity is specified.`);
  }
}

// Add this method to get the default color as hex
_getDefaultColorAsHex() {
  const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--uvc-info-text-color').trim();
  if (defaultColor.startsWith('#')) {
    return defaultColor;
  } else if (defaultColor.startsWith('rgb')) {
    const rgb = defaultColor.match(/\d+/g);
    return `#${parseInt(rgb[0]).toString(16).padStart(2, '0')}${parseInt(rgb[1]).toString(16).padStart(2, '0')}${parseInt(rgb[2]).toString(16).padStart(2, '0')}`;
  } else {
    return '#808080'; // Fallback color if unable to determine
  }
}

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
        <ha-card style="background-color: var(--uvc-card-background);">
      <div class="vehicle-card-content">
        ${this._renderHeader()}
        ${this._renderCarState()}
        ${this._renderVehicleImage()}
        <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
          ${this._renderIconGrid()}
        </div>
        ${this._renderVehicleInfo()}
      </div>
    </ha-card>
    `;
  }

_renderVehicleInfo() {
  const { vehicle_type } = this.config;
  
  switch(vehicle_type) {
    case 'EV':
      return this._renderEVInfo();
    case 'Fuel':
      return this._renderFuelInfo();
    case 'Hybrid':
      return this._renderHybridInfo();
    default:
      return html`<div class="error">Invalid vehicle type</div>`;
  }
}

_renderEVInfo() {
  const batteryLevelEntity = this.config.battery_level_entity ? this.hass.states[this.config.battery_level_entity] : null;
  const batteryRangeEntity = this.config.battery_range_entity ? this.hass.states[this.config.battery_range_entity] : null;
  const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
  const chargeLimitEntity = this.config.charge_limit_entity ? this.hass.states[this.config.charge_limit_entity] : null;

  const batteryLevel = batteryLevelEntity ? Math.round(parseFloat(batteryLevelEntity.state)) : null;
  const batteryRange = batteryRangeEntity ? this._formatRange(batteryRangeEntity.state, batteryRangeEntity.attributes.unit_of_measurement) : null;
  const isCharging = this._isCharging(chargingStatusEntity);
  const chargeLimit = chargeLimitEntity && this.config.show_charge_limit ? Math.round(parseFloat(chargeLimitEntity.state)) : null;

  return html`
    <div class="level-info">
      ${this.config.show_battery && batteryLevel !== null ? html`
        <div class="item_bar">
          <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${batteryLevel}%;"></div>
          ${chargeLimit !== null ? html`
            <div class="charge-limit-indicator" style="left: ${chargeLimit}%;"></div>
          ` : ''}
        </div>
        <div class="level-text">
          <span style="color: var(--uvc-percentage-text-color);">${batteryLevel}% ${isCharging ? 'Charging' : 'Charge'}</span>
          ${this.config.show_battery_range && batteryRange !== null ? html`
            <span class="range">${batteryRange}</span>
          ` : ''}
        </div>
      ` : this.config.show_battery_range && batteryRange !== null ? html`
        <div class="level-text">
          <span class="range" style="float: right;">${batteryRange}</span>
        </div>
      ` : ''}
    </div>
  `;
}
_formatRange(value, unit) {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return value;
  
  const formattedValue = this._formatNumberWithCommas(Math.round(numValue));
  
  if (unit === 'km' && numValue > 1000) {
    return `${this._formatNumberWithCommas(Math.round(numValue / 100) / 10)} k${unit}`;
  } else {
    return `${formattedValue} ${unit}`;
  }
}

_formatNumberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  
  _isCharging(chargingStatusEntity) {
    if (!chargingStatusEntity) return false;
  
    const state = chargingStatusEntity.state.toLowerCase();
    const entityId = chargingStatusEntity.entity_id.toLowerCase();
  
    // Special handling for 'none_charging' entities
    if (entityId.includes('none_charging')) {
      return state === 'on';  // 'on' means charging for this specific entity
    }
  
    // Handle boolean entities
    if (chargingStatusEntity.attributes.device_class === 'battery_charging' || ['on', 'off'].includes(state)) {
      return state === 'on';
    }
  
    // Handle string-based entities
    const chargingStates = ['charging', 'in_charging', 'charge_start', 'in_progress', 'active', 'connected'];
    return chargingStates.includes(state);
  }


_formatBinarySensorState(state, attributes) {
  if (state === 'on') {
    return attributes.device_class ? this._capitalizeFirstLetter(attributes.device_class) : 'On';
  } else if (state === 'off') {
    return attributes.device_class ? `Not ${this._capitalizeFirstLetter(attributes.device_class)}` : 'Off';
  }
  return this._capitalizeFirstLetter(state);
}

_renderFuelInfo() {
  const fuelLevelEntity = this.config.fuel_level_entity ? this.hass.states[this.config.fuel_level_entity] : null;
  const fuelRangeEntity = this.config.fuel_range_entity ? this.hass.states[this.config.fuel_range_entity] : null;
  const engineOnEntity = this.config.engine_on_entity ? this.hass.states[this.config.engine_on_entity] : null;

  const fuelLevel = fuelLevelEntity ? parseFloat(fuelLevelEntity.state) : null;
  const fuelRange = fuelRangeEntity ? this._formatRange(fuelRangeEntity.state, fuelRangeEntity.attributes.unit_of_measurement) : null;
  const isEngineOn = this._isEngineOn(engineOnEntity);

  return html`
    <div class="level-info">
      ${this.config.show_fuel && fuelLevel !== null ? html`
        <div class="item_bar">
          <div class="progress ${isEngineOn ? 'engine-on' : ''}" style="width: ${fuelLevel}%;"></div>
        </div>
        <div class="level-text">
          <span style="color: var(--uvc-percentage-text-color);">${fuelLevel}% ${isEngineOn ? 'Engine On' : 'Fuel'}</span>
          ${this.config.show_fuel_range && fuelRange !== null ? html`
            <span class="range">${fuelRange}</span>
          ` : ''}
        </div>
      ` : this.config.show_fuel_range && fuelRange !== null ? html`
        <div class="level-text">
          <span class="range" style="float: right;">${fuelRange}</span>
        </div>
      ` : ''}
    </div>
  `;
}

_isEngineOn(engineOnEntity) {
  if (!engineOnEntity) return false;

  const state = engineOnEntity.state.toLowerCase();
  return ['on', 'running', 'true'].includes(state);
}

_renderHybridInfo() {
  const batteryLevelEntity = this.config.battery_level_entity ? this.hass.states[this.config.battery_level_entity] : null;
  const batteryRangeEntity = this.config.battery_range_entity ? this.hass.states[this.config.battery_range_entity] : null;
  const fuelLevelEntity = this.config.fuel_level_entity ? this.hass.states[this.config.fuel_level_entity] : null;
  const fuelRangeEntity = this.config.fuel_range_entity ? this.hass.states[this.config.fuel_range_entity] : null;
  const chargingStatusEntity = this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null;
  const chargeLimitEntity = this.config.charge_limit_entity ? this.hass.states[this.config.charge_limit_entity] : null;

  const batteryLevel = batteryLevelEntity ? parseFloat(batteryLevelEntity.state) : null;
  const batteryRange = batteryRangeEntity ? this._formatRange(batteryRangeEntity.state, batteryRangeEntity.attributes.unit_of_measurement) : null;
  const fuelLevel = fuelLevelEntity ? parseFloat(fuelLevelEntity.state) : null;
  const fuelRange = fuelRangeEntity ? this._formatRange(fuelRangeEntity.state, fuelRangeEntity.attributes.unit_of_measurement) : null;
  const isCharging = this._isCharging(chargingStatusEntity);
  const chargeLimit = chargeLimitEntity && this.config.show_charge_limit ? parseFloat(chargeLimitEntity.state) : null;
  

  const batteryFirst = this.config.hybrid_display_order === 'battery_first';

  return html`
    <div class="level-info hybrid">
      ${batteryFirst ? html`
        ${this._renderBatteryBar(batteryLevel, batteryRange, isCharging, chargeLimit)}
        <div class="hybrid-separator"></div>
        ${this._renderFuelBar(fuelLevel, fuelRange)}
      ` : html`
        ${this._renderFuelBar(fuelLevel, fuelRange)}
        <div class="hybrid-separator"></div>
        ${this._renderBatteryBar(batteryLevel, batteryRange, isCharging, chargeLimit)}
      `}
    </div>
  `;
}

_renderBatteryBar(level, range, isCharging, chargeLimit) {
  return html`
    ${this.config.show_battery && level !== null ? html`
      <div class="item_bar">
        <div class="progress ${isCharging ? 'charging' : ''}" style="width: ${level}%;"></div>
        ${chargeLimit !== null ? html`
          <div class="charge-limit-indicator" style="left: ${chargeLimit}%;"></div>
        ` : ''}
      </div>
      <div class="level-text">
        <span style="color: var(--uvc-percentage-text-color);">${level}% ${isCharging ? 'Charging' : 'Charge'}</span>
        ${this.config.show_battery_range && range !== null ? html`
          <span class="range">${range}</span>
        ` : ''}
      </div>
    ` : this.config.show_battery_range && range !== null ? html`
      <div class="level-text">
        <span class="range" style="float: right;">${range}</span>
      </div>
    ` : ''}
  `;
}

_renderFuelBar(level, range) {
  return html`
    ${this.config.show_fuel && level !== null ? html`
      <div class="item_bar">
        <div class="progress" style="width: ${level}%;"></div>
      </div>
      <div class="level-text">
        <span style="color: var(--uvc-percentage-text-color);">${level}% Fuel</span>
        ${this.config.show_fuel_range && range !== null ? html`
          <span class="range">${range}</span>
        ` : ''}
      </div>
    ` : this.config.show_fuel_range && range !== null ? html`
      <div class="level-text">
        <span class="range" style="float: right;">${range}</span>
      </div>
    ` : ''}
  `;
}

  _renderHeader() {
    return html`
       <h2 class="vehicle-name">${this.config.title}</h2>
    ${this._renderInfoLine()}
    `;
  }

  _renderCarState() {
    if (!this.config.show_car_state || !this.config.car_state_entity) return '';
  
    const carStateEntity = this.hass.states[this.config.car_state_entity];
    if (!carStateEntity) return '';
  
    const state = this._formatCarState(carStateEntity.state, carStateEntity.attributes);
  
    return html`
      <div class="car-state clickable" style="text-align: center; margin-bottom: 8px;" @click="${() => this._showMoreInfo(this.config.car_state_entity)}">
        <span class="state-value">${state}</span>
      </div>
    `;
  }
  
  
_formatCarState(state, attributes) {
  return state; // Return the state without any modifications
}

_formatChargingEndTime(isoString) {
  const endTime = new Date(isoString);
  const now = new Date();

  // Check if the date is valid
  if (isNaN(endTime.getTime())) {
    return `Charging end time: ${isoString}`; // Fallback to display the original string
  }

  const diffMs = endTime - now;
  const diffHours = Math.round(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.round(diffMs / (1000 * 60));

  if (diffMinutes <= 0) {
    return "Charging ending soon";
  } else if (diffMinutes < 60) {
    return `Charging ending in ${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
  } else if (diffHours < 24) {
    return `Charging ending in ${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
  } else {
    const options = { weekday: 'short', hour: 'numeric', minute: 'numeric' };
    return `Charging until ${endTime.toLocaleString(undefined, options)}`;
  }
}

_renderInfoLine() {
  const locationEntity = this.config.location_entity ? this.hass.states[this.config.location_entity] : null;
  let location = null;

  if (locationEntity) {
    location = this._formatLocationState(locationEntity.state);
  }

  const mileageEntity = this.config.mileage_entity ? this.hass.states[this.config.mileage_entity] : null;
  let mileage = null;
  if (mileageEntity) {
    const value = parseFloat(mileageEntity.state);
    const unit = mileageEntity.attributes.unit_of_measurement || '';
    mileage = this._formatRange(value, unit);
  }

  if (!this.config.show_location && !this.config.show_mileage) return '';

  const infoTextColor = `var(--uvc-info-text-color, var(--secondary-text-color))`;

  return html`
    <div class="info-line">
      ${this.config.show_location && location ? html`
        <span class="location clickable" @click="${() => this._showMoreInfo(this.config.location_entity)}">
          <ha-icon icon="mdi:map-marker" style="color: ${infoTextColor};"></ha-icon>
          ${location}
        </span>
      ` : ''}
      ${this.config.show_mileage && mileage ? html`
        <span class="mileage clickable" @click="${() => this._showMoreInfo(this.config.mileage_entity)}">
          <ha-icon icon="mdi:speedometer" style="color: ${infoTextColor};"></ha-icon>
          ${mileage}
        </span>
      ` : ''}
    </div>
  `;
}


_formatLocationState(state) {
  // Check for "not_home" (case insensitive) and replace with "Away"
  if (state.toLowerCase() === 'not_home') {
    return 'Away';
  }

  // For other states, replace underscores with spaces
  return state.replace(/_/g, ' ');
}

_renderVehicleImage() {
  const isCharging = this._isCharging(this.config.charging_status_entity ? this.hass.states[this.config.charging_status_entity] : null);
  const imageUrl = isCharging ? this.config.charging_image_url : this.config.image_url;

  return html`
    <div class="vehicle-image-container">
      <img class="vehicle-image" src="${imageUrl}" alt="Vehicle Image" @error="${this._handleImageError}">
    </div>
  `;
}

_handleImageError(e) {
  console.error('Error loading image:', e.target.src);
  e.target.src = 'https://github.com/user-attachments/assets/4ef72288-5ee9-4fa6-b2f3-c34c4160cf42';
}

  _renderIconGrid() {
    const { icon_grid_entities, row_separators } = this.config;
  
    if (!icon_grid_entities || icon_grid_entities.length === 0) {
      return '';
    }
  
    const rows = [];
    let currentRow = [];
    let currentIconGap = this.config.icon_gap || 20;
    let currentAlignment = { horizontal: 'center', vertical: 'middle' };
  
    icon_grid_entities.forEach((entityId, index) => {
      if (entityId === 'row-separator') {
        if (currentRow.length > 0) {
          rows.push(html`
            <div class="icon-grid" style="
              gap: ${currentIconGap}px;
              justify-content: ${currentAlignment.horizontal === 'left' ? 'flex-start' : currentAlignment.horizontal === 'right' ? 'flex-end' : 'center'};
              align-items: ${currentAlignment.vertical === 'top' ? 'flex-start' : currentAlignment.vertical === 'bottom' ? 'flex-end' : 'center'};
            ">
              ${currentRow.map(entityId => this._renderIcon(entityId))}
            </div>
          `);
          currentRow = [];
        }
        const separatorConfig = row_separators?.[index] || {};
        const separatorHeight = separatorConfig.height;
        if (separatorHeight !== 0) {
          rows.push(html`
            <div class="row-separator" style="
              height: ${separatorHeight}px;
              background-color: ${separatorConfig.color || 'var(--uvc-info-text-color)'};
            "></div>
          `);
        }
        currentAlignment = {
          horizontal: separatorConfig.horizontalAlignment || 'center',
          vertical: separatorConfig.verticalAlignment || 'middle'
        };
        currentIconGap = separatorConfig.icon_gap || 20;
      } else {
        currentRow.push(entityId);
      }
    });
  
    if (currentRow.length > 0) {
      rows.push(html`
        <div class="icon-grid" style="
          gap: ${currentIconGap}px;
          justify-content: ${currentAlignment.horizontal === 'left' ? 'flex-start' : currentAlignment.horizontal === 'right' ? 'flex-end' : 'center'};
          align-items: ${currentAlignment.vertical === 'top' ? 'flex-start' : currentAlignment.vertical === 'bottom' ? 'flex-end' : 'center'};
        ">
          ${currentRow.map(entityId => this._renderIcon(entityId))}
        </div>
      `);
    }
  
    return html`${rows}`;
  }
  
  _renderIcon(entityId) {
    const state = this.hass.states[entityId];
    if (!state) return html``;

    const customIcon = this.config.custom_icons?.[entityId] || {};
    const isActive = this._getIconActiveState(entityId);
    const defaultIcon = 'mdi:help-circle';  // Default icon if none is specified
    const activeIcon = customIcon.active === 'no-icon' ? '' : (customIcon.active || state.attributes.icon || defaultIcon);
    const inactiveIcon = customIcon.inactive === 'no-icon' ? '' : (customIcon.inactive || state.attributes.icon || defaultIcon);
    const icon = isActive ? activeIcon : inactiveIcon;
    const color = this._getIconColor(entityId, isActive);
    const iconSize = this.config.icon_sizes?.[entityId] || this.config.icon_size || 24;
    const buttonStyle = this.config.icon_styles?.[entityId] || 'icon';
    const labelPosition = this.config.icon_labels?.[entityId] || 'none';
    const labelText = state.state;

    // Calculate label size based on icon size
    const labelSize = iconSize > 28 ? Math.round(iconSize * 0.5) : 14;

    // Determine if we should render anything
    const shouldRender = icon !== '';

    if (shouldRender) {
      return html`
        <div class="icon-wrapper ${buttonStyle} label-${labelPosition}" style="--icon-size: ${iconSize}px; --label-size: ${labelSize}px; --label-color: ${color};">
          ${this._renderLabel(labelText, labelPosition, 'before', isActive, customIcon)}
          ${icon ? html`
            <ha-icon
              icon="${icon}"
              style="--mdc-icon-size: ${iconSize}px; color: ${color};"
              @click="${() => this._handleIconClick(entityId)}"
            ></ha-icon>
          ` : ''}
          ${this._renderLabel(labelText, labelPosition, 'after', isActive, customIcon)}
        </div>
      `;
    }
    return html``;
  }

  _renderLabel(text, position, renderPosition, isActive, customIcon) {
    if (position === 'none') return html``;
  
    const shouldRenderLabel = isActive || customIcon.inactive !== 'no-icon';
  
    if (shouldRenderLabel &&
        ((renderPosition === 'before' && (position === 'left' || position === 'top')) ||
         (renderPosition === 'after' && (position === 'right' || position === 'bottom')))) {
      return html`<span class="icon-label">${text}</span>`;
    }
  
    return html``;
  }

  _getIconActiveState(entityId) {
    const state = this.hass.states[entityId];
    if (!state) return false;
    const stateStr = state.state.toLowerCase();
  
    // Handle boolean entities
    if (['0', '1', 'on', 'off', 'true', 'false'].includes(stateStr)) {
      return ['1', 'on', 'true'].includes(stateStr);
    }
  
    // Handle other types of entities
    return ['on', 'open', 'unlocked'].includes(stateStr);
  }

  _getIconColor(entityId, isActive) {
    const customIcon = this.config.custom_icons && this.config.custom_icons[entityId];
    if (customIcon) {
      return isActive 
        ? customIcon.activeColor || this.config.iconActiveColor || 'var(--primary-color)'
        : customIcon.inactiveColor || this.config.iconInactiveColor || 'var(--primary-text-color)';
    }
    return isActive
      ? this.config.iconActiveColor || 'var(--primary-color)'
      : this.config.iconInactiveColor || 'var(--primary-text-color)';
  }

  _handleIconClick(entityId) {
    const interaction = this.config.icon_interactions[entityId] || {};
    switch (interaction.type) {
      case 'more-info':
        this._fireEvent('hass-more-info', { entityId });
        break;
      case 'toggle':
        this.hass.callService('homeassistant', 'toggle', { entity_id: entityId });
        break;
      case 'navigate':
        this._navigate(interaction.path);
        break;
      case 'url':
        this._openUrl(interaction.url);
        break;
      case 'call-service':
        this._callService(interaction.service, entityId);
        break;
      case 'assist':
        this._openAssistant(interaction.assistant, interaction.startListening);
        break;
      case 'trigger':
        this._triggerEntity(entityId);
        break;
      case 'none':
        // Do nothing
        break;
    }
  }

  _triggerEntity(entityId) {
    const domain = entityId.split('.')[0];
    let service = 'turn_on';

    switch (domain) {
      case 'automation':
        service = 'trigger';
        break;
      case 'script':
        service = 'turn_on';
        break;
      // Add more cases here for other entity types that might need special handling
    }

    this.hass.callService(domain, service, { entity_id: entityId });
  }

  _fireEvent(type, detail) {
    const event = new Event(type, {
      bubbles: true,
      composed: true,
      cancelable: false,
    });
    event.detail = detail;
    this.dispatchEvent(event);
  }

  _navigate(path) {
    history.pushState(null, "", path);
    const event = new Event('location-changed', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _openUrl(url) {
    window.open(url, '_blank');
  }

  _callService(service, entityId) {
    const [domain, serviceAction] = service.split('.');
    this.hass.callService(domain, serviceAction, { entity_id: entityId });
  }

  _openAssistant(assistantId, startListening) {
    this._fireEvent('show-dialog', {
      dialogTag: 'dialog-voice-command',
      dialogImport: () => import('../../dialogs/dialog-voice-command'),
      dialogParams: {
        assistantId: assistantId,
        startListening: startListening,
      },
    });
  }

  _showMoreInfo(entityId) {
    const event = new Event('hass-more-info', {
      bubbles: true,
      composed: true,
    });
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  _toggleEntity(entityId) {
    this.hass.callService('homeassistant', 'toggle', {
      entity_id: entityId,
    });
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static getConfigElement() {
    return document.createElement("ultra-vehicle-card-editor");
  }

  static getStubConfig() {
    return {
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
      show_battery: true,
      show_battery_range: true,
      show_fuel: true,
      show_fuel_range: true,
      show_location: true,
      show_mileage: true,
      icon_grid_entities: [],
      custom_icons: {},
      hybrid_display_order: 'fuel_first',
      car_state_entity: "",
      charge_limit_entity: "",
      show_car_state: true,
      show_charge_limit: true,
      cardBackgroundColor: "",
      barBackgroundColor: "",
      barFillColor: "",
      limitIndicatorColor: "",
      iconActiveColor: "",
      iconInactiveColor: "",
      carStateTextColor: "",
      rangeTextColor: "",
      percentageTextColor: "",
      icon_sizes: {},
      icon_labels: {}
    };
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('config') || changedProps.has('hass')) {
      const style = getComputedStyle(this);
      const primaryColor = style.getPropertyValue('--primary-color').trim();
      const cardBackground = style.getPropertyValue('--card-background-color').trim();
      const primaryTextColor = style.getPropertyValue('--primary-text-color').trim();
      const secondaryTextColor = style.getPropertyValue('--secondary-text-color').trim();
      
      this.style.setProperty('--uvc-primary-color', this.config.barFillColor || primaryColor);
      this.style.setProperty('--uvc-card-background', this.config.cardBackgroundColor || cardBackground);
      this.style.setProperty('--uvc-bar-background', this.config.barBackgroundColor || secondaryTextColor);
      this.style.setProperty('--uvc-bar-border-color', this.config.barBorderColor || secondaryTextColor);
      this.style.setProperty('--uvc-limit-indicator', this.config.limitIndicatorColor || primaryTextColor);
      this.style.setProperty('--uvc-icon-active', this.config.iconActiveColor || primaryColor);
      this.style.setProperty('--uvc-icon-inactive', this.config.iconInactiveColor || primaryTextColor);
      this.style.setProperty('--uvc-info-text-color', this.config.infoTextColor || secondaryTextColor);
      this.style.setProperty('--uvc-icon-grid-size', `${this.config.icon_size}px`);
      this.style.setProperty('--mdc-icon-size', `${this.config.icon_size}px`);
      this.style.setProperty('--uvc-car-state-text-color', this.config.carStateTextColor || primaryTextColor);
      this.style.setProperty('--uvc-range-text-color', this.config.rangeTextColor || primaryTextColor);
      this.style.setProperty('--uvc-percentage-text-color', this.config.percentageTextColor || primaryTextColor);
      
      const rgb = this._hexToRgb(primaryTextColor);
      this.style.setProperty('--rgb-primary-text-color', rgb);
      this.style.setProperty('--uvc-icon-background', `rgba(${rgb}, 0.10)`);
    }
  }

  _hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",
  preview: true,
  documentationURL: "https://github.com/WJDDesigns/Ultra-Vehicle-Card",
  version: version
});

// Add this code to log the version in the console with custom styling
console.info(
  `%c Ultra Vehicle Card%c  ${version} `,
  'background-color: #4299D9;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
  'background-color: #4299D9;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);

// Add this code to style the card in the browser console
const style = document.createElement('style');
style.textContent = `
  #current_version_ultra-vehicle-card {
    background-color: #4299D9 !important;
    color: white !important;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 4px;
  }
`;
document.head.appendChild(style);
