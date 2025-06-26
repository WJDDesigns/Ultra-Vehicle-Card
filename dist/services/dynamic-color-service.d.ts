import { HomeAssistant } from 'custom-card-helpers';
/**
 * Extended HomeAssistant interface to store dynamic color template results
 */
declare module 'custom-card-helpers' {
    interface HomeAssistant {
        __uvc_dynamic_colors?: {
            [key: string]: string;
        };
    }
}
/**
 * Service class for handling dynamic color template evaluation in Ultra Vehicle Card
 */
export declare class DynamicColorService {
    private hass;
    private _colorSubscriptions;
    private _colorResults;
    private _colorEvaluationCache;
    private readonly CACHE_TTL;
    constructor(hass: HomeAssistant);
    /**
     * Get a specific color template result
     */
    getColorResult(templateKey: string): string | undefined;
    /**
     * Check if a color template subscription exists
     */
    hasColorSubscription(templateKey: string): boolean;
    /**
     * Get all color results as a map
     */
    getAllColorResults(): Map<string, string>;
    /**
     * Evaluates a color template string and returns a color value
     * @param template The template string to evaluate
     * @returns Promise resolving to a string representing the color value
     */
    evaluateColorTemplate(template: string): Promise<string>;
    /**
     * Subscribe to a color template and store results for later use
     * @param template The template string to subscribe to
     * @param templateKey The unique key to identify this template subscription
     * @param onResultChanged Optional callback when result changes
     */
    subscribeToColorTemplate(template: string, templateKey: string, onResultChanged?: () => void): Promise<void>;
    /**
     * Helper method to parse color template results
     * @param result The raw result from the template evaluation
     * @returns Processed color value
     */
    parseColorResult(result: any): string;
    /**
     * Basic validation to check if a string looks like a valid color
     * @param color The color string to validate
     * @returns True if it looks like a valid color
     */
    private isValidColor;
    /**
     * Unsubscribe from all color template subscriptions
     */
    unsubscribeAllColorTemplates(): Promise<void>;
    /**
     * Update the Home Assistant reference
     */
    updateHass(hass: HomeAssistant): void;
}
