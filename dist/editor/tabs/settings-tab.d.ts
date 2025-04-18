import { LitElement, TemplateResult } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../..//components/gradient-editor';
export declare class SettingsTab extends LitElement {
    hass: HomeAssistant;
    set config(value: UltraVehicleCardConfig);
    get config(): UltraVehicleCardConfig;
    private _config;
    private _vehicleCropExpanded;
    private _actionCropExpanded;
    private _t;
    private _formatFieldName;
    private _truncatePath;
    private _valueChanged;
    private _getImageSchema;
    private _dispatchFileUpload;
    private _resetTitleSize;
    private _createDefaultCropSettings;
    private _renderCropSliders;
    private _updateImageCrop;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
}
