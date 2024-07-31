import { css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export const styles = css`
  ha-card {
    padding: 16px;
    font-size: 14px;
  }

  .vehicle-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .vehicle-name {
    font-size: 20px;
    margin: 0;
  }

  .vehicle-image-container {
    margin: 16px 0;
  }

  .vehicle-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .level-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .item_bar {
    width: 100%;
    background-color: #ddd;
    border-radius: 8px;
    margin: 8px 0;
    overflow: hidden;
  }

  .progress {
    height: 16px;
    background-color: var(--primary-color);
  }

  .level-text {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
  }

  .range {
    color: var(--secondary-text-color);
  }

  .form {
    padding: 16px;
  }

  .input-group {
    margin-bottom: 16px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
  }

  .input-group input[type="text"],
  .input-group input[type="file"],
  .input-group select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    font-size: 14px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }

  .radio-group {
    display: flex;
    gap: 16px;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .entity-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .entity-picker-wrapper {
    flex-grow: 1;
  }

  .entity-picker-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .entity-picker-container input[type="text"] {
    flex-grow: 1;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    margin-left: 8px;
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
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
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
    transform: translateX(14px);
  }
`;
