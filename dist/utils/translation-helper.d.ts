/**
 * Translation Helper Utilities
 *
 * This file provides utilities to help developers manage translations
 * in the Ultra Vehicle Card project. These functions are intended
 * for development use only and will not be included in production builds.
 */
/**
 * Adds a new translation entry to the collection.
 * This is used during development to mark strings that need to be added
 * to the translation files.
 *
 * @param fullKey The full dot-notation key for the translation (e.g., 'editor.vehicle_info.title')
 * @param text The English text for this translation
 * @param description Optional description to explain the context of this string
 */
export declare function addTranslation(fullKey: string, text: string, description?: string): void;
/**
 * Logs all collected translation entries that need to be added to the translation files.
 * Call this function in development to see all the translations that need to be added.
 */
export declare function logNewTranslations(): void;
/**
 * Clears all collected translation entries.
 * Call this after you've added the translations to the files.
 */
export declare function clearNewTranslations(): void;
