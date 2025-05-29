import { HomeAssistant } from 'custom-card-helpers';
/**
 * Extended HomeAssistant interface to store template string results
 * This is declared in the main file as well for backwards compatibility
 */
declare module 'custom-card-helpers' {
    interface HomeAssistant {
        __uvc_template_strings?: {
            [key: string]: string;
        };
    }
}
/**
 * Service class for handling template evaluation and subscription in Ultra Vehicle Card
 */
export declare class TemplateService {
    private hass;
    private _templateSubscriptions;
    private _templateResults;
    private _evaluationCache;
    private readonly CACHE_TTL;
    constructor(hass: HomeAssistant);
    /**
     * Get a specific template result
     */
    getTemplateResult(templateKey: string): boolean | undefined;
    /**
     * Check if a template subscription exists
     */
    hasTemplateSubscription(templateKey: string): boolean;
    /**
     * Get all template results as a map
     */
    getAllTemplateResults(): Map<string, boolean>;
    /**
     * Evaluates a template string and returns a boolean result
     * @param template The template string to evaluate
     * @returns Promise resolving to a boolean representing the template evaluation
     */
    evaluateTemplate(template: string): Promise<boolean>;
    /**
     * Subscribe to a template and store results for later use
     * @param template The template string to subscribe to
     * @param templateKey The unique key to identify this template subscription
     */
    subscribeToTemplate(template: string, templateKey: string, onResultChanged?: () => void): Promise<void>;
    /**
     * Helper method to parse template results consistently
     * @param result The raw result from the template evaluation
     * @param templateKey Optional template key for context
     * @returns Boolean interpretation of the template result
     */
    parseTemplateResult(result: any, templateKey?: string): boolean;
    /**
     * Unsubscribe from all template subscriptions
     */
    unsubscribeAllTemplates(): Promise<void>;
    /**
     * Update the Home Assistant reference
     */
    updateHass(hass: HomeAssistant): void;
}
