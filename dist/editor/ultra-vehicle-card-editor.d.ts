import { LitElement, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../types';
import '../components/entity-picker';
import '../components/color-picker';
import '../components/gradient-editor';
export declare class UltraVehicleCardEditor extends LitElement {
    hass: HomeAssistant;
    private config;
    private activeTab;
    private _showEntityList;
    private _activeField;
    private _entityFilter;
    private _entities;
    private _expandedBar;
    private _preventExpandCollapse;
    private _draggedBarIndex;
    private _dropTargetIndex;
    private _expandedIconRow;
    private _expandedIcon;
    private _draggedIconRow;
    private _draggedIcon;
    private _dropTargetRow;
    private _dropTargetIcon;
    private _cropperActive;
    private _cropperImage;
    private _cropperTargetField;
    private _vehicleCropExpanded;
    private _actionCropExpanded;
    private _draggedBar;
    private _dropTargetBar;
    private _dropTargetIconRow;
    private _draggedSection;
    private _editorVersion;
    private _activeIconTabs;
    private _activeBarTabs;
    private _gradientEditorKeys;
    private _latestStopPositions;
    setConfig(config: UltraVehicleCardConfig): void;
    private _migrateToIndividualSections;
    private handleFileUpload;
    private _getCleanConfig;
    private _updateConfig;
    private _valueChanged;
    private _barValueChanged;
    private _setNestedValue;
    private _toggleBarExpand;
    private _addBar;
    private _removeBar;
    private _renderSettingsTab;
    private _renderCustomizeTab;
    private _renderBarsTab;
    private _truncateText;
    private _getFriendlyName;
    private _renderBar;
    private _renderBarConfigurationTab;
    private _renderBarColorsTab;
    private _renderBarAnimationTab;
    private _setActiveBarTab;
    private _getMainBarSchema;
    private _getLeftSideSchema;
    private _getRightSideSchema;
    private _prepareBarData;
    private _renderColorPickersGrid;
    private _convertCssVariableToColor;
    private _resetBarColor;
    private _updateBarProperty;
    private _fireForceGradientRefreshEvent;
    private _renderActionSchema;
    private _getEntityStateOptions;
    private _handleActionImageUpload;
    private _renderIconsTab;
    private _renderIconRow;
    private _renderIcon;
    private _addIconRow;
    private _removeIconRow;
    private _toggleIconRowExpand;
    private _updateIconRowConfig;
    private _addIcon;
    private _removeIcon;
    private _toggleIconEdit;
    private _updateIconConfig;
    private _getAlignmentLabel;
    private _getSpacingValue;
    private _handleIconRowDragStart;
    private _handleIconRowDragEnd;
    private _handleIconRowDragOver;
    private _handleIconRowDragLeave;
    private _handleIconRowDrop;
    private _handleIconDragStart;
    private _handleIconDragEnd;
    private _handleIconDragOver;
    private _handleIconDragLeave;
    private _handleIconDrop;
    private _rearrangeIcons;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult;
    firstUpdated(): void;
    private _refreshEntityList;
    private _onEntityInputChange;
    private _onEntityFocus;
    private _getFilteredEntities;
    private _selectEntity;
    private _handleDragStart;
    private _handleDragEnd;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _rearrangeBars;
    private _createDefaultConfig;
    private _handleFileInputChange;
    private _formatFieldName;
    private _createDefaultIconRow;
    private _createDefaultIcon;
    private _generateUniqueId;
    private _rearrangeIconRows;
    private _createDefaultCropSettings;
    private _loadCropperJS;
    private _renderImageCropper;
    private _applyCrop;
    updated(changedProperties: any): void;
    private _renderCropSliders;
    private _renderIconRows;
    private _renderCardIconRow;
    private _renderCardIcon;
    private _handleIconClick;
    private _renderVehicleImageConfig;
    private _handleImageUpload;
    private _showNotification;
    private _closeNotification;
    private _renderActionImageConfig;
    private _updateImageCrop;
    private _resetImageCrop;
    private _handleBarDragStart;
    private _handleBarDragEnd;
    private _handleBarDragOver;
    private _handleBarDragLeave;
    private _handleBarDrop;
    private _resetIconColor;
    private _renderDraggableSections;
    private _handleColumnDragOver;
    private _renderDraggableSection;
    private _toggleSectionVisibility;
    private _handleSectionDragStart;
    private _handleSectionDragEnd;
    private _handleSectionDragOver;
    private _handleSectionDrop;
    private _findDraggableSectionParent;
    private _ensureGradientStops;
    latestStopPositions: Record<string, number>;
    private _sortAndValidateStops;
    private _renderGradientEditor;
    private _getGradientToggleSchema;
    private _resetIconSize;
    private _resetTitleSize;
    private _getImageSchema;
    private _addGradientStop;
    private parseColor;
    private _updateAllStopPositions;
    private _removeGradientStop;
    private _resetGradientStops;
    private _updateGradientStopColor;
    private _forceCompleteGradientRefresh;
    private _handleStopColorChange;
    private _getLeftTitleSizeSchema;
    private _getLeftTextSizeSchema;
    private _getRightTitleSizeSchema;
    private _getRightTextSizeSchema;
    private _resetBarSize;
    private _truncatePath;
}
