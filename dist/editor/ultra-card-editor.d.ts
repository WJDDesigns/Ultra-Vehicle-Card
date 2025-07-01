import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraCardConfig } from '../types';
import './tabs/about-tab';
export declare class UltraCardEditor extends LitElement {
    hass: HomeAssistant;
    config: UltraCardConfig;
    private _activeTab;
    setConfig(config: UltraCardConfig): void;
    private _configChanged;
    private _updateConfig;
    protected render(): import("lit").TemplateResult<1>;
    private _renderConfigTab;
    static get styles(): import("lit").CSSResult;
}
