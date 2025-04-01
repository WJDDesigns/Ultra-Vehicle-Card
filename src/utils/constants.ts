// Path constants
export const DEFAULT_VEHICLE_IMAGE = '/hacsfiles/Ultra-Vehicle-Card/assets/default-car.png';

// Default configuration values and utilities can be added here
export const DEFAULT_CONFIG = {
  title: 'Vehicle Title',
  title_alignment: 'center',
  formatted_entities: true,
};

// Helper functions can be added here
export const truncateText = (text: string, maxLength: number = 15): string => {
  if (!text) return '';
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const hexToRgb = (colorValue: string) => {
  if (!colorValue) return '';
  if (colorValue.startsWith('#')) {
    const r = parseInt(colorValue.slice(1, 3), 16);
    const g = parseInt(colorValue.slice(3, 5), 16);
    const b = parseInt(colorValue.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
  return colorValue;
};
