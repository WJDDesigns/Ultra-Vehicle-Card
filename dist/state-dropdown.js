import { html, LitElement } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class StateDropdown extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      entityId: { type: String },
      stateType: { type: String }, // 'inactive' or 'active'
      value: { type: String },
      templateValue: { type: String },
      attributeValue: { type: String },
    };
  }

  constructor() {
    super();
    this.value = 'default';
    this.templateValue = '';
    this.attributeValue = '';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('config') || changedProperties.has('stateType')) {
      this._updateValueFromConfig();
    }
  }

  _updateValueFromConfig() {
    const configValue = this.config[`${this.stateType}State`];
    if (configValue) {
      if (configValue.startsWith('template:')) {
        this.value = 'template';
        this.templateValue = configValue.slice(9);
      } else if (configValue.startsWith('attribute:')) {
        const [, attributeName, attributeValue] = configValue.split(':');
        this.value = `attribute:${attributeName}`;
        this.attributeValue = attributeValue || '';
      } else {
        this.value = configValue;
      }
    }
  }

  render() {
    const options = this._getOptions();
    
    return html`
      <style>
        :host {
          display: block;
        }
        ha-select {
          width: 100%;
        }
        .template-input, .attribute-input {
          margin-top: 8px;
          max-width: 230px;
        }
        .beta-warning {
          color: #ff9800;
          font-weight: bold;
          margin-top: 4px;
          margin-bottom: 4px;
        }
      </style>
      <div @click="${this._handleContainerClick}">
        <ha-select
          .value=${this.value}
          @selected=${this._valueChanged}
          @closed=${this._handleClick}
        >
          ${options.map(option => html`
            <mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>
          `)}
        </ha-select>
        ${this.value === 'template' ? html`
          <div class="beta-warning">BETA - USE AT OWN RISK</div>
          <div class="template-input">
            ${this._renderTemplateInput()}
          </div>
        ` : ''}
        ${this.value.startsWith('attribute:') ? html`
          <div class="attribute-input">
            <ha-textfield
              .value=${this.attributeValue}
              @input=${this._attributeValueChanged}
              placeholder="Enter attribute value"
              style="width: 100%;"
            ></ha-textfield>
          </div>
        ` : ''}
      </div>
    `;
  }

  _handleContainerClick(e) {
    e.stopPropagation();
  }

  _getOptions() {
    const options = [
      { value: 'default', label: 'Default' },
      { value: 'template', label: 'Template' },
    ];

    if (this.entityId && this.hass.states[this.entityId]) {
      const entity = this.hass.states[this.entityId];
      
      if (entity.attributes.options) {
        entity.attributes.options.forEach(option => {
          options.push({ value: `option:${option}`, label: `Option: ${option}` });
        });
      }
      
      Object.keys(entity.attributes).forEach(attr => {
        if (attr !== 'options' && attr !== 'friendly_name' && attr !== 'icon') {
          options.push({ value: `attribute:${attr}`, label: `Attribute: ${attr}` });
        }
      });
    }

    return options;
  }

  _renderTemplateInput() {
    return html`
      <ha-code-editor
        mode="jinja2"
        .value=${this.templateValue}
        @value-changed=${this._templateChanged}
        dir="ltr"
        autocomplete-entities
        autocomplete-icons
        .hass=${this.hass}
        style="width: 100%;
        overflow: hidden;
        resize: vertical;
        max-width: 230px;"
      ></ha-code-editor>
    `;
  }

  _valueChanged(e) {
    e.stopPropagation();
    const newValue = e.target.value;
    this.value = newValue;
    
    if (newValue === 'template') {
      this._updateConfig(`template:${this.templateValue}`);
    } else if (newValue.startsWith('attribute:')) {
      this._updateConfig(`${newValue}:${this.attributeValue}`);
    } else {
      this._updateConfig(newValue);
    }
    
    this.requestUpdate();
  }

  _handleClick(e) {
    e.stopPropagation();
  }

  _updateConfig(newValue) {
    const newConfig = {
      ...this.config,
      [`${this.stateType}State`]: newValue,
    };

    const event = new CustomEvent('state-dropdown-changed', {
      detail: { 
        config: newConfig, 
        entityId: this.entityId, 
        stateType: this.stateType,
        attributeValue: this.attributeValue 
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  _templateChanged(e) {
    e.stopPropagation();
    this.templateValue = e.detail.value;
    this._updateConfig(`template:${this.templateValue}`);
  }

  _attributeValueChanged(e) {
    this.attributeValue = e.target.value;
    this._updateConfig(`${this.value}:${this.attributeValue}`);
  }
}

customElements.define('state-dropdown', StateDropdown);
