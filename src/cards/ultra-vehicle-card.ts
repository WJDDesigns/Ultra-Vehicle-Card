import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig, IconRowConfig, IconConfig, BarConfig } from '../types';
import { DEFAULT_VEHICLE_IMAGE, truncateText, hexToRgb } from '../utils/constants';
import { getImageUrl } from '../utils/image-upload';
import {
  generateGradientString,
  createLinearGradient,
  getColorAtPosition,
} from '../components/gradient-editor';
import { version, setVersion } from '../../dist/version.js';

// Set the version number - keep this in sync with version.js
setVersion('2.0-Beta1');

@customElement('ultra-vehicle-card')
export class UltraVehicleCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() private config!: UltraVehicleCardConfig;
  private _lastRenderTime = 0;

  static getConfigElement() {
    return document.createElement('ultra-vehicle-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'Vehicle Title',
      title_alignment: 'center',
      title_size: '24px',
      formatted_entities: true,
      vehicle_image_type: 'default',
      // Other defaults...
    };
  }

  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  static get styles() {
    return css`
      :host {
        --bar-height: 10px;
        --bar-thickness: var(--bar-height, 10px);
        --bar-radius: 2px;
        --card-padding: 16px;
      }

      ha-card {
        overflow: hidden;
      }

      .card-content {
        padding: var(--card-padding);
      }

      .card-title {
        color: var(--primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        letter-spacing: -0.012em;
        line-height: 1.2;
        display: block;
        width: 100%;
        margin-top: 8px;
        margin-bottom: 16px;
        /* font-size is set via inline style from config */
      }

      .two-column-layout {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 16px;
        height: 100%;
      }

      .column {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Vehicle Info styles */
      .vehicle-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 16px;
      }

      .vehicle-info-top {
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-bottom: 8px;
      }

      .info-item-with-icon {
        display: flex;
        align-items: center;
        font-size: 0.85em;
        color: var(--primary-text-color);
      }

      .info-item-with-icon ha-icon {
        margin-right: 8px;
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }

      .info-item-status {
        font-size: 0.85em;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-top: 4px;
      }

      .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
      }

      .info-item.info-empty {
        justify-content: center;
        padding: 12px;
        font-style: italic;
        color: var(--secondary-text-color);
      }

      .info-label {
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-right: 8px;
      }

      .info-value {
        font-weight: 400;
        color: var(--primary-text-color);
      }

      /* Vertical centering for two-column layout */
      .two-column-layout .column {
        justify-content: center;
        min-height: 200px;
      }

      /* Ensure images in two-column layout don't overflow their columns */
      .column .vehicle-image-container,
      .column .action-image-container {
        max-width: 100%;
      }

      /* Ensure nested elements in columns maintain their styles */
      .column .bars-container,
      .column .icon-rows {
        width: 100%;
        margin: 0 auto;
      }

      /* Center content within columns */
      .column .card-title,
      .column .vehicle-image-container,
      .column .bars-container,
      .column .icon-rows-container {
        align-self: center;
        width: 100%;
      }

      .vehicle-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .vehicle-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Icon styling */
      .icon-rows-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
      }

      /* Icon Row with alignment classes */
      .icon-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 4px 0;
      }

      /* Alignment classes */
      .align-flex-start {
        justify-content: flex-start;
      }

      .align-center {
        justify-content: center;
      }

      .align-flex-end {
        justify-content: flex-end;
      }

      .align-space-between {
        justify-content: space-between;
      }

      .align-space-around {
        justify-content: space-around;
      }

      .align-space-evenly {
        justify-content: space-evenly;
      }

      /* Icon container */
      .icon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 8px;
        box-sizing: border-box;
      }

      .icon-container.draggable {
        cursor: move;
        user-select: none;
        -webkit-user-select: none;
      }

      .icon-container:hover {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-background {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        padding: 8px;
        box-sizing: border-box;
      }

      .icon-container ha-icon {
        font-size: 24px;
      }

      .icon-label {
        font-size: 0.85em;
        margin-top: 4px;
        text-align: center;
        width: 100%;
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: normal !important;
        word-break: break-word;
        line-height: 1.2;
      }

      .icon-state {
        font-size: 0.75em;
        color: var(--secondary-text-color);
        text-align: center;
        white-space: normal !important;
        overflow: visible !important;
        text-overflow: clip !important;
        width: 100%;
      }

      .card-header {
        padding: 8px 16px 16px;
        display: flex;
        width: 100%;
      }

      .card-header.left {
        justify-content: flex-start;
      }

      .card-header.center {
        justify-content: center;
      }

      .card-header.right {
        justify-content: flex-end;
      }

      .card-title.left {
        text-align: left;
      }

      .card-title.center {
        text-align: center;
      }

      .card-title.right {
        text-align: right;
      }

      /* Progress bar container styles */
      .bars-container {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .progress-bar-container {
        margin-bottom: 8px;
      }

      .progress-bar {
        position: relative;
        height: 16px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        overflow: hidden;
        width: 100%;
      }

      /* Bar width classes */
      .progress-bar.width-25 {
        width: 25%;
      }

      .progress-bar.width-50 {
        width: 50%;
      }

      .progress-bar.width-75 {
        width: 75%;
      }

      .progress-bar.width-100 {
        width: 100%;
      }

      .progress-bar.bar-size-thin {
        height: 8px;
        border-radius: 4px;
      }

      .progress-bar.bar-size-regular {
        height: 16px;
        border-radius: 8px;
      }

      .progress-bar.bar-size-thick {
        height: 24px;
        border-radius: 12px;
      }

      .progress-bar.bar-size-thiccc {
        height: 32px;
        border-radius: 16px;
      }

      .progress-bar-fill {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: width 0.5s ease;
        z-index: 1;
      }

      /* Gradient styles */
      .progress-bar-fill[has-gradient='true'] {
        z-index: 2;
      }

      /* Value-based mode */
      .progress-bar-fill[has-gradient='true'][data-mode='value_based'] {
        background-image: none !important;
      }

      /* Full gradient mode */
      .progress-bar-fill[has-gradient='true'][data-mode='full'] {
        background-color: transparent !important;
        background-size: 100% 100% !important;
        background-position: 0% 0% !important;
        background-repeat: no-repeat !important;
      }

      /* Animations for progress bars */
      @keyframes charging-lines {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 50px 0;
        } /* Only move horizontally */
      }

      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes blinking {
        0% {
          opacity: 1;
        }
        49% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        99% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes bouncing {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.8);
        }
        100% {
          transform: scaleY(1);
        }
      }

      @keyframes glow {
        0% {
          box-shadow:
            0 0 10px 3px rgba(52, 152, 219, 0.7),
            0 0 20px 6px rgba(52, 152, 219, 0.4);
          opacity: 0.7;
        }
        50% {
          box-shadow:
            0 0 20px 5px rgba(52, 152, 219, 0.9),
            0 0 40px 10px rgba(52, 152, 219, 0.6);
          opacity: 0.9;
        }
        100% {
          box-shadow:
            0 0 10px 3px rgba(52, 152, 219, 0.7),
            0 0 20px 6px rgba(52, 152, 219, 0.4);
          opacity: 0.7;
        }
      }

      @keyframes rainbow {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }

      /* MODIFIED: Keyframes for Fill (changed from fill-pulse) */
      @keyframes fill-grow {
        0% {
          transform: scaleX(0);
        }
        50% {
          transform: scaleX(1);
        } /* Grow full */
        100% {
          transform: scaleX(0);
        } /* Shrink back to loop */
      }

      /* Animation classes */
      /* MODIFIED: Added background-color and opacity (KEEPING THESE) */
      .progress-bar-fill.animate-charging-lines::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        background-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.3) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0.3) 75%,
          transparent 75%,
          transparent
        );
        background-size: 50px 50px;
        animation: charging-lines 1.5s linear infinite; /* Adjusted speed slightly */
        pointer-events: none;
        z-index: 3;
        opacity: 1;
      }

      .progress-bar-fill.animate-pulse {
        animation: pulse 1.5s ease-in-out infinite;
      }

      .progress-bar-fill.animate-blinking {
        animation: blinking 1s step-end infinite;
      }

      .progress-bar-fill.animate-bouncing {
        animation: bouncing 0.8s ease-in-out infinite;
        transform-origin: center;
      }

      .progress-bar-fill.animate-glow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        animation: glow 2s ease-in-out infinite;
        z-index: 3;
      }

      .progress-bar-fill.animate-rainbow::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to right,
          rgba(255, 0, 0, 0.5),
          rgba(255, 165, 0, 0.5),
          rgba(255, 255, 0, 0.5),
          rgba(0, 128, 0, 0.5),
          rgba(0, 0, 255, 0.5),
          rgba(75, 0, 130, 0.5),
          rgba(238, 130, 238, 0.5)
        );
        mix-blend-mode: overlay;
        animation: rainbow 3s linear infinite;
        pointer-events: none;
        z-index: 3;
      }

      /* MODIFIED: Use fill-grow animation for .animate-fill */
      .progress-bar-fill.animate-fill {
        animation: fill-grow 2s ease-in-out infinite; /* Use new animation */
        transform-origin: left; /* Ensure growth starts from the left */
      }

      /* Bubble animation */
      @keyframes bubble-float {
        0% {
          transform: translateY(100%) scale(0.8);
          opacity: 0.6;
        }
        100% {
          transform: translateY(-100%) scale(1.2);
          opacity: 0;
        }
      }

      .progress-bar-fill.animate-bubbles {
        position: relative;
        overflow: hidden;
      }

      .progress-bar-fill.animate-bubbles::before,
      .progress-bar-fill.animate-bubbles::after,
      .progress-bar-fill.animate-bubbles span::before,
      .progress-bar-fill.animate-bubbles span::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: bubble-float 2.5s infinite linear;
      }

      .progress-bar-fill.animate-bubbles::before {
        width: 15px;
        height: 15px;
        left: 10%;
        animation-delay: 0s;
      }

      .progress-bar-fill.animate-bubbles::after {
        width: 12px;
        height: 12px;
        left: 40%;
        animation-delay: 0.5s;
      }

      .progress-bar-fill.animate-bubbles span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .progress-bar-fill.animate-bubbles span::before {
        width: 8px;
        height: 8px;
        left: 60%;
        animation-delay: 1s;
      }

      .progress-bar-fill.animate-bubbles span::after {
        width: 10px;
        height: 10px;
        left: 80%;
        animation-delay: 1.5s;
      }

      /* Limit indicator */
      .limit-indicator {
        position: absolute;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: #ff0000;
        z-index: 10;
      }

      .bar-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        width: 100%;
      }

      .bar-label {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
      }

      .bar-label.left {
        justify-content: flex-start;
      }

      .bar-label.right {
        justify-content: flex-end;
      }

      .label-title {
        font-size: 0.85em;
        opacity: 0.9;
      }

      .label-value {
        font-size: 1em;
        font-weight: 500;
      }

      /* Layout styles */
      .content {
        display: flex;
        flex-direction: column;
        padding: 16px 0;
        width: 100%;
      }

      .content.single {
        /* Single column layout - default */
      }

      .content.double {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .content.double > * {
        width: 50%;
        box-sizing: border-box;
        padding: 0 8px;
        padding-right: 16px;
      }
    `;
  }

  setConfig(config: UltraVehicleCardConfig) {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    const previousConfig = this.config;

    // Update the configuration object
    this.config = {
      ...config,
    };

    // Force an update timestamp to ensure animations and gradients refresh
    this._lastRenderTime = Date.now();

    // Force a full re-render after config changes
    this.requestUpdate();

    // Check if we need to force a more aggressive refresh for gradients and animations
    if (previousConfig) {
      const needsForceRefresh = this._checkForGradientOrAnimationChanges(
        previousConfig,
        this.config
      );
      if (needsForceRefresh) {
        this._forceFullRender();
      }
    }
  }

  // Add a method to detect changes in gradient or animation settings
  private _checkForGradientOrAnimationChanges(
    oldConfig: UltraVehicleCardConfig,
    newConfig: UltraVehicleCardConfig
  ): boolean {
    // Check if bars changed
    if (!oldConfig.bars || !newConfig.bars) return true;

    // Check each bar for animation or gradient changes
    for (let i = 0; i < Math.max(oldConfig.bars.length, newConfig.bars.length); i++) {
      const oldBar = oldConfig.bars[i];
      const newBar = newConfig.bars[i];

      if (!oldBar || !newBar) return true;

      // Check gradient settings
      if (oldBar.use_gradient !== newBar.use_gradient) return true;
      if (oldBar.gradient_display_mode !== newBar.gradient_display_mode) return true;

      // Check if limit indicator settings changed
      if (oldBar.limit_entity !== newBar.limit_entity) {
        // console.debug(`Limit entity changed from ${oldBar.limit_entity} to ${newBar.limit_entity}`);
        return true;
      }
      if (oldBar.limit_indicator_color !== newBar.limit_indicator_color) {
        // console.debug(
        //   `Limit indicator color changed from ${oldBar.limit_indicator_color} to ${newBar.limit_indicator_color}`
        // );
        return true;
      }

      // Check if gradient stops changed
      if (JSON.stringify(oldBar.gradient_stops) !== JSON.stringify(newBar.gradient_stops))
        return true;

      // Check animation settings
      if (oldBar.animation_type !== newBar.animation_type) return true;
      if (oldBar.animation_entity !== newBar.animation_entity) return true;
      if (oldBar.animation_state !== newBar.animation_state) return true;
      if (oldBar.action_animation !== newBar.action_animation) return true;
      if (oldBar.action_animation_entity !== newBar.action_animation_entity) return true;
      if (oldBar.action_animation_state !== newBar.action_animation_state) return true;
    }

    return false;
  }

  // Enhanced method to force a complete re-render with multiple refresh attempts
  private _forceFullRender(): void {
    this._lastRenderTime = Date.now();

    // Force a synchronous update
    this.requestUpdate();

    // Multi-phase refresh to ensure rendering completes
    const refreshPhases = [10, 50, 150, 300, 500];

    refreshPhases.forEach(delay => {
      setTimeout(() => {
        this._lastRenderTime = Date.now();
        this.requestUpdate();

        // After short delay, force browser reflow on specific elements
        if (this.shadowRoot) {
          // Select all progress bars
          const bars = this.shadowRoot.querySelectorAll('.progress-bar-fill');

          bars.forEach(bar => {
            if (bar instanceof HTMLElement) {
              // Force reflow by temporarily changing style
              bar.style.opacity = '0.99';

              // Force reflow
              const forceReflow = bar.offsetHeight;

              // Restore opacity
              bar.style.opacity = '1';

              // Mark as refreshed
              bar.setAttribute('data-refreshed', String(Date.now()));
            }
          });
        }
      }, delay);
    });
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    // Default section order if not set
    const defaultSections = ['title', 'image', 'info', 'bars', 'icons'];
    const sections = this.config.sections_order || defaultSections;
    const layoutType = this.config.layout_type || 'single';
    const columns = this.config.sections_columns || {};

    // Filter out hidden sections
    const hiddenSections = this.config.hidden_sections || [];
    const visibleSections = sections.filter(section => !hiddenSections.includes(section));

    // Render function for a single section
    const renderSection = (section: string) => {
      switch (section) {
        case 'title':
          const titleSize = this.config.title_size || '24px';
          return this.config.title
            ? html`<h1
                class="card-title ${this.config.title_alignment || 'center'}"
                style="font-size: ${titleSize}px !important; line-height: 1.2;"
              >
                ${this.config.title}
              </h1>`
            : html``;
        case 'image':
          return this._renderImage();
        case 'info':
          return this._renderVehicleInfo();
        case 'bars':
          return this.config.bars?.length
            ? html`<div class="bars-container">
                ${this.config.bars.map(bar => this._renderBar(bar))}
              </div>`
            : html``;
        case 'icons':
          return this._renderIconRows();
        default:
          // Handle individual bar sections
          if (section.startsWith('bar_')) {
            const barIndex = parseInt(section.substring(4));
            if (!isNaN(barIndex) && this.config.bars && this.config.bars[barIndex]) {
              return html`<div class="bars-container">
                ${this._renderBar(this.config.bars[barIndex])}
              </div>`;
            }
          }
          // Handle individual icon row sections
          else if (section.startsWith('icon_row_')) {
            const rowId = section.substring(9);
            const iconRow = this.config.icon_rows?.find(row => row.id === rowId);
            if (iconRow) {
              return html`<div class="icon-rows-container">${this._renderIconRow(iconRow)}</div>`;
            }
          }
          return html``;
      }
    };

    // For two-column layout
    if (layoutType === 'double') {
      // Split sections into left and right columns
      const leftSections = visibleSections.filter(section => columns[section] !== 'right');
      const rightSections = visibleSections.filter(section => columns[section] === 'right');

      return html`
        <ha-card>
          <div class="card-content two-column-layout">
            <div class="column left-column">
              ${leftSections.map(section => renderSection(section))}
            </div>
            <div class="column right-column">
              ${rightSections.map(section => renderSection(section))}
            </div>
          </div>
        </ha-card>
      `;
    }

    // For single column layout (original behavior)
    return html`
      <ha-card>
        <div class="card-content">${visibleSections.map(section => renderSection(section))}</div>
      </ha-card>
    `;
  }

  private _renderImage() {
    let imageUrl = '';
    let imageStyle = '';
    let useActionImage = false;

    // Check if action condition is met first
    if (
      this.config.action_entity &&
      this.config.action_state &&
      this.hass.states[this.config.action_entity]?.state === this.config.action_state
    ) {
      // Determine the action image URL based on action_image_type
      const actionImageType = this.config.action_image_type;
      let actionImageUrl = '';

      if (actionImageType === 'upload' && this.config.action_image) {
        actionImageUrl = getImageUrl(this.hass, this.config.action_image);
      } else if (actionImageType === 'url') {
        actionImageUrl = this.config.action_image || '';
      } else if (actionImageType === 'entity' && this.config.action_image_entity) {
        actionImageUrl = this.hass.states[this.config.action_image_entity]?.state || '';
      } else if (actionImageType === 'default') {
        actionImageUrl = DEFAULT_VEHICLE_IMAGE; // Use default if action type is default
      }

      // If we found an action image URL, use it
      if (actionImageUrl) {
        imageUrl = actionImageUrl;
        imageStyle = this._computeImageStyle(
          this.config.action_image_width,
          this.config.action_image_crop
        );
        useActionImage = true;
      }
    }

    // If action condition wasn't met or no action image was found, use the normal vehicle image
    if (!useActionImage) {
      const imageType = this.config.vehicle_image_type;

      if (imageType === 'upload' && this.config.vehicle_image) {
        imageUrl = getImageUrl(this.hass, this.config.vehicle_image);
      } else if (imageType === 'url') {
        imageUrl = this.config.vehicle_image || '';
      } else if (imageType === 'entity' && this.config.vehicle_image_entity) {
        imageUrl = this.hass.states[this.config.vehicle_image_entity]?.state || '';
      } else if (imageType !== 'none') {
        // Default behavior for 'default' or other values
        imageUrl = DEFAULT_VEHICLE_IMAGE;
      }

      // Fallback to default if no image URL determined and type isn't 'none'
      if (!imageUrl && this.config.vehicle_image_type !== 'none') {
        imageUrl = DEFAULT_VEHICLE_IMAGE;
      }

      // Compute style for the vehicle image
      imageStyle = this._computeImageStyle(
        this.config.vehicle_image_width,
        this.config.vehicle_image_crop
      );
    }

    // If no image should be rendered (either type is 'none' or no URL found)
    if (!imageUrl) return '';

    // Render the image container with the determined URL and style
    return html`
      <div class="vehicle-image-container">
        <img
          class="vehicle-image ${useActionImage ? 'action-image-active' : ''}"
          src="${imageUrl}"
          style="${imageStyle}"
          @error=${this._handleImageError}
        />
      </div>
    `;
  }

  private _formatValue(value: string, entityId?: string): string {
    if (!this.config.formatted_entities || !entityId || !this.hass.states[entityId]) return value;

    // Check if this is a mileage entity
    if (entityId === this.config.mileage_entity) {
      // Format mileage to remove decimal places and add appropriate unit
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        const roundedValue = Math.round(numValue);
        // Get the unit from the entity's attributes if available
        const unit = this.hass.states[entityId]?.attributes?.unit_of_measurement || '';
        return `${roundedValue.toLocaleString()}${unit ? ' ' + unit : ''}`;
      }
    }

    // Check if this is a location entity
    if (entityId === this.config.location_entity) {
      // Check if this location matches any zone entity
      const zoneEntities = Object.keys(this.hass.states).filter(id => id.startsWith('zone.'));

      for (const zoneId of zoneEntities) {
        const zone = this.hass.states[zoneId];
        // If zone has latitude/longitude attributes and the location entity has the same
        const locationState = this.hass.states[entityId];

        if (
          zone &&
          locationState &&
          zone.attributes.latitude &&
          zone.attributes.longitude &&
          locationState.attributes &&
          locationState.attributes.latitude &&
          locationState.attributes.longitude
        ) {
          // Simple check if they're close (for exact matching you'd need distance calculation)
          if (
            Math.abs(zone.attributes.latitude - locationState.attributes.latitude) < 0.0001 &&
            Math.abs(zone.attributes.longitude - locationState.attributes.longitude) < 0.0001
          ) {
            // Return zone friendly name
            return zone.attributes.friendly_name || zone.attributes.name || zoneId.split('.')[1];
          }
        }
      }

      // If no zone matched, check if there's a formatted address
      if (this.hass.states[entityId]?.attributes?.formatted_address) {
        return this.hass.states[entityId].attributes.formatted_address;
      }
    }

    // Format numbers with unit of measurement for any entity
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      // Round to whole number
      const roundedValue = Math.round(numValue);
      // Get the unit from the entity's attributes if available
      const unit = this.hass.states[entityId]?.attributes?.unit_of_measurement || '';

      // Format with thousand separators and unit
      return `${roundedValue.toLocaleString()}${unit ? ' ' + unit : ''}`;
    }

    // Default formatting for other entities
    return value
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  private _handleImageError(e: Event) {
    const img = e.target as HTMLImageElement;
    // console.warn(`Image failed to load: ${img.src}`);

    // Add error class to indicate the image couldn't be loaded
    img.classList.add('image-error');

    // Prevent continuous error logging by removing the src attribute
    img.src = '';
  }

  private _renderBar(bar: BarConfig) {
    if (!bar.entity) {
      return html``;
    }

    const entity = this.hass.states[bar.entity];
    if (!entity) {
      // console.warn(`Entity not found: ${bar.entity}`);
      return html``;
    }

    // Get state value - handle unavailable and unknown
    const value = parseFloat(entity.state);
    const isValidState =
      !isNaN(value) && entity.state !== 'unavailable' && entity.state !== 'unknown';
    const percentage = isValidState ? Math.max(0, Math.min(100, value)) : 0;

    // Format color values using CSS variables if needed
    const formatColor = (color: string): string => {
      if (!color) return '';
      if (color.startsWith('var(--')) return color;
      return color;
    };

    // Process limit indicator
    let limitPercentage: number | null = null;
    let formattedLimitColor = '';

    if (bar.limit_entity) {
      const limitEntity = this.hass.states[bar.limit_entity];
      if (limitEntity && !isNaN(parseFloat(limitEntity.state))) {
        limitPercentage = parseFloat(limitEntity.state);
        formattedLimitColor = formatColor(bar.limit_indicator_color || '#ff0000');
      }
    }

    // Determine bar size and width classes
    const barSizeClass = `bar-size-${bar.bar_size || 'regular'}`;
    const barWidth = bar.width || '100';

    // Get animation class using our helper method
    const animationClass = this._getBarAnimationClass(bar);

    // Gradient processing with our utility functions
    const gradientStops = bar.gradient_stops || [];
    const useGradient = bar.use_gradient === true && gradientStops.length >= 2;
    const gradientDisplayMode =
      useGradient && bar.gradient_display_mode ? bar.gradient_display_mode : 'value_based';

    // Main bar fill element
    let barFill;

    if (useGradient) {
      if (gradientDisplayMode === 'value_based') {
        // Value-based mode: get color at current percentage
        const currentColor = getColorAtPosition(gradientStops, percentage);
        barFill = html`
          <div
            class="progress-bar-fill ${animationClass}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="value_based"
            data-percentage="${percentage}"
            style="
              width: ${percentage}%;
              background-color: ${currentColor};
            "
          >
            ${animationClass === 'animate-bubbles' ? html`<span></span>` : ''}
          </div>
        `;
      } else if (gradientDisplayMode === 'full') {
        // Full gradient mode: show entire gradient across the bar
        const backgroundGradient = createLinearGradient(gradientStops);
        barFill = html`
          <div
            class="progress-bar-fill ${animationClass}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="full"
            data-percentage="${percentage}"
            style="
              width: ${percentage}%;
              background-image: ${backgroundGradient};
              background-color: transparent;
              background-size: 100% 100%;
              background-position: 0% 0%;
              background-repeat: no-repeat;
            "
          >
            ${animationClass === 'animate-bubbles' ? html`<span></span>` : ''}
          </div>
        `;
      }
    } else {
      // Default non-gradient mode
      barFill = html`
        <div
          class="progress-bar-fill ${animationClass}"
          data-gradient="disabled"
          has-gradient="false"
          data-percentage="${percentage}"
          style="background-color: ${bar.bar_color || '#3498db'}; width: ${percentage}%;"
        >
          ${animationClass === 'animate-bubbles' ? html`<span></span>` : ''}
        </div>
      `;
    }

    // Return the complete bar with container, fill, limit indicator and labels
    return html`
      <div
        class="progress-bar ${barSizeClass} ${bar.width ? `width-${bar.width}` : ''}"
        style="background: ${bar.background_color || '#121212'}; border-color: ${bar.border_color ||
        '#686868'}; width: ${bar.width ? `${bar.width}%` : '100%'};"
      >
        ${barFill}
        ${limitPercentage !== null
          ? html`<div
              class="limit-indicator"
              style="left: ${limitPercentage}%; 
                     background-color: ${formattedLimitColor}; 
                     box-shadow: 0 0 2px ${formattedLimitColor};"
            ></div>`
          : ''}
      </div>
      ${this._renderBarLabels(bar)}
    `;
  }

  private _getBarAnimationClass(bar: BarConfig): string {
    let animationClass = '';

    // Add animation class if applicable
    const animationState = this._getEntityState(bar.animation_entity);
    const actionAnimationState = this._getEntityState(bar.action_animation_entity);

    // Check if animation should be shown
    if (
      bar.animation_type &&
      ((!bar.animation_entity && !bar.animation_state) ||
        (bar.animation_entity && bar.animation_state && animationState === bar.animation_state))
    ) {
      animationClass = `animate-${bar.animation_type}`;
    }

    // Check if action animation should be shown (overrides normal animation)
    if (
      bar.action_animation &&
      bar.action_animation_entity &&
      bar.action_animation_state &&
      actionAnimationState === bar.action_animation_state
    ) {
      animationClass = `animate-${bar.action_animation}`;
    }

    return animationClass;
  }

  private _getEntityState(entityId?: string): string | undefined {
    if (!entityId || !this.hass.states[entityId]) return undefined;
    return this.hass.states[entityId]?.state;
  }

  private _renderIconRows() {
    const { icon_rows = [] } = this.config;

    if (!icon_rows || icon_rows.length === 0) return html``;

    return html`
      <div class="icon-rows-container">${icon_rows.map(row => this._renderIconRow(row))}</div>
    `;
  }

  private _renderIconRow(row: IconRowConfig) {
    if (!row.icons || !row.icons.length) return html``;

    const width = row.width || '100';
    const alignment = row.alignment || 'space-between';
    const spacing = row.spacing || 'medium';

    const spacingValue =
      {
        none: '0',
        small: '8px',
        medium: '16px',
        large: '24px',
      }[spacing] || '16px';

    // Map alignment to class
    const alignmentClass = `align-${alignment}`;

    return html`
      <div class="icon-row ${alignmentClass}" style="width: ${width}%; gap: ${spacingValue};">
        ${row.icons.map(icon => this._renderCardIcon(icon))}
      </div>
    `;
  }

  private _renderCardIcon(icon: IconConfig) {
    if (!icon.entity) return html``;

    const state = this.hass.states[icon.entity];
    if (!state) return html``;

    // Determine if the icon should be active based on state or template
    let isActive = false;
    let templateUsed = false;
    let matchedEntity = '';
    let matchedState = '';

    // Handle active template mode
    if (icon.active_template_mode && icon.active_template) {
      // console.debug(`Evaluating active template for ${icon.entity}: ${icon.active_template}`);
      isActive = this._evaluateTemplate(icon.active_template);
      templateUsed = true;

      // Try to extract entity and state from the template for display purposes
      const isStateMatch = icon.active_template.match(
        /{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i
      );
      if (isStateMatch && isActive) {
        matchedEntity = isStateMatch[1];
        matchedState = isStateMatch[2];
      }

      const stateCompareMatch = icon.active_template.match(
        /{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i
      );
      if (stateCompareMatch && isActive) {
        matchedEntity = stateCompareMatch[1];
        matchedState = stateCompareMatch[2];
      }

      // console.debug(`Template evaluation result: ${isActive}`);
    }
    // Handle inactive template mode
    else if (icon.inactive_template_mode && icon.inactive_template) {
      // console.debug(`Evaluating inactive template for ${icon.entity}: ${icon.inactive_template}`);
      isActive = !this._evaluateTemplate(icon.inactive_template);
      templateUsed = true;

      // Try to extract entity and state from the template for display purposes
      const isStateMatch = icon.inactive_template.match(
        /{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i
      );
      if (isStateMatch && !isActive) {
        matchedEntity = isStateMatch[1];
        matchedState = isStateMatch[2];
      }

      const stateCompareMatch = icon.inactive_template.match(
        /{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i
      );
      if (stateCompareMatch && !isActive) {
        matchedEntity = stateCompareMatch[1];
        matchedState = stateCompareMatch[2];
      }

      // console.debug(`Template evaluation result (inverted): ${isActive}`);
    }
    // Standard state comparison
    else {
      // Check if active_state is defined and matches current state
      if (icon.active_state && state.state === icon.active_state) {
        isActive = true;
      }
      // Check if inactive_state is defined and matches current state
      else if (icon.inactive_state && state.state === icon.inactive_state) {
        isActive = false;
      }
      // Fallback to default behavior: active if not equal to inactive_state
      else if (icon.inactive_state) {
        isActive = state.state !== icon.inactive_state;
      }
      // Final fallback: assume active for "on", "true", etc.
      else {
        isActive = state.state === 'on' || state.state === 'true' || Number(state.state) > 0;
      }
    }

    // Get entity's icon if available
    const entityIcon = state.attributes.icon || null;

    // Use the icon in this priority:
    // 1. User specified active/inactive icon based on state
    // 2. Entity's own icon from attributes
    // 3. Default help icon as fallback
    const displayIcon =
      isActive && icon.icon_active
        ? icon.icon_active
        : !isActive && icon.icon_inactive
          ? icon.icon_inactive
          : entityIcon || 'mdi:help-circle-outline';

    const displayColor = isActive && icon.color_active ? icon.color_active : icon.color_inactive;

    // Use name if provided, otherwise use friendly name from entity
    const displayName = icon.name || state.attributes.friendly_name || '';

    // Get original state
    let displayState = state.state;
    const unit = state.attributes.unit_of_measurement;

    // Override display state if we have a template match
    if (templateUsed && matchedState) {
      displayState = matchedState;

      // If we're matching against a different entity, try to get its state
      if (matchedEntity && matchedEntity !== icon.entity && this.hass.states[matchedEntity]) {
        const matchedEntityState = this.hass.states[matchedEntity].state;
        if (matchedEntityState === matchedState) {
          // Only use the state from the matched entity if it actually equals the matched state
          displayState = matchedState;
        }
      }
    }

    // Format state if formatted_entities is enabled
    if (this.config.formatted_entities && displayState) {
      // Handle numeric values with proper formatting
      if (!isNaN(Number(displayState))) {
        const numValue = Number(displayState);

        // If it's a large integer or has many decimal places, format it appropriately
        if (Math.abs(numValue) >= 1000 || numValue % 1 !== 0) {
          // Format large numbers with commas and limit decimal places
          displayState = numValue.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
          });
        }
      } else {
        // For non-numeric values, capitalize and replace underscores
        displayState = displayState
          .replace(/_/g, ' ')
          .replace(/\b\w/g, match => match.toUpperCase());
      }
    }

    // Add unit of measurement, currency, or other formatting from attributes
    if (displayState && icon.show_state) {
      const prefix = state.attributes.prefix || '';
      const suffix = state.attributes.suffix || '';

      // Show units if enabled
      if (unit && icon.show_units) {
        displayState = `${displayState} ${unit}`;
      }

      // Apply any prefix/suffix if they exist
      displayState = `${prefix}${displayState}${suffix}`;
    }

    // Process icon size - ensure it has px units if numeric
    const iconSize = (() => {
      if (!icon.icon_size) return '24px';

      // Convert string numbers to numbers with px
      if (!isNaN(Number(icon.icon_size))) {
        return `${icon.icon_size}px`;
      }

      // Already has units, return as is
      if (
        typeof icon.icon_size === 'string' &&
        (icon.icon_size.endsWith('px') ||
          icon.icon_size.endsWith('em') ||
          icon.icon_size.endsWith('%'))
      ) {
        return icon.icon_size;
      }

      // Fallback - add px
      return `${icon.icon_size}px`;
    })();

    // Process text size - ensure it has px units if numeric
    const textSize = (() => {
      if (!icon.text_size) return '14px';

      // Convert string numbers to numbers with px
      if (!isNaN(Number(icon.text_size))) {
        return `${icon.text_size}px`;
      }

      // Already has units, return as is
      if (
        typeof icon.text_size === 'string' &&
        (icon.text_size.endsWith('px') ||
          icon.text_size.endsWith('em') ||
          icon.text_size.endsWith('%'))
      ) {
        return icon.text_size;
      }

      // Fallback - add px
      return `${icon.text_size}px`;
    })();

    // Process icon background if set
    const iconBackgroundStyle = (() => {
      if (!icon.icon_background || icon.icon_background === 'none') return '';

      // Get icon size as a number for calculations
      let iconSizeNum = 24; // Default size
      if (typeof iconSize === 'string') {
        const match = iconSize.match(/^(\d+)/);
        if (match) {
          iconSizeNum = parseInt(match[1], 10);
        }
      } else if (typeof iconSize === 'number') {
        iconSizeNum = iconSize;
      }

      // Fixed 8px padding (4px on each side) for consistent look
      const bgSize = iconSizeNum + 8;

      // Base background styles
      let style = `
        background-color: var(--secondary-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${bgSize}px;
        height: ${bgSize}px;
      `;

      // Add shape-specific styles
      switch (icon.icon_background) {
        case 'circle':
          style += `border-radius: 50%;`;
          break;
        case 'square':
          style += `border-radius: 0;`;
          break;
        case 'rounded-square':
          style += `border-radius: ${Math.max(4, bgSize * 0.15)}px;`;
          break;
      }

      return style;
    })();

    // Set text position (default to bottom)
    const textPosition = icon.text_position || 'bottom';

    // Map text position to flex direction for container
    const flexDirection =
      {
        bottom: 'column',
        top: 'column-reverse',
        left: 'row-reverse',
        right: 'row',
      }[textPosition] || 'column';

    // Set vertical alignment (default to center)
    const verticalAlignment = icon.vertical_alignment || 'center';

    // Map vertical alignment to CSS align-items property
    const alignItems =
      {
        'flex-start': 'flex-start',
        center: 'center',
        'flex-end': 'flex-end',
      }[verticalAlignment] || 'center';

    // Set text alignment based on position
    const textAlign = textPosition === 'left' || textPosition === 'right' ? 'start' : 'center';

    // Set margin for text based on position
    const textMargin =
      textPosition === 'right' ? '0 0 0 8px' : textPosition === 'left' ? '0 8px 0 0' : '4px 0 0 0';

    // Set draggable attribute if icon is draggable
    const isDraggable = true;

    return html`
      <div
        class="icon-container ${isDraggable ? 'draggable' : ''}"
        @click=${() => this._handleIconClick(icon)}
        style="flex-direction: ${flexDirection}; align-items: ${alignItems};"
        draggable="${isDraggable}"
        @dragstart=${isDraggable ? this._handleDragStart : null}
        @dragend=${isDraggable ? this._handleDragEnd : null}
      >
        ${icon.icon_background && icon.icon_background !== 'none'
          ? html`
              <div class="icon-background" style="${iconBackgroundStyle}">
                <ha-icon
                  .icon="${displayIcon}"
                  style="color: ${displayColor ||
                  'var(--primary-text-color)'}; font-size: ${iconSize}; --mdc-icon-size: ${iconSize};"
                ></ha-icon>
              </div>
            `
          : html`
              <ha-icon
                .icon="${displayIcon}"
                style="color: ${displayColor ||
                'var(--primary-text-color)'}; font-size: ${iconSize}; --mdc-icon-size: ${iconSize};"
              ></ha-icon>
            `}
        <div style="display: flex; flex-direction: column; align-items: ${textAlign};">
          ${icon.show_name !== false
            ? html`<div class="icon-label" style="font-size: ${textSize}; margin: ${textMargin};">
                ${displayName}
              </div>`
            : ''}
          ${icon.show_state
            ? html`<div class="icon-state" style="font-size: ${textSize}; margin: ${textMargin};">
                ${displayState}
              </div>`
            : ''}
        </div>
      </div>
    `;
  }

  private _handleIconClick(icon: IconConfig) {
    if (!icon.entity || !icon.on_click_action) return;

    switch (icon.on_click_action) {
      case 'toggle':
        const domain = icon.entity.split('.')[0];
        this.hass.callService(domain, 'toggle', { entity_id: icon.entity });
        break;
      case 'more-info':
        const event = new CustomEvent('hass-more-info', {
          detail: { entityId: icon.entity },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        break;
      // Add more actions if needed
    }
  }

  private _handleDragStart(event: DragEvent) {
    // Store the id or other information of the dragged icon
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', 'dragging-icon');
      // Add visual feedback
      if (event.target instanceof HTMLElement) {
        event.target.style.opacity = '0.5';
      }
    }
  }

  private _handleDragEnd(event: DragEvent) {
    // Reset any visual changes
    if (event.target instanceof HTMLElement) {
      event.target.style.opacity = '1';
    }
  }

  private _hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    // Handle different hex formats
    const hexColorRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const shortHexColorRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    // Handle 3-character hex (e.g., #abc -> #aabbcc)
    if (shortHexColorRegex.test(hex)) {
      const result = shortHexColorRegex.exec(hex);
      if (result) {
        return {
          r: parseInt(result[1] + result[1], 16),
          g: parseInt(result[2] + result[2], 16),
          b: parseInt(result[3] + result[3], 16),
        };
      }
    }

    // Handle 6-character hex
    const result = hexColorRegex.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };
    }

    // Handle rgb() or rgba() format
    const rgbRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)$/i;
    const rgbResult = rgbRegex.exec(hex);
    if (rgbResult) {
      return {
        r: parseInt(rgbResult[1], 10),
        g: parseInt(rgbResult[2], 10),
        b: parseInt(rgbResult[3], 10),
      };
    }

    return null;
  }

  private _renderVehicleInfo() {
    // Check if any info should be displayed
    const showLocation =
      this.config.show_location !== false &&
      this.config.location_entity &&
      this.hass.states[this.config.location_entity] !== undefined;

    const showMileage =
      this.config.show_mileage !== false &&
      this.config.mileage_entity &&
      this.hass.states[this.config.mileage_entity] !== undefined;

    const showCarState =
      this.config.show_car_state !== false &&
      this.config.car_state_entity &&
      this.hass.states[this.config.car_state_entity] !== undefined;

    // If nothing to show, return empty
    if (!showLocation && !showMileage && !showCarState) {
      return html``;
    }

    // Get the values
    const locationValue = showLocation
      ? this._formatValue(
          this.hass.states[this.config.location_entity!].state,
          this.config.location_entity
        )
      : '';

    const mileageValue = showMileage
      ? this._formatValue(
          this.hass.states[this.config.mileage_entity!].state,
          this.config.mileage_entity
        )
      : '';

    const carStateValue = showCarState
      ? this._formatValue(
          this.hass.states[this.config.car_state_entity!].state,
          this.config.car_state_entity
        )
      : '';

    return html`
      <div class="vehicle-info-container">
        <div class="vehicle-info-top">
          ${showLocation
            ? html`
                <div class="info-item-with-icon">
                  <ha-icon icon="mdi:map-marker"></ha-icon>
                  <span>${locationValue}</span>
                </div>
              `
            : ''}
          ${showMileage
            ? html`
                <div class="info-item-with-icon">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${mileageValue}</span>
                </div>
              `
            : ''}
        </div>

        ${showCarState
          ? html`
              <div class="info-item-status">
                <span>${carStateValue}</span>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _computeImageStyle(
    width?: number,
    crop?: { top: number; right: number; bottom: number; left: number }
  ) {
    let style = '';

    if (width !== undefined) {
      style += `width: ${width}%; height: auto;`;
    }

    if (crop) {
      style += `
        margin-top: ${crop.top}px;
        margin-right: ${crop.right}px;
        margin-bottom: ${crop.bottom}px;
        margin-left: ${crop.left}px;
        overflow: hidden;
      `;
    }

    return style;
  }

  private _normalizeState(state: string | undefined): string {
    if (!state) return '';
    return state.toLowerCase().replace(/\s+/g, '_');
  }

  private _renderBarLabels(bar: BarConfig) {
    // Get left and right entity values
    const leftValue =
      bar.show_left !== false && bar.left_entity
        ? this._formatValue(this.hass.states[bar.left_entity]?.state, bar.left_entity)
        : '';

    const rightValue =
      bar.show_right !== false && bar.right_entity
        ? this._formatValue(this.hass.states[bar.right_entity]?.state, bar.right_entity)
        : '';

    // Get friendly names for titles if not explicitly set
    const getFriendlyName = (entityId: string): string => {
      if (!entityId || !this.hass.states[entityId]) return '';
      return (
        this.hass.states[entityId]?.attributes?.friendly_name || entityId.split('.').pop() || ''
      );
    };

    // Truncate text to keep layout consistent
    const truncateText = (text: string, maxLength = 15): string => {
      if (!text) return '';
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    };

    // Use friendly name for left title if not set
    const leftTitle =
      bar.left_title ||
      (bar.show_left !== false && bar.left_entity ? getFriendlyName(bar.left_entity) : '');

    // Use friendly name for right title if not set
    const rightTitle =
      bar.right_title ||
      (bar.show_right !== false && bar.right_entity ? getFriendlyName(bar.right_entity) : '');

    // Determine label alignment
    const labelAlignment = bar.alignment || 'space-between';

    // Get colors
    const leftTextColor = bar.left_text_color || 'var(--text-primary-color)';
    const rightTextColor = bar.right_text_color || 'var(--text-primary-color)';
    const leftTitleColor = bar.left_title_color || 'var(--text-primary-color)';
    const rightTitleColor = bar.right_title_color || 'var(--text-primary-color)';

    // Get sizes
    const leftTitleSize = bar.left_title_size ? `${bar.left_title_size}px` : 'inherit';
    const leftTextSize = bar.left_text_size ? `${bar.left_text_size}px` : 'inherit';
    const rightTitleSize = bar.right_title_size ? `${bar.right_title_size}px` : 'inherit';
    const rightTextSize = bar.right_text_size ? `${bar.right_text_size}px` : 'inherit';

    return html`
      <div class="bar-labels" style="justify-content: ${labelAlignment};">
        ${bar.show_left !== false
          ? html`
              <div class="bar-label left">
                ${leftTitle
                  ? html`<span
                      class="label-title"
                      style="color: ${leftTitleColor}; font-size: ${leftTitleSize};"
                      >${truncateText(leftTitle)}:</span
                    >`
                  : ''}
                ${leftValue
                  ? html`<span
                      class="label-value"
                      style="color: ${leftTextColor}; font-size: ${leftTextSize};"
                      >${leftValue}</span
                    >`
                  : ''}
              </div>
            `
          : ''}
        ${bar.show_right !== false
          ? html`
              <div class="bar-label right">
                ${rightTitle
                  ? html`<span
                      class="label-title"
                      style="color: ${rightTitleColor}; font-size: ${rightTitleSize};"
                      >${truncateText(rightTitle)}:</span
                    >`
                  : ''}
                ${rightValue
                  ? html`<span
                      class="label-value"
                      style="color: ${rightTextColor}; font-size: ${rightTextSize};"
                      >${rightValue}</span
                    >`
                  : ''}
              </div>
            `
          : ''}
      </div>
    `;
  }

  // Setup when the element is connected to the DOM
  connectedCallback() {
    super.connectedCallback();

    // Add this code to log the version in the console with custom styling
    console.info(
      `%c Ultra Vehicle Card%c  ${version} `,
      'background-color: #4299D9;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
      'background-color: #4299D9;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
    );

    // Set up a mutation observer to watch for style changes
    this._setupRefreshInterval();

    // Add event listener for force-gradient-refresh
    this.addEventListener(
      'force-gradient-refresh',
      this._handleForceGradientRefresh as EventListener
    );

    // Listen for config-changed events to immediately update gradients
    document.addEventListener('config-changed', this._handleConfigChanged);

    // Add a small delay to ensure initial gradient rendering
    setTimeout(() => {
      if (this.config?.bars?.some(bar => bar.use_gradient)) {
        this._forceFullRender();
      }
    }, 100);

    // Add an additional refresh after a longer delay for cases when the DOM is slow to update
    setTimeout(() => {
      if (this.config?.bars?.some(bar => bar.use_gradient)) {
        this._forceFullRender();
      }
    }, 1000);
  }

  // Clean up when the element is disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._refreshInterval) {
      clearInterval(this._refreshInterval);
      this._refreshInterval = undefined;
    }

    // Remove event listeners
    this.removeEventListener(
      'force-gradient-refresh',
      this._handleForceGradientRefresh as EventListener
    );

    // Remove config-changed event listener
    document.removeEventListener('config-changed', this._handleConfigChanged);
  }

  // Event handler for config-changed
  private _handleConfigChanged = (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent.detail?.config) {
      // Store the updated config
      this.config = { ...customEvent.detail.config };

      // If we have bars with gradients, force an immediate render
      if (customEvent.detail.config.bars?.some(bar => bar.use_gradient)) {
        this._lastRenderTime = Date.now();

        // Use a small timeout to allow the config to be properly updated first
        setTimeout(() => this._forceFullRender(), 10);

        // Also schedule another refresh after a longer delay to ensure it takes effect
        setTimeout(() => {
          this._forceFullRender();

          // Confirm the configuration has been applied
          this.dispatchEvent(
            new CustomEvent('gradient-config-applied', {
              bubbles: true,
              composed: true,
              detail: { config: this.config },
            })
          );
        }, 500);
      }
    }
  };

  // Handle force-gradient-refresh event
  private _handleForceGradientRefresh(event: Event) {
    const customEvent = event as CustomEvent;

    // Update timestamp with the one from the event
    this._lastRenderTime = customEvent.detail?.timestamp || Date.now();

    // Force a more aggressive render with immediate and subsequent refreshes
    this._forceFullRender();

    // Add additional refresh phases with shorter intervals for more reliable updates
    const additionalRefreshes = [10, 25, 50, 100, 500];
    additionalRefreshes.forEach(delay => {
      setTimeout(() => {
        this._lastRenderTime = Date.now();
        this.requestUpdate();

        // Dispatch a custom event that the editor can listen for to know the update is complete
        this.dispatchEvent(
          new CustomEvent('gradient-update-complete', {
            bubbles: true,
            composed: true,
            detail: {
              timestamp: this._lastRenderTime,
              config: this.config,
            },
          })
        );
      }, delay);
    });
  }

  private _refreshInterval: number | undefined;

  // Set up an interval to refresh animation and gradient states
  private _setupRefreshInterval() {
    // Clear any existing interval
    if (this._refreshInterval) {
      clearInterval(this._refreshInterval);
    }

    // Check every second for animation state changes
    this._refreshInterval = window.setInterval(() => {
      // Check if we have any bars with animations that need state checking
      const needsUpdate = this.config.bars?.some(bar => {
        const animationEntity = bar.animation_entity || bar.action_animation_entity;
        const animationState = bar.animation_state || bar.action_animation_state;
        const animationType = bar.animation_type || bar.action_animation;

        if (animationEntity && animationState && animationType && animationType !== 'none') {
          const entity = this.hass.states[animationEntity];
          // If entity exists and matches animation state, we need to update
          return entity && entity.state === animationState;
        }
        return false;
      });

      if (needsUpdate) {
        this._lastRenderTime = Date.now();
        this.requestUpdate();
      }
    }, 1000);
  }

  // This method gets called when properties change
  protected updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // Force render when config changes
    if (changedProperties.has('config') || changedProperties.has('hass')) {
      // Update timestamp for consistent rendering
      this._lastRenderTime = Date.now();

      // Force immediate style recalculation for bar elements
      if (this.shadowRoot) {
        setTimeout(() => {
          const barElements = this.shadowRoot?.querySelectorAll('.progress-bar-fill');
          if (barElements && barElements.length > 0) {
            barElements.forEach(bar => {
              if (bar instanceof HTMLElement) {
                // Force reflow by accessing offsetHeight (browser will recalculate styles)
                const reflow = bar.offsetHeight;

                // Ensure gradient attributes are correctly set
                const hasGradient = bar.getAttribute('has-gradient');
                const mode = bar.getAttribute('data-mode');

                if (hasGradient === 'true') {
                  // Make sure class-based styles are applied properly
                  if (mode === 'full') {
                    bar.style.backgroundSize = '100% 100%';
                    bar.style.backgroundPosition = '0% 0%';
                    bar.style.backgroundRepeat = 'no-repeat';
                  } else if (mode === 'value_based') {
                    bar.style.backgroundImage = 'none';
                  }
                }
              }
            });
          }
        }, 0);
      }
    }
  }

  private _evaluateTemplate(template: string): boolean {
    // Basic template evaluation for common patterns
    try {
      // Handle is_state
      const isStateMatch = template.match(
        /{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i
      );
      if (isStateMatch) {
        const [_, checkEntityId, checkState] = isStateMatch;
        return this.hass.states[checkEntityId]?.state === checkState;
      }

      // Handle states
      const statesMatch = template.match(/{{[\s]*states\.([^.]+)\.([^.}]+)(?:\.state)?[\s]*}}/i);
      if (statesMatch) {
        const [_, domain, entityName] = statesMatch;
        const fullEntityId = `${domain}.${entityName}`;
        const state = this.hass.states[fullEntityId]?.state;
        return state === 'on' || state === '1' || state === 'true' || Number(state) > 0;
      }

      // Simple state comparison
      const entityMatch = template.match(/{{[\s]*states\(['"]([\w_.]+)['"]\)[\s]*}}/i);
      if (entityMatch) {
        const [_, checkEntityId] = entityMatch;
        const state = this.hass.states[checkEntityId]?.state;
        return state === 'on' || state === '1' || state === 'true' || Number(state) > 0;
      }

      // Handle direct entity state comparison (e.g., {{ states('binary_sensor.ix_xdrive50_charging_status') == 'off' }})
      const stateCompareMatch = template.match(
        /{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i
      );
      if (stateCompareMatch) {
        const [_, checkEntityId, checkState] = stateCompareMatch;
        return this.hass.states[checkEntityId]?.state === checkState;
      }

      // Handle alternative state comparison with single quotes (e.g., {{ states('binary_sensor.charging_status') == 'off' }})
      const alternateSyntaxMatch = template.match(
        /{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*'([^']+)'[\s]*}}/i
      );
      if (alternateSyntaxMatch) {
        const [_, checkEntityId, checkState] = alternateSyntaxMatch;
        return this.hass.states[checkEntityId]?.state === checkState;
      }

      // If we can't parse the template, return false
      // console.warn(`Unable to evaluate template: ${template}`);
      return false;
    } catch (e) {
      // console.error(`Error evaluating template '${template}':`, e);
      return false;
    }
  }
}
