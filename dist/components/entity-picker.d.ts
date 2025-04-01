import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class UltraEntityPicker extends LitElement {
    hass: HomeAssistant;
    label: string;
    value?: string;
    entityFilter?: (entityId: string) => boolean;
    static get styles(): import("lit").CSSResult;
    protected render(): import("lit").TemplateResult<1>;
    private _valueChanged;
}
