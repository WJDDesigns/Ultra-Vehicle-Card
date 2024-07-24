import { html, LitElement } from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    this.config = config;
  }

  configChanged(newConfig) {
    const event = new Event('config-changed', {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <paper-input
          label="Card Title"
          .value="${this.config.title || ''}"
          .configValue="${'title'}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <ha-entity-picker
          label="Title Entity (optional)"
          .hass="${this.hass}"
          .value="${this.config.title_entity || ''}"
          .configValue="${'title_entity'}"
          @value-changed="${this._valueChanged}"
        ></ha-entity-picker>
        <paper-input
          label="Image URL"
          .value="${this.config.image_url || ''}"
          .configValue="${'image_url'}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <ha-select
          label="Vehicle Type"
          .value="${this.config.vehicle_type || 'EV'}"
          .configValue="${'vehicle_type'}"
          @selected="${this._valueChanged}"
        >
          <ha-list-item value="EV">Electric Vehicle</ha-list-item>
          <ha-list-item value="Fuel">Fuel Vehicle</ha-list-item>
        </ha-select>
        <ha-entity-picker
          label="Level Entity"
          .hass="${this.hass}"
          .value="${this.config.level_entity || ''}"
          .configValue="${'level_entity'}"
          @value-changed="${this._valueChanged}"
        ></ha-entity-picker>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.value,
      };
    }
    this.configChanged(this.config);
  }
}

customElements.define('ultra-vehicle-card-editor', UltraVehicleCardEditor);