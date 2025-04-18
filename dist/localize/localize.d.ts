export declare function localize(key: string, lang: string, fallback?: string): string;
/**
 * Utility function to check if a translation key exists in the English translations
 * This is used during development to ensure all used keys have been added to the translation files
 *
 * @param key The translation key to check
 * @returns True if the key exists, false otherwise
 */
export declare function hasTranslation(key: string): boolean;
/**
 * Development helper function to log missing translations
 * Use during development to identify keys that need to be added to translations
 *
 * @param key The translation key being accessed
 * @param fallback The fallback text provided
 */
export declare function logMissingTranslation(key: string, fallback?: string): void;
/**
 * Enhanced localize function that also logs missing translations during development
 *
 * @param key The translation key
 * @param lang The current language
 * @param fallback Optional fallback text
 * @returns The translated string
 */
export declare function localizeWithLogging(key: string, lang: string, fallback?: string): string;
