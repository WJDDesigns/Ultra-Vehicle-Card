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
    margin-top: 8