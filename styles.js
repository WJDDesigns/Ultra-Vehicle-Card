import { css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export const styles = css`
  :host {
    --uvc-primary-color: var(--primary-color);
    --uvc-background-color: var(--card-background-color, #fff);
    --uvc-bar-background: var(--uvc-bar-background-color, #595959);
    --uvc-bar-border-color: var(--uvc-bar-border-color, #595959);
    --uvc-bar-fill: var(--uvc-primary-color);
    --uvc-limit-indicator: white;
    --uvc-icon-active: var(--uvc-primary-color);
    --uvc-icon-inactive: var(--secondary-text-color);
    --uvc-info-text-color: var(--secondary-text-color);
    --ha-card-border-radius: var(--ha-config-card-border-radius, 8px);
    --uvc-icon-grid-size: var(--mdc-icon-size, 24px);
  }
  .image-upload-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.image-upload-container input[type="text"] {
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
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--divider-color);
  border-radius: 4px;
  background-color: var(--card-background-color);
  color: var(--primary-text-color);
}
  .divider {
  height: 1px;
  background-color: var(--divider-color);
  margin: 16px 0;
}

.radio-group {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

.radio-group label {
  margin-right: 16px;
  display: flex;
  align-items: center;
}

.radio-group input[type="radio"] {
  margin-right: 4px;
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
  min-width: 70px; 
}
  .vehicle-image-container.clickable {
  cursor: pointer;
}

.vehicle-image-container.clickable:hover {
  opacity: 0.8;
}

.file-upload-label:hover {
  opacity: 0.9;
}
  .vehicle-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%; // Ensure the content takes full height of the card
  }
  
  .vehicle-image-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    border-radius: 12px;
  }
  
  .vehicle-image {

    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
  }
  
  .vehicle-name {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: var(--primary-text-color);
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
  
  .location, .mileage {
  display: flex;
  align-items: center;
  font-size: 0.9em;
}
  
  .location ha-icon, .mileage ha-icon {
  margin-right: 4px;
}
  
  .level-info {
    flex: 1;
  }
  
  .level-info.hybrid {
    display: flex;
    flex-direction: column;
  }
  
  .hybrid-separator {
    height: 16px;
  }
  
  .item_bar {
    position: relative;
    height: 1.5rem;
    width: 100%;
    background-color: var(--uvc-bar-background);
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid var(--uvc-bar-border-color);
    margin-bottom: 4px;
  }
  
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem;
    margin: 0;
    background-color: var(--uvc-bar-fill);
    border-radius: 4px;
  }
  
  .level-text {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--primary-text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .range {
    text-align: right;
  }
  
  .form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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
  
  input[type="text"], .entity-picker-input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 16px;
    background-color: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    box-sizing: border-box;
  }
  
  input[type="text"]:focus, .entity-picker-input:focus {
    outline: none;
    border-color: var(--uvc-primary-color);
    box-shadow: 0 0 0 1px var(--uvc-primary-color);
  }
  
  .radio-group, .checkbox-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .radio-group label, .checkbox-group label {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  
  input[type="radio"], input[type="checkbox"] {
    margin-right: 8px;
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
    left: 0;
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
    left: -1px;
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
  }
    .car-state {
  color: var(--uvc-car-state-text-color);
}

.level-text {
  color: var(--uvc-level-text-color);
}
  .level-text .range {
  color: var(--uvc-range-text-color);
}

  .entity-header {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    cursor: move;
  }

  .handle {
    margin-right: 8px;
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

  .icon-row, .interaction-row {
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
  .icon-wrapper.label-left, .icon-wrapper.label-right {
    flex-direction: row;
  }
  .icon-wrapper.label-top, .icon-wrapper.label-bottom {
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
    }

    .color-input-wrapper {
      position: relative;
      width: 100%;
      height: 40px;
    }
  
  ha-icon-picker {
    flex-grow: 1;
  }
  .icon-wrapper.round {
    background-color: var(--uvc-icon-background, rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.10));
    border-radius: 50%;
    padding: 8px;
  }

  .icon-wrapper.square {
    background-color: var(--uvc-icon-background, rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.10));
    border-radius: 4px;
    padding: 8px;
  }
  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
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

  .icon-item.round,
  .icon-item.square {
    width: calc(var(--uvc-icon-grid-size) * 1.5);
    height: calc(var(--uvc-icon-grid-size) * 1.5);
    background-color: var(--uvc-icon-background, rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.10));
  }

  .icon-item.round {
    border-radius: 50%;
  }

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
    color: var(--icon-color, var(--uvc-icon-active)) !important;
  }
  
  .interaction-select {
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
  
  .interaction-option input,
  .interaction-option select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
  }
  
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-top: 18px;
  }
  
  .checkbox-wrapper input {
    margin-right: 8px;
  }
  
  
  .color-input-wrapper {
    display: flex;
    align-items: center;
    border: solid;
    border-radius: 4px;
    position: relative;
    width: 100%;
    gap: 12px;
    margin-bottom:12px;
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
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    cursor: pointer;
  }
  
  .color-hex {
    font-family: monospace;
    font-size: 14px;
  }
  
  .reset-icon {
    --mdc-icon-size: 20px;
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
          padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 16px;
    padding-right: 16px;
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
  
  /* Animation for charging */
  @keyframes move-stripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 0;
    }
  }
  
  .progress.charging {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 50px 50px;
    animation: move-stripes 2s linear infinite;
  }
  
  /* Improve scrollbar appearance */
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
    
    .icon-row, .interaction-row {
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
  /* Animation for charging */
  @keyframes move-stripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 0;
    }
  }
  
  .progress.charging {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 50px 50px;
    animation: move-stripes 2s linear infinite;
  }

  .progress.engine-on {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 50px 50px;
    animation: move-stripes 2s linear infinite;
  }

  .editor-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .editor-item {
    flex: 1;
    margin-right: 16px;
    min-width: 0; /* This prevents flex items from overflowing */
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
    max-width: 100%; /* Ensures the element doesn't exceed its container */
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    box-sizing: border-box; /* Includes padding in the width calculation */
  }

  .editor-item ha-icon-picker {
    width: 100%;
    max-width: 100%;
    border: none !important; /* Explicitly remove border */
    background: none !important; /* Remove any background */
    padding: 0 !important; /* Remove any padding */
  }

  .editor-item input[type="number"] {
    -moz-appearance: textfield; /* Removes spinner for Firefox */
  }

  .editor-item input[type="number"]::-webkit-inner-spin-button,
  .editor-item input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .color-picker {
    width: 100%;
  }

`;