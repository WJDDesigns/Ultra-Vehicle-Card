import { css } from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

export const styles = css`
  .vehicle-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vehicle-name {
    font-size: 1.5em;
    margin-bottom: 16px;
    text-align: center;
  }

  .vehicle-image img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 16px;
  }

  .vehicle-info {
    width: 100%;
  }

  .level-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .level-label {
    font-weight: bold;
  }

  .level-percentage {
    font-weight: bold;
  }

  .level-meter {
    width: 100%;
    height: 8px;
    background-color: var(--secondary-background-color);
    border-radius: 4px;
    overflow: hidden;
  }

  .level-meter-fill {
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.5s ease-in-out;
  }
`;