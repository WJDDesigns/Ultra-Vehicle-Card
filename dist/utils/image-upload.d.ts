import { HomeAssistant } from 'custom-card-helpers';
export interface ImageUploadResponse {
    path: string;
    file_id: string;
    success: boolean;
    error?: string;
    warning?: string;
}
/**
 * Uploads an image to Home Assistant using the local file API
 * No base64 fallback - prevents performance issues with YAML
 * @param hass - Home Assistant instance
 * @param file - File to upload
 * @returns Promise with the upload response
 */
export declare function uploadImage(hass: HomeAssistant, file: File): Promise<ImageUploadResponse>;
/**
 * Gets the full URL for an uploaded image
 * @param hass - Home Assistant instance
 * @param path - Image path returned from upload
 * @returns Full URL to the image
 */
export declare function getImageUrl(hass: HomeAssistant, path: string): string;
