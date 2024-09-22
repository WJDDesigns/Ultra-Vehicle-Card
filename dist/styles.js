import { css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export const styles = css`
  :host {
    --uvc-card-title-color: var(--primary-text-color);
    --uvc-primary-color: var(--primary-color);
    --uvc-card-background: var(--card-background-color);
    --uvc-bar-background: var(--secondary-text-color);
    --uvc-bar-border-color: var(--secondary-text-color);
    --uvc-limit-indicator: var(--primary-text-color);
    --uvc-info-text-color: var(--secondary-text-color);
    --uvc-car-state-text-color: var(--primary-text-color);
    --uvc-range-text-color: var(--primary-text-color);
    --uvc-percentage-text-color: var(--primary-text-color);
    --uvc-icon-background-light-color: rgba(255, 255, 255, 0.1);
    --uvc-icon-background-dark-color: rgba(0, 0, 0, 0.1);
    --uvc-icon-background: var(--uvc-icon-background-light);
  }

  :host([theme="dark"]) {
    --uvc-icon-background: var(--uvc-icon-background-dark);
  }

  .progress {
    background-color: var(--uvc-primary-color);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem;
    margin: 0;
    border-radius: 4px;
  }
    .percentage-text {
    color: var(--uvc-percentage-text-color);
  }

  .item_bar {
    background-color: var(--uvc-bar-background);
    border-color: var(--uvc-bar-border-color);
    position: relative;
    height: 1.5rem;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid var(--uvc-bar-border-color);
    margin-bottom: 4px;
  }

  .image-upload-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .image-upload-container input[type="text"],
  .image-input-container {
    flex-grow: 1;
  }

  .image-input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  ha-entity-picker {
    width: auto;
  }

  textarea,
  input[type="text"],
  .entity-picker-input {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 16px;
    box-sizing: border-box;
  }

  input[type="text"]:focus,
  .entity-picker-input:focus {
    outline: none;
    border-color: var(--uvc-primary-color);
    box-shadow: 0 0 0 1px var(--uvc-primary-color);
  }

  .divider {
    height: 1px;
    background-color: var(--divider-color);
    margin: 16px 0;
  }

  .radio-group,
  .checkbox-group {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }

  .radio-group label,
  .checkbox-group label {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }

  .radio-group input[type="radio"],
  .checkbox-group input[type="checkbox"] {
    margin-right: 8px;
  }

  .file-upload-label {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    overflow: visible;
    text-overflow: clip;
    text-align: center;
  }

  .file-upload-label:hover {
    opacity: 0.9;
  }

  .vehicle-image-container {
    width: 100%;
    position: relative;
    overflow: visible;
    border-radius: 12px;
  }

  .vehicle-image-container.clickable {
    cursor: pointer;
  }

  .vehicle-image-container.clickable:hover {
    opacity: 0.8;
  }

  .vehicle-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .vehicle-name {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: var(--uvc-card-title-color, var(--primary-text-color));
    text-align: center;
  }

  .info-line {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
    text-align: center;
    color: var(--uvc-info-text-color);
  }

  .info-line ha-icon {
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    --mdc-icon-size: 24px !important;
  }

  .location,
  .mileage {
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }

  .location ha-icon,
  .mileage ha-icon {
    margin-right: 4px;
  }

  .level-info {
    flex: 1;
    margin-top: 12px;
  }

  .level-info.hybrid {
    display: flex;
    flex-direction: column;
  }

  .hybrid-separator {
    height: 8px;
  }

  .level-text {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--uvc-level-text-color, var(--primary-text-color));
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .level-text .clickable {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .level-text .clickable:hover {
    opacity: 0.8;
  }

  .level-text .range {
    text-align: right;
    color: var(--uvc-range-text-color);
  }

  .form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  .input-group label {
    margin-bottom: 4px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .entity-description {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  input[type="file"] {
    margin-top: 8px;
  }

  .entity-picker-container {
    position: relative;
    width: 100%;
  }

  .entity-picker-results {
    position: absolute;
    top: 100%;
    left: -1px;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-top: none;
    z-index: 1000;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: -1px;
    width: calc(100% + 2px);
    padding: 4px 0;
  }

  .entity-picker-result {
    padding: 8px 12px;
    cursor: pointer;
    color: var(--primary-text-color);
  }

  .entity-picker-result:hover {
    background-color: var(--secondary-background-color);
  }

  .entity-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .entity-picker-wrapper {
    flex-grow: 1;
    margin-right: 16px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    flex-shrink: 0;
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
    border-radius: 24px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--uvc-primary-color);
  }

  input:checked + .slider:before {
    transform: translateX(16px);
  }

  .icon-grid-container {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .selected-entities {
    position: relative;
  }

  .selected-entity {
    border: 1px solid var(--divider-color);
    margin-bottom: 8px;
    transition: all 0.3s ease;
  }

  .selected-entity.dragging {
    opacity: 0.5;
    background-color: var(--primary-color);
  }

  .drag-placeholder {
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px dashed #ccc;
    margin-bottom: 8px;
    transition: all 0.2s ease;
  }

  .handle {
    cursor: move;
    touch-action: none;
    margin-right: 8px;
  }

  .car-state {
    color: var(--uvc-car-state-text-color);
  }

  .entity-header {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    cursor: move;
  }

  .toggle-details {
    cursor: pointer;
    margin-right: 8px;
  }

  .entity-name {
    flex-grow: 1;
    font-weight: bold;
  }

  .remove-entity {
    cursor: pointer;
  }

  .entity-details {
    background-color: var(--card-background-color);
    border-top: none;
    padding: 8px;
  }

  .icon-row,
  .interaction-row {
    padding: 8px;
    display: block;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: var(--label-size, 14px);
  }

  .icon-wrapper.label-left,
  .icon-wrapper.label-right {
    flex-direction: row;
  }

  .icon-wrapper.label-top,
  .icon-wrapper.label-bottom {
    flex-direction: column;
  }

  .icon-label {
    position: absolute;
    padding: 2px 4px;
    white-space: nowrap;
    font-size: inherit;
    line-height: 1;
    color: var(--label-color, var(--primary-text-color));
  }

  .label-left .icon-label {
    right: calc(100% + 4px);
  }

  .label-right .icon-label {
    left: calc(100% + 4px);
  }

  .label-top .icon-label {
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
  }

  .label-bottom .icon-label {
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
  }

  .icon-color-pickers {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .icon-color-pickers .color-picker {
    flex: 1 1 calc(50% - 8px);
    min-width: 120px;
  }

  @media (max-width: 600px) {
    .icon-color-pickers .color-picker {
      flex: 1 1 100%;
    }
  }

  .color-picker {
    margin-bottom: 8px;
    width: 100%;
  }

  .color-input-wrapper {
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border: solid;
    border-radius: 4px;
    gap: 12px;
    margin-bottom: 12px;
  }

  ha-icon-picker {
    flex-grow: 1;
  }

  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
  }

  .icon-wrapper.label-left {
    margin-left: var(--label-margin, 24px);
  }

  .icon-wrapper.label-right {
    margin-right: var(--label-margin, 24px);
  }

  .icon-wrapper.label-top {
    margin-top: var(--label-margin, 24px);
  }

  .icon-wrapper.label-bottom {
    margin-bottom: var(--label-margin, 24px);
  }

  .icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--uvc-icon-grid-size);
    height: var(--uvc-icon-grid-size);
    color: var(--icon-color, var(--primary-text-color));
  }

  .icon-wrapper.round,
  .icon-wrapper.square {
    border-radius: 50%;
    padding: 8px;
    transition: background-color 0.3s;
    background-color: var(--uvc-icon-background);
  }

   .icon-wrapper.square,
  .icon-item.square {
    border-radius: 4px;
  }

  .clickable {
    cursor: pointer;
  }

  .clickable:hover {
    opacity: 0.8;
  }

  .icon-item.clickable {
    cursor: pointer;
  }

  .icon-item.non-interactive {
    cursor: default;
  }

  .icon-item ha-icon {
    width: var(--uvc-icon-size, 24px);
    height: var(--uvc-icon-size, 24px);
  }

  .interaction-select,
  .interaction-option input,
  .interaction-option select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  .interaction-option {
    margin-top: 8px;
  }

  .interaction-option label {
    display: block;
    margin-bottom: 4px;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-top: 18px;
  }

  .checkbox-wrapper input {
    margin-right: 8px;
  }

  .color-pickers-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 600px) {
    .color-pickers-grid {
      grid-template-columns: 1fr;
    }
  }

  .color-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    border: none;
    cursor: pointer;
    margin-left: 8px;
    margin-right: 8px;
    position: relative;
    padding: 4px;
    border-radius: 100%;
  }

  .color-input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  input[type="color"] {
    width: 100%;
    height: 40px;
    border: none;
    cursor: pointer;
    background-color: unset;
  }

  .charge-limit-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--uvc-limit-indicator);
    z-index: 1;
  }

  .entity-information {
    border: 1px solid var(--divider-color);
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .entity-information-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .icon-size-slider {
    width: 100%;
    margin-top: 16px;
  }

  button {
    padding: 8px 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  @keyframes move-stripes {
    0% { background-position: 0 0; }
    100% { background-position: 50px 0; }
  }

  .entity-picker-results::-webkit-scrollbar {
    width: 8px;
  }

  .entity-picker-results::-webkit-scrollbar-track {
    background: var(--card-background-color, #f1f1f1);
  }

  .entity-picker-results::-webkit-scrollbar-thumb {
    background: var(--secondary-text-color);
    border-radius: 4px;
  }

  .entity-picker-results::-webkit-scrollbar-thumb:hover {
    background: var(--primary-text-color);
  }

  @media (max-width: 600px) {
    .icon-row,
    .interaction-row {
      flex-direction: column;
      align-items: flex-start;
    }

    .interaction-option {
      flex-direction: column;
    }

    .interaction-option label {
      margin-bottom: 4px;
    }

    .interaction-option input,
    .interaction-option select {
      width: 100%;
    }
  }

  .vehicle-image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #f0f0f0;
    color: #888;
    font-style: italic;
  }

  .editor-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 16px;
  }

  .editor-item {
    flex: 1;
    margin-right: 8px;
  }

  .editor-item:last-child {
    margin-right: 0;
  }

  .editor-item label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
  }

  .editor-item select,
  .editor-item input[type="number"] {
    width: 100%;
    max-width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    box-sizing: border-box;
  }

  .editor-item ha-icon-picker {
    width: 100%;
    max-width: 100%;
    border: none !important;
    background: none !important;
    padding: 0 !important;
  }

  .editor-item input[type="number"] {
    -moz-appearance: textfield;
  }

  .editor-item input[type="number"]::-webkit-inner-spin-button,
  .editor-item input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .row-separator {
    width: 100%;
  }

  .selected-entity.row-separator {
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }
.icon-wrapper.active {
  color: var(--uvc-icon-active, var(--primary-color));
}

.icon-wrapper.inactive {
  color: var(--uvc-icon-inactive, var(--primary-text-color));
}
  .selected-entity.row-separator .entity-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .selected-entity.row-separator .entity-details {
    margin-top: 8px;
  }

  .row-separator .entity-header {
    background-color: var(--uvc-bar-background, rgba(0, 0, 0, 0));
  }

  .add-row-button {
    margin: 12px 0;
  }

  .input-with-unit {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .input-with-unit input {
    width: 100%;
    padding-right: 25px;
  }

  .input-with-unit .unit {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary-text-color);
    pointer-events: none;
  }

  .transparent-button {
    height: 36px;
    white-space: nowrap;
    padding: 0 16px;
  }

  .color-picker-row {
    display: flex;
    align-items: baseline;
    gap: 16px;
  }

  .transparent-button:hover {
    background-color: var(--accent-color);
  }

  ha-icon-button {
    --mdc-icon-button-size: 36px;
    color: var(--primary-text-color);
  }

  ha-icon-button[disabled] {
    color: var(--primary-color);
    opacity: 1;
  }

  .alignment-buttons {
    display: flex;
    gap: 8px;
  }

  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    color: var(--primary-text-color);
  }

  .icon-button:hover {
    background-color: var(--secondary-background-color);
  }

  .icon-button[disabled] {
    color: var(--primary-color);
    opacity: 1;
    cursor: default;
  }

  .icon-button[disabled]:hover {
    background: none;
  }

  .material-icons {
    font-size: 24px;
  }

  .selected-entity.separator-ui {
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .selected-entity.separator-ui .entity-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }

  .selected-entity.separator-ui .entity-details {
    padding: 8px;
  }

  .hex-input {
    width: 60px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
  }

  .reset-icon {
    cursor: pointer;
    margin-right: 8px;
  }

  .icon-grid-color-picker-wrapper {
    display: flex;
    align-items: center;
    border: solid;
    border-radius: 4px;
    position: relative;
    width: 100%;
    margin-bottom: 12px;
  }

  .row-separator-color-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .row-separator-color-picker {
    flex: 1;
    margin-right: 16px;
  }

  .transparent-button-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .size-input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .size-input {
    width: 100%;
    padding-right: 30px;
    text-align: left;
  }

  .size-input-suffix {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary-text-color);
    pointer-events: none;
  }

  .image-section {
    margin-bottom: 24px;
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }

  .image-section-title {
    font-weight: bold;
    margin-bottom: 16px;
  }

  .entity-format-switch {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .formatted-entities-section {
    margin-bottom: 32px;
  }

  .switch-container {
    margin-top: 12px;
  }

  .vehicle-charging-image,
.vehicle-engine-on-image,
  .vehicle-image {
    width: 100%;
    height: var(--vehicle-charging-image-height, 180px);
    object-fit: contain;
    margin: auto;
    display: block;
  }

  .vehicle-image-container[style*="display: none"] {
    height: 0 !important;
    overflow: hidden;
  }

  ha-select {
    width: 100%;
  }

  .template-input,
  .attribute-input {
    margin-top: 8px;
    width: 100%;
  }

  ha-textfield {
    width: 100%;
  }

  .title-toggle-container {
    display: flex;
    align-items: center;
  }

  .title-toggle-container input[type="text"] {
    flex-grow: 1;
    margin-right: 10px;
  }
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
      .delete-icon {
  cursor: pointer;
  color: #ffffff;
  margin-left: 8px;
}
`;