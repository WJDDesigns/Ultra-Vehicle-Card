import { css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export const styles = css`
  :host {
    --primary-color: #4CAF50;
    --background-color: #f5f5f5;
  }
  .vehicle-card-content {
    padding: 16px;
  }
  .vehicle-image-container {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    border-radius: 12px;
  }
  .vehicle-image {
    position: absolute;
    top: 0;
    left: 0;
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
  }
  .location, .mileage {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: var(--secondary-text-color);
  }
  .location ha-icon, .mileage ha-icon {
    margin-right: 4px;
  }
  .level-info {
    flex: 1;
  }
  .item_bar {
    position: relative;
    height: 1.5rem;
    width: 100%;
    background-color: rgb(9 8 8);
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid rgb(9 8 8);
  }
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem;
    margin: 0;
    background-color: var(--accent-color, var(--primary-color));
    border-radius: 4px;
  }
  .level-text {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--primary-text-color);
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
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
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
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
    background-color: var(--primary-color);
  }
  input:checked + .slider:before {
    transform: translateX(16px);
  }
  .icon-grid-container {
    margin-top: 16px;
  }
  .selected-entities {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
  .selected-entity {
    background-color: var(--accent-color);
    color: var(--text-primary-color, white);
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: move;
  }
  .handle {
    cursor: move;
    padding-right: 16px;
    color: var(--text-primary-color);
  }
  .entity-content {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: 8px;
  }
  .custom-icon {
    margin-right: 8px;
    cursor: pointer;
  }
  .entity-name {
    flex-grow: 1;
  }
  .remove-entity {
    cursor: pointer;
    margin-left: 8px;
  }
  
  /* Custom Icons Styles */
  .custom-icons-container {
    margin-top: 16px;
  }
  .custom-icons-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .custom-icon-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary-background-color);
    padding: 8px;
    border-radius: 4px;
  }
  .icon-picker {
    position: relative;
    cursor: pointer;
  }
  .icon-picker-popup {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    padding: 8px;
    z-index: 1;
    width: 250px;
    max-height: 300px;
  }
  .icon-search {
    width: calc(100% - 26px) !important;
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    font-size: 14px;
  }
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
  .icon-option {
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-option:hover {
    background-color: var(--secondary-background-color);
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
`;