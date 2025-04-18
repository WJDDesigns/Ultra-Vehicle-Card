import { HomeAssistant } from 'custom-card-helpers';
export interface ImageUploadResponse {
    path: string;
    file_id: string;
    success: boolean;
    error?: string;
    warning?: string;
}
/**
 * Uploads a file to the Home Assistant media source OR older image API.
 * @param hass The Home Assistant object.
 * @param file The file to upload.
 * @returns The path of the uploaded file (/api/image/serve/<id> format).
 * @throws An error if the upload fails or the response is invalid.
 */
export declare function uploadImage(hass: HomeAssistant, file: File): Promise<string>;
/**
 * Gets the full URL for an uploaded image
 * @param hass - Home Assistant instance
 * @param path - Image path returned from upload
 * @returns Full URL to the image
 */
export declare function getImageUrl(hass: HomeAssistant, path: string): string;
