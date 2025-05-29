import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/action-image-row';
export declare class ActionImagesTab extends LitElement {
    hass: HomeAssistant;
    config: UltraVehicleCardConfig;
    private _dragOverIndex;
    private _newlyAddedImageIds;
    protected render(): import("lit").TemplateResult<1>;
    private _handleImageConfigChange;
    private _addActionImage;
    private _duplicateActionImage;
    private _deleteActionImage;
    private _updateConfig;
    private _handleRowDragOver;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _handlePriorityChange;
    private _t;
    static styles: import("lit").CSSResult;
}
