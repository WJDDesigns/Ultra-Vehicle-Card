import { HomeAssistant } from 'custom-card-helpers';
import { GradientStop } from '../components/gradient-editor';

export interface UltraVehicleCardConfig {
  type?: string;
  title?: string;
  title_alignment?: 'left' | 'center' | 'right';
  vehicle_image_type?: 'default' | 'upload' | 'url' | 'entity' | 'none';
  vehicle_image?: string;
  vehicle_image_entity?: string;
  vehicle_image_width?: number;
  default_vehicle_image?: string;
  status_image_type?: 'none' | 'upload' | 'entity';
  status_image?: string;
  status_image_entity?: string;
  status_image_trigger_entity?: string;
  layout_type?: 'single' | 'double';
  formatted_entities?: boolean;
  show_units?: boolean;

  // Battery section
  battery_level_entity?: string;
  show_battery?: boolean;
  battery_range_entity?: string;
  show_battery_range?: boolean;

  // Charging section
  charging_status_entity?: string;
  show_charging_status?: boolean;
  charge_limit_entity?: string;
  show_charge_limit?: boolean;

  // Vehicle info section
  location_entity?: string;
  show_location?: boolean;
  mileage_entity?: string;
  show_mileage?: boolean;
  car_state_entity?: string;
  show_car_state?: boolean;
  bars?: BarConfig[];

  // Action entity properties
  action_entity?: string;
  action_state?: string;
  action_image_type?: 'default' | 'upload' | 'url' | 'entity' | 'none';
  action_image?: string;
  action_image_entity?: string;
  action_image_width?: number;
  action_images?: {
    [entityId: string]: {
      [state: string]: string;
    };
  };

  icon_rows?: IconRowConfig[];

  vehicle_image_crop?: ImageCropSettings;
  action_image_crop?: ImageCropSettings;

  sections_order?: string[];

  sections_columns?: { [key: string]: 'left' | 'right' };
}

export interface BarConfig {
  entity: string;
  left_title?: string;
  left_entity?: string;
  right_title?: string;
  right_entity?: string;
  bar_color?: string;
  background_color?: string;
  border_color?: string;
  left_title_color?: string;
  left_text_color?: string;
  right_title_color?: string;
  right_text_color?: string;
  limit_entity?: string;
  limit_indicator_color?: string;
  bar_size?: 'thin' | 'regular' | 'thick' | 'thiccc';
  show_left?: boolean;
  show_right?: boolean;
  alignment?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  width?: '25' | '50' | '75' | '100'; // Percentage width of the bar
  use_gradient?: boolean;
  gradient_stops?: GradientStop[];
  gradient_display_mode?: 'full' | 'value_based'; // 'full' shows the entire gradient, 'value_based' shows a single color at the current value
  animation_entity?: string; // Entity that triggers animation
  animation_state?: string; // State that triggers the animation
  animation_type?: 'charging_lines' | 'fill_repeat' | 'pulse' | 'glow' | 'rainbow'; // Type of animation to display
}

export interface CustomCard {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
  version?: string;
}

export interface IconConfig {
  entity: string;
  icon_inactive: string;
  icon_active?: string;
  color_inactive: string;
  color_active?: string;
  inactive_state?: string;
  show_state?: boolean;
  show_name?: boolean;
  show_units?: boolean;
  name?: string;
  on_click_action?: string;
}

export interface IconRowConfig {
  id: string;
  width: string;
  alignment: string;
  spacing?: string;
  icons: IconConfig[];
}

export interface ImageCropSettings {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
