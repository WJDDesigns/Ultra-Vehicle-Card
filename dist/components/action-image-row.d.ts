import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { ActionImageConfig } from '../types';
export declare class ActionImageRow extends LitElement {
    hass: HomeAssistant;
    config: ActionImageConfig;
    lang: string;
    private expanded;
    protected render(): import("lit").TemplateResult<1>;
    private _renderPreview;
    private _renderImageInput;
    private _toggleExpand;
    private _handleDelete;
    private _handleDuplicate;
    private _handleEntityChange;
    private _handleStateChange;
    private _handleImageTypeChange;
    private _handleImageUrlChange;
    private _handleImageEntityChange;
    private _handleFileUpload;
    private _handleConfigChange;
    private _getImageTypeName;
    private _getFileName;
    private _handleDragStart;
    private _handleDragEnd;
    static styles: import("lit").CSSResult;
}
