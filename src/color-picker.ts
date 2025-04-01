import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ultra-vehicle-color-picker')
export class UltraVehicleColorPicker extends LitElement {
  @property() public value?: string;
  @property() public label?: string;

  // Convert CSS variables to displayable colors
  private _getDisplayColor(value?: string): string {
    if (!value) return '#000000';

    if (value.startsWith('var(--')) {
      // For theme variables, extract fallback or use a better default
      const fallbackMatch = value.match(/var\(--[\w-]+,\s*([^)]+)\)/);
      if (fallbackMatch && fallbackMatch[1]) {
        return fallbackMatch[1].trim();
      }
      // Default colors for common variables
      if (value.includes('--text-primary-color')) {
        return value.includes('#777777') ? '#777777' : '#FFFFFF';
      }
      if (value.includes('--primary-color')) {
        return '#03A9F4';
      }
      return '#FFFFFF';
    }

    return value;
  }

  // Fire event when color changes
  private _colorChanged(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    const value = input.value;
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value } }));
  }

  render() {
    const displayColor = this._getDisplayColor(this.value);

    return html`
      ${this.label ? html`<div class="color-picker-label">${this.label}</div>` : ''}
      <div class="color-picker-row">
        <input
          type="color"
          .value=${displayColor}
          @change=${this._colorChanged}
          class="color-input"
        />
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .color-picker-label {
        font-weight: 500;
        margin-bottom: 8px;
      }

      .color-picker-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
      }

      .color-input {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 4px;
        background: none;
        cursor: pointer;
        padding: 0;
      }
    `;
  }
}
