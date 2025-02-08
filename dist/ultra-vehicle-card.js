import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { until } from "https://unpkg.com/lit-html@1.4.1/directives/until.js?module";
import { version, setVersion } from "./version.js?v=39";
setVersion("V1.6.9-beta1");

const sensorModule = await import("./sensors.js?v=" + version);
const {
  formatEntityValue,
  getIconActiveState,
  formatBinarySensorState,
  isEngineOn,
} = sensorModule;

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

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("config")) {
      this._updateStyles();
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

    return html`
      <ha-card
        class="ultra-vehicle-card ${this.config.layoutType === "double"
          ? "double-column"
          : ""}"
      >
        ${this.config.layoutType === "double"
          ? this._renderDoubleColumnLayout()
          : this._renderSingleColumnLayout()}
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
            <div class="left-column">${this._renderVehicleImage()}</div>
            <div class="right-column">
              ${this._renderHeader()} ${this._renderCarState()}
            </div>
          </div>
          <div class="full-width-column">
            ${this._renderIconGrid()} ${this._renderVehicleInfo()}
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
      .ultra-vehicle-card.double-column {
        padding: 0;
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
      .double-column-container .vehicle-name {
        margin-bottom: 12px;
        margin-top: 0px;
      }

      .progress {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0;
        height: 1.5rem;
        margin: 0;
        border-radius: 4px;
      }

      .progress.gradient {
        background-image: var(--uvc-gradient-background);
      }

      .progress:not(.gradient) {
        background-color: var(--uvc-primary-color);
      }

      .progress.charging::before,
      .progress.engine-on::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent 100%
        );
        background-size: 50px 50px;
        animation: move 2s linear infinite;
        border-radius: 4px;
      }

      @keyframes move {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 50px 50px;
        }
      }

      .percentage-text {
        color: var(--uvc-percentage-text-color, #e1e1e1);
      }
      .level-text span {
        color: var(--uvc-percentage-text-color, #e1e1e1);
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
    const showChargingAnimation = this.config.show_charging_animation !== false;
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
                  class="progress ${isCharging ? "charging" : ""} ${this.config
                    .useBarGradient
                    ? "gradient"
                    : ""}"
                  style="${this._getBarStyle(batteryLevel)}"
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
                  <span class="percentage-text">${batteryLevel}%</span>
                  <span class="percentage-text"
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

  _getBarStyle(level) {
    if (this.config.useBarGradient && this.config.barGradientStops) {
      const gradient = this._calculateGradient(level);
      return `width: ${level}%; --uvc-gradient-background: ${gradient};`;
    } else {
      return `width: ${level}%;`;
    }
  }

  _calculateGradient(level) {
    if (
      !this.config.barGradientStops ||
      this.config.barGradientStops.length === 0
    ) {
      return `linear-gradient(to right, var(--uvc-primary-color) 0%, var(--uvc-primary-color) 100%)`;
    }

    // Create a new array and sort it
    const stops = [...this.config.barGradientStops].sort(
      (a, b) => a.percentage - b.percentage
    );

    const currentStop =
      stops.find((stop) => stop.percentage >= level) || stops[stops.length - 1];
    const prevStop =
      stops[stops.findIndex((stop) => stop.percentage >= level) - 1] ||
      stops[0];

    const startColor = prevStop.color;
    const endColor = currentStop.color;
    const startPercentage = prevStop.percentage;
    const endPercentage = currentStop.percentage;

    const ratio = (level - startPercentage) / (endPercentage - startPercentage);
    const interpolatedColor = this._interpolateColor(
      startColor,
      endColor,
      ratio
    );

    return `linear-gradient(to right, ${interpolatedColor} 0%, ${interpolatedColor} 100%)`;
  }

  _interpolateColor(color1, color2, factor) {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map((hex, i) => {
        const int1 = parseInt(hex, 16);
        const int2 = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
        const int = Math.round(int1 + (int2 - int1) * factor);
        return `0${int.toString(16)}`.slice(-2);
      });
    return `#${result.join("")}`;
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
      "charging_system_charging",
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
    const showEngineAnimation = this.config.show_engine_animation !== false;

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
                  class="progress ${isEngineOn ? "engine-on" : ""} ${this.config
                    .useBarGradient
                    ? "gradient"
                    : ""}"
                  style="${this._getBarStyle(fuelLevel)}"
                ></div>
              </div>
              <div class="level-text">
                <span
                  class="clickable"
                  @click="${() =>
                    this._handleMoreInfo(this.config.fuel_level_entity)}"
                >
                  <span class="percentage-text">${fuelLevel}%</span>
                  <span class="percentage-text"
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
    const engineOnEntity = this.config.engine_on_entity
      ? this.hass.states[this.config.engine_on_entity]
      : null;

    const batteryLevel = batteryLevelEntity
      ? parseFloat(
          formatEntityValue(
            batteryLevelEntity,
            this.config.useFormattedEntities,
            this.hass,
            this.localize
          )
        )
      : null;
    const batteryRange = formatEntityValue(
      batteryRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const fuelLevel = fuelLevelEntity
      ? parseFloat(
          formatEntityValue(
            fuelLevelEntity,
            this.config.useFormattedEntities,
            this.hass,
            this.localize
          )
        )
      : null;
    const fuelRange = formatEntityValue(
      fuelRangeEntity,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const isCharging = this._isCharging(chargingStatusEntity);
    const isEngineOn = sensorModule.isEngineOn(engineOnEntity);
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
              ${this._renderFuelBar(fuelLevel, fuelRange, isEngineOn)}
            `
          : html`
              ${this._renderFuelBar(fuelLevel, fuelRange, isEngineOn)}
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
                class="progress ${isCharging ? "charging" : ""} ${this.config
                  .useBarGradient
                  ? "gradient"
                  : ""}"
                style="${this._getBarStyle(level)}"
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
                <span class="percentage-text">${level}%</span>
                <span class="percentage-text"
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

  _renderFuelBar(level, range, isEngineOn) {
    return html`
      ${this.config.show_fuel && level !== null
        ? html`
            <div
              class="item_bar clickable"
              @click="${() =>
                this._handleMoreInfo(this.config.fuel_level_entity)}"
            >
              <div
                class="progress ${isEngineOn ? "engine-on" : ""} ${this.config
                  .useBarGradient
                  ? "gradient"
                  : ""}"
                style="${this._getBarStyle(level)}"
              ></div>
            </div>
            <div class="level-text">
              <span
                class="clickable"
                @click="${() =>
                  this._handleMoreInfo(this.config.fuel_level_entity)}"
              >
                <span class="percentage-text">${level}%</span>
                <span class="percentage-text"
                  >&nbsp;${this.localize("common.fuel")}</span
                >
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
    const showTitle =
      this.config.showTitle !== false && this.config.showTitle !== "false";
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

    const state = this.hass.formatEntityState(carStateEntity);

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

  _renderVehicleImage() {
    const isCharging = this._isCharging(
      this.hass.states[this.config.charging_status_entity]
    );
    const isEngineOn = this._isEngineOn(
      this.hass.states[this.config.engine_on_entity]
    );
    const vehicleType = this.config.vehicle_type;
    const hybridDisplayOrder = this.config.hybrid_display_order;

    let imageUrl;
    let imageType;
    let imageHeight;
    let entityId;

    if (vehicleType === "EV") {
      if (
        isCharging &&
        (this.config.charging_image_url || this.config.charging_image_entity)
      ) {
        imageUrl = this.config.charging_image_url;
        imageType = this.config.charging_image_url_type;
        imageHeight = this.config.chargingImageHeight;
        entityId = this.config.charging_image_entity;
      } else {
        imageUrl = this.config.image_url;
        imageType = this.config.image_url_type;
        imageHeight = this.config.mainImageHeight;
        entityId = this.config.image_entity;
      }
    } else if (vehicleType === "Fuel") {
      if (
        isEngineOn &&
        (this.config.engine_on_image_url || this.config.engine_on_image_entity)
      ) {
        imageUrl = this.config.engine_on_image_url;
        imageType = this.config.engine_on_image_url_type;
        imageHeight = this.config.engineOnImageHeight;
        entityId = this.config.engine_on_image_entity;
      } else {
        imageUrl = this.config.image_url;
        imageType = this.config.image_url_type;
        imageHeight = this.config.mainImageHeight;
        entityId = this.config.image_entity;
      }
    } else if (vehicleType === "Hybrid") {
      if (hybridDisplayOrder === "battery_first") {
        if (
          isCharging &&
          (this.config.charging_image_url || this.config.charging_image_entity)
        ) {
          imageUrl = this.config.charging_image_url;
          imageType = this.config.charging_image_url_type;
          imageHeight = this.config.chargingImageHeight;
          entityId = this.config.charging_image_entity;
        } else if (
          isEngineOn &&
          (this.config.engine_on_image_url ||
            this.config.engine_on_image_entity)
        ) {
          imageUrl = this.config.engine_on_image_url;
          imageType = this.config.engine_on_image_url_type;
          imageHeight = this.config.engineOnImageHeight;
          entityId = this.config.engine_on_image_entity;
        } else {
          imageUrl = this.config.image_url;
          imageType = this.config.image_url_type;
          imageHeight = this.config.mainImageHeight;
          entityId = this.config.image_entity;
        }
      } else {
        // fuel_first
        if (
          isEngineOn &&
          (this.config.engine_on_image_url ||
            this.config.engine_on_image_entity)
        ) {
          imageUrl = this.config.engine_on_image_url;
          imageType = this.config.engine_on_image_url_type;
          imageHeight = this.config.engineOnImageHeight;
          entityId = this.config.engine_on_image_entity;
        } else if (
          isCharging &&
          (this.config.charging_image_url || this.config.charging_image_entity)
        ) {
          imageUrl = this.config.charging_image_url;
          imageType = this.config.charging_image_url_type;
          imageHeight = this.config.chargingImageHeight;
          entityId = this.config.charging_image_entity;
        } else {
          imageUrl = this.config.image_url;
          imageType = this.config.image_url_type;
          imageHeight = this.config.mainImageHeight;
          entityId = this.config.image_entity;
        }
      }
    }

    if (imageType === "none") {
      return html``;
    }

    const finalImageUrl = this._getImageUrl(imageUrl, imageType, entityId);

    if (!finalImageUrl) {
      return html``;
    }

    return html`
      <div class="image-container">
        <img
          src="${finalImageUrl}"
          alt="Vehicle Image"
          class="vehicle-image"
          style="height: ${imageHeight};"
          @error="${this._handleImageError}"
        />
      </div>
    `;
  }

  _getImageUrl(imageConfig, imageType, entityId) {
    if (imageType === "entity") {
      return this._getImageUrlFromEntity(entityId);
    } else if (imageType === "url" || imageType === "image") {
      return imageConfig || null;
    }
    return null;
  }

  _getImageUrlFromEntity(entityId) {
    const stateObj = this.hass.states[entityId];
    if (stateObj) {
      // Special handling for image. entities
      if (entityId.startsWith("image.")) {
        if (stateObj.attributes.entity_picture) {
          return this.hass.hassUrl(stateObj.attributes.entity_picture);
        }
        // For image. entities, the state itself is the image URL
        return this.hass.hassUrl(stateObj.state);
      }

      // Check if the state itself is a valid URL
      if (this._isValidImageUrl(stateObj.state)) {
        return stateObj.state;
      }

      // Check for entity_picture attribute
      if (
        stateObj.attributes.entity_picture &&
        this._isValidImageUrl(stateObj.attributes.entity_picture)
      ) {
        return stateObj.attributes.entity_picture;
      }

      // Check for any attribute containing 'image' in its key
      for (const [key, value] of Object.entries(stateObj.attributes)) {
        if (
          key.toLowerCase().includes("image") &&
          typeof value === "string" &&
          this._isValidImageUrl(value)
        ) {
          return value;
        }
      }
    }
    return null;
  }

  _isValidImageUrl(url) {
    if (!url) return false;
    if (url.startsWith("/")) return true; // Relative URL
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  _isEngineOn(engineOnEntity) {
    if (!engineOnEntity) return false;
    return (
      engineOnEntity.state === "on" ||
      engineOnEntity.state === "true" ||
      engineOnEntity.state === "running"
    );
  }

  _handleImageError(e) {
    console.error("Image failed to load:", e.target.src);
    // Instead of trying to load a default image, let's just hide the image container
    const container = e.target.closest(".vehicle-image-container");
    if (container) {
      container.style.display = "none";
    }
    e.target.style.display = "none";
  }

  // Add this method to the UltraVehicleCard class
  _handleMoreInfo(entityId) {
    if (entityId) {
      const event = new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId },
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
              ${currentRow.map((entityId) => until(this._renderIcon(entityId)))}
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
          ${currentRow.map((entityId) => until(this._renderIcon(entityId)))}
        </div>
      `);
    }

    return html`${rows}`;
  }

  async _renderIcon(entityId) {
    const state = this.hass.states[entityId];
    if (!state) return html``;

    const customIcon = this.config.custom_icons?.[entityId] || {};
    const isActive = await getIconActiveState(entityId, this.hass, customIcon);
    const defaultIcon = "mdi:help-circle";

    // Determine which icon to use
    let icon;
    if (isActive) {
      icon = customIcon.active || state.attributes.icon || defaultIcon;
    } else {
      icon = customIcon.inactive || state.attributes.icon || defaultIcon;
    }

    // If the icon is set to "no-icon", return an empty string
    if (icon === "no-icon") {
      return html``;
    }

    // Check if the icon is a template
    /*
    if (this.isTemplateString(icon)) {
      this.getIconFromTemplate(icon).then(renderedIcon => {
        icon = renderedIcon || defaultIcon;
        this.requestUpdate();
      });
    }
    */

    // Determine which color to use
    const activeColor = "var(--uvc-icon-active, var(--primary-color))";
    const inactiveColor = "var(--uvc-icon-inactive, var(--primary-text-color))";

    let color;
    if (isActive) {
      color =
        customIcon.activeColor || this.config.iconActiveColor || activeColor;
    } else {
      color =
        customIcon.inactiveColor ||
        this.config.iconInactiveColor ||
        inactiveColor;
    }

    const iconSize =
      this.config.icon_sizes?.[entityId] || this.config.icon_size || 24;
    const buttonStyle = this.config.icon_styles?.[entityId] || "icon";
    const labelPosition = this.config.icon_labels?.[entityId] || "none";

    // Format the label text and add unit of measurement
    const formattedValue = formatEntityValue(
      state,
      this.config.useFormattedEntities,
      this.hass,
      this.localize
    );
    const customLabel =
      this.config.custom_labels?.[entityId]?.[isActive ? "active" : "inactive"];
    const labelText = customLabel || formattedValue;

    // Calculate label size based on icon size
    const labelSize = iconSize > 28 ? Math.round(iconSize * 0.5) : 14;

    // Determine if we should render anything
    const shouldRender = icon !== "" || buttonStyle === "label";

    if (shouldRender) {
      return html`
        <div
          class="icon-wrapper ${buttonStyle} label-${labelPosition} clickable ${isActive
            ? "active"
            : "inactive"}"
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
    if (!variable || !variable.startsWith("--")) {
      return variable; // Return as-is if it's not a CSS variable
    }

    const style = getComputedStyle(document.documentElement);
    let value = style.getPropertyValue(variable).trim();

    if (!value) {
      return `var(${variable})`; // Return the original variable if no value is found
    }

    // If the value is another CSS variable, return it as is
    if (value.startsWith("var(")) {
      return value;
    }

    // For other values (hex, rgb, rgba), return as is
    return value;
  }

  _handleIconClick(entityId) {
    const interaction = this.config.icon_interactions[entityId] || {};

    switch (interaction.type) {
      case "more-info":
        this._handleMoreInfo(entityId);
        break;
      case "toggle":
        this._toggleEntity(entityId);
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

  _toggleEntity(entityId) {
    const domain = entityId.split(".")[0];
    let service;

    switch (domain) {
      case "lock":
        service =
          this.hass.states[entityId].state === "locked" ? "unlock" : "lock";
        break;
      default:
        service = "toggle";
    }

    this.hass.callService(domain, service, { entity_id: entityId });
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
      case "button":
        service = "press";
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
      detail: detail,
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
      detail: { entityId },
    });
    this.dispatchEvent(event);
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
      image_url:
        "https://github.com/user-attachments/assets/4ef72288-5ee9-4fa6-b2f3-c34c4160cf42",
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
      cardTitleColor: "var(--primary-text-color)",
      cardBackgroundColor: "var(--card-background-color, #fff))",
      barBackgroundColor: "var(--secondary-text-color)",
      barBorderColor: "var(--card-background-color, #fff))",
      barFillColor: "var(--primary-color)",
      limitIndicatorColor: "var(--primary-text-color)",
      infoTextColor: "var(--secondary-text-color)",
      carStateTextColor: "var(--primary-text-color)",
      rangeTextColor: "var(--primary-text-color)",
      percentageTextColor: "var(--primary-text-color)",
      icon_sizes: {},
      icon_labels: {},
      custom_labels: {},
      useFormattedEntities: true,
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
      { config: "cardTitleColor", css: "--uvc-card-title-color" },
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
      } else {
        this.style.removeProperty(css);
      }
    });

    // Update icon size
    if (this.config.icon_size) {
      this.style.setProperty(
        "--uvc-icon-grid-size",
        `${this.config.icon_size}px`
      );
      this.style.setProperty("--mdc-icon-size", `${this.config.icon_size}px`);
    } else {
      this.style.removeProperty("--uvc-icon-grid-size");
      this.style.removeProperty("--mdc-icon-size");
    }

    // Update card background color
    if (this.config.cardBackgroundColor) {
      this.style.setProperty(
        "--ha-card-background",
        this.config.cardBackgroundColor
      );
    } else {
      this.style.removeProperty("--ha-card-background");
    }

    this.requestUpdate();
  }

  _getLocalizedState(state) {
    if (state === "not_home") {
      return (
        this.hass.localize("state.device_tracker.not_home") ||
        this.localize("common.away")
      );
    }
    return this.hass.localize(`state.device_tracker.${state}`) || state;
  }

  setConfig(config) {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    // Create a new config object with default values
    const defaultHeight = config.layoutType === "double" ? "62px" : "180px";
    this.config = {
      title: config.title || "My Vehicle",
      image_url: "",
      charging_image_url: "",
      image_url_type: "image",
      charging_image_url_type: "image",
      engine_on_image_url: "",
      engine_on_image_url_type: "url",
      engineOnImageHeight: config.engineOnImageHeight || defaultHeight,
      engine_on_entity: "",
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
      ...config, // Spread the provided config to override defaults
      activeState: config.activeState || "",
      inactiveState: config.inactiveState || "",
      showTitle: config.showTitle !== false,
      useFormattedEntities: config.useFormattedEntities || false,
      useBarGradient: config.useBarGradient || false,
      barGradientStops: config.barGradientStops || [
        { percentage: 0, color: "#ff0000" },
        { percentage: 100, color: "#00ff00" },
      ],
      show_engine_animation: config.show_engine_animation !== false,
      show_charging_animation: config.show_charging_animation !== false,
    };

    this._updateStyles();
    this._updateImageHeights();
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateStyles();
    window.addEventListener("theme-changed", this._onThemeChanged.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      "theme-changed",
      this._onThemeChanged.bind(this)
    );
  }

  firstUpdated() {}

  _updateImageHeights() {
    if (this.config.image_url_type !== "none") {
      this.style.setProperty(
        "--vehicle-image-height",
        this.config.mainImageHeight
      );
    } else {
      this.style.setProperty("--vehicle-image-height", "0px");
    }

    if (this.config.charging_image_url_type !== "none") {
      this.style.setProperty(
        "--vehicle-charging-image-height",
        this.config.chargingImageHeight
      );
    } else {
      this.style.setProperty("--vehicle-charging-image-height", "0px");
    }

    if (this.config.engine_on_image_url_type !== "none") {
      this.style.setProperty(
        "--vehicle-engine-on-image-height",
        this.config.engineOnImageHeight
      );
    } else {
      this.style.setProperty("--vehicle-engine-on-image-height", "0px");
    }
  }

  async getIconFromTemplate(template) {
    if (!template) return null;
    try {
      const renderedTemplate = await this.hass.callWS({
        type: "render_template",
        template: template,
        entity_ids: [],
      });
      return renderedTemplate;
    } catch (error) {
      console.error("Error rendering icon template:", error);
      return null;
    }
  }

  isTemplateString(str) {
    return str && (str.includes("{{") || str.includes("{%"));
  }

  _onThemeChanged() {
    this._updateStyles();
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
