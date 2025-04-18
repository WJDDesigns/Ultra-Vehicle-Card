import { LitElement, TemplateResult, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class AboutTab extends LitElement {
    hass: HomeAssistant;
    private _t;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
