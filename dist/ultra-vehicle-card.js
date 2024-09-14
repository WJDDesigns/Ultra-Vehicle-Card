import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { version, setVersion } from "./version.js?v=14";
setVersion("V1.6.1-beta1");

const sensorModule = await import("./sensors.js?v=" + version);
const { formatEntityValue, getIconActiveState, formatBinarySensorState, isEngineOn } = sensorModule;

const UltraVehicleCardEditor = await import(
  "./ultra-vehicle-card-editor.js?v=" + version
);
const stl = await import("./styles.js?v=" + version);
const loc = await import("./localize.js?v=" + version);
const styles = stl.styles;
const localize = loc.localize;

class UltraVehicleCard extends localize(LitElement) {
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
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      show_car_state: true,
      show_charge_limit: true,
      cardBackgroundColor: "",
      barBackgroundColor: "",
      barFillColor: "",
      limitIndicatorColor: "",
      iconActiveColor: UltraVehicleCard._getComputedColor("--primary-color"),
      iconInactiveColor: UltraVehicleCard._getComputedColor(
        "--primary-text-color"
      ),
      carStateTextColor: "",
      rangeTextColor: "",
      percentageTextColor: "",
      icon_sizes: {},
      icon_labels: {},
      useFormattedEntities: false,
      mainImageHeight: '180px',
      chargingImageHeight: '180px',
      layoutType: "single",
    };
  }

  static _getComputedColor(variable) {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(variable).trim();
    if (value.startsWith("#")) {
      return value;
    } else if (value.startsWith("rgb")) {
      const rgb = value.match(/\d+/g);
      return `#${parseInt(rgb[0]).toString(16).padStart(2, "0")}${parseInt(
        rgb[1]
      )
        .toString(16)
        .padStart(2, "0")}${parseInt(rgb[2]).toString(16).padStart(2, "0")}`;
    }
    return "#808080"; // Fallback color if unable to determine
  }

  setConfig(config) {
    console.log("UltraVehicleCard setConfig called with:", JSON.stringify(config, null, 2));
    if (!config) {
      throw new Error("Invalid configuration");
    }
    // Create a new config object with default values
    const defaultHeight = config.layoutType === 'double' ? '62px' : '180px';
    this.config = {
      title: config.title || "My Vehicle",
      image_url: "",
      charging_image_url: "",
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
      showTitle: config.showTitle !== false,
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
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      icon_size: 24,
      icon_gap: 12,
      mainImageHeight: config.mainImageHeight || defaultHeight,
      chargingImageHeight: config.chargingImageHeight || defaultHeight,
      layoutType: config.layoutType || "single",
      ...config,  // Spread the provided config to override defaults
      activeState: config.activeState || '',
      inactiveState: config.inactiveState || '',
    };
    console.log("UltraVehicleCard config after setConfig:", JSON.stringify(this.config, null, 2));
    this._updateStyles();
    this._updateIconBackground();
    this._updateImageHeights();
    this.requestUpdate();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      console.log("UltraVehicleCard config updated:", JSON.stringify(this.config, null, 2));
      this._updateStyles();
      this._updateIconBackground();
      this._updateImageHeights();
    }
  }

  // Add this method to validate entity configurations
  _validateEntityConfig(entityKey, urlType) {
    if (urlType === "entity" && !this.config[entityKey]) {
      console.warn(
        `${entityKey} is set to use an entity, but no entity is specified.`
      );
    }
  }

  // Add this method to get the default color as hex
  _getDefaultColorAsHex() {
    const defaultColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--uvc-info-text-color")
      .trim();
    if (defaultColor.startsWith("#")) {
      return defaultColor;
    } else if (defaultColor.startsWith("rgb")) {
      const rgb = defaultColor.match(/\d+/g);
      return `#${parseInt(rgb[0]).toString(16).padStart(2, "0")}${parseInt(
        rgb[1]
      )
        .toString(16)
        .padStart(2, "0")}${parseInt(rgb[2]).toString(16).padStart(2, "0")}`;
    } else {
      return "#808080"; // Fallback color if unable to determine
    }
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }
    console.log("Rendering UltraVehicleCard with config:", JSON.stringify(this.config, null, 2));

    return html`
      <ha-card
        class="ultra-vehicle-card ${this.config.layoutType === 'double' ? 'double-column' : ''}"
      >
        ${this.config.layoutType === 'double' ? this._renderDoubleColumnLayout() : this._renderSingleColumnLayout()}
      </ha-card>
    `;
  }

  _renderSingleColumnLayout() {
    return html`
      ${this._renderHeader()} ${this._renderCarState()}
      ${this._renderVehicleImage()}
      <div
        style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;"
      >
        ${this._renderIconGrid()}
      </div>
      ${this._renderVehicleInfo()}
    `;
  }

  _renderDoubleColumnLayout() {
    return html`
      <div class="ultra-vehicle-card">
        <div class="double-column-container">
          <div class="top-row">
            <div class="left-column">
              ${this._renderVehicleImage()}
            </div>
            <div class="right-column">
              ${this._renderHeader()}
              ${this._renderCarState()}
            </div>
          </div>
          <div class="full-width-column">
            ${this._renderIconGrid()}
            ${this._renderVehicleInfo()}
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      ${styles}
      .ultra-vehicle-card {
        padding: 16px;
      }
      .double-column-container {
        display: flex;
        flex-direction: column;
      }
      .top-row {
        display: flex;
        flex-direction: row;
        align-items: center; /* Vertically center items */
      }
      .left-column {
        flex: 1;
        padding-right: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .right-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; /* Horizontally center items */
      }
      .right-column > * {
        width: 100%; /* Ensure child elements take full width */
        text-align: center; /* Center text within child elements */
      }
      .full-width-column {
        width: 100%;
      }
      .vehicle-image {
        width: 100%;
        height: var(--vehicle-image-height, 180px);
        border-radius: var(--ha-card-border-radius, 4px);
      }
      .charging-image {
        width: 100%;
        height: var(--vehicle-charging-image-height, 180px);
        border-radius: var(--ha-card-border-radius, 4px);
        object-fit: contain;
      }
      .double-column-container .vehicle-name {
        margin-bottom: 12px;
        margin-top: 0px;
      }
    `;
  }

  _renderVehicleInfo() {
    const { vehicle_type } = this.config;

    switch (vehicle_type) {
      case "EV":
        return this._renderEVInfo();
      case "Fuel":
        return this._renderFuelInfo();
      case "Hybrid":
        return this._renderHybridInfo();
      default:
        return html`<div class="error">
          ${this.localize("common.invalid_vehicle_type")}
        </div>`;
    }
  }

  _renderEVInfo() {
    const batteryLevelEntity = this.config.battery_level_entity
      ? this.hass.states[this.config.battery_level_entity]
      : null;
    const batteryRangeEntity = this.config.battery_range_entity
      ? this.hass.states[this.config.battery_range_entity]
      : null;
    const chargingStatusEntity = this.config.charging_status_entity
      ? this.hass.states[this.config.charging_status_entity]
      : null;
    const chargeLimitEntity = this.config.charge_limit_entity
      ? this.hass.states[this.config.charge_limit_entity]
      : null;

    const batteryLevel = this._getValueFromEntityOrAttributes(
      batteryLevelEntity,
      ["battery_level", "level"]
    );
    const batteryRange = formatEntityValue(
      batteryRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const isCharging = this._isCharging(chargingStatusEntity);
    const chargeLimit = this.config.show_charge_limit
      ? this._getValueFromEntityOrAttributes(chargeLimitEntity, [
          "charge_limit",
        ])
      : null;

    return html`
      <div class="level-info">
        ${this.config.show_battery && batteryLevel !== null
          ? html`
              <div
                class="item_bar clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.battery_level_entity)}"
              >
                <div
                  class="progress ${isCharging ? "charging" : ""}"
                  style="width: ${batteryLevel}%;"
                ></div>
                ${chargeLimit !== null
                  ? html`
                      <div
                        class="charge-limit-indicator"
                        style="left: ${chargeLimit}%;"
                      ></div>
                    `
                  : ""}
              </div>
              <div class="level-text">
                <span
                  class="clickable"
                  @click="${() =>
                    this._handleMoreInfo(this.config.battery_level_entity)}"
                >
                  <span style="color: var(--uvc-percentage-text-color);"
                    >${batteryLevel}%</span
                  >
                  <span
                    >&nbsp;${isCharging
                      ? this.localize("common.charging")
                      : this.localize("common.battery")}</span
                  >
                </span>
                ${this.config.show_battery_range &&
                this.config.battery_range_entity &&
                batteryRange !== null
                  ? html`
                      <span
                        class="range clickable"
                        @click="${() =>
                          this._handleMoreInfo(
                            this.config.battery_range_entity
                          )}"
                        >${this.localize("common.range")}: ${batteryRange}</span
                      >
                    `
                  : ""}
              </div>
            `
          : this.config.show_battery_range &&
            this.config.battery_range_entity &&
            batteryRange !== null
          ? html`
              <div class="level-text">
                <span
                  class="range clickable"
                  @click="${() =>
                    this._handleMoreInfo(this.config.battery_range_entity)}"
                  >${this.localize("common.range")}: ${batteryRange}</span
                >
              </div>
            `
          : ""}
      </div>
    `;
  }

  _getValueFromEntityOrAttributes(entity, attributeNames) {
    if (!entity) return null;

    // Check attributes first
    for (const attr of attributeNames) {
      if (entity.attributes[attr] !== undefined) {
        return this._roundNumber(parseFloat(entity.attributes[attr]));
      }
    }

    // Fallback to state
    return this._roundNumber(parseFloat(entity.state));
  }

  _roundNumber(value) {
    // Round to the nearest integer
    return Math.round(value).toString();
  }

  _isCharging(chargingStatusEntity) {
    if (!chargingStatusEntity) return false;

    const state = chargingStatusEntity.state.toLowerCase();
    const entityId = chargingStatusEntity.entity_id.toLowerCase();
    const attributes = chargingStatusEntity.attributes;

    // Check attributes for 'charging' status
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        if (typeof value === "string" && value.toLowerCase() === "charging") {
          return true;
        }
      }
    }

    // Special handling for 'none_charging' entities
    if (entityId.includes("none_charging")) {
      return state === "on"; // 'on' means charging for this specific entity
    }

    // Handle boolean entities
    if (
      chargingStatusEntity.attributes.device_class === "battery_charging" ||
      ["on", "off"].includes(state)
    ) {
      return state === "on";
    }

    // Handle string-based entities
    const chargingStates = [
      "charging",
      "in_charging",
      "charge_start",
      "in_progress",
      "active",
      "connected",
    ];
    return chargingStates.includes(state);
  }

  _renderFuelInfo() {
    const fuelLevelEntity = this.config.fuel_level_entity
      ? this.hass.states[this.config.fuel_level_entity]
      : null;
    const fuelRangeEntity = this.config.fuel_range_entity
      ? this.hass.states[this.config.fuel_range_entity]
      : null;
    const engineOnEntity = this.config.engine_on_entity
      ? this.hass.states[this.config.engine_on_entity]
      : null;

    const fuelLevel = fuelLevelEntity
      ? parseFloat(fuelLevelEntity.state)
      : null;
    const fuelRange = formatEntityValue(
      fuelRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const isEngineOn = sensorModule.isEngineOn(engineOnEntity);

    return html`
      <div class="level-info">
        ${this.config.show_fuel && fuelLevel !== null
          ? html`
              <div
                class="item_bar clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.fuel_level_entity)}"
              >
                <div
                  class="progress ${isEngineOn ? "engine-on" : ""}"
                  style="width: ${fuelLevel}%;"
                ></div>
              </div>
              <div class="level-text">
                <span
                  class="clickable"
                  @click="${() =>
                    this._handleMoreInfo(this.config.fuel_level_entity)}"
                >
                  <span style="color: var(--uvc-percentage-text-color);"
                    >${fuelLevel}%</span
                  >
                  <span
                    >&nbsp;${isEngineOn
                      ? this.localize("common.engine_on")
                      : this.localize("common.fuel")}</span
                  >
                </span>
                ${this.config.show_fuel_range &&
                this.config.fuel_range_entity &&
                fuelRange !== null
                  ? html`
                      <span
                        class="range clickable"
                        @click="${() =>
                          this._handleMoreInfo(this.config.fuel_range_entity)}"
                        >${this.localize("common.range")}: ${fuelRange}</span
                      >
                    `
                  : ""}
              </div>
            `
          : this.config.show_fuel_range &&
            this.config.fuel_range_entity &&
            fuelRange !== null
          ? html`
              <div class="level-text">
                <span
                  class="range clickable"
                  @click="${() =>
                    this._handleMoreInfo(this.config.fuel_range_entity)}"
                  >${this.localize("common.range")}: ${fuelRange}</span
                >
              </div>
            `
          : ""}
      </div>
    `;
  }

  _renderHybridInfo() {
    const batteryLevelEntity = this.config.battery_level_entity
      ? this.hass.states[this.config.battery_level_entity]
      : null;
    const batteryRangeEntity = this.config.battery_range_entity
      ? this.hass.states[this.config.battery_range_entity]
      : null;
    const fuelLevelEntity = this.config.fuel_level_entity
      ? this.hass.states[this.config.fuel_level_entity]
      : null;
    const fuelRangeEntity = this.config.fuel_range_entity
      ? this.hass.states[this.config.fuel_range_entity]
      : null;
    const chargingStatusEntity = this.config.charging_status_entity
      ? this.hass.states[this.config.charging_status_entity]
      : null;
    const chargeLimitEntity = this.config.charge_limit_entity
      ? this.hass.states[this.config.charge_limit_entity]
      : null;

    const batteryLevel = batteryLevelEntity
      ? parseFloat(batteryLevelEntity.state)
      : null;
    const batteryRange = formatEntityValue(
      batteryRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const fuelLevel = fuelLevelEntity
      ? parseFloat(fuelLevelEntity.state)
      : null;
    const fuelRange = formatEntityValue(
      fuelRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const isCharging = this._isCharging(chargingStatusEntity);
    const chargeLimit =
      chargeLimitEntity && this.config.show_charge_limit
        ? parseFloat(chargeLimitEntity.state)
        : null;

    const batteryFirst = this.config.hybrid_display_order === "battery_first";

    return html`
      <div class="level-info hybrid">
        ${batteryFirst
          ? html`
              ${this._renderBatteryBar(
                batteryLevel,
                batteryRange,
                isCharging,
                chargeLimit
              )}
              <div class="hybrid-separator"></div>
              ${this._renderFuelBar(fuelLevel, fuelRange)}
            `
          : html`
              ${this._renderFuelBar(fuelLevel, fuelRange)}
              <div class="hybrid-separator"></div>
              ${this._renderBatteryBar(
                batteryLevel,
                batteryRange,
                isCharging,
                chargeLimit
              )}
            `}
      </div>
    `;
  }

  _renderBatteryBar(level, range, isCharging, chargeLimit) {
    return html`
      ${this.config.show_battery && level !== null
        ? html`
            <div
              class="item_bar clickable"
              @click="${() =>
                this._handleMoreInfo(this.config.battery_level_entity)}"
            >
              <div
                class="progress ${isCharging ? "charging" : ""}"
                style="width: ${level}%;"
              ></div>
              ${chargeLimit !== null
                ? html`
                    <div
                      class="charge-limit-indicator"
                      style="left: ${chargeLimit}%;"
                    ></div>
                  `
                : ""}
            </div>
            <div class="level-text">
              <span
                class="clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.battery_level_entity)}"
              >
                <span style="color: var(--uvc-percentage-text-color);"
                  >${level}%</span
                >
                <span
                  >&nbsp;${isCharging
                    ? this.localize("common.charging")
                    : this.localize("common.battery")}</span
                >
              </span>
              ${this.config.show_battery_range &&
              this.config.battery_range_entity &&
              range !== null
                ? html`
                    <span
                      class="range clickable"
                      @click="${() =>
                        this._handleMoreInfo(this.config.battery_range_entity)}"
                      >${this.localize("common.range")}: ${range}</span
                    >
                  `
                : ""}
            </div>
          `
        : this.config.show_battery_range &&
          this.config.battery_range_entity &&
          range !== null
        ? html`
            <div class="level-text">
              <span
                class="range clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.battery_range_entity)}"
                >${this.localize("common.range")}: ${range}</span
              >
            </div>
          `
        : ""}
    `;
  }

  _renderFuelBar(level, range) {
    return html`
      ${this.config.show_fuel && level !== null
        ? html`
            <div
              class="item_bar clickable"
              @click="${() =>
                this._handleMoreInfo(this.config.fuel_level_entity)}"
            >
              <div class="progress" style="width: ${level}%;"></div>
            </div>
            <div class="level-text">
              <span
                class="clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.fuel_level_entity)}"
              >
                <span style="color: var(--uvc-percentage-text-color);"
                  >${level}%</span
                >
                <span>&nbsp;${this.localize("common.fuel")}</span>
              </span>
              ${this.config.show_fuel_range &&
              this.config.fuel_range_entity &&
              range !== null
                ? html`
                    <span
                      class="range clickable"
                      @click="${() =>
                        this._handleMoreInfo(this.config.fuel_range_entity)}"
                      >${this.localize("common.range")}: ${range}</span
                    >
                  `
                : ""}
            </div>
          `
        : this.config.show_fuel_range &&
          this.config.fuel_range_entity &&
          range !== null
        ? html`
            <div class="level-text">
              <span
                class="range clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.fuel_range_entity)}"
                >${this.localize("common.range")}: ${range}</span
              >
            </div>
          `
        : ""}
    `;
  }

  _renderHeader() {
    const showTitle = this.config.showTitle !== false && this.config.showTitle !== 'false';
    return html`
      ${showTitle
        ? html`<h2 class="vehicle-name">${this.config.title}</h2>`
        : ""}
      ${this._renderInfoLine()}
    `;
  }

  _renderCarState() {
    if (!this.config.show_car_state || !this.config.car_state_entity) return "";

    const carStateEntity = this.hass.states[this.config.car_state_entity];
    if (!carStateEntity) return "";

    const state = formatEntityValue(
      carStateEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );

    return html`
      <div
        class="car-state clickable"
        style="text-align: center; margin-bottom: 8px;"
        @click="${() => this._showMoreInfo(this.config.car_state_entity)}"
      >
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
      return `${this.localize("common.charging_end_time")}: ${isoString}`; // Fallback to display the original string
    }

    const diffMs = endTime - now;
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.round(diffMs / (1000 * 60));

    if (diffMinutes <= 0) {
      return this.localize("common.charging_ending_soon");
    } else if (diffMinutes < 60) {
      return `${this.localize(
        "common.charging_ending_in"
      )} ${diffMinutes} ${this.localize(
        diffMinutes !== 1 ? "common.minutes" : "common.minute"
      )}`;
    } else if (diffHours < 24) {
      return `${this.localize(
        "common.charging_ending_in"
      )} ${diffHours} ${this.localize(
        diffHours !== 1 ? "common.hours" : "common.hour"
      )}`;
    } else {
      const options = { weekday: "short", hour: "numeric", minute: "numeric" };
      return `${this.localize(
        "common.charging_until"
      )} ${endTime.toLocaleString(undefined, options)}`;
    }
  }

  _renderInfoLine() {
    const locationEntity = this.config.location_entity
      ? this.hass.states[this.config.location_entity]
      : null;
    let location = null;

    if (locationEntity) {
      location = formatEntityValue(
        locationEntity,
        this.config.useFormattedEntities,
        this.hass,
        this.localize
      );
    }

    const mileageEntity = this.config.mileage_entity
      ? this.hass.states[this.config.mileage_entity]
      : null;
    let mileage = null;
    if (mileageEntity) {
      mileage = formatEntityValue(
        mileageEntity,
        this.config.useFormattedEntities,
        this.hass,
        this.localize
      );
    }

    const carStateEntity = this.config.car_state_entity
      ? this.hass.states[this.config.car_state_entity]
      : null;
    let carState = null;
    if (carStateEntity) {
      carState = formatEntityValue(
        carStateEntity,
        this.config.useFormattedEntities,
        this.hass,
        this.localize
      );
    }

    if (!this.config.show_location && !this.config.show_mileage) return "";

    const infoTextColor = `var(--uvc-info-text-color, var(--secondary-text-color))`;

    return html`
      <div class="info-line">
        ${this.config.show_location && location
          ? html`
              <span
                class="location clickable"
                @click="${() =>
                  this._showMoreInfo(this.config.location_entity)}"
              >
                <ha-icon
                  icon="mdi:map-marker"
                  style="color: ${infoTextColor};"
                ></ha-icon>
                ${location}
              </span>
            `
          : ""}
        ${this.config.show_mileage && mileage
          ? html`
              <span
                class="mileage clickable"
                @click="${() => this._showMoreInfo(this.config.mileage_entity)}"
              >
                <ha-icon
                  icon="mdi:speedometer"
                  style="color: ${infoTextColor};"
                ></ha-icon>
                ${mileage}
              </span>
            `
          : ""}
      </div>
    `;
  }

  _getLocalizedState(state) {
    if (state === "not_home") {
      return this.hass.localize("state.device_tracker.not_home") || this.localize("common.away");
    }
    return this.hass.localize(`state.device_tracker.${state}`) || state;
  }

  _renderVehicleImage() {
    const isCharging = this._isCharging(this.hass.states[this.config.charging_status_entity]);
    const imageType = isCharging ? this.config.charging_image_url_type : this.config.image_url_type;
    

    if (imageType === 'none') {
      return html``;
    }

    const imageUrl = this._getImageUrl(isCharging ? 'charging' : 'main');
    

    if (!imageUrl) {
      return html``;
    }

    return html`
      <div class="image-container">
        <img
          src="${imageUrl}"
          alt="Vehicle Image"
          class="${isCharging ? 'charging-image' : 'vehicle-image'}"
          style="height: ${isCharging ? this.config.chargingImageHeight : this.config.mainImageHeight};"
        />
      </div>
    `;
  }

  _getImageUrl(type) {
    const config = type === 'charging' ? this.config.charging_image_url_type : this.config.image_url_type;
    const entity = type === 'charging' ? this.config.charging_image_entity : this.config.image_entity;
    const url = type === 'charging' ? this.config.charging_image_url : this.config.image_url;


    if (config === 'entity') {
      return this._getImageUrlFromEntity(entity);
    } else if (config === 'url' || config === 'image') {
      return url || null;
    }
    return null;
  }

  _getImageUrlFromEntity(entityId) {
    const stateObj = this.hass.states[entityId];
    if (stateObj && stateObj.attributes && stateObj.attributes.entity_picture) {
      return stateObj.attributes.entity_picture;
    }
    return null;
  }

  _handleImageError(e) {
    console.error("Image failed to load:", e.target.src);
    // Instead of trying to load a default image, let's just hide the image container
    const container = e.target.closest('.vehicle-image-container');
    if (container) {
      container.style.display = 'none';
    }
    e.target.style.display = 'none';
  }

  // Add this method to the UltraVehicleCard class
  _handleMoreInfo(entityId) {
    if (entityId) {
      const event = new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId }
      });
      this.dispatchEvent(event);
    }
  }

  // Add this method to check if a string is an ISO date string
  _isISODateString(str) {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?([+-]\d{2}:\d{2}|Z)?$/.test(
      str
    );
  }

  // Add this new method for rounding
  _roundNumber(number) {
    // Check if the number has decimal places
    if (Number.isInteger(number)) {
      return number;
    }

    // Round to one decimal place
    return Math.round(number * 10) / 10;
  }

  _renderIconGrid() {
    const { icon_grid_entities, row_separators } = this.config;

    if (!icon_grid_entities || icon_grid_entities.length === 0) {
      return "";
    }

    const rows = [];
    let currentRow = [];
    let currentIconGap = this.config.icon_gap || 20;
    let currentAlignment = { horizontal: "center", vertical: "middle" };

    icon_grid_entities.forEach((entityId, index) => {
      if (entityId === "row-separator") {
        if (currentRow.length > 0) {
          rows.push(html`
            <div
              class="icon-grid"
              style="
              gap: ${currentIconGap}px;
              justify-content: ${currentAlignment.horizontal === "left"
                ? "flex-start"
                : currentAlignment.horizontal === "right"
                ? "flex-end"
                : "center"};
              align-items: ${currentAlignment.vertical === "top"
                ? "flex-start"
                : currentAlignment.vertical === "bottom"
                ? "flex-end"
                : "center"};
            "
            >
              ${currentRow.map((entityId) => this._renderIcon(entityId))}
            </div>
          `);
          currentRow = [];
        }
        const separatorConfig = row_separators?.[index] || {};
        const separatorHeight = separatorConfig.height;
        if (separatorHeight !== 0) {
          rows.push(html`
            <div
              class="row-separator"
              style="
              height: ${separatorHeight}px;
              background-color: ${separatorConfig.color ||
              "var(--uvc-info-text-color)"};
            "
            ></div>
          `);
        }
        currentAlignment = {
          horizontal: separatorConfig.horizontalAlignment || "center",
          vertical: separatorConfig.verticalAlignment || "middle",
        };
        currentIconGap = separatorConfig.icon_gap || 20;
      } else {
        currentRow.push(entityId);
      }
    });

    if (currentRow.length > 0) {
      rows.push(html`
        <div
          class="icon-grid"
          style="
          gap: ${currentIconGap}px;
          justify-content: ${currentAlignment.horizontal === "left"
            ? "flex-start"
            : currentAlignment.horizontal === "right"
            ? "flex-end"
            : "center"};
          align-items: ${currentAlignment.vertical === "top"
            ? "flex-start"
            : currentAlignment.vertical === "bottom"
            ? "flex-end"
            : "center"};
        "
        >
          ${currentRow.map((entityId) => this._renderIcon(entityId))}
        </div>
      `);
    }

    return html`${rows}`;
  }

  _renderIcon(entityId) {
    const state = this.hass.states[entityId];
    if (!state) return html``;

    console.log(`_renderIcon for ${entityId}:`, {
      currentState: state.state,
      config: this.config
    });

    const customIcon = this.config.custom_icons?.[entityId] || {};
    const isActive = getIconActiveState(entityId, this.hass, customIcon);
    const defaultIcon = "mdi:help-circle";
    
    console.log(`Icon state for ${entityId}:`, { isActive, customIcon });

    // Determine which icon to use
    let icon;
    if (isActive) {
      icon = customIcon.active || state.attributes.icon || defaultIcon;
    } else {
      icon = customIcon.inactive || state.attributes.icon || defaultIcon;
    }

    // Determine which color to use
    let color;
    if (isActive) {
      color = customIcon.activeColor || this.config.iconActiveColor || "#03a9f4";
    } else {
      color = customIcon.inactiveColor || this.config.iconInactiveColor || "#e1e1e1";
    }

    console.log(`Final icon and color for ${entityId}:`, { icon, color });

    const iconSize = this.config.icon_sizes?.[entityId] || this.config.icon_size || 24;
    const buttonStyle = this.config.icon_styles?.[entityId] || "icon";
    const labelPosition = this.config.icon_labels?.[entityId] || "none";

    // Format the label text and add unit of measurement
    const formattedValue = formatEntityValue(
      state,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const labelText = formattedValue;

    // Calculate label size based on icon size
    const labelSize = iconSize > 28 ? Math.round(iconSize * 0.5) : 14;

    // Determine if we should render anything
    const shouldRender = icon !== "" || buttonStyle === "label";

    if (shouldRender) {
      return html`
        <div
          class="icon-wrapper ${buttonStyle} label-${labelPosition} clickable ${isActive ? 'active' : 'inactive'}"
          style="
            --icon-size: ${iconSize}px;
            --label-size: ${labelSize}px;
            --label-color: ${color};
          "
          @click="${() => this._handleIconClick(entityId)}"
        >
          ${this._renderLabel(
            labelText,
            labelPosition,
            "before",
            isActive,
            customIcon,
            buttonStyle
          )}
          ${buttonStyle !== "label" && icon
            ? html`
                <ha-icon
                  icon="${icon}"
                  style="--mdc-icon-size: ${iconSize}px; color: ${color};"
                ></ha-icon>
              `
            : ""}
          ${this._renderLabel(
            labelText,
            labelPosition,
            "after",
            isActive,
            customIcon,
            buttonStyle
          )}
        </div>
      `;
    }
    return html``;
  }

  _renderLabel(
    text,
    position,
    renderPosition,
    isActive,
    customIcon,
    buttonStyle
  ) {
    if (position === "none" && buttonStyle !== "label") return html``;

    const shouldRenderLabel =
      isActive || customIcon.inactive !== "no-icon" || buttonStyle === "label";

    if (
      shouldRenderLabel &&
      ((renderPosition === "before" &&
        (position === "left" || position === "top")) ||
        (renderPosition === "after" &&
          (position === "right" || position === "bottom")) ||
        buttonStyle === "label")
    ) {
      return html`<span class="icon-label">${text}</span>`;
    }

    return html``;
  }

  _getIconColor(entityId, isActive) {
    const customIcon =
      this.config.custom_icons && this.config.custom_icons[entityId];
    if (customIcon) {
      return isActive
        ? customIcon.activeColor ||
            UltraVehicleCard._getComputedColor("--primary-color")
        : customIcon.inactiveColor ||
            UltraVehicleCard._getComputedColor("--primary-text-color");
    }
    return isActive
      ? UltraVehicleCard._getComputedColor("--primary-color")
      : UltraVehicleCard._getComputedColor("--primary-text-color");
  }

  static _getComputedColor(variable) {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(variable).trim();
    if (value.startsWith("#")) {
      return value;
    } else if (value.startsWith("rgb")) {
      const rgb = value.match(/\d+/g);
      return `#${parseInt(rgb[0]).toString(16).padStart(2, "0")}${parseInt(
        rgb[1]
      )
        .toString(16)
        .padStart(2, "0")}${parseInt(rgb[2]).toString(16).padStart(2, "0")}`;
    }
    return "#808080"; // Fallback color if unable to determine
  }

  _handleIconClick(entityId) {
    const interaction = this.config.icon_interactions[entityId] || {};
    
    switch (interaction.type) {
      case "more-info":
        this._handleMoreInfo(entityId);
        break;
      case "toggle":
        this.hass.callService("homeassistant", "toggle", {
          entity_id: entityId,
        });
        break;
      case "navigate":
        this._navigate(interaction.path);
        break;
      case "url":
        this._openUrl(interaction.url);
        break;
      case "call-service":
        this._callService(interaction.service, entityId);
        break;
      case "assist":
        this._openAssistant(interaction.assistant, interaction.startListening);
        break;
      case "trigger":
        this._triggerEntity(entityId);
        break;
      case "none":
        // Do nothing
        break;
    }
  }

  _triggerEntity(entityId) {
    const domain = entityId.split(".")[0];
    let service = "turn_on";

    switch (domain) {
      case "automation":
        service = "trigger";
        break;
      case "script":
        service = "turn_on";
        break;
      // Add more cases here for other entity types that might need special handling
    }

    this.hass.callService(domain, service, { entity_id: entityId });
  }

  _fireEvent(type, detail) {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true,
      cancelable: false,
      detail: detail
    });
    this.dispatchEvent(event);
  }

  _navigate(path) {
    history.pushState(null, "", path);
    const event = new Event("location-changed", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _openUrl(url) {
    window.open(url, "_blank");
  }

  _callService(service, entityId) {
    const [domain, serviceAction] = service.split(".");
    this.hass.callService(domain, serviceAction, { entity_id: entityId });
  }

  _openAssistant(assistantId, startListening) {
    this._fireEvent("show-dialog", {
      dialogTag: "dialog-voice-command",
      dialogImport: () => import("../../dialogs/dialog-voice-command"),
      dialogParams: {
        assistantId: assistantId,
        startListening: startListening,
      },
    });
  }

  _showMoreInfo(entityId) {
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId }
    });
    this.dispatchEvent(event);
  }

  _toggleEntity(entityId) {
    this.hass.callService("homeassistant", "toggle", {
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
      image_url: "https://github.com/user-attachments/assets/4ef72288-5ee9-4fa6-b2f3-c34c4160cf42",
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
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      show_car_state: true,
      show_charge_limit: true,
      cardBackgroundColor: "",
      barBackgroundColor: "",
      barFillColor: "",
      limitIndicatorColor: "",
      iconActiveColor: UltraVehicleCard._getComputedColor("--primary-color"),
      iconInactiveColor: UltraVehicleCard._getComputedColor(
        "--primary-text-color"
      ),
      carStateTextColor: "",
      rangeTextColor: "",
      percentageTextColor: "",
      icon_sizes: {},
      icon_labels: {},
      useFormattedEntities: false,
      layoutType: "single",
    };
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("config")) {
      this._updateStyles();
    }
  }

  _updateStyles() {
    if (!this.config) return;

    const colorProps = [
      { config: "barFillColor", css: "--uvc-primary-color" },
      { config: "cardBackgroundColor", css: "--uvc-card-background" },
      { config: "barBackgroundColor", css: "--uvc-bar-background" },
      { config: "barBorderColor", css: "--uvc-bar-border-color" },
      { config: "limitIndicatorColor", css: "--uvc-limit-indicator" },
      { config: "iconActiveColor", css: "--uvc-icon-active" },
      { config: "iconInactiveColor", css: "--uvc-icon-inactive" },
      { config: "infoTextColor", css: "--uvc-info-text-color" },
      { config: "carStateTextColor", css: "--uvc-car-state-text-color" },
      { config: "rangeTextColor", css: "--uvc-range-text-color" },
      { config: "percentageTextColor", css: "--uvc-percentage-text-color" },
    ];

    colorProps.forEach(({ config, css }) => {
      if (this.config[config]) {
        this.style.setProperty(css, this.config[config]);
      }
    });

    // Update icon size
    if (this.config.icon_size) {
      this.style.setProperty(
        "--uvc-icon-grid-size",
        `${this.config.icon_size}px`
      );
      this.style.setProperty("--mdc-icon-size", `${this.config.icon_size}px`);
    }

    // Update RGB values for icon background
    if (this.config.iconInactiveColor) {
      const rgb = this._hexToRgb(this.config.iconInactiveColor);
      this.style.setProperty("--rgb-primary-text-color", rgb);
      this.style.setProperty("--uvc-icon-background-light", `rgba(${rgb}, 0.10)`);
      this.style.setProperty("--uvc-icon-background-dark", `rgba(${rgb}, 0.10)`);
    }

    this.requestUpdate();
  }

  _hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : null;
  }

  _getLocalizedState(state) {
    if (state === "not_home") {
      return this.hass.localize("state.device_tracker.not_home") || this.localize("common.away");
    }
    return this.hass.localize(`state.device_tracker.${state}`) || state;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      this._updateStyles();
      this._updateIconBackground();
      this._updateImageHeights();
    }
  }

  setConfig(config) {
    console.log("UltraVehicleCard setConfig called with:", JSON.stringify(config, null, 2));
    if (!config) {
      throw new Error("Invalid configuration");
    }

    // Create a new config object with default values
    const defaultHeight = config.layoutType === 'double' ? '62px' : '180px';
    this.config = {
      title: config.title || "My Vehicle",
      image_url: "",
      charging_image_url: "",
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
      hybrid_display_order: "fuel_first",
      car_state_entity: "",
      charge_limit_entity: "",
      icon_size: 24,
      icon_gap: 12,
      mainImageHeight: config.mainImageHeight || defaultHeight,
      chargingImageHeight: config.chargingImageHeight || defaultHeight,
      layoutType: config.layoutType || "single",
      ...config,  // Spread the provided config to override defaults
      activeState: config.activeState || '',
      inactiveState: config.inactiveState || '',
      showTitle: config.showTitle !== false,
      useFormattedEntities: config.useFormattedEntities || false,
    };

    console.log("UltraVehicleCard config after setConfig:", JSON.stringify(this.config, null, 2));
    this._updateStyles();
    this._updateIconBackground();
    this._updateImageHeights();
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateIconBackground();
    window.addEventListener('theme-changed', this._updateIconBackground.bind(this));
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this._updateIconBackground.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('theme-changed', this._updateIconBackground.bind(this));
    window.matchMedia('(prefers-color-scheme: dark)').removeListener(this._updateIconBackground.bind(this));
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('hass')) {
      this._updateIconBackground();
    }
  }

  firstUpdated() {
    this._updateIconBackground();
  }

  _updateIconBackground() {
    const cardBackgroundColor = this.config.cardBackgroundColor || getComputedStyle(this).getPropertyValue('--card-background-color').trim();
    const isDarkBackground = this._isColorDark(cardBackgroundColor);
    
    if (isDarkBackground) {
      this.classList.add('dark-background');
      this.classList.remove('light-background');
    } else {
      this.classList.add('light-background');
      this.classList.remove('dark-background');
    }
    
    this._updateIconBackgroundColor(isDarkBackground);
    this.requestUpdate();
  }

  _updateIconBackgroundColor(isDarkBackground) {
    const iconBackgroundColor = isDarkBackground ? 'rgb(255 255 255 / 10%)' : 'rgb(0 0 0 / 10%)';
    this.style.setProperty('--uvc-icon-background', iconBackgroundColor);
  }

  _isColorDark(color) {
    const rgb = this._hexToRgb(color);
    if (!rgb) return false;
    const [r, g, b] = rgb.split(',').map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }

  _hexToRgb(hex) {
    if (!hex) return null;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      this._updateIconBackground();
    }
  }

  _updateIconBackground() {
    const cardBackgroundColor = this.config.cardBackgroundColor || getComputedStyle(this).getPropertyValue('--card-background-color').trim();
    const isDarkBackground = this._isColorDark(cardBackgroundColor);
    this._updateIconBackgroundColor(isDarkBackground);
  }

  _updateImageHeights() {
    if (this.config.image_url_type !== "none") {
      this.style.setProperty('--vehicle-image-height', this.config.mainImageHeight);
    } else {
      this.style.setProperty('--vehicle-image-height', '0px');
    }

    if (this.config.charging_image_url_type !== "none") {
      this.style.setProperty('--vehicle-charging-image-height', this.config.chargingImageHeight);
    } else {
      this.style.setProperty('--vehicle-charging-image-height', '0px');
    }
  }
}

customElements.define("ultra-vehicle-card", UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description:
    "A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",
  preview: true,
  documentationURL: "https://github.com/WJDDesigns/Ultra-Vehicle-Card",
  version: version,
});

// Add this code to log the version in the console with custom styling
console.info(
  `%c Ultra Vehicle Card%c  ${version} `,
  "background-color: #4299D9;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
  "background-color: #4299D9;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)"
);


