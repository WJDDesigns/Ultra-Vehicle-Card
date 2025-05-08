import { LitElement, TemplateResult, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../../components/gradient-editor';
export declare class IconsTab extends LitElement {
    hass: HomeAssistant;
    config: UltraVehicleCardConfig;
    private _expandedIconRow;
    private _expandedIcon;
    private _activeIconTabs;
    private _layoutHelpExpanded;
    private _rowSettingsExpanded;
    private _stateSettingsExpanded;
    private _t;
    private _generateUniqueId;
    private _getFriendlyName;
    private _truncateText;
    private _formatFieldName;
    private _fireConfigChanged;
    private _addIconRow;
    private _removeIconRow;
    private _duplicateIconRow;
    private _duplicateIcon;
    private _toggleIconRowExpand;
    private _updateIconRowConfig;
    private _addIcon;
    private _removeIcon;
    private _toggleIconEdit;
    private _updateIconConfig;
    private _createDefaultIconRow;
    private _createDefaultIcon;
    private _resetIconColor;
    private _resetIconNameColor;
    private _resetIconStateColor;
    private _resetIconAppearanceColor;
    private _resetIconSize;
    /**
     * Helper to get the icon defined for an entity in Home Assistant,
     * falling back to domain/device_class defaults.
     */
    private _getEntityIcon;
    protected render(): TemplateResult | typeof nothing;
    private _renderIconRow;
    private _renderIconRowContent;
    private _renderIcon;
    private _renderIconContent;
    private _renderIconGeneralTab;
    private _getIconGeneralSchema;
    private _getClickActionDescription;
    private _renderIconAppearanceTab;
    private _getIconAppearanceGeneralSchema;
    private _getIconAppearanceIconSchema;
    private _getIconAppearanceContainerSchema;
    private _getIconAppearanceTextSizeSchema;
    private _getIconAppearanceTextAlignmentSchema;
    private _renderIconStatesTab;
    private _renderColorPicker;
    private _toggleLayoutHelp;
    private _toggleRowSettings;
    private _toggleStateSettings;
    static styles: import("lit").CSSResult;
}
