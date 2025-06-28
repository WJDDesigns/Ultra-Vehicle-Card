import { LitElement, TemplateResult, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../../components/navigation-picker';
export declare class InfoTab extends LitElement {
    hass: HomeAssistant;
    config: UltraVehicleCardConfig;
    private _templateService?;
    private _dynamicColorService?;
    private _dynamicIconService?;
    private _expandedInfoRow;
    private _expandedInfoEntity;
    private _activeInfoTabs;
    private _rowSettingsExpanded;
    private _draggedEntity;
    private _dropTargetEntity;
    private _isTemplateEditing;
    private _t;
    private _generateUniqueId;
    private _getFriendlyName;
    private _truncateText;
    private _formatFieldName;
    private _fireConfigChanged;
    private _addInfoRow;
    private _removeInfoRow;
    private _duplicateInfoRow;
    private _toggleInfoRowExpand;
    private _updateInfoRowConfig;
    private _addInfoEntity;
    private _removeInfoEntity;
    private _duplicateInfoEntity;
    private _toggleInfoEntityEdit;
    private _updateInfoEntityConfig;
    /**
     * Helper to get the icon defined for an entity in Home Assistant,
     * falling back to domain/device_class defaults.
     */
    private _getEntityIcon;
    private _createDefaultInfoRow;
    private _createDefaultInfoEntity;
    private _toggleRowSettings;
    private _navigateToCustomizeTab;
    private _setTemplateEditingMode;
    private _updateInfoFormattingToggle;
    private _renderInfoFormattingToggles;
    protected render(): TemplateResult | typeof nothing;
    private _renderMigrationNotice;
    private _migrateFromLegacy;
    private _renderInfoRow;
    private _renderInfoRowContent;
    private _renderInfoEntity;
    private _renderInfoEntityContent;
    private _handleInfoEntityDragStart;
    private _handleInfoEntityDragEnd;
    private _handleInfoEntityDragOver;
    private _handleInfoEntityDragLeave;
    private _handleInfoEntityDrop;
    private _rearrangeInfoEntities;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: Map<string, any>): void;
    private _handleGlobalClick;
}
