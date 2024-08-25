export function formatEntityValue(entity, useFormattedEntities, hass, localize) {
  if (!entity || !hass) return null;

  console.log('Formatting entity:', entity.entity_id, 'State:', entity.state);

  // If formatting is not enabled, return the state as-is
  if (!useFormattedEntities) {
    console.log('Formatting disabled, returning:', entity.state);
    return entity.state;
  }

  // Use Home Assistant's built-in localization for state
  let translatedState = hass.formatEntityState(entity);
  console.log('Translated state:', translatedState);

  // Special handling for device trackers and location entities
  if (entity.entity_id.split('.')[0] === 'device_tracker' || 
      entity.entity_id.split('.')[0] === 'person' ||
      entity.attributes.device_class === 'presence') {
    const lowerState = translatedState.toLowerCase();
    console.log('Location entity detected, lower state:', lowerState);
    if (lowerState === 'home' || lowerState === 'not_home' || lowerState === 'away') {
      const formattedState = lowerState === 'home' ? 'Home' : 'Away';
      console.log('Returning formatted location state:', formattedState);
      return formattedState;
    }
  }

  // For all other entities, return the translated state
  console.log('Returning translated state:', translatedState);
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
    return formatNumberWithCommas(Math.round(parseFloat(state)));
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

  // Handle boolean entities
  if (["on", "off", "true", "false"].includes(stateStr)) {
    return ["on", "true"].includes(stateStr);
  }

  // Handle charging status specifically
  if (state.attributes.device_class === "battery_charging") {
    return stateStr === "on" || stateStr === "charging";
  }

  // Handle specific cases
  switch (state.attributes.device_class) {
    case "battery":
      return parseFloat(stateStr) > 0;
    case "door":
    case "window":
      return stateStr === "open";
    case "lock":
      return stateStr === "unlocked";
    case "plug":
      return stateStr === "on" || stateStr === "in_use";
    case "connectivity":
      return stateStr === "connected";
    default:
      // For other cases, only consider explicitly active states
      return ["on", "open", "unlocked", "charging", "connected"].includes(stateStr);
  }
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