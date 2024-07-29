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
  }
  .vehicle-name {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: var(--primary-text-color);
  }
  .level-info {
    flex: 1;
  }
  .item_bar {
    position: relative;
    height: 1.5rem;
    width: 100%;
    background-color: #000;
    border-radius: 4px;
    overflow: hidden;
  }
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem;
    margin: 0;
    background-color: var(--primary-color);
    border-radius: 4px;
    transition: width 0.5s ease-in-out;
  }
  .charging .progress::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -45deg,
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
    overflow: hidden;
  }
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
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
    grid-gap: 24px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
  }
  .input-group label {
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  input[type="text"], .entity-picker-input {
    width: 90%;
    padding: 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 16px;
    background-color: var(--card-background-color, #fff);
    color: var(--primary-text-color);
  }
  input[type="text"]:focus, .entity-picker-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
  }
  .radio-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .radio-group label {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  input[type="radio"] {
    margin-right: 8px;
  }
  input[type="file"] {
    margin-top: 8px;
  }
  .entity-picker-container {
    position: relative;
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
    z-index: 1;
    border-radius: 0 0 4px 4px;
  }
  .entity-picker-result {
    padding: 8px;
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
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
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
`;