import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { version } from "./version.js?v=20";
import './state-dropdown.js';

const stl = await import("./styles.js?v=" + version);
const loc = await import("./localize.js?v=" + version);
const styles = stl.styles;
const localize = loc.localize;

const DEFAULT_IMAGE_URL =
  "https://github.com/user-attachments/assets/4ef72288-5ee9-4fa6-b2f3-c34c4160cf42";
const DEFAULT_IMAGE_TEXT = "Default Image";

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

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export class UltraVehicleCardEditor extends localize(LitElement) {
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
      _showEntityInformation: { type: Boolean },
      _iconSize: { type: Number },
      _iconGap: { type: Number },
      _iconSizes: { type: Object },
      _showRowSeparatorDetails: { type: Boolean },
      _mainImageHeight: { type: String },
      _chargingImageHeight: { type: String },
      _image_type: { type: String },
      _image_entity: { type: String },
      _layoutType: { type: String },
      _showEngineAnimation: { type: Boolean },
      _showChargingAnimation: { type: Boolean },
    };
  }

  static get styles() {
    return [
      styles,
      css`
        .bar-gradient-section {
          margin-top: 16px;
        }

        .switch-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .switch-wrapper span {
          margin-left: 8px;
        }

        .bar-gradient-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gradient-stop {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .gradient-stop {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 24px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: var(--primary-color);
        }

        input:focus + .slider {
          box-shadow: 0 0 1px var(--primary-color);
        }

        input:checked + .slider:before {
          transform: translateX(16px);
        }

        .slider.round {
          border-radius: 24px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        .description {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 4px;
          margin-bottom: 8px;
        }

        .delete-icon {
          cursor: pointer;
          color: #ffffff;
          margin-left: 8px;
        }

        .reset-all-colors {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 16px;
        }

        .reset-all-colors span {
          margin-right: 8px;
        }

        .reset-all-colors ha-icon {
          color: var(--primary-text-color);
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--divider-color);
        }

        .tab-content {
          padding: 16px;
        }

        .reset-all-colors {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 8px;
        }

        .reset-all-colors span {
          margin-right: 8px;
          font-size: 14px;
        }

        .reset-icon.clickable {
          cursor: pointer;
          color: var(--primary-text-color);
        }

        .gradient-preview-container {
          margin-bottom: 16px;
        }

        .gradient-preview {
          height: 30px;
          border-radius: 5px;
          position: relative;
        }

        .percentage-marker {
          position: absolute;
          top: 9%;
          transform: translateX(-50%);
        }

        .marker-line {
          width: 2px;
          height: 25px;
          background-color: var(--uvc-card-background);
          margin: 0 auto;
        }

        .marker-label {
          font-size: 10px;
          color: var(--primary-text-color);
          text-align: center;
          margin-top: 2px;
        }
      `
    ];
  }

  constructor() {
    super();
    this._initializeProperties();
    this._debouncedColorChanged = debounce(
      this._applyColorChange.bind(this),
      100
    );
    this._dialogCloseHandler = this._dialogCloseHandler.bind(this);
    this._preventDialogClose = this._preventDialogClose.bind(this);
    this._defaultColors = {

    };
    this._userChangedColors = {};
    this._themeChangeListener = this._onThemeChange.bind(this);
    this._activeTab = "settings";
  }

  firstUpdated() {
    super.firstUpdated();
    this._setupDialogCloseHandlers();
  }

  _setupDialogCloseHandlers() {
    const dialog = this.closest('ha-dialog');
    if (dialog) {
      dialog.addEventListener('close', this._dialogCloseHandler, true);
      dialog.addEventListener('iron-overlay-closed', this._dialogCloseHandler, true);
      window.addEventListener('dialog-closed', this._preventDialogClose, true);
    } 
  }

  _removeDialogCloseHandlers() {
    const dialog = this.closest('ha-dialog');
    if (dialog) {
      dialog.removeEventListener('close', this._dialogCloseHandler, true);
      dialog.removeEventListener('iron-overlay-closed', this._dialogCloseHandler, true);
    }
    window.removeEventListener('dialog-closed', this._preventDialogClose, true);
  }

  _dialogCloseHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  _preventDialogClose(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.detail && e.detail.dialog) {
      e.detail.dialog.open = true;
    }
    return false;
  }

  _initializeProperties() {
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
    this._iconInteractions = {};
    this._iconStyles = {};
    this._iconSearchFilter = "";
    this._currentEditingEntity = null;
    this._currentEditingIconType = null;
    this._carStateEntityFilter = "";
    this._chargeLimitEntityFilter = "";
    this._showEntityInformation = true;
    this._iconSize = 24;
    this._iconGap = 12;
    this._image_urlFilter = "";
    this._charging_image_urlFilter = "";
    this._iconSizes = {};
    this._showRowSeparatorDetails = false;
    this._mainImageHeight = "140px";
    this._chargingImageHeight = "140px";
    this._image_type = "image";
    this._image_entity = "";
    this._layoutType = "single";
    this._showEngineAnimation = false;
    this._showChargingAnimation = false;
  }

  setConfig(config) {
    this.config = {
      title: "My Vehicle",
      image_url: "",
      charging_image_url: "",
      image_url_type: "image",
      charging_image_url_type: "none",
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
      showEntityInformation:
        config.showEntityInformation !== undefined
          ? config.showEntityInformation
          : true,
      carStateTextColor: config.carStateTextColor || "",
      rangeTextColor: config.rangeTextColor || "",
      percentageTextColor: config.percentageTextColor || "",
      icon_sizes: config.icon_sizes || {},
      engine_on_entity: "",
      row_separator_color:
        config.row_separator_color || this._getDefaultColorAsHex(),
      row_separator_height: config.row_separator_height || 1,
      row_separators: config.row_separators || {},
      iconActiveColor: config.iconActiveColor || "var(--primary-color)",
      iconInactiveColor:
        config.iconInactiveColor || "var(--primary-text-color)",
      useFormattedEntities: config.useFormattedEntities || false,
      mainImageHeight: config.image_url_type !== "none" ? (config.mainImageHeight || '140px') : '0px',
      chargingImageHeight: config.charging_image_url_type !== "none" ? (config.chargingImageHeight || '140px') : '0px',
      showTitle: config.showTitle !== false,
      layoutType: config.layoutType || "single",
      useBarGradient: config.useBarGradient || false,
      barGradientStops: config.barGradientStops || [
        { percentage: 0, color: '#ff0000' },
        { percentage: 100, color: '#00ff00' }
      ],
      carStateTextColor: config.carStateTextColor || "",
      rangeTextColor: config.rangeTextColor || "",
      percentageTextColor: config.percentageTextColor || "",
      cardTitleColor: config.cardTitleColor || "",
      cardBackgroundColor: config.cardBackgroundColor || "",
      barBackgroundColor: config.barBackgroundColor || "",
      barBorderColor: config.barBorderColor || "",
      barFillColor: config.barFillColor || "",
      limitIndicatorColor: config.limitIndicatorColor || "",
      infoTextColor: config.infoTextColor || "",
      show_engine_animation: config.show_engine_animation || false,
      show_charging_animation: config.show_charging_animation || false,
      ...config,
    };

    this._handleBackwardCompatibility();
    this._initializeIconGridEntities();
    this.loadResources(this.hass.language);
  }

  _handleBackwardCompatibility() {
    if (this.config.level_entity && !this.config.battery_level_entity) {
      this.config.battery_level_entity = this.config.level_entity;
    }
    if (this.config.range_entity && !this.config.battery_range_entity) {
      this.config.battery_range_entity = this.config.range_entity;
    }
  }

  _initializeIconGridEntities() {
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
    this._layoutType = this.config.layoutType;
    this._showEngineAnimation = this.config.show_engine_animation !== false;
    this._showChargingAnimation = this.config.show_charging_animation !== false;
  }

  static getStubConfig() {
    return {
      title: "My Vehicle",
      image_url: DEFAULT_IMAGE_URL,
      charging_image_url: "",
      image_url_type: "default",
      charging_image_url_type: "none",
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
      iconActiveColor: UltraVehicleCardEditor._getComputedColor("--primary-color"),
      iconInactiveColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
      carStateTextColor: "",
      rangeTextColor: "",
      cardTitleColor: "",
      percentageTextColor: "",
      icon_sizes: {},
      icon_labels: {},
      useFormattedEntities: false,
      mainImageHeight: '140px',
      chargingImageHeight: '140px',
      showTitle: true,
      layoutType: "single",
      useBarGradient: false,
      barGradientStops: [
        { percentage: 0, color: '#ff0000' },
        { percentage: 100, color: '#00ff00' }
      ],
      show_engine_animation: false,
      show_charging_animation: false,
    };
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="editor-container">
        <mwc-tab-bar @MDCTabBar:activated=${this._handleTabChange}>
          <mwc-tab id="tab-settings" label="${this.localize("editor.settings")}"></mwc-tab>
          <mwc-tab id="tab-icon-grid" label="${this.localize("editor.icon_grid")}"></mwc-tab>
          <mwc-tab id="tab-customize" label="${this.localize("editor.customize")}"></mwc-tab>
        </mwc-tab-bar>

        <div class="tab-content">
          ${this._activeTab === "settings" ? html`
            ${this._renderBasicConfig()}
            ${this._renderLayoutChooser()}
            ${this._renderFormattedEntitiesToggle()}
            ${this._renderEntityInformation()}
          ` : ""}

          ${this._activeTab === "icon-grid" ? html`
            ${this._renderIconGridConfig()}
          ` : ""}

          ${this._activeTab === "customize" ? html`
            ${this._renderColorPickers()}
            ${this._renderBarGradientToggle()}
          ` : ""}
        </div>
      </div>
    `;
  }

  _handleTabChange(e) {
    const tabIds = ["tab-settings", "tab-icon-grid", "tab-customize"];
    this._activeTab = tabIds[e.detail.index].replace("tab-", "");
    this.requestUpdate();
  }

  _renderLayoutChooser() {
    return html`
      <div class="input-group">
        <label for="layoutType">${this.localize("editor.layout_type")}</label>
        <ha-select
          id="layoutType"
          .value=${this._layoutType}
          @selected=${this._layoutChanged}
          @closed=${(e) => e.stopPropagation()}
        >
          <mwc-list-item value="single">${this.localize("editor.single_column")}</mwc-list-item>
          <mwc-list-item value="double">${this.localize("editor.double_column")}</mwc-list-item>
        </ha-select>
      </div>
    `;
  }

  _layoutChanged(e) {
    const newLayoutType = e.target.value;
    this._layoutType = newLayoutType;
    this._updateConfig("layoutType", this._layoutType);

    // Set default image heights based on layout type
    const defaultHeight = newLayoutType === 'double' ? '62px' : '140px';
  
    // Update mainImageHeight
    if (newLayoutType === 'double' && this.config.mainImageHeight === '140px') {
      this._updateConfig("mainImageHeight", '62px');
    } else if (newLayoutType === 'single' && this.config.mainImageHeight === '62px') {
      this._updateConfig("mainImageHeight", '140px');
    }

    // Update chargingImageHeight
    if (newLayoutType === 'double' && this.config.chargingImageHeight === '140px') {
      this._updateConfig("chargingImageHeight", '62px');
    } else if (newLayoutType === 'single' && this.config.chargingImageHeight === '62px') {
      this._updateConfig("chargingImageHeight", '140px');
    }

    // Force a full update of the card
    this._fireEvent('config-changed', { config: this.config });
  }

  _renderBasicConfig() {
    const defaultHeight = this._layoutType === 'double' ? 62 : 140;

    return html`
      <div class="input-group">
        <label for="title">${this.localize("editor.card_title")}</label>
        <div class="title-toggle-container">
          <input
            id="title"
            type="text"
            .value="${this.config.title || ''}"
            @input="${this._titleChanged}"
            .configValue="${"title"}"
          />
          <label class="switch">
            <input
              type="checkbox"
              .checked="${this.config.showTitle !== false}"
              @change="${this._showTitleToggleChanged}"
              .configValue="${"showTitle"}"
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <div class="input-group">
        <label>${this.localize("editor.vehicle_type")}</label>
        <div class="radio-group">
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="EV"
              ?checked="${this.config.vehicle_type === "EV"}"
              @change="${this._vehicleTypeChanged}"
            />
            ${this.localize("vehicle_types.ev")}
          </label>
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="Fuel"
              ?checked="${this.config.vehicle_type === "Fuel"}"
              @change="${this._vehicleTypeChanged}"
            />
            ${this.localize("vehicle_types.fuel")}
          </label>
          <label>
            <input
              type="radio"
              name="vehicle_type"
              value="Hybrid"
              ?checked="${this.config.vehicle_type === "Hybrid"}"
              @change="${this._vehicleTypeChanged}"
            />
            ${this.localize("vehicle_types.hybrid")}
          </label>
        </div>
      </div>

      ${this.config.vehicle_type === "Hybrid"
        ? html`
            <div class="input-group">
              <label>${this.localize("editor.hybrid_display_order")}</label>
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
                  ${this.localize("editor.fuel_first")}
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
                  ${this.localize("editor.battery_first")}
                </label>
              </div>
            </div>
          `
        : ""}

      <div class="divider"></div>

      <div class="image-section">
        <div class="image-section-title">${this.localize("editor.main_image_section")}</div>
        ${this._renderImageUploadField(
          this.localize("editor.main_image"),
          "image_url",
          this.localize("editor.enter_image_url")
        )}
        <div class="editor-item" id="main-image-height">
          <label>${this.localize("editor.main_image_height")}</label>
          <div class="input-with-unit">
            <input
              type="number"
              min="50"
              max="500"
              .value="${parseInt(this.config.mainImageHeight) || defaultHeight}"
              @input="${this._valueChanged}"
              .configValue="${"mainImageHeight"}"
            />
            <span class="unit">px</span>
          </div>
        </div>
      </div>

      ${this.config.vehicle_type === "Fuel" || this.config.vehicle_type === "Hybrid" ? html`
        <div class="image-section">
          <div class="image-section-title">${this.localize("editor.engine_on_image_section")}</div>
          ${this._renderImageUploadField(
            this.localize("editor.engine_on_image"),
            "engine_on_image_url",
            this.localize("editor.enter_image_url")
          )}
          <div class="editor-item">
            <ha-entity-picker
              .hass=${this.hass}
              .configValue=${"engine_on_entity"}
              .value=${this.config.engine_on_entity}
              .label=${this.localize("editor.engine_on_entity")}
              @value-changed=${this._valueChanged}
            ></ha-entity-picker>
          </div>
          <div class="editor-item" id="engine-on-image-height">
            <label>${this.localize("editor.engine_on_image_height")}</label>
            <div class="input-with-unit">
              <input
                type="number"
                min="50"
                max="500"
                .value="${parseInt(this.config.engineOnImageHeight) || defaultHeight}"
                @input="${this._valueChanged}"
                .configValue="${"engineOnImageHeight"}"
              />
              <span class="unit">px</span>
            </div>
          </div>
        </div>
      ` : ''}

      ${this.config.vehicle_type === "EV" || this.config.vehicle_type === "Hybrid" ? html`
        <div class="image-section">
          <div class="image-section-title">${this.localize("editor.charging_image_section")}</div>
          ${this._renderImageUploadField(
            this.localize("editor.charging_image"),
            "charging_image_url",
            this.localize("editor.enter_image_url")
          )}
          <div class="editor-item" id="charging-image-height">
            <label>${this.localize("editor.charging_image_height")}</label>
            <div class="input-with-unit">
              <input
                type="number"
                min="50"
                max="500"
                .value="${parseInt(this.config.chargingImageHeight) || defaultHeight}"
                @input="${this._valueChanged}"
                .configValue="${"chargingImageHeight"}"
              />
              <span class="unit">px</span>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }

  _handleImageUrlInput(e, configKey) {
    const newValue = e.target.value;
    this._updateConfig(configKey, newValue);
    this._fireEvent('config-changed', { config: this.config });
  }

  _renderFormattedEntitiesToggle() {
    return html`
      <div class="input-group">
        <label for="useFormattedEntities">${this.localize("editor.formatted_entities")}</label>
        <div class="entity-description">
          ${this.localize("editor.formatted_entities_description")}
        </div>
        <label class="switch">
          <input
            type="checkbox"
            id="useFormattedEntities"
            .checked=${this.config.useFormattedEntities || false}
            @change=${this._toggleFormattedEntities}
          />
          <span class="slider round"></span>
        </label>
      </div>
    `;
  }

  _renderEntityInformation() {
    return html`
      <div class="entity-information">
        <div
          class="entity-information-header"
          @click=${this._toggleEntityInformation}
        >
          <h3>${this.localize("editor.entity_settings")}</h3>
          <ha-icon
            icon=${this._showEntityInformation
              ? "mdi:chevron-up"
              : "mdi:chevron-down"}
          ></ha-icon>
        </div>
        ${this._showEntityInformation
          ? html` ${this._renderEntityPickers()} `
          : ""}
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

  _toggleFormattedEntities(e) {
    const useFormattedEntities = e.target.checked;
    this._updateConfig("useFormattedEntities", useFormattedEntities);

    // Force a re-render of the card
    this._fireEvent("config-changed", { config: this.config });
  }

  _renderEntityPickers() {
    const { vehicle_type } = this.config;
    return html`
      ${vehicle_type === "EV" || vehicle_type === "Hybrid"
        ? html`
            ${this._renderEntityPicker(
              "battery_level_entity",
              this.localize("editor.battery_level"),
              this.localize("editor.battery_level_description")
            )}
            ${this._renderEntityPicker(
              "battery_range_entity",
              this.localize("editor.battery_range"),
              this.localize("editor.battery_range_description")
            )}
            ${this._renderEntityPicker(
              "charging_status_entity",
              this.localize("editor.charging_status"),
              this.localize("editor.charging_status_description")
            )}
            ${this._renderEntityPicker(
              "charge_limit_entity",
              this.localize("editor.charge_limit"),
              this.localize("editor.charge_limit_description")
            )}
          `
        : ""}
      ${vehicle_type === "Fuel" || vehicle_type === "Hybrid"
        ? html`
            ${this._renderEntityPicker(
              "fuel_level_entity",
              this.localize("editor.fuel_level"),
              this.localize("editor.fuel_level_description")
            )}
            ${this._renderEntityPicker(
              "fuel_range_entity",
              this.localize("editor.fuel_range"),
              this.localize("editor.fuel_range_description")
            )}
            ${this._renderEntityPicker(
              "engine_on_entity",
              this.localize("editor.engine_on"),
              this.localize("editor.engine_on_description")
            )}
          `
        : ""}
      ${this._renderEntityPicker(
        "location_entity",
        this.localize("editor.location"),
        this.localize("editor.location_description")
      )}
      ${this._renderEntityPicker(
        "mileage_entity",
        this.localize("editor.mileage"),
        this.localize("editor.mileage_description")
      )}
      ${this._renderEntityPicker(
        "car_state_entity",
        this.localize("editor.car_state"),
        this.localize("editor.car_state_description")
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
                placeholder="${this.localize("editor.search_entities")}"
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
        <h3>${this.localize("editor.icon_grid")}</h3>
        <div class="input-group">
          <div class="entity-description">
            ${this.localize("editor.icon_grid_description")}
          </div>
          <div class="entity-picker-wrapper">
            <div class="entity-picker-container">
              <input
                type="text"
                class="entity-picker-input"
                .value="${this._iconGridFilter || ""}"
                @input="${this._iconGridFilterChanged}"
                placeholder="${this.localize("editor.search_entities")}"
              />
              ${this._iconGridFilter
                ? html`
                    <div class="entity-picker-results">
                      ${Object.keys(this.hass.states)
                        .filter((eid) =>
                          eid
                            .toLowerCase()
                            .includes(this._iconGridFilter.toLowerCase())
                        )
                        .map(
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
                  `
                : ""}
            </div>
          </div>
          <button class="add-row-button" @click="${this._addRowSeparator}">
            ${this.localize("editor.add_row_separator")}
          </button>
          <div class="reset-all-colors">
            <span>${this.localize("editor.reset_all_icon_colors")}</span>
            <ha-icon
              class="reset-icon clickable"
              icon="mdi:refresh"
              title="${this.localize("editor.reset_all_icon_colors")}"
              @click="${this._resetAllIconColors}"
            ></ha-icon>
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

  _renderSelectedEntity(entityId, index) {
    if (entityId === "row-separator") {
      return this._renderRowSeparatorEditor(index);
    }
    const sanitizedEntityId = entityId.replace(/\./g, "_");
    const entity = this.hass.states[entityId];
    const friendlyName = entity.attributes.friendly_name || entityId;
    const customIcon = this._customIcons[entityId] || {};
    const defaultIcon = entity.attributes.icon;
    const activeIcon = customIcon.active || defaultIcon || "mdi:help-circle";
    const inactiveIcon =
      customIcon.inactive || defaultIcon || "mdi:help-circle";
    const interaction = this._iconInteractions[entityId] || { type: "none" };
    const buttonStyle = this._iconStyles[entityId] || "icon";
    const activeColor =
      customIcon.activeColor ||
      UltraVehicleCardEditor._getComputedColor("--primary-color");
    const inactiveColor =
      customIcon.inactiveColor ||
      UltraVehicleCardEditor._getComputedColor("--primary-text-color");

    return html`
      <div
        class="selected-entity"
        draggable="true"
        @dragstart="${(e) => this._onDragStart(e, index)}"
        data-entity-id="${entityId}"
      >
        <div class="entity-header">
          <div
            class="handle"
            @mousedown="${(e) => this._onDragStart(e, index)}"
            @touchstart="${(e) => this._onDragStart(e, index)}"
          >
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
        <div
          class="entity-details"
          id="entity-details-${sanitizedEntityId}"
          style="display: none;"
        >
          <div class="editor-row">
            <div class="editor-item">
              <label>${this.localize("editor.inactive_icon")}</label>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${inactiveIcon === "no-icon" ? "" : inactiveIcon}
                @value-changed=${(e) =>
                  this._handleIconChange(e, "inactive", entityId)}
              ></ha-icon-picker>
              <mwc-button
                @click=${() => this._setNoIcon(entityId, "inactive")}
                .selected=${inactiveIcon === "no-icon"}
                >${inactiveIcon === "no-icon" ? "✓ " : ""}${this.localize(
                  "editor.no_icon"
                )}</mwc-button
              >
              <state-dropdown
                .hass=${this.hass}
                .config=${this.config.custom_icons?.[entityId] || {}}
                .entityId=${entityId}
                .stateType=${'inactive'}
                @state-dropdown-changed=${this._handleStateConfigChange}
              ></state-dropdown>
            </div>
            <div class="editor-item">
              <label>${this.localize("editor.active_icon")}</label>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${activeIcon === "no-icon" ? "" : activeIcon}
                @value-changed=${(e) =>
                  this._handleIconChange(e, "active", entityId)}
              ></ha-icon-picker>
              <mwc-button
                @click=${() => this._setNoIcon(entityId, "active")}
                .selected=${activeIcon === "no-icon"}
                >${activeIcon === "no-icon" ? "✓ " : ""}${this.localize(
                  "editor.no_icon"
                )}</mwc-button
              >
              <state-dropdown
                .hass=${this.hass}
                .config=${this.config.custom_icons?.[entityId] || {}}
                .entityId=${entityId}
                .stateType=${'active'}
                @state-dropdown-changed=${this._handleStateConfigChange}
              ></state-dropdown>
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              ${this._renderIconColorPicker(
                this.localize("editor.inactive_icon_color"),
                entityId,
                "inactive",
                inactiveColor
              )}
            </div>
            <div class="editor-item">
              ${this._renderIconColorPicker(
                this.localize("editor.active_icon_color"),
                entityId,
                "active",
                activeColor
              )}
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              <label>${this.localize("editor.icon_style")}</label>
              <select
                @change="${(e) =>
                  this._handleButtonStyleChange(entityId, e.target.value)}"
                .value="${buttonStyle}"
              >
                <option value="icon">Icon</option>
                <option value="round">Round</option>
                <option value="square">Square</option>
                <option value="label">Label</option>
              </select>
            </div>
            <div class="editor-item">
              <label>${this.localize("editor.icon_size")}</label>
              <div class="input-with-unit">
                <input
                  id="icon_size_${entityId}"
                  type="number"
                  .value="${this._getIconSize(entityId)}"
                  @input="${(e) => this._iconSizeChanged(e, entityId)}"
                  min="12"
                  max="100"
                />
                <span class="unit">px</span>
              </div>
            </div>
          </div>
          <div class="editor-row">
            <div class="editor-item">
              <label>${this.localize("editor.interaction")}</label>
              ${this._renderInteractionSelect(entityId, interaction)}
            </div>
            <div class="editor-item">
              <label>${this.localize("editor.icon_label_position")}</label>
              <select
                .value=${(this.config.icon_labels &&
                  this.config.icon_labels[entityId]) ||
                "none"}
                @change=${(e) =>
                  this._updateIconLabel(entityId, e.target.value)}
              >
                <option value="none">${this.localize("editor.none")}</option>
                <option value="left">${this.localize("editor.left")}</option>
                <option value="top">${this.localize("editor.top")}</option>
                <option value="right">${this.localize("editor.right")}</option>
                <option value="bottom">
                  ${this.localize("editor.bottom")}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _toggleRowSeparatorDetails(index) {
    const detailsElement = this.shadowRoot.querySelector(
      `#row-separator-details-${index}`
    );
    const toggleIcon = this.shadowRoot.querySelector(
      `.selected-entity[data-entity-id="row-separator"]:nth-child(${
        index + 1
      }) .toggle-details`
    );

    if (detailsElement && toggleIcon) {
      const isHidden =
        detailsElement.style.display === "none" ||
        !detailsElement.style.display;
      detailsElement.style.display = isHidden ? "block" : "none";
      toggleIcon.icon = isHidden ? "mdi:chevron-up" : "mdi:chevron-down";
    }
  }

  _updateRowSeparatorConfig(index, property, value) {
    if (!this.config.row_separators) {
      this.config.row_separators = {};
    }
    if (!this.config.row_separators[index]) {
      this.config.row_separators[index] = {};
    }
    if (value === '') {
      delete this.config.row_separators[index][property];
    } else {
      this.config.row_separators[index][property] = value;
    }
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _onDrop(e) {
    e.preventDefault();
    let fromIndex;
    if (e.dataTransfer) {
      fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    } else {
      fromIndex = this._draggedIndex;
    }
    const toIndex = [...e.currentTarget.children].indexOf(
      e.target.closest(".selected-entity")
    );

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


  _getDefaultColor(colorType) {
    const style = getComputedStyle(this);
    return colorType === "active"
      ? style.getPropertyValue("--primary-color").trim()
      : style.getPropertyValue("--primary-text-color").trim();
  }


  _iconColorChanged(e, entityId, iconType) {
    const color = e.target.value;
    if (!this._customIcons[entityId]) {
      this._customIcons[entityId] = {};
    }
    this._customIcons[entityId][`${iconType}Color`] = color;
    this._updateCustomIconsConfig();
    
    // Update the CSS variable directly
    this.style.setProperty(`--uvc-icon-${iconType}`, color);
    
    // Force a re-render of the card
    this._fireEvent('config-changed', { config: this.config });
  }

  _resetIconColor(e, entityId, iconType) {
    e.stopPropagation();
    if (this._customIcons[entityId]) {
      delete this._customIcons[entityId][`${iconType}Color`];
    }
    this._updateCustomIconsConfig();
    
    // Reset the CSS variable to its default
    const defaultColor = iconType === 'active' ? 'var(--primary-color)' : 'var(--primary-text-color)';
    this.style.removeProperty(`--uvc-icon-${iconType}`);
    
    // Force a re-render of the card
    this._fireEvent('config-changed', { config: this.config });
  }

  _updateCustomIconsConfig() {
    const cleanedCustomIcons = Object.entries(this._customIcons).reduce(
      (acc, [key, value]) => {
        const cleanedValue = {
          active: value.active === "" ? undefined : value.active,
          inactive: value.inactive === "" ? undefined : value.inactive,
          activeColor: value.activeColor,
          inactiveColor: value.inactiveColor,
        };
        if (cleanedValue.active || cleanedValue.inactive) {
          acc[key] = cleanedValue;
        }
        return acc;
      },
      {}
    );

    this.config = {
      ...this.config,
      custom_icons: cleanedCustomIcons,
    };
    this.configChanged(this.config);
  }

  _toggleEntityDetails(entityId) {
    // Sanitize the entity ID for use in the element ID
    const sanitizedEntityId = entityId.replace(/\./g, "_");

    // Find the details element using the sanitized ID
    const detailsElement = this.shadowRoot.querySelector(
      `#entity-details-${sanitizedEntityId}`
    );

    // Find the toggle icon within the correct entity's row
    const entityRow = this.shadowRoot.querySelector(
      `.selected-entity[data-entity-id="${entityId}"]`
    );
    const toggleIcon = entityRow
      ? entityRow.querySelector(".toggle-details")
      : null;

    if (detailsElement && toggleIcon) {
      const isHidden =
        detailsElement.style.display === "none" ||
        !detailsElement.style.display;
      detailsElement.style.display = isHidden ? "block" : "none";
      toggleIcon.icon = isHidden ? "mdi:chevron-up" : "mdi:chevron-down";
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
    const elements = this.shadowRoot.querySelectorAll(".selected-entity");
    elements.forEach((element, index) => {
      element.dataset.index = index;
    });
  }
  _renderInteractionSelect(entityId, interaction) {
    const interactions = [
      { value: "more-info", label: this.localize("editor.more_info") },
      { value: "toggle", label: this.localize("editor.toggle") },
      { value: "navigate", label: this.localize("editor.navigate") },
      { value: "url", label: this.localize("editor.url") },
      { value: "trigger", label: this.localize("editor.trigger") },
      { value: "none", label: this.localize("editor.none") },
    ];

    return html`
      <select
        class="interaction-select"
        .value=${interaction.type}
        @change=${(e) =>
          this._handleInteractionTypeChange(entityId, e.target.value)}
      >
        ${interactions.map(
          (int) => html`
            <option
              value=${int.value}
              ?selected=${interaction.type === int.value}
            >
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
      case "navigate":
        return this._renderNavigationOption(entityId, interaction);
      case "url":
        return this._renderUrlOption(entityId, interaction);
      default:
        return html``;
    }
  }

  _renderNavigationOption(entityId, interaction) {
    const paths = this._getNavigationPaths();
    return html`
      <div class="interaction-option">
        <label>${this.localize("editor.navigation_path")}:</label>
        <select
          @change=${(e) =>
            this._updateInteractionOption(entityId, "path", e.target.value)}
        >
          ${paths.map(
            (path) => html`
              <option value=${path} ?selected=${interaction.path === path}>
                ${path}
              </option>
            `
          )}
        </select>
      </div>
    `;
  }

  _renderUrlOption(entityId, interaction) {
    return html`
      <div class="interaction-option">
        <label>${this.localize("editor.url")}:</label>
        <input
          type="text"
          .value=${interaction.url || ""}
          @input=${(e) =>
            this._updateInteractionOption(entityId, "url", e.target.value)}
        />
      </div>
    `;
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
    return url && url.startsWith("data:image")
      ? this.localize("editor.uploaded_image")
      : url;
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
    fireEvent(this, "config-changed", { config: this.config });
  }

  _onDragStart(e, index) {
    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", index.toString());
    }
    // Store the index in a class property as a fallback
    this._draggedIndex = index;
  }

  _onDragOver(e) {
    e.preventDefault();
  }

  _onDrop(e) {
    e.preventDefault();
    let fromIndex;
    if (e.dataTransfer) {
      fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    } else {
      fromIndex = this._draggedIndex;
    }
    const toIndex = [...e.currentTarget.children].indexOf(
      e.target.closest(".selected-entity")
    );

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
    if (newIcon === "") {
      this._clearIcon(entityId, iconType);
    } else {
      this._customIcons = {
        ...this._customIcons,
        [entityId]: {
          ...this._customIcons[entityId],
          [iconType]: newIcon,
        },
      };
      this._updateCustomIconsConfig();
    }
  }

  _updateIconInteractionsConfig() {
    const newConfig = {
      ...this.config,
      icon_interactions: this._iconInteractions,
    };
    this.configChanged(newConfig);
  }

  _renderColorPickers() {
    const getDefaultColor = (property) => {
      const style = getComputedStyle(this);
      return (
        style.getPropertyValue(property).trim() ||
        style.getPropertyValue(`--${property}`).trim()
      );
    };

    const defaultColors = {
      cardTitleColor: getDefaultColor("--primary-text-color"),
      cardBackgroundColor: UltraVehicleCardEditor._getComputedColor("--ha-card-background") || UltraVehicleCardEditor._getComputedColor("--card-background-color"),
      barBackgroundColor: getDefaultColor("--secondary-text-color"),
      barBorderColor: getDefaultColor("--secondary-text-color"),
      barFillColor: getDefaultColor("--primary-color"),
      limitIndicatorColor: getDefaultColor("--primary-text-color"),
      infoTextColor: getDefaultColor("--secondary-text-color"),
      carStateTextColor: getDefaultColor("--primary-text-color"),
      rangeTextColor: getDefaultColor("--primary-text-color"),
      percentageTextColor: getDefaultColor("--primary-text-color"),
    };

    return html`
      <div class="color-pickers">
        <h3>${this.localize("editor.colors")}</h3>
        <div class="entity-description">
          ${this.localize("editor.custom_colors_description")}
        </div>
        <div class="reset-all-colors">
        <span>${this.localize("editor.reset_all_colors")}</span>
        <ha-icon
          class="reset-icon clickable"
          icon="mdi:refresh"
          @click="${this._resetAllColors}"
          title="${this.localize("editor.reset_all_colors")}"
        ></ha-icon>
      </div>
        <div class="color-pickers-grid">
          ${Object.entries(defaultColors).map(
            ([key, defaultValue]) => html`
              <div class="color-picker-item">
                ${this._renderColorPicker(
                  this.localize(`editor.${key}`),
                  key,
                  defaultValue
                )}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  _renderBarGradientToggle() {
    return html`
      <div class="bar-gradient-section">
        <div class="input-group">
          <label for="useBarGradient">${this.localize("editor.use_bar_gradient")}</label>
          <label class="switch">
            <input
              type="checkbox"
              id="useBarGradient"
              .checked=${this.config.useBarGradient || false}
              @change=${this._handleUseBarGradientChange}
            />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="description">
          ${this.localize("editor.bar_gradient_description")}
        </div>
        ${this.config.useBarGradient ? this._renderBarGradientOptions() : ''}
      </div>
    `;
  }

  _renderBarGradientOptions() {
    const gradientStops = this.config.barGradientStops || this._getDefaultGradientStops();

    return html`
      <div class="bar-gradient-options">
        ${this._renderGradientPreview(gradientStops)}
        ${gradientStops.map((stop, index) => html`
          <div class="gradient-stop">
            <ha-textfield
              type="number"
              min="0"
              max="100"
              .value=${stop.percentage}
              @input=${(e) => this._updateGradientStop(index, 'percentage', parseInt(e.target.value))}
              label="${this.localize("editor.percentage")}"
            ></ha-textfield>
            <div class="color-picker">
              <label>${this.localize("editor.color")}</label>
              <div class="icon-grid-color-picker-wrapper">
                <input
                  type="text"
                  .value="${stop.color}"
                  @input="${(e) => this._updateGradientStop(index, 'color', e.target.value)}"
                  class="hex-input"
                  style="background-color: ${stop.color}; color: ${this._getContrastYIQ(stop.color)};"
                />
                <div class="color-preview" style="background-color: ${stop.color};">
                  <ha-icon
                    icon="mdi:palette"
                    style="color: ${this._getContrastYIQ(stop.color)};"
                  ></ha-icon>
                  <input
                    type="color"
                    .value="${stop.color}"
                    @input="${(e) => this._updateGradientStop(index, 'color', e.target.value)}"
                    class="color-input"
                  />
                </div>
                <ha-icon
                  class="reset-icon"
                  icon="mdi:refresh"
                  @click="${(e) => this._resetGradientStopColor(e, index)}"
                ></ha-icon>
              </div>
            </div>
            <ha-icon
              class="delete-icon"
              icon="mdi:close"
              @click="${() => this._deleteGradientStop(index)}"
              title="${this.localize("editor.delete_gradient_stop")}"
            ></ha-icon>
          </div>
        `)}
        ${gradientStops.length < 11 ? html`
          <mwc-button @click=${this._addGradientStop}>
            ${this.localize("editor.add_gradient_stop")}
          </mwc-button>
        ` : ''}
      </div>
    `;
  }

  _renderGradientPreview(stops) {
    const sortedStops = stops.slice().sort((a, b) => a.percentage - b.percentage);
    const gradientString = sortedStops.map(stop => `${stop.color} ${stop.percentage}%`).join(', ');

    return html`
      <div class="gradient-preview-container">
        <div class="gradient-preview" style="background: linear-gradient(to right, ${gradientString});">
          ${[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(percentage => html`
            <div class="percentage-marker" style="left: ${percentage}%;">
              <div class="marker-line"></div>
              <span class="marker-label">${percentage}%</span>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _handleUseBarGradientChange(e) {
    const useBarGradient = e.target.checked;
    if (useBarGradient && (!this.config.barGradientStops || this.config.barGradientStops.length === 0)) {
      // Set default gradient stops when first enabled
      this._updateConfig('barGradientStops', [
        { percentage: 0, color: '#FF0000' },  // Red at 0%
        { percentage: 100, color: '#00FF00' } // Green at 100%
      ]);
    }
    this._updateConfig('useBarGradient', useBarGradient);
  }

  _updateGradientStop(index, property, value) {
    const gradientStops = [...(this.config.barGradientStops || [])];
    gradientStops[index] = { ...gradientStops[index], [property]: value };
    this._updateConfig('barGradientStops', gradientStops);
  }

  _resetGradientStopColor(e, index) {
    e.stopPropagation();
    const defaultColors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff'];
    const gradientStops = [...(this.config.barGradientStops || [])];
    gradientStops[index] = { ...gradientStops[index], color: defaultColors[index % defaultColors.length] };
    this._updateConfig('barGradientStops', gradientStops);
  }

  _deleteGradientStop(index) {
    let gradientStops = [...(this.config.barGradientStops || this._getDefaultGradientStops())];
    
    if (gradientStops.length > 2) {
      gradientStops.splice(index, 1);
    } else {
      // If we're trying to delete when only 2 stops remain, reset to default
      gradientStops = this._getDefaultGradientStops();
    }
    
    this._updateConfig('barGradientStops', gradientStops);
  }

  _getDefaultGradientStops() {
    return [
      { percentage: 0, color: '#FF0000' },
      { percentage: 100, color: '#00FF00' }
    ];
  }

  _getFullGradientStops() {
    return [
      { percentage: 0, color: '#FF0000' },
      { percentage: 10, color: '#FF1A00' },
      { percentage: 20, color: '#FF3300' },
      { percentage: 30, color: '#FF4D00' },
      { percentage: 40, color: '#FF6600' },
      { percentage: 50, color: '#FFFF00' },
      { percentage: 60, color: '#CCFF00' },
      { percentage: 70, color: '#99FF00' },
      { percentage: 80, color: '#66FF00' },
      { percentage: 90, color: '#33FF00' },
      { percentage: 100, color: '#00FF00' }
    ];
  }

  _addGradientStop() {
    const gradientStops = [...(this.config.barGradientStops || this._getDefaultGradientStops())];
    if (gradientStops.length < 11) {
      const fullStops = this._getFullGradientStops();
      const newStop = fullStops.find(stop => !gradientStops.some(existing => existing.percentage === stop.percentage));
      if (newStop) {
        gradientStops.push(newStop);
        gradientStops.sort((a, b) => a.percentage - b.percentage);
        this._updateConfig('barGradientStops', gradientStops);
      }
    } else {
      console.warn("Maximum of 11 gradient stops reached");
    }
  }

  _renderColorPicker(label, configKey, defaultValue) {
    const currentValue = this.config[configKey] || UltraVehicleCardEditor._getComputedColor(defaultValue);
    const textColor = currentValue.startsWith('rgba') ? '#808080' : this._getContrastYIQ(currentValue);

    return html`
      <div class="color-picker">
        <label>${label}</label>
        <div class="icon-grid-color-picker-wrapper">
          <input
            type="text"
            .value="${currentValue}"
            @input="${(e) => this._colorChanged(e, configKey)}"
            class="hex-input"
            style="background-color: ${currentValue}; color: ${textColor};"
          />
          <div class="color-preview" style="background-color: ${currentValue};">
            <ha-icon
              icon="mdi:palette"
              style="color: ${textColor};"
            ></ha-icon>
            <input
              type="color"
              .value="${currentValue.startsWith('rgba') ? this._rgbaToHex(currentValue) : currentValue}"
              @input="${(e) => this._colorChanged(e, configKey)}"
              class="color-input"
            />
          </div>
           <ha-icon
          class="reset-icon"
          icon="mdi:refresh"
          @click="${(e) => this._resetColor(configKey, defaultValue, e)}"
        ></ha-icon>
        </div>
      </div>
    `;
  }

  _rgbaToHex(rgba) {
    const [r, g, b] = rgba.match(/\d+/g).map(Number);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  static _expandHexColor(color) {
    if (color && color.charAt(0) === '#' && color.length === 4) {
      return color.replace(/([0-9A-F])/gi, '$1$1');
    }
    return color;
  }

  _colorChanged(e, configKey) {
    const color = UltraVehicleCardEditor._expandHexColor(e.target.value);
    this._userChangedColors[configKey] = color !== this._defaultColors[configKey];
    this._applyColorChange(configKey, color);
  }

  _updateCardTitleColor(color) {
    const event = new CustomEvent("config-changed", {
      detail: { config: { ...this.config, cardTitleColor: color } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _updateSingleColor(configKey, color) {
    const event = new CustomEvent("config-changed", {
      detail: { config: { ...this.config, [configKey]: color } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _resetColor(configKey, defaultValue, e) {
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
    const expandedDefaultColor = UltraVehicleCardEditor._expandHexColor(defaultValue);
    this._userChangedColors[configKey] = false;
    this._applyColorChange(configKey, expandedDefaultColor);
  }

  _updateIconBackground() {
    const cardBackgroundColor = this.config.cardBackgroundColor || getComputedStyle(this).getPropertyValue('--card-background-color').trim();
    const isDarkBackground = this._isColorDark(cardBackgroundColor);
    this._updateIconBackgroundColor(isDarkBackground);
  }

  _handleStateConfigChange(e) {
    const { config, entityId, stateType, attributeValue } = e.detail;
    let newConfig = { ...this.config };
    
    if (!newConfig.custom_icons) {
      newConfig.custom_icons = {};
    }
    if (!newConfig.custom_icons[entityId]) {
      newConfig.custom_icons[entityId] = {};
    }
    
    newConfig.custom_icons[entityId][`${stateType}State`] = config[`${stateType}State`];
    
    if (config[`${stateType}State`].startsWith('attribute:') && attributeValue) {
      newConfig.custom_icons[entityId][`${stateType}State`] += `:${attributeValue}`;
    }
    
    this.config = newConfig;
    this.configChanged(this.config);
  }

  _fireEvent(type, detail) {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
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
    const entityKey = configKey === 'image_url' ? 'image_entity' : 
                      configKey === 'charging_image_url' ? 'charging_image_entity' : 
                      'engine_on_image_entity';
    const value = this.config[configKey] || "";
    const currentType = this.config[imageTypeKey] || "default";

    return html`
      <div class="image-input-container">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label style="margin-right: 16px; font-size: 1.2em; font-weight: bold;">${label}</label>
          <div class="radio-group" style="justify-content: flex-end;">
            <label>
              <input type="radio" name="${imageTypeKey}" value="none"
                ?checked="${currentType === "none"}"
                @change="${(e) => this._handleImageSourceChange(configKey, "none")}"
              />
              ${this.localize("editor.none")}
            </label>
            <label>
              <input type="radio" name="${imageTypeKey}" value="image"
                ?checked="${currentType === "image"}"
                @change="${(e) => this._handleImageSourceChange(configKey, "image")}"
              />
              ${this.localize("editor.local_url")}
            </label>
            <label>
              <input type="radio" name="${imageTypeKey}" value="entity"
                ?checked="${currentType === "entity"}"
                @change="${(e) => this._handleImageSourceChange(configKey, "entity")}"
              />
              ${this.localize("editor.entity")}
            </label>
          </div>
        </div>

        ${currentType === "image"
          ? html`
              <div class="image-upload-container">
                <input
                  type="text"
                  .value="${value}"
                  placeholder="${placeholder}"
                  @input="${(e) => this._handleImageUrlInput(e, configKey)}"
                />
                <label class="file-upload-label" for="${configKey}-upload"
                  >${this.localize("editor.upload_image")}</label
                >
                <input
                  type="file"
                  id="${configKey}-upload"
                  style="display:none"
                  @change="${(e) => this._handleImageUpload(e, configKey)}"
                />
              </div>
            `
          : currentType === "entity"
            ? html`
                <div class="entity-picker-wrapper">
                  <div class="entity-picker-container">
                    <input
                      type="text"
                      class="entity-picker-input"
                      .value="${this.config[entityKey] || ""}"
                      @input="${(e) => this._entityFilterChanged(e, entityKey)}"
                      placeholder="${this.localize("editor.search_entities")}"
                    />
                    ${this[`_${entityKey}Filter`]
                      ? html`
                          <div class="entity-picker-results">
                            ${Object.entries(this.hass.states)
                              .filter(([eid, state]) =>
                                eid.toLowerCase().includes(this[`_${entityKey}Filter`].toLowerCase()) ||
                                this._entityHasImage(state)
                              )
                              .map(
                                ([eid, state]) => html`
                                  <div
                                    class="entity-picker-result"
                                    @click="${() => this._selectEntity(entityKey, eid)}"
                                  >
                                    ${eid}${this._entityHasImage(state) ? ' (has image)' : ''}
                                  </div>
                                `
                              )}
                          </div>
                        `
                      : ""}
                  </div>
                </div>
              `
            : ""}
      </div>
    `;
  }

  _entityHasImage(state) {
    if (typeof state.state === 'string' && state.state.startsWith('http')) {
      return true;
    }
    for (const [key, value] of Object.entries(state.attributes)) {
      if (typeof value === 'string' && value.startsWith('http')) {
        return true;
      }
    }
    return false;
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
                placeholder="${this.localize("editor.search_entities")}"
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
    value = value || DEFAULT_IMAGE_URL;
    switch (type) {
      case "entity":
        return html`
          <ha-entity-picker
            .hass=${this.hass}
            .value=${value.startsWith("entity:") ? value.slice(7) : value}
            .configValue="${configKey}"
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>
        `;
      case "template":
        return html`
          <ha-textarea
            .value=${value}
            .configValue="${configKey}"
            @input="${this._templateChanged}"
            placeholder="${this.localize("editor.enter_template_code")}"
            rows="3"
          ></ha-textarea>
        `;
      default: // 'image'
        return html`
          <ha-textfield
            type="text"
            .value="${value}"
            .configValue="${configKey}"
            placeholder="${placeholder}"
            @input="${this._valueChanged}"
          />
          <label for="${configKey}_upload" class="file-upload-label">
            ${this.localize("editor.upload")}
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
      console.error("Error evaluating template:", error);
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
    const newValue = ev.detail.value || "";
    this._updateConfig(configValue, newValue);
  }

  _updateConfig(key, value) {
    if (typeof key === 'object') {
      this.config = { ...this.config, ...key };
    } else {
      this.config = { ...this.config, [key]: value };
    }
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _getTemplateHelpers() {
    return Object.keys(this.hass.states)
      .filter(
        (entityId) =>
          entityId.startsWith("template.") || entityId.startsWith("input_text.")
      )
      .map((entityId) => ({
        value: `{{ states('${entityId}') }}`,
        name: this.hass.states[entityId].attributes.friendly_name || entityId,
      }));
  }

  _entityPicked(e, configKey) {
    const newValue = e.detail.value;
    if (newValue) {
      this._updateConfig(configKey, newValue);
    }
  }

  _handleImageUpload(e, configKey) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        this._updateConfig(configKey, imageData);
        this._updateConfig(`${configKey}_type`, 'image');
        this.requestUpdate();
        // Force a full update of the card
        this._fireEvent('config-changed', { config: this.config });
      };
      reader.readAsDataURL(file);
    }
  }

  _selectEntity(configValue, entityId) {
    const entity = this.hass.states[entityId];
    let imageUrl = entity.state;

    if (!imageUrl.startsWith('http')) {
      imageUrl = Object.values(entity.attributes).find(attr => typeof attr === 'string' && attr.startsWith('http')) || '';
    }

    this.config = {
      ...this.config,
      [configValue]: entityId,
      [`${configValue.replace('_entity', '_url')}`]: imageUrl,
    };
    this[`_${configValue}Filter`] = "";
    this.configChanged(this.config);
  }

  _iconGridFilterChanged(e) {
    this._iconGridFilter = e.target.value;
    this.requestUpdate();
  }

  _addIconGridEntity(entityId) {
    if (this._selectedIconGridEntities.length === 0) {
      this._addRowSeparator();
    }
    this._selectedIconGridEntities.push(entityId);
    this._updateIconGridConfig();
    this._iconGridFilter = "";
  }

  _removeIconGridEntity(index) {
    const removedEntityId = this._selectedIconGridEntities[index];
    this._selectedIconGridEntities = this._selectedIconGridEntities.filter(
      (_, i) => i !== index
    );
    if (removedEntityId === "row-separator") {
      // Remove the row separator configuration
      const { [index]: _, ...restSeparators } = this.config.row_separators;
      this.config.row_separators = restSeparators;
    } else {
      const { [removedEntityId]: _, ...restIcons } = this._customIcons;
      this._customIcons = restIcons;
    }

    // If all entities are removed, remove the last row separator
    if (
      this._selectedIconGridEntities.length === 1 &&
      this._selectedIconGridEntities[0] === "row-separator"
    ) {
      this._selectedIconGridEntities = [];
      this.config.row_separators = {};
    }

    this._updateIconGridConfig();
    this._updateCustomIconsConfig();
  }

  _updateIconGridConfig() {
    this._ensureRowSeparatorAtTop();
    this.config = {
      ...this.config,
      icon_grid_entities: this._selectedIconGridEntities,
      row_separators: { ...this.config.row_separators },
    };
    this.configChanged(this.config);
  }

  _ensureRowSeparatorAtTop() {
    if (
      this._selectedIconGridEntities.length > 0 &&
      this._selectedIconGridEntities[0] !== "row-separator"
    ) {
      this._selectedIconGridEntities.unshift("row-separator");
      if (!this.config.row_separators) {
        this.config.row_separators = {};
      }
      this.config.row_separators[0] = {
        color: "var(--uvc-info-text-color)",
        height: 1,
        icon_gap: 20,
        horizontalAlignment: "center",
        verticalAlignment: "middle",
      };
      this._updateIconGridConfig();
    }
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
    return key
      .split(/(?=[A-Z])/)
      .join(" ")
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  _getContrastYIQ(color) {
    let r, g, b, a = 1;
    
    if (color.startsWith('rgba')) {
      [r, g, b, a] = color.match(/[\d.]+/g).map(Number);
    } else if (color.startsWith('rgb')) {
      [r, g, b] = color.match(/\d+/g).map(Number);
    } else if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    } else {
      return '#808080'; // Default to black text if color format is unknown
    }

    // Adjust for transparency by blending with a white background
    r = Math.round(r * a + 255 * (1 - a));
    g = Math.round(g * a + 255 * (1 - a));
    b = Math.round(b * a + 255 * (1 - a));

    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  configChanged(newConfig) {
    const event = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  _evaluateTemplate(template) {
    try {
      // Use Function constructor to create a function from the template string
      const templateFunction = new Function(
        "states",
        "user",
        `return \`${template}\`;`
      );
      // Call the function with the hass states and user object
      const result = templateFunction(this.hass.states, this.hass.user);

      return result;
    } catch (error) {
      console.error("Error evaluating template:", error);
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

  _updateIconLabel(entityId, value) {
    if (!this.config.icon_labels) {
      this.config.icon_labels = {};
    }
    this.config.icon_labels[entityId] = value;
    this.configChanged(this.config);
  }

  _addRowSeparator() {
    const newIndex = this._selectedIconGridEntities.length;
    this._selectedIconGridEntities.push("row-separator");
    if (
      !this.config.row_separators ||
      Object.isFrozen(this.config.row_separators)
    ) {
      this.config.row_separators = { ...this.config.row_separators };
    }
    this.config.row_separators[newIndex] = {
      color: "transparent",
      height: 1,
      icon_gap: 20,
      horizontalAlignment: "center",
      verticalAlignment: "middle",
    };
    this._updateIconGridConfig();
  }

  _renderRowSeparatorEditor(index) {
    return html`
      <div
        class="selected-entity row-separator"
        draggable="true"
        @dragstart="${(e) => this._onDragStart(e, index)}"
        data-entity-id="row-separator"
      >
        <div class="entity-header">
          <div
            class="handle"
            @mousedown="${(e) => this._onDragStart(e, index)}"
            @touchstart="${(e) => this._onDragStart(e, index)}"
          >
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <ha-icon
            class="toggle-details"
            icon="mdi:chevron-down"
            @click="${() => this._toggleRowSeparatorDetails(index)}"
          ></ha-icon>
          <span class="entity-name"
            >${this.localize("editor.row_separator")}</span
          >
          <ha-icon
            class="remove-entity"
            icon="mdi:close"
            @click="${() => this._removeIconGridEntity(index)}"
          ></ha-icon>
        </div>
        <div
          class="entity-details"
          id="row-separator-details-${index}"
          style="display: none;"
        >
          ${this._renderRowSeparatorDetails(index)}
        </div>
      </div>
    `;
  }

  _renderRowSeparatorDetails(index) {
    const separatorConfig = this.config.row_separators?.[index] || {};
    return html`
      <div class="row-separator-details">
        ${this._renderRowSeparatorColorPicker(index)}
        <div class="editor-row">
          <div class="editor-item">
            <label>${this.localize("editor.separator_height")}</label>
            <div class="input-with-unit">
              <input
                type="number"
                .value="${separatorConfig.height || ''}"
                @input="${(e) =>
                  this._updateRowSeparatorConfig(
                    index,
                    "height",
                    e.target.value === '' ? '' : parseInt(e.target.value)
                  )}"
                min="0"
                max="100"
              />
              <span class="unit">px</span>
            </div>
          </div>
          <div class="editor-item">
            <label>${this.localize("editor.icon_gap_size")}</label>
            <div class="input-with-unit">
              <input
                type="number"
                .value="${separatorConfig.icon_gap || ''}"
                @input="${(e) =>
                  this._updateRowSeparatorConfig(
                    index,
                    "icon_gap",
                    e.target.value === '' ? '' : parseInt(e.target.value)
                  )}"
                min="0"
                max="100"
              />
              <span class="unit">px</span>
            </div>
          </div>
        </div>
        <div class="editor-row">
          <div class="editor-item">
            <label>${this.localize("editor.horizontal_alignment")}</label>
            <div class="alignment-buttons">
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "horizontalAlignment",
                    "left"
                  )}"
                ?disabled="${separatorConfig.horizontalAlignment === "left"}"
                title="${this.localize("editor.align_left")}"
              >
                ◀
              </button>
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "horizontalAlignment",
                    "center"
                  )}"
                ?disabled="${separatorConfig.horizontalAlignment === "center" ||
                separatorConfig.horizontalAlignment === undefined}"
                title="${this.localize("editor.align_center")}"
              >
                ⬤
              </button>
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "horizontalAlignment",
                    "right"
                  )}"
                ?disabled="${separatorConfig.horizontalAlignment === "right"}"
                title="${this.localize("editor.align_right")}"
              >
                ▶
              </button>
            </div>
          </div>
          <div class="editor-item">
            <label>${this.localize("editor.vertical_alignment")}</label>
            <div class="alignment-buttons">
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "verticalAlignment",
                    "top"
                  )}"
                ?disabled="${separatorConfig.verticalAlignment === "top"}"
                title="${this.localize("editor.align_top")}"
              >
                ▲
              </button>
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "verticalAlignment",
                    "middle"
                  )}"
                ?disabled="${separatorConfig.verticalAlignment === "middle"}"
                title="${this.localize("editor.align_middle")}"
              >
              ⬤
              </button>
              <button
                class="icon-button"
                @click="${() =>
                  this._updateRowSeparatorConfig(
                    index,
                    "verticalAlignment",
                    "bottom"
                  )}"
                ?disabled="${separatorConfig.verticalAlignment === "bottom"}"
                title="${this.localize("editor.align_bottom")}"
              >
                ▼
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderRowSeparatorColorPicker(index) {
    const currentColor =
      this.config.row_separators?.[index]?.color ||
      this._getDefaultColorAsHex();
    const textColor = this._getContrastYIQ(currentColor);
    const isTransparent = currentColor === "transparent";

    return html`
      <div class="row-separator-color-row">
        <div class="color-picker row-separator-color-picker">
          <label>${this.localize("editor.separator_color")}</label>
          <div class="icon-grid-color-picker-wrapper">
            <input
              type="text"
              .value="${isTransparent
                ? this.localize("editor.transparent")
                : currentColor}"
              @input="${(e) => this._rowSeparatorColorChanged(e, index)}"
              class="hex-input"
              style="background-color: ${isTransparent
                ? "transparent"
                : currentColor}; color: ${textColor};"
            />
            <div
              class="color-preview"
              style="background-color: ${isTransparent
                ? "transparent"
                : currentColor};"
            >
              <ha-icon
                icon="mdi:palette"
                style="color: ${textColor};"
              ></ha-icon>
              <input
                type="color"
                .value="${isTransparent ? "#ffffff" : currentColor}"
                @input="${(e) => this._rowSeparatorColorChanged(e, index)}"
                class="color-input"
              />
            </div>
            <ha-icon
              class="reset-icon"
              icon="mdi:refresh"
              @click="${(e) => this._resetRowSeparatorColor(e, index)}"
            ></ha-icon>
          </div>
        </div>
        <div class="transparent-button-wrapper">
          <button
            class="transparent-button"
            @click="${() => this._toggleTransparentSeparator(index)}"
          >
            ${isTransparent
              ? this.localize("editor.set_color")
              : this.localize("editor.transparent")}
          </button>
        </div>
      </div>
    `;
  }

  _toggleTransparentSeparator(index) {
    const currentColor = this.config.row_separators?.[index]?.color;
    const defaultColor = this._getDefaultColorAsHex();
    const newColor =
      currentColor === "transparent" ? defaultColor : "transparent";
    this._updateRowSeparatorConfig(index, "color", newColor);
    this.requestUpdate();
  }

  _resetRowSeparatorColor(e, index) {
    e.stopPropagation();
    const defaultColor = this._getDefaultColorAsHex();
    this._updateRowSeparatorConfig(index, "color", defaultColor);
  }

  _toggleRowSeparatorDetails(index) {
    const detailsElement = this.shadowRoot.querySelector(
      `#row-separator-details-${index}`
    );
    const toggleIcon = this.shadowRoot.querySelector(
      `.selected-entity[data-entity-id="row-separator"]:nth-child(${
        index + 1
      }) .toggle-details`
    );

    if (detailsElement && toggleIcon) {
      const isHidden =
        detailsElement.style.display === "none" ||
        !detailsElement.style.display;
      detailsElement.style.display = isHidden ? "block" : "none";
      toggleIcon.icon = isHidden ? "mdi:chevron-up" : "mdi:chevron-down";
    }
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.setDefaultValues();
    this.loadResources(this.config.language || navigator.language).then(() => {
      this.requestUpdate();
    });
  }

  _camelToKebab(string) {
    return string
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .toLowerCase();
  }

  _updateConfigAndRequestUpdate(key, value) {
    this.config = {
      ...this.config,
      [key]: value,
    };
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _rowSeparatorColorChanged(e, index) {
    const color = e.target.value;
    this._updateRowSeparatorConfig(index, "color", color);
  }

  _applyColorChange(configKey, color) {
    const expandedColor = UltraVehicleCardEditor._expandHexColor(color);
    if (configKey === 'cardTitleColor') {
      this.config = {
        ...this.config,
        [configKey]: color,
      };
      this._updateCardTitleColor(color);
    } else {
      if (configKey.includes("_")) {
        // This is an icon-specific color
        const [entityId, colorType] = configKey.split("_");
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
        this._updateSingleColor(configKey, color);
      }
    }
    this.requestUpdate();
  }

  _getIconColor(entityId, colorType) {
    const customIcon = this._customIcons[entityId];
    if (customIcon && customIcon[`${colorType}Color`]) {
      return customIcon[`${colorType}Color`];
    }
    if (colorType === "active") {
      return UltraVehicleCardEditor._getComputedColor("--primary-color");
    }
    return UltraVehicleCardEditor._getComputedColor("--primary-text-color");
  }


  // Add this method to hide/show image height inputs
  _updateImageHeightVisibility() {
    const mainImageHeightInput = this.shadowRoot.querySelector('#main-image-height');
    const chargingImageHeightInput = this.shadowRoot.querySelector('#charging-image-height');
    const engineOnImageHeightInput = this.shadowRoot.querySelector('#engine-on-image-height');

    if (mainImageHeightInput) {
      mainImageHeightInput.style.display = this.config.image_url_type === 'none' ? 'none' : 'block';
    }
    if (chargingImageHeightInput) {
      chargingImageHeightInput.style.display = this.config.charging_image_url_type === 'none' ? 'none' : 'block';
    }
    if (engineOnImageHeightInput) {
      engineOnImageHeightInput.style.display = this.config.engine_on_image_url_type === 'none' ? 'none' : 'block';
    }
  }

  // Call this method in the updated lifecycle method
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      this._updateImageHeightVisibility();
    }
  }

  // Update the image type change handlers
  _onMainImageTypeChange(e) {
    this._handleImageSourceChange('image_url', e.target.value);
  }

  _onChargingImageTypeChange(e) {
    this._handleImageSourceChange('charging_image_url', e.target.value);
  }

  _onEngineOnImageTypeChange(e) {
    this._handleImageSourceChange('engine_on_image_url', e.target.value);
  }

  _handleImageSourceChange(configKey, newType) {
    this._updateConfig(`${configKey}_type`, newType);
    if (newType === 'none') {
      this._updateConfig(configKey, '');
      this._updateConfig(`${configKey.replace('_url', '_entity')}`, '');
    } else if (newType === 'entity') {
      this._updateConfig(configKey, '');
    } else if (newType === 'image') {
      this._updateConfig(`${configKey.replace('_url', '_entity')}`, '');
      if (this.config[configKey] === DEFAULT_IMAGE_URL) {
        this._updateConfig(configKey, '');
      }
    }
    this._updateImageHeightVisibility();
    
    // Force a full update of the card
    this._fireEvent('config-changed', { config: this.config });
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    const value = target.value;
    const configValue = target.configValue;

    if (configValue) {
      if (configValue === 'show_engine_animation') {
        this._showEngineAnimation = target.checked;
        this._updateConfig(configValue, this._showEngineAnimation);
      } else if (configValue === 'show_charging_animation') {
        this._showChargingAnimation = target.checked;
        this._updateConfig(configValue, this._showChargingAnimation);
      } else if (configValue === 'mainImageHeight' || configValue === 'chargingImageHeight' || configValue === 'engineOnImageHeight') {
        // For image height inputs, append 'px' to the value if it's not already there
        const newValue = value.endsWith('px') ? value : `${value}px`;
        this._updateConfig(configValue, newValue);
        // Force a full update of the card
        this._fireEvent('config-changed', { config: this.config });
      } else if (configValue === 'image_url' || configValue === 'charging_image_url' || configValue === 'engine_on_image_url') {
        this._updateConfig(configValue, value);
      } else {
        this._updateConfig(configValue, target.checked !== undefined ? target.checked : value);
      }
    }
  }

  _entityFilterChanged(e, configKey) {
    this[`_${configKey}Filter`] = e.target.value;
    this.requestUpdate();
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

  _updateIconBackgroundColor(isDarkBackground) {
    const iconBackgroundColor = isDarkBackground ? '#ffffff' : '#000000';
    this.style.setProperty('--uvc-icon-background', iconBackgroundColor);
  }

  firstUpdated() {
    super.firstUpdated();
    this.addEventListener('click', this._handleEditorClick);
    this._addDialogClosePrevention();
  }

  _addDialogClosePrevention() {
    window.addEventListener('dialog-closed', this._preventDialogClose, true);
  }

  _removeDialogClosePrevention() {
    window.removeEventListener('dialog-closed', this._preventDialogClose, true);
  }

  _preventDialogClose(e) {
    if (e.target.tagName === 'HA-DIALOG') {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  _handleEditorClick(e) {
    e.stopPropagation();
  }

  _handleStateConfigChange(e) {
    const { config, entityId, stateType, attributeValue } = e.detail;
    let newConfig = { ...this.config };
    
    if (!newConfig.custom_icons) {
      newConfig.custom_icons = {};
    }
    if (!newConfig.custom_icons[entityId]) {
      newConfig.custom_icons[entityId] = {};
    }
    
    newConfig.custom_icons[entityId][`${stateType}State`] = config[`${stateType}State`];
    
    if (config[`${stateType}State`].startsWith('attribute:') && attributeValue) {
      newConfig.custom_icons[entityId][`${stateType}State`] += `:${attributeValue}`;
    }
    
    this.config = newConfig;
    this.configChanged(this.config);
  }

  _titleChanged(ev) {
    const newTitle = ev.target.value;
    this._updateConfig("title", newTitle);
  }

  _showTitleToggleChanged(ev) {
    const showTitle = ev.target.checked;
    this._updateConfig("showTitle", showTitle);
  }

  _updateConfig(key, value) {
    if (typeof key === 'object') {
      this.config = { ...this.config, ...key };
    } else {
      this.config = { ...this.config, [key]: value };
    }
    this.configChanged(this.config);
    this.requestUpdate();
  }

  _toggleFormattedEntities(e) {
    const useFormattedEntities = e.target.checked;
    this._updateConfig("useFormattedEntities", useFormattedEntities);
    this._fireEvent("config-changed", { config: this.config });
  }

  _updateIconSizesConfig() {
    this.config = {
      ...this.config,
      icon_sizes: this._iconSizes,
    };
    this.configChanged(this.config);
  }

  _setNoIcon(entityId, iconType) {
    this._customIcons = {
      ...this._customIcons,
      [entityId]: {
        ...this._customIcons[entityId],
        [iconType]: "no-icon",
      },
    };
    this._updateCustomIconsConfig();
    this.requestUpdate();
  }

  _clearIcon(entityId, iconType) {
    if (this._customIcons[entityId]) {
      const { [iconType]: _, ...rest } = this._customIcons[entityId];
      if (Object.keys(rest).length === 0) {
        const { [entityId]: __, ...restIcons } = this._customIcons;
        this._customIcons = restIcons;
      } else {
        this._customIcons = {
          ...this._customIcons,
          [entityId]: rest,
        };
      }
      this._updateCustomIconsConfig();
    }
  }

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
    }
    return "Default"; // Fallback color if unable to determine
  }

  setDefaultValues() {
    if (!this.config.image) {
      this._updateConfig("image", DEFAULT_IMAGE_URL);
    }
    if (!this.config.charging_image) {
      this._updateConfig("charging_image", DEFAULT_IMAGE_URL);
    }
  }

  _updateSingleColor(configKey, color) {
    const event = new CustomEvent("config-changed", {
      detail: { config: { ...this.config, [configKey]: color } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  static _getComputedColor(variable) {
    const style = getComputedStyle(document.documentElement);
    let value = style.getPropertyValue(variable).trim();
    
    if (value.startsWith("#")) {
      return this._expandHexColor(value);
    } else if (value.startsWith("rgb")) {
      // Handle both rgb and rgba
      const parts = value.match(/[\d.]+/g);
      if (parts.length >= 3) {
        const r = parseInt(parts[0]);
        const g = parseInt(parts[1]);
        const b = parseInt(parts[2]);
        const a = parts.length === 4 ? parseFloat(parts[3]) : 1;
        
        if (a < 1) {
          // Return rgba for transparent colors
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
          // Convert to hex for opaque colors
          return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
        }
      }
    }
    
    // Return the original value if it's not a recognized format
    return value;
  }
  
  static _getComputedColor(variable) {
    const style = getComputedStyle(document.documentElement);
    let value = style.getPropertyValue(variable).trim();
    
    if (value.startsWith("#")) {
      return this._expandHexColor(value);
    } else if (value.startsWith("rgb")) {
      // Handle both rgb and rgba
      const parts = value.match(/[\d.]+/g);
      if (parts.length >= 3) {
        const r = parseInt(parts[0]);
        const g = parseInt(parts[1]);
        const b = parseInt(parts[2]);
        const a = parts.length === 4 ? parseFloat(parts[3]) : 1;
        
        if (a < 1) {
          // Return rgba for transparent colors
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
          // Convert to hex for opaque colors
          return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
        }
      }
    }
    
    // Return the original value if it's not a recognized format
    return value;
  }

  _renderIconColorPicker(label, entityId, iconType) {
    const isActive = iconType === "active";
    const defaultColor = isActive
      ? UltraVehicleCardEditor._getComputedColor("--primary-color")
      : UltraVehicleCardEditor._getComputedColor("--primary-text-color");
    const currentColor = UltraVehicleCardEditor._expandHexColor(
      this.config.custom_icons[entityId]?.[`${iconType}Color`] || defaultColor
    );

    return html`
      <div class="color-picker">
        <label>${label}</label>
        <div class="icon-grid-color-picker-wrapper">
          <input
            type="text"
            .value="${currentColor}"
            @input="${(e) => this._iconColorChanged(e, entityId, iconType)}"
            class="hex-input"
            style="background-color: ${currentColor}; color: ${this._getContrastYIQ(
              currentColor
            )};"
          />
          <div class="color-preview" style="background-color: ${currentColor};">
            <ha-icon
              icon="mdi:palette"
              style="color: ${this._getContrastYIQ(currentColor)};"
            ></ha-icon>
            <input
              type="color"
              .value="${currentColor}"
              @input="${(e) => this._iconColorChanged(e, entityId, iconType)}"
              class="color-input"
            />
          </div>
          <ha-icon
            class="reset-icon"
            icon="mdi:refresh"
            @click="${(e) => this._resetIconColor(e, entityId, iconType)}"
          ></ha-icon>
        </div>
      </div>
    `;
  }
  

  // Update the image type change handlers
  _onMainImageTypeChange(e) {
    this._handleImageSourceChange('image_url', e.target.value);
  }

  _onChargingImageTypeChange(e) {
    this._handleImageSourceChange('charging_image_url', e.target.value);
  }

  _onEngineOnImageTypeChange(e) {
    this._handleImageSourceChange('engine_on_image_url', e.target.value);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleEditorClick);
    this._removeDialogClosePrevention();
    window.removeEventListener('set-theme', this._themeChangeListener);
  }


  _onThemeChange() {
    Object.keys(this._defaultColors).forEach((key) => {
      if (!this._userChangedColors[key]) {
        this._updateConfig(key, this._defaultColors[key]);
      }
    });
    this.requestUpdate();
  }

  _resetAllColors() {
    const defaultColors = {
      cardTitleColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
      cardBackgroundColor: UltraVehicleCardEditor._getComputedColor("--ha-card-background") || UltraVehicleCardEditor._getComputedColor("--card-background-color"),
      barBackgroundColor: UltraVehicleCardEditor._getComputedColor("--secondary-text-color"),
      barBorderColor: UltraVehicleCardEditor._getComputedColor("--secondary-text-color"),
      barFillColor: UltraVehicleCardEditor._getComputedColor("--primary-color"),
      limitIndicatorColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
      infoTextColor: UltraVehicleCardEditor._getComputedColor("--secondary-text-color"),
      carStateTextColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
      rangeTextColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
      percentageTextColor: UltraVehicleCardEditor._getComputedColor("--primary-text-color"),
    };
  
    Object.entries(defaultColors).forEach(([key, defaultValue]) => {
      this._resetColor(key, defaultValue);
    });
  
    this.requestUpdate();
  }

  _resetAllIconColors() {
    // Reset all icon colors to default
    this._customIcons = Object.keys(this._customIcons).reduce((acc, entityId) => {
      acc[entityId] = {
        ...this._customIcons[entityId],
        activeColor: undefined,
        inactiveColor: undefined
      };
      return acc;
    }, {});

    // Update the config
    this._updateCustomIconsConfig();

    // Remove the custom CSS properties
    this.style.removeProperty('--uvc-icon-active');
    this.style.removeProperty('--uvc-icon-inactive');

    // Update the config to remove global icon colors
    this.config = {
      ...this.config,
      iconActiveColor: undefined,
      iconInactiveColor: undefined
    };

    // Force a re-render of the card
    this._fireEvent('config-changed', { config: this.config });

    this.requestUpdate();
  }
}
customElements.define("ultra-vehicle-card-editor", UltraVehicleCardEditor);
