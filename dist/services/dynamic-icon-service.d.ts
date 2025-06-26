import { HomeAssistant } from 'custom-card-helpers';
/**
 * Extended HomeAssistant interface to store dynamic icon template results
 */
declare module 'custom-card-helpers' {
    interface HomeAssistant {
        __uvc_dynamic_icons?: {
            [key: string]: string;
        };
    }
}
/**
 * Service class for handling dynamic icon template evaluation in Ultra Vehicle Card
 */
export declare class DynamicIconService {
    private hass;
    private _iconSubscriptions;
    private _iconResults;
    private _iconEvaluationCache;
    private readonly CACHE_TTL;
    constructor(hass: HomeAssistant);
    /**
     * Get a specific icon template result
     */
    getIconResult(templateKey: string): string | undefined;
    /**
     * Check if an icon template subscription exists
     */
    hasIconSubscription(templateKey: string): boolean;
    /**
     * Get all icon results as a map
     */
    getAllIconResults(): Map<string, string>;
    /**
     * Evaluates an icon template string and returns an icon name
     * @param template The template string to evaluate
     * @returns Promise resolving to a string representing the icon name
     */
    evaluateIconTemplate(template: string): Promise<string>;
    /**
     * Subscribe to an icon template and store results for later use
     * @param template The template string to subscribe to
     * @param templateKey The unique key to identify this template subscription
     * @param onResultChanged Optional callback when result changes
     */
    subscribeToIconTemplate(template: string, templateKey: string, onResultChanged?: () => void): Promise<void>;
    /**
     * Helper method to parse icon template results
     * @param result The raw result from the template evaluation
     * @returns Processed icon name
     */
    parseIconResult(result: any): string;
    /**
     * Basic validation to check if a string looks like a valid icon name
     * @param icon The icon string to validate
     * @returns True if it looks like a valid icon
     */
    private isValidIcon;
    /**
     * Helper method to get icon based on entity state and attributes
     * This can be used within templates for dynamic icon selection
     * @param entityId The entity ID to get icon for
     * @returns Default icon based on entity domain and device class
     */
    getEntityBasedIcon(entityId: string): string;
    /**
     * Unsubscribe from all icon template subscriptions
     */
    unsubscribeAllIconTemplates(): Promise<void>;
    /**
     * Update the Home Assistant reference
     */
    updateHass(hass: HomeAssistant): void;
}
