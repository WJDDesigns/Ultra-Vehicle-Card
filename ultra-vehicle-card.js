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
    if (!config.title && !config.title_entity) {
      throw new Error('You need to define a title or a title entity');
    }
    if (!config.vehicle_type) {
      throw new Error('You need to define a vehicle type (EV or Fuel)');
    }
    if (!config.level_entity) {
      throw new Error('You need to define a level entity');
    }
    this.config = config;
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const title = this.config.title_entity 
      ? this.hass.states[this.config.title_entity].state 
      : this.config.title;
    const imageSrc = this.config.image_url || '/local/images/default-car.png';
    const levelEntity = this.hass.states[this.config.level_entity];
    const level = levelEntity ? parseFloat(levelEntity.state) : 0;
    const levelUnit = this.config.vehicle_type === 'EV' ? 'Battery' : 'Fuel';

    return html`
      <ha-card>
        <div class="vehicle-card-content">
          <h2 class="vehicle-name">${title}</h2>
          <div class="vehicle-image">
            <img src="${imageSrc}" alt="Vehicle Image">
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
      image_url: "/local/images/default-car.png",
      vehicle_type: "EV",
      level_entity: "sensor.vehicle_battery_level"
    };
  }
}

customElements.define('ultra-vehicle-card', UltraVehicleCard);