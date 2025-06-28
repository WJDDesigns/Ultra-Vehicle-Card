import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export interface NavigationOption {
    value: string;
    label: string;
    description?: string;
}
export declare class NavigationSelector extends LitElement {
    hass: HomeAssistant;
    label: string;
    value?: string;
    description?: string;
    allowCustom: boolean;
    required: boolean;
    private _navigationOptions;
    private _showCustomInput;
    static get styles(): import("lit").CSSResult;
    protected firstUpdated(): void;
    protected render(): import("lit").TemplateResult<1>;
    private _loadNavigationOptions;
    private _isStandardPath;
    private _toggleMode;
    private _handleSelectionChange;
    private _handleCustomInput;
    private _dispatchChange;
}
