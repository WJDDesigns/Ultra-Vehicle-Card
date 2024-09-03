export function formatEntityValue(entity, useFormattedEntities, hass, localize, numberFormat, customIcon) {
  if (!entity || !hass) return null;

  // If formatting is not enabled, return the state as-is
  if (!useFormattedEntities) {
    return entity.state;
  }

  // Handle binary sensors
  if (entity.entity_id.startsWith('binary_sensor.')) {
    return formatBinaryState(entity.state, entity.attributes, hass, localize);
  }

  // Use custom icon state if available
  if (customIcon && (customIcon.activeState || customIcon.inactiveState)) {
    const context = {
      value: parseFloat(entity.state) || entity.state,
      state: entity.state,
      attributes: entity.attributes,
    };
    
    const renderTemplate = (template) => {
      if (!hass.templateEngine) {
        console.warn('Template engine not available. Returning raw template.');
        return template;
      }
      try {
        return hass.templateEngine.renderTemplate(template, context);
      } catch (error) {
        console.error('Error rendering template:', error);
        return '';
      }
    };
    
    if (customIcon.activeState) {
      const activeResult = renderTemplate(customIcon.activeState);
      if (activeResult) return activeResult;
    }
    
    if (customIcon.inactiveState) {
      const inactiveResult = renderTemplate(customIcon.inactiveState);
      if (inactiveResult) return inactiveResult;
    }
  }

  // Use Home Assistant's built-in localization for state
  let translatedState = hass.formatEntityState(entity);

  // Special handling for device trackers and location entities
  if (entity.entity_id.split('.')[0] === 'device_tracker' || 
      entity.entity_id.split('.')[0] === 'person' ||
      entity.attributes.device_class === 'presence') {
    const lowerState = translatedState.toLowerCase();
    if (lowerState === 'home' || lowerState === 'not_home' || lowerState === 'away') {
      const formattedState = lowerState === 'home' ? 'Home' : 'Away';
      return formattedState;
    }
  }

  // Handle numeric values with units
  const numericMatch = translatedState.match(/^([\d.,]+)\s*(.*)$/);
  if (numericMatch) {
    const rawValue = numericMatch[1];
    const unit = numericMatch[2];
    
    // Determine the decimal separator from the number format
    const decimalSeparator = numberFormat && numberFormat.includes(',') ? ',' : '.';
    const thousandsSeparator = decimalSeparator === ',' ? '.' : ',';

    // Parse the number correctly based on the format
    const numericValue = parseFloat(rawValue.replace(thousandsSeparator, '').replace(decimalSeparator, '.'));

    // Format the number using the user's preferred format
    const formattedValue = new Intl.NumberFormat(hass.language, {
      style: 'decimal',
      minimumFractionDigits: rawValue.split(decimalSeparator)[1]?.length || 0,
      maximumFractionDigits: rawValue.split(decimalSeparator)[1]?.length || 0,
    }).format(numericValue);

    return `${formattedValue} ${unit}`.trim();
  }

  // For all other entities, return the translated state
  return translatedState;
}

export function formatBinaryState(state, attributes, hass, localize) {
  const isOn = state.toLowerCase() === 'on';
  const deviceClass = attributes.device_class;

  if (deviceClass) {
    const key = `state.${deviceClass}.${isOn ? 'on' : 'off'}`;
    const translatedState = hass.localize(`component.binary_sensor.${key}`) || localize(key);
    if (translatedState && translatedState !== key) {
      return translatedState;
    }

    // Fallback labels for common device classes
    const fallbackLabels = {
      window: isOn ? 'Open' : 'Closed',
      door: isOn ? 'Open' : 'Closed',
      opening: isOn ? 'Open' : 'Closed',
      motion: isOn ? 'Detected' : 'Clear',
      presence: isOn ? 'Home' : 'Away',
      connectivity: isOn ? 'Connected' : 'Disconnected',
    };

    if (fallbackLabels[deviceClass]) {
      return fallbackLabels[deviceClass];
    }
  }
  
  // If no translation is found or no device class, use these default labels
  return isOn ? 'On' : 'Off';
}

function formatDeviceTrackerState(state, attributes) {
  const locationName = attributes.location_name || state;
  if (locationName.toLowerCase() === 'home') {
    return 'Home';
  } else if (locationName.toLowerCase() === 'not_home') {
    return 'Away';
  } else {
    return locationName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

function formatSensorState(state, attributes, locale) {
  if (isISODateString(state)) {
    return formatChargingEndTime(state);
  }
  if (!isNaN(parseFloat(state))) {
    return formatNumberWithCommas(parseFloat(state), locale);
  }
  return formatGenericState(state);
}

function formatGenericState(state) {
  // Convert snake_case to Title Case
  return state.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getIconActiveState(entityId, hass, customIcons) {
  const state = hass.states[entityId];
  if (!state) return false;
  const stateStr = state.state?.toLowerCase() || '';

  // Check custom icon states if defined
  if (customIcons && customIcons[entityId]) {
    const activeState = customIcons[entityId].activeState;
    
    if (activeState) {
      const [attr, value] = activeState.split(':');
      if (attr === 'state') {
        return stateStr === (value || '').toLowerCase();
      } else {
        const attrValue = state.attributes[attr];
        if (attrValue !== undefined) {
          return attrValue.toString().toLowerCase() === (value || '').toLowerCase();
        }
      }
    }
  }

  // Default behavior if no custom state is defined
  return ["on", "home", "open", "active", "heating", "cooling"].includes(stateStr);
}

export function formatBinarySensorState(state, attributes) {
  return state;
}

export function isEngineOn(engineOnEntity) {
  return engineOnEntity && engineOnEntity.state.toLowerCase() === "on";
}

function formatNumberWithCommas(number, locale) {
  return new Intl.NumberFormat(locale).format(number);
}

function isISODateString(value) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(value);
}

function formatChargingEndTime(isoDateString) {
  const date = new Date(isoDateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}