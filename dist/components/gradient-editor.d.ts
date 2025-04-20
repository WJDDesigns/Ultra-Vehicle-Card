import { LitElement } from 'lit';
export interface GradientStop {
    id: string;
    position: number;
    color: string;
}
export interface GradientConfig {
    stops: GradientStop[];
    displayMode: 'value_based' | 'full' | 'cropped';
}
export declare function generateGradientString(stops: GradientStop[]): string;
export declare function createLinearGradient(stops: GradientStop[], direction?: string): string;
export declare function getColorAtPosition(stops: GradientStop[], position: number): string;
export declare function createDefaultGradientStops(): GradientStop[];
export declare function createStopAtLargestGap(stops: GradientStop[]): GradientStop | null;
export declare class GradientEditor extends LitElement {
    stops: GradientStop[];
    key: number;
    private _isDragging;
    private _draggedStopId;
    private _lastRenderTime;
    private _boundPointerMove;
    private _boundPointerUp;
    disconnectedCallback(): void;
    private _getProcessedStops;
    updated(changedProperties: any): void;
    private _updateGradientPreview;
    static get styles(): import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    _handleNativeColorChange(e: InputEvent, stop: GradientStop): void;
    _handlePointerDown(e: PointerEvent, stop: GradientStop): void;
    _handlePointerMove(e: PointerEvent): void;
    _handlePointerUp(e: PointerEvent): void;
    private _endDrag;
    _handleDeleteClick(e: Event, stop: GradientStop): void;
    private _updateDraggedStop;
}
export declare class UltraVehicleGradientEditor extends GradientEditor {
    constructor();
    updated(changedProperties: any): void;
    render(): import("lit").TemplateResult<1>;
}
