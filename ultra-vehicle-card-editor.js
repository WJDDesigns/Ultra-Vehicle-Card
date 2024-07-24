import { html, LitElement } from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';
import { styles } from './styles.js';

class UltraVehicleCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    return styles;
  }

  setConfig(config) {
    if (!config.level_entity) {
      throw new Error('You need to define a level entity');
    }
    this.config = {
      title: 'My Vehicle',
      image_url: 'https://pngimg.com/d/tesla_car_PNG56.png',
      vehicle_type: 'EV',
      ...config
    };
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const levelEntity = this.hass.states[this.config.level_entity];
    const level = levelEntity ? parseFloat(levelEntity.state) : 0;
    const levelUnit = this.config.vehicle_type === 'EV' ? 'Battery' : 'Fuel';

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${this.config.title}</h2>
          <div class="vehicle-image">
            <img src="${this.config.image_url}" alt="Vehicle Image">
          </div>
          <div class="vehicle-info">
            <div class="level-info">
              <span class="level-label">${levelUnit} Level</span>
              <span class="level-percentage">${level}%</span>
            </div>
            <div class="level-meter">
              <div class="level-meter-fill" style="width: ${level}%"></div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement("ultra-vehicle-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Vehicle",
      image_url: "https://pngimg.com/d/tesla_car_PNG56.png",
      vehicle_type: "EV",
      level_entity: ""
    };
  }
}

customElements.define('ultra-vehicle-card', UltraVehicleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ultra-vehicle-card",
  name: "Ultra Vehicle Card",
  description: "A card that displays vehicle information with fuel/charge level.",
  preview: true,
  documentationURL: "https://github.com/wjddesigns/ultra-vehicle-card"
});