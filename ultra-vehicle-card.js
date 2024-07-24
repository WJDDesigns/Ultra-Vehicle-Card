class UltraVehicleCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  static get styles() {
    return css`
      .form {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 8px;
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
    `;
  }

  setConfig(config) {
    this.config = config;
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        <div class="input-group">
          <label for="title">Title</label>
          <ha-textfield
            id="title"
            .value="${this.config.title || ''}"
            @input="${this._valueChanged}"
            .configValue="${'title'}"
          ></ha-textfield>
        </div>
        
        <div class="input-group">
          <label for="image_url">Image URL</label>
          <ha-textfield
            id="image_url"
            .value="${this.config.image_url || ''}"
            @input="${this._valueChanged}"
            .configValue="${'image_url'}"
          ></ha-textfield>
        </div>
        
        <div class="input-group">
          <label for="vehicle_type">Vehicle Type</label>
          <ha-select
            id="vehicle_type"
            .value="${this.config.vehicle_type || 'EV'}"
            @selected="${this._valueChanged}"
            .configValue="${'vehicle_type'}"
          >
            <mwc-list-item value="EV">Electric Vehicle</mwc-list-item>
            <mwc-list-item value="Fuel">Fuel Vehicle</mwc-list-item>
          </ha-select>
        </div>
        
        <div class="input-group">
          <label for="level_entity">Fuel/Charge Level Sensor</label>
          <ha-entity-picker
            id="level_entity"
            .hass="${this.hass}"
            .value="${this.config.level_entity || ''}"
            @value-changed="${this._valueChanged}"
            .configValue="${'level_entity'}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      this.config = {
        ...this.config,
        [target.configValue]: target.value
      };
    }
    this.configChanged(this.config);
  }
}