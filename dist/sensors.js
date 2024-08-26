export function formatEntityValue(entity, useFormattedEntities, hass, localize) {
  if (!entity || !hass) return null;


  // If formatting is not enabled, return the state as-is
  if (!useFormattedEntities) {
    return entity.state;
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
  const numericMatch = translatedState.match(/^([\d,]+(?:\.\d+)?)\s*(.*)$/);
  if (numericMatch) {
    const numericValue = parseFloat(numericMatch[1].replace(/,/g, ''));
    const unit = numericMatch[2];
    const roundedValue = Math.round(numericValue);
    const formattedValue = roundedValue.toLocaleString('en-US');
    return `${formattedValue} ${unit}`.trim();
  }

  // For all other entities, return the translated state
  return translatedState;
}

function formatBinaryState(state, attributes, hass, localize) {
  const isOn = state.toLowerCase() === 'on';
  if (attributes.device_class) {
    const key = `state.${attributes.device_class}.${isOn ? 'on' : 'off'}`;
    return hass.localize(`component.binary_sensor.${key}`) || localize(key) || (isOn ? 'On' : 'Off');
  }
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

function formatSensorState(state, attributes) {
  if (isISODateString(state)) {
    return formatChargingEndTime(state);
  }
  if (!isNaN(parseFloat(state))) {
    // Remove trailing zeros and decimal point if necessary
    return formatNumberWithCommas(parseFloat(state).toFixed(0));
  }
  return formatGenericState(state);
}

function formatGenericState(state) {
  // Convert snake_case to Title Case
  return state.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getIconActiveState(entityId, hass) {
  const state = hass.states[entityId];
  if (!state) return false;
  const stateStr = state.state.toLowerCase();

  // Always consider mileage/odometer/range entities as inactive
  if (entityId.includes('odometer') || entityId.includes('mileage') || entityId.includes('range')) {
    return false;
  }

  // Handle boolean entities
  if (["on", "off", "true", "false"].includes(stateStr)) {
    return ["on", "true"].includes(stateStr);
  }

  // Handle charging status specifically
  if (state.attributes.device_class === "battery_charging") {
    return stateStr === "on" || stateStr === "charging";
  }

  // Handle other types of entities
  if (["open", "unlocked", "charging", "connected"].includes(stateStr)) {
    return true;
  }

  // Handle specific inactive states
  if (["closed", "locked", "not_charging", "disconnected"].includes(stateStr)) {
    return false;
  }

  // Handle numeric values (consider non-zero as active, except for range/mileage)
  const numericValue = parseFloat(stateStr.replace(/,/g, ''));
  if (!isNaN(numericValue)) {
    // Check if the entity is related to range or mileage
    if (entityId.includes('range') || entityId.includes('mileage')) {
      return false;
    }
    return numericValue !== 0;
  }

  // For other cases, consider any non-empty state as active, except for specific inactive states
  return stateStr !== "" && stateStr !== "unavailable" && stateStr !== "unknown" && stateStr !== "off";
}

export function formatBinarySensorState(state, attributes) {
  return state;
}

export function isEngineOn(engineOnEntity) {
  return engineOnEntity && engineOnEntity.state.toLowerCase() === "on";
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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