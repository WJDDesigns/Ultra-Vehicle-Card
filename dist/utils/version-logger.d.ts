/**
 * Logs the Ultra Vehicle Card version with styled console output
 * This function can be called from anywhere to display the version log
 *
 * Usage: logVersion();
 */
export declare function logVersion(): void;
/**
 * Alternative version logging with custom message
 * @param customMessage - Custom message to display instead of "Ultra Vehicle Card"
 */
export declare function logVersionWithMessage(customMessage: string): void;
/**
 * BACKUP COPY OF THE VERSION LOG CODE
 *
 * If the version log gets accidentally deleted, you can copy this code:
 *
 * console.info(
 *   `%c Ultra Vehicle Card %c ${VERSION} `,
 *   "color: white; background: #03a9f4; font-weight: 700; padding: 3px 2px 3px 3px; border-radius: 14px 0 0 14px;",
 *   "color: white; background: #555555; font-weight: 700; padding: 3px 2px 3px 3px; border-radius: 0 14px 14px 0;"
 * );
 *
 * Or simply import and call: logVersion();
 */
