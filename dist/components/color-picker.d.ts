import { LitElement } from 'lit';
export declare class ColorPicker extends LitElement {
    value?: string;
    label?: string;
    configValue?: string;
    showResetButton: boolean;
    private _getDisplayColor;
    private _rgbToHex;
    private _onColorChanged;
    private _fireChangeEvent;
    private _resetColor;
    render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
