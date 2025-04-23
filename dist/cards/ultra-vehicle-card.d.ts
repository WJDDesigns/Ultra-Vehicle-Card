import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../types';
export declare class UltraVehicleCard extends LitElement {
    hass: HomeAssistant;
    private config;
    private _lastRenderTime;
    private _lastImageUrl;
    private _mapPopupData;
    private _iconActiveStates;
    private _templateSubscriptions;
    private _templateResults;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): {
        title: string;
        title_alignment: string;
        title_size: number;
        formatted_entities: boolean;
        vehicle_image_type: string;
    };
    static get properties(): {
        hass: {};
        config: {};
    };
    static get styles(): import("lit").CSSResult;
    setConfig(config: UltraVehicleCardConfig): void;
    private _checkForGradientOrAnimationChanges;
    private _forceFullRender;
    protected render(): import("lit").TemplateResult<1>;
    private _renderImage;
    private _getFriendlyName;
    private _formatValue;
    private _handleImageError;
    private _renderBar;
    private _renderPercentageText;
    private _getBarAnimationClass;
    private _getEntityState;
    private _renderIconRows;
    private _renderIconRow;
    private _renderCardIcon;
    private _handleIconClick;
    /**
     * Opens a location map for the entity
     */
    private _openLocationMap;
    private _handleDragStart;
    private _handleDragEnd;
    private _hexToRgb;
    private _getZoneInfo;
    private _renderVehicleInfo;
    private _computeImageStyle;
    private _normalizeState;
    private _renderBarLabels;
    private _showMoreInfo;
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
    private _renderMapPopup;
    private _formatCoordinates;
    private _getEntityForCoordinates;
    private _isDarkMode;
    private _closeMapPopup;
    private _shouldRenderSection;
}
