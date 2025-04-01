import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ultra-vehicle-color-picker')
export class UltraVehicleColorPicker extends LitElement {
  @property() public value?: string;
  @property() public label?: string;

  // Convert CSS variables to displayable colors with better handling
  private _getDisplayColor(value?: string): string {
    if (!value) return '#000000';

    if (value.startsWith('var(--')) {
      // Extract the variable name for better debugging
      const variableName = value.match(/var\(([^,)]+)/)?.[1];

      // For theme variables, extract fallback or use a default
      const fallbackMatch = value.match(/var\(--[\w-]+,\s*([^)]+)\)/);
      if (fallbackMatch && fallbackMatch[1]) {
        return fallbackMatch[1].trim();
      }

      // Improved defaults for common variables
      if (variableName) {
        if (variableName.includes('--text-primary-color')) {
          return '#FFFFFF';
        }
        if (variableName.includes('--primary-color')) {
          return '#03A9F4';
        }
        if (variableName.includes('--accent-color')) {
          return '#FF9800';
        }
        if (variableName.includes('--dark')) {
          return '#121212';
        }
      }

      return '#FFFFFF'; // Default fallback
    }

    return value;
  }

  // Fire event when color changes with improved handling
  private _colorChanged(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    // Preserve CSS variable format if original value was a variable
    let finalValue = newValue;
    if (this.value && this.value.startsWith('var(--')) {
      // Extract variable name and replace fallback
      const match = this.value.match(/var\((--[\w-]+)(?:,[^)]+)?\)/);
      if (match && match[1]) {
        finalValue = `var(${match[1]}, ${newValue})`;
      }
    }

    // Only dispatch if value actually changed
    if (finalValue !== this.value) {
      this.dispatchEvent(
        new CustomEvent('value-changed', {
          detail: { value: finalValue },
          bubbles: true,
          composed: true,
        })
      );
    }
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
          aria-label=${this.label || 'Color picker'}
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
        font-size: 14px;
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

      /* Special handling for Webkit browsers */
      .color-input::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      .color-input::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
      }
    `;
  }
}
