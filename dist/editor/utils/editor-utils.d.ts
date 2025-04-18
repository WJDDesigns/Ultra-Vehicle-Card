/**
 * Truncates long text with an ellipsis
 */
export declare function truncateText(text: string, maxLength?: number): string;
/**
 * Gets friendly name for an entity
 */
export declare function getFriendlyName(entityId: string, hass: any): string;
/**
 * Converts CSS variables to actual color values
 */
export declare function convertCssVariableToColor(colorValue: string): string;
/**
 * Gets entity state options for selection dropdowns
 */
export declare function getEntityStateOptions(entityId: string, hass: any): any;
/**
 * Sets a nested object value by dot notation path
 */
export declare function setNestedValue(obj: any, path: string, value: any): void;
/**
 * Gets a human-readable label for alignment values
 */
export declare function getAlignmentLabel(alignment: string): string;
/**
 * Gets a human-readable label for spacing values
 */
export declare function getSpacingValue(spacing: string): string;
/**
 * Formats a field name for display
 */
export declare function formatFieldName(name: string): string;
/**
 * Truncates a file path for display
 */
export declare function truncatePath(path: string, maxLength?: number): string;
/**
 * Generates CSS for a gradient based on gradient stops
 */
export declare function generateGradientPreview(stops: any[]): string;
