import { LitElement, TemplateResult, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../../components/navigation-picker';
export declare class ImageTab extends LitElement {
    hass: HomeAssistant;
    config: UltraVehicleCardConfig;
    private _expandedImage;
    private _activeImageTabs;
    private _draggedImage;
    private _dropTargetImage;
    private _isTemplateEditing;
    private _imageTemplateStates;
    private _forceConditionalTabRender;
    private _t;
    private _generateUniqueId;
    private _getFriendlyName;
    private _truncateText;
    private _truncatePath;
    private _fireConfigChanged;
    private _renderImageThumbnail;
    private _handleThumbnailError;
    private _addImage;
    private _removeImage;
    private _duplicateImage;
    private _toggleImageExpand;
    private _updateImageConfig;
    private _updateFallbackImage;
    private _updateImageTemplate;
    private _getImageActionSchema;
    private _getImageActionDescription;
    private _prepareImageActionFormData;
    private _createDefaultImage;
    private _setActiveImageTab;
    private _navigateToCustomizeTab;
    private _setTemplateEditingMode;
    private _handleFileUpload;
    protected render(): TemplateResult | typeof nothing;
    private _renderMigrationNotice;
    private _autoMigrateFromLegacy;
    private _renderImage;
    private _renderImageContent;
    private _renderGeneralTab;
    private _renderConditionalTab;
    private _renderAppearanceTab;
    private _renderCropControls;
    private _updateCropSetting;
    private _handleImageDragStart;
    private _handleImageDragEnd;
    private _handleImageDragOver;
    private _handleImageDragLeave;
    private _handleImageDrop;
    private _rearrangeImages;
    static styles: import("lit").CSSResult;
}
