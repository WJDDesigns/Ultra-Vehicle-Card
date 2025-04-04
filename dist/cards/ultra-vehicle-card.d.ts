import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../types';
export declare class UltraVehicleCard extends LitElement {
    hass: HomeAssistant;
    private config;
    private _lastRenderTime;
    private _mapPopupData;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): {
        title: string;
        title_alignment: string;
        title_size: string;
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
    private _formatValue;
    private _handleImageError;
    private _renderBar;
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
    private _renderVehicleInfo;
    private _computeImageStyle;
    private _normalizeState;
    private _renderBarLabels;
    private _showMoreInfo;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleConfigChanged;
    private _handleForceGradientRefresh;
    private _refreshInterval;
    private _setupRefreshInterval;
    protected updated(changedProperties: Map<string, any>): void;
    private _evaluateTemplate;
    private _renderMapPopup;
    private _formatCoordinates;
    private _getEntityForCoordinates;
    private _isDarkMode;
    private _closeMapPopup;
}
