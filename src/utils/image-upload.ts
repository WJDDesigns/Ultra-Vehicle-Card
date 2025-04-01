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
export async function uploadImage(hass: HomeAssistant, file: File): Promise<ImageUploadResponse> {
  try {
    console.log('[IMAGE UPLOAD DEBUG] Starting upload for file:', file.name, 'size:', file.size);

    // Try multiple upload methods to find one that works for this Home Assistant instance
    // Some versions use media_source, others use local_file/upload, and others use the older image/upload

    // First try: local_file/upload endpoint (most reliable)
    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('[IMAGE UPLOAD DEBUG] Attempting upload to /api/local_file/upload');

      const response = await fetch('/api/local_file/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${hass.auth.data.access_token}`,
        },
        body: formData,
      });

      console.log(
        '[IMAGE UPLOAD DEBUG] First attempt response status:',
        response.status,
        response.statusText
      );

      if (response.ok) {
        const result = await response.json();
        console.log('[IMAGE UPLOAD DEBUG] Upload successful:', result);

        // For local_file endpoint, the path format is typically "/local/filename.jpg"
        return {
          path: result.path || `/local/${file.name}`,
          file_id: '',
          success: true,
        };
      }

      throw new Error(`First attempt failed: ${response.statusText}`);
    } catch (firstError) {
      console.log(
        '[IMAGE UPLOAD DEBUG] First upload method failed, trying second method...',
        firstError
      );

      // Second try: image/upload endpoint (used in some Home Assistant versions)
      try {
        const formData = new FormData();
        formData.append('file', file);

        console.log('[IMAGE UPLOAD DEBUG] Attempting upload to /api/image/upload');

        const response = await fetch('/api/image/upload', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hass.auth.data.access_token}`,
          },
          body: formData,
        });

        console.log(
          '[IMAGE UPLOAD DEBUG] Second attempt response status:',
          response.status,
          response.statusText
        );

        if (response.ok) {
          const result = await response.json();
          console.log('[IMAGE UPLOAD DEBUG] Upload successful:', result);

          // The image/upload endpoint returns an object with id but no path
          // We need to construct a proper path from the id
          if (result.id && !result.path) {
            const path = `/api/image/serve/${result.id}`;
            console.log('[IMAGE UPLOAD DEBUG] Constructed path from ID:', path);

            return {
              path: path,
              file_id: result.id,
              success: true,
            };
          }

          return {
            path: result.path || '',
            file_id: result.id || '',
            success: true,
          };
        }

        throw new Error(`Second attempt failed: ${response.statusText}`);
      } catch (secondError) {
        console.log(
          '[IMAGE UPLOAD DEBUG] Second upload method failed, trying final method...',
          secondError
        );

        // Final try: media_source endpoint (newest, but may not be available)
        const formData = new FormData();
        formData.append('file', file);

        // Use the media API URL
        const url = `/api/media_source/upload_media`;
        const mediaContentId = 'media-source://media_source/local/';
        const urlWithParams = `${url}?media_content_id=${encodeURIComponent(mediaContentId)}`;

        console.log('[IMAGE UPLOAD DEBUG] Attempting final upload to:', urlWithParams);

        const response = await fetch(urlWithParams, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hass.auth.data.access_token}`,
          },
          body: formData,
        });

        console.log(
          '[IMAGE UPLOAD DEBUG] Final attempt response status:',
          response.status,
          response.statusText
        );

        if (!response.ok) {
          throw new Error(`All upload methods failed: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('[IMAGE UPLOAD DEBUG] Upload successful with final method:', result);

        // Convert media source URL to a direct local URL if needed
        let localPath = '';

        if (result.path?.startsWith('media-source://media_source/local/')) {
          localPath = '/local/' + result.path.replace('media-source://media_source/local/', '');
        } else {
          localPath = result.path || `/local/${file.name}`;
        }

        return {
          path: localPath,
          file_id: '',
          success: true,
        };
      }
    }
  } catch (error) {
    console.error('[IMAGE UPLOAD DEBUG] All upload methods failed:', error);
    return {
      path: '',
      file_id: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Gets the full URL for an uploaded image
 * @param hass - Home Assistant instance
 * @param path - Image path returned from upload
 * @returns Full URL to the image
 */
export function getImageUrl(hass: HomeAssistant, path: string): string {
  if (!path) {
    return '';
  }

  // Check if path is already a full URL
  if (path.startsWith('http')) {
    return path;
  }

  // Check if path is a base64 image
  if (path.startsWith('data:image/')) {
    return path;
  }

  // If path is a serve path, use it properly with authentication
  if (path.includes('/api/image/serve/')) {
    // Extract the image ID
    const matches = path.match(/\/api\/image\/serve\/([^\/]+)/);
    if (matches && matches[1]) {
      const imageId = matches[1];
      try {
        // Use Home Assistant's getters to access the properly authenticated URL
        // This should automatically handle the auth token
        const baseUrl = (hass as any).hassUrl ? (hass as any).hassUrl() : '';
        // Include /original to ensure we get the full image
        const finalUrl = `${baseUrl}api/image/serve/${imageId}/original`;
        return finalUrl;
      } catch (e) {
        console.error('Error generating authenticated URL:', e);
        // Fallback to direct path if we can't generate authenticated URL
        return path;
      }
    }
  }

  // Remove leading slash if present
  const relativePath = path.replace(/^\/+/, '');

  // Construct the full URL - we use the full base URL if available from hass
  let fullUrl = '';

  // Handle local paths
  if (relativePath.startsWith('local/') || path.includes('/local/')) {
    const baseUrl = (hass as any).hassUrl ? (hass as any).hassUrl() : '';
    const localPath = relativePath.replace(/^local\//, '');
    fullUrl = `${baseUrl}/local/${localPath}`;
  }
  // Default to image/serve path with authentication
  else {
    try {
      const baseUrl = (hass as any).hassUrl ? (hass as any).hassUrl() : '';
      // This should include the /original to get the full image and will be properly authenticated
      fullUrl = `${baseUrl}/api/image/serve/${relativePath}/original`;
    } catch (e) {
      console.error('Error generating authenticated URL, falling back:', e);
      // Fallback to basic URL
      const baseUrl = (hass as any).hassUrl ? (hass as any).hassUrl() : '';
      fullUrl = `${baseUrl}/api/image/serve/${relativePath}`;
    }
  }

  return fullUrl;
}
