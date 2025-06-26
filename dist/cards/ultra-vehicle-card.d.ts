import { LitElement, TemplateResult } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../types';
declare module 'custom-card-helpers' {
    interface HomeAssistant {
        __uvc_template_strings?: {
            [key: string]: string;
        };
    }
}
export declare class UltraVehicleCard extends LitElement {
    hass: HomeAssistant;
    private config;
    private _templateService?;
    private _dynamicColorService?;
    private _dynamicIconService?;
    private _highlightService;
    private static _versionLogged;
    constructor();
    private static readonly DEFAULT_ACTIVE_STATES;
    private static readonly DEFAULT_INACTIVE_STATES;
    private _lastRenderTime;
    private _lastImageUrl;
    private _mapPopupData;
    private _iconActiveStates;
    private _iconsAwaitingConfirmation;
    private _currentTimedImage;
    private _timedImageStartTime;
    private _imageConditionStates;
    private _imageTriggerTimes;
    private _imageTriggerResults;
    private _cardInstanceId;
    private _stateRestored;
    private _templateSubscriptions;
    private _templateResults;
    private _confirmationCancelListeners;
    private _holdTimer;
    private _currentHoldIcon;
    private _singleClickTimers;
    private _pendingSingleClicks;
    private _touchStartTimes;
    private _lastTouchEndTime;
    private _currentHoldImage;
    private _pendingSingleImageClicks;
    private _imageHoldTimer;
    private _timedImageTimer;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): {
        title: string;
        title_alignment: string;
        title_size: number;
        title_bold: boolean;
        formatted_entities: boolean;
        show_units: boolean;
        vehicle_image_type: string;
        sections_order: string[];
    };
    static get properties(): {
        hass: {};
        config: {};
    };
    static get styles(): import("lit").CSSResult;
    setConfig(config: UltraVehicleCardConfig): void;
    private _migrateBarsToIndividual;
    private _cleanupInfoSections;
    private _saveConfigChanges;
    private _checkForGradientOrAnimationChanges;
    private _forceFullRender;
    protected render(): TemplateResult<1>;
    private _renderImage;
    private _selectImageFromNewSystem;
    private _imageMatchesConditions;
    private _selectImageFromLegacySystem;
    private _processSelectedImage;
    private _startTimedImage;
    private _clearTimedImage;
    private _getFriendlyName;
    private _getFormattingStyles;
    private _formatValue;
    private _handleImageError;
    private _renderBar;
    private _renderPercentageText;
    private _getBarAnimationClass;
    private _getEntityState;
    private _renderIconRows;
    private _renderIconRow;
    private _renderCardIcon;
    private _handlePointerDown;
    private _handlePointerUp;
    private _handlePointerLeave;
    private _handleTouchStart;
    private _handleTouchEnd;
    private _handleTouchCancel;
    private _handleIconTap;
    private _handleIconClickWithDelay;
    private _handleIconClick;
    private _startHoldTimer;
    private _clearHoldTimer;
    private _handleImageClickWithDelay;
    private _handleImageClick;
    private _startImageHoldTimer;
    private _clearImageHoldTimer;
    private _handleImageTouchStart;
    private _handleImageTouchEnd;
    private _handleImageTouchCancel;
    private _handleImageTap;
    private _handleImagePointerDown;
    private _handleImagePointerUp;
    private _handleImagePointerLeave;
    /**
     * Shows a toast notification
     * @param message The message to display
     * @param type The type of toast (success, error, or info)
     */
    private _showToast;
    /**
     * Opens a location map for the entity
     */
    private _openLocationMap;
    private _handleDragStart;
    private _handleDragEnd;
    private _hexToRgb;
    private _hashString;
    private _getZoneInfo;
    private _renderVehicleInfo;
    private _computeImageStyle;
    private _normalizeState;
    private _renderBarLabels;
    /**
     * Process bar template and return the rendered result
     * Similar to how templates are handled for icons
     */
    private _processBarTemplate;
    private _showMoreInfo;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleForceGradientRefresh;
    private _refreshInterval;
    private _setupRefreshInterval;
    private _entityStates;
    private _entityImageUrls;
    protected updated(changedProperties: Map<string, any>): void;
    private _evaluateTemplate;
    private _subscribeToTemplate;
    private _parseTemplateResult;
    private _unsubscribeAllTemplates;
    private _subscribeToDynamicTemplates;
    private _renderMapPopup;
    private _formatCoordinates;
    private _getEntityForCoordinates;
    private _isDarkMode;
    private _closeMapPopup;
    private _isHighlighted;
    private _getHighlightClass;
    private _onHighlightChange;
    private _getStorageKey;
    private _restoreStateFromStorage;
    private _saveStateToStorage;
    private _shouldRenderSection;
    private _cancelConfirmation;
    private _checkBarSideCondition;
    private _processPercentageTemplate;
    private _renderInfoRowsFromConfig;
    private _renderSingleInfoRow;
    private _renderSingleInfoEntity;
    private _handleInfoEntityClick;
}
