import siteSettings from '../data/siteSettings.json';

/**
 * Converts a relative image path to a CDN URL if CDN is enabled
 * @param imagePath - Relative image path (e.g., "/images/image.jpg")
 * @returns CDN URL or original path
 */
export function getImageUrl(imagePath: string): string {
  const cdnEnabled = siteSettings.cdn?.enabled || false;
  const cdnBaseUrl = siteSettings.cdn?.baseUrl || '';
  
  if (cdnEnabled && cdnBaseUrl && imagePath.startsWith('/')) {
    // Remove leading slash, replace /images/ path with CDN base
    // CDN has images at root level, so we extract just the filename
    const filename = imagePath.replace('/images/', '');
    return `${cdnBaseUrl}/${filename}`;
  }
  
  return imagePath;
}

/**
 * Converts a relative image path to an absolute CDN URL
 * @param imagePath - Relative image path (e.g., "/images/image.jpg")
 * @param site - Site URL for fallback
 * @returns Absolute CDN URL or site URL
 */
export function getAbsoluteImageUrl(imagePath: string, site: string): string {
  const cdnEnabled = siteSettings.cdn?.enabled || false;
  const cdnBaseUrl = siteSettings.cdn?.baseUrl || '';
  
  if (cdnEnabled && cdnBaseUrl && imagePath.startsWith('/')) {
    // Remove leading slash, replace /images/ path with CDN base
    const filename = imagePath.replace('/images/', '');
    return `${cdnBaseUrl}/${filename}`;
  }
  
  return new URL(imagePath, site).toString();
}
