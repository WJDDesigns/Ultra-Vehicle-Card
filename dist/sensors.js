export function formatEntityValue(entity, useFormattedEntities, hass, localize) {
  if (!entity || !hass) return null;

  // If formatting is not enabled, return the state as-is
  if (!useFormattedEntities) {
    return entity.state;
  }

  // Use Home Assistant's built-in formatting functions
  if (typeof hass.formatEntityState === 'function') {
    return hass.formatEntityState(entity);
  }

  // Fallback to basic formatting if Home Assistant functions are not available
  return entity.state;
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

export function getIconActiveState(entityId, hass, config) {
  const state = hass.states[entityId];
  if (!state) return false;
  const stateStr = state.state.toLowerCase();


  // Check custom active and inactive states from config
  const activeState = config.activeState;
  const inactiveState = config.inactiveState;

  if (activeState) {
    if (activeState === 'default') {
      return isActiveState(stateStr);
    } else if (activeState.startsWith('template:')) {
      // ... existing template handling ...
    } else if (activeState.startsWith('attribute:')) {
      const [, attributeName, attributeValue] = activeState.split(':');
      return state.attributes[attributeName] === attributeValue;
    } else if (activeState.startsWith('option:')) {
      return stateStr === activeState.split(':')[1].toLowerCase();
    } else {
      return stateStr === activeState.toLowerCase();
    }
  }

  if (inactiveState) {
    if (inactiveState === 'default') {
      return !isActiveState(stateStr);
    } else if (inactiveState.startsWith('template:')) {
      // ... existing template handling ...
    } else if (inactiveState.startsWith('attribute:')) {
      const [, attributeName, attributeValue] = inactiveState.split(':');
      return state.attributes[attributeName] !== attributeValue;
    } else if (inactiveState.startsWith('option:')) {
      return stateStr !== inactiveState.split(':')[1].toLowerCase();
    } else {
      return stateStr !== inactiveState.toLowerCase();
    }
  }

  // If no custom states are set, use the default behavior
  return isActiveState(stateStr);
}

function isActiveState(state) {
  const activeStates = [
    "on", "active", "open", "connected", "running", "true", "1", "home", "above_horizon", 
    "charging", "full", "yes", "online", "present", 
    "armed", "occupied", "unlocked", "playing", "motion", "engaged", "awake", "detected"
  ];
  return activeStates.includes(state);
}

export function formatBinarySensorState(state, attributes) {
  return state;
}

export function isEngineOn(engineOnEntity) {
  if (!engineOnEntity) return false;

  const state = engineOnEntity.state.toLowerCase();
  const attributes = engineOnEntity.attributes;

  // Check attributes for 'engine_on' status
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (typeof value === 'string' && value.toLowerCase() === 'on') {
        return true;
      }
    }
  }

  // Handle boolean entities
  if (['on', 'off', 'true', 'false'].includes(state)) {
    return state === 'on' || state === 'true';
  }

  // Handle numeric entities
  if (!isNaN(state)) {
    return parseFloat(state) > 0;
  }

  // Handle string-based entities
  const engineOnStates = ['on', 'running', 'active', 'true'];
  return engineOnStates.includes(state);
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