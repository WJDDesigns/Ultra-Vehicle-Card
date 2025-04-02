import { LitElement } from 'lit';
export declare class UltraVehicleColorPicker extends LitElement {
    value?: string;
    label?: string;
    private _currentDisplayColor;
    private _getDisplayColor;
    private _colorChanged;
    updated(changedProperties: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleColorRefresh;
    private _processColorValue;
    render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
