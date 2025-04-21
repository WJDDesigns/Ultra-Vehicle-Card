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
    private _draggedStopId;
    private _dropTargetId;
    private _dropTargetPosition;
    private readonly MAX_STOPS;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    private _getStopsSortedByPosition;
    private _generatePreviewGradient;
    private _handleColorChange;
    private _handlePositionInput;
    private _handleDuplicateClick;
    private _handleDeleteClick;
    private _handleDragStart;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _handleDragEnd;
    private _clearDropTargetStyles;
    private _cleanupDragState;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export declare class UltraVehicleGradientEditor extends GradientEditor {
}
