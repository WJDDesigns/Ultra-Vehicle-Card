import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class NavigationPicker extends LitElement {
    hass: HomeAssistant;
    value: string;
    label: string;
    helper?: string;
    disabled: boolean;
    private _valueChanged;
    protected render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'navigation-picker': NavigationPicker;
    }
}
