import { LitElement, TemplateResult, nothing } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../../components/gradient-editor';
export declare class BarsTab extends LitElement {
    hass: HomeAssistant;
    config: UltraVehicleCardConfig;
    private _expandedBar;
    private _preventExpandCollapse;
    private _activeBarTabs;
    private _updateStopDebounceTimer;
    private _removeStopDebounceTimer;
    private _updateOrderDebounceTimer;
    private _gradientChangedDebounceTimer;
    private _isUpdatingGradient;
    private readonly DEBOUNCE_DELAY;
    private readonly MAX_STOPS;
    private _t;
    private _generateUniqueId;
    private _getFriendlyName;
    private _truncateText;
    private _fireConfigChanged;
    private _fireForceRefreshEvent;
    private _fireForceGradientRefreshEvent;
    private _navigateToCustomizeTab;
    private _handleGlobalBarAlignmentChange;
    private _toggleBarExpand;
    private _syncSectionsOrderWithBars;
    private _addBar;
    private _duplicateBar;
    private _removeBar;
    private _barValueChanged;
    private _handleColorChange;
    private _setNestedBarValue;
    private _setActiveBarTab;
    private _updateBarProperty;
    private _resetBarColor;
    private _resetBarSize;
    private _updateBarFormattingToggle;
    private _renderBarFormattingToggles;
    private _getEnsuredGradientStops;
    private _addGradientStop;
    private _updateGradientStop;
    private _removeGradientStop;
    private _handleDuplicateStop;
    private _handleGradientStopColorChange;
    private _handleGradientChanged;
    private _handleGradientStopDelete;
    private _handleGradientReset;
    protected render(): TemplateResult | typeof nothing;
    private _renderBar;
    private _renderBarContent;
    private _renderBarConfigurationTab;
    private _renderAlignmentControl;
    private _renderBarColorsTab;
    private _handleGradientFormChange;
    private _renderBarAnimationTab;
    private _renderPercentageTextSize;
    private _renderPercentageOptions;
    private _renderColorPickersGrid;
    private _renderGradientEditor;
    private _getMainBarSchema;
    private _getLeftSideSchema;
    private _getRightSideSchema;
    private _getLeftTitleSizeSchema;
    private _getLeftTextSizeSchema;
    private _getRightTitleSizeSchema;
    private _getRightTextSizeSchema;
    private _getGradientToggleSchema;
    private _prepareBarData;
    static styles: import("lit").CSSResult;
    private _generateGradientPreview;
    private _updateGradientStopsOrder;
    private _updateBarCondition;
    private _renderLeftSideConditionFields;
    private _renderRightSideConditionFields;
}
