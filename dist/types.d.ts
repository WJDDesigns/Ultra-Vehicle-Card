import { GradientStop } from './components/gradient-editor';
export interface UltraVehicleCardConfig {
    type?: string;
    title?: string;
    title_alignment?: 'left' | 'center' | 'right';
    title_size?: string | number;
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
    icon_text_position?: 'bottom' | 'top' | 'left' | 'right';
    icon_vertical_alignment?: 'top' | 'center' | 'bottom';
    icon_text_size?: 'small' | 'medium' | 'large';
    battery_level_entity?: string;
    show_battery?: boolean;
    battery_range_entity?: string;
    show_battery_range?: boolean;
    charging_status_entity?: string;
    show_charging_status?: boolean;
    charge_limit_entity?: string;
    show_charge_limit?: boolean;
    location_entity?: string;
    show_location?: boolean;
    mileage_entity?: string;
    show_mileage?: boolean;
    car_state_entity?: string;
    show_car_state?: boolean;
    bars?: BarConfig[];
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
    sections_columns?: {
        [key: string]: 'left' | 'right';
    };
    hidden_sections?: string[];
    section_styles?: SectionStyles;
}
export interface BarConfig {
    entity: string;
    limit_entity?: string;
    limit_indicator_color?: string;
    left_entity?: string;
    right_entity?: string;
    left_title?: string;
    right_title?: string;
    bar_color?: string;
    background_color?: string;
    border_color?: string;
    left_title_color?: string;
    left_text_color?: string;
    right_title_color?: string;
    right_text_color?: string;
    left_title_size?: string | number;
    left_text_size?: string | number;
    right_title_size?: string | number;
    right_text_size?: string | number;
    bar_size?: 'thin' | 'regular' | 'thick' | 'thiccc';
    show_left?: boolean;
    show_right?: boolean;
    alignment?: string;
    width?: string;
    use_gradient?: boolean;
    gradient_stops?: GradientStop[];
    gradient_display_mode?: 'full' | 'value_based';
    animation_entity?: string;
    animation_state?: string;
    animation_type?: string;
    action_animation_entity?: string;
    action_animation_state?: string;
    action_animation?: string;
}
export interface CustomCard {
    type: string;
    name: string;
    description: string;
}
export interface IconConfig {
    entity: string;
    name?: string;
    icon_inactive?: string;
    icon_active?: string;
    color_inactive?: string;
    color_active?: string;
    inactive_state?: string;
    active_state?: string;
    inactive_template_mode?: boolean;
    active_template_mode?: boolean;
    inactive_template?: string;
    active_template?: string;
    show_state?: boolean;
    show_name?: boolean;
    show_units?: boolean;
    show_icon_active?: boolean;
    show_icon_inactive?: boolean;
    on_click_action?: string;
    navigation_path?: string;
    text_position?: 'top' | 'bottom' | 'left' | 'right';
    vertical_alignment?: 'flex-start' | 'center' | 'flex-end';
    text_alignment?: 'left' | 'center' | 'right';
    icon_size?: string | number;
    text_size?: string | number;
    name_color_active?: string;
    name_color_inactive?: string;
    state_color_active?: string;
    state_color_inactive?: string;
    icon_background?: 'none' | 'circle' | 'square' | 'rounded-square';
    icon_background_color?: string;
    container_background?: 'none' | 'circle' | 'square' | 'rounded-square';
    container_background_color?: string;
    container_width?: number;
    draggable?: boolean;
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
export interface SectionStyleSettings {
    marginTop?: number;
    marginBottom?: number;
}
export interface SectionStyles {
    [sectionId: string]: SectionStyleSettings;
}
