import { GradientStop } from './components/gradient-editor';
export interface SectionCondition {
    type: 'none' | 'show' | 'hide';
    entity: string;
    state: string;
}
export interface SectionConditions {
    [sectionId: string]: SectionCondition;
}
export type UltraVehicleCardConfig = {
    type?: string;
    title?: string;
    title_alignment?: 'left' | 'center' | 'right';
    title_size?: string | number;
    title_color?: string;
    card_background?: string;
    vehicle_image_type?: 'default' | 'upload' | 'url' | 'entity' | 'none';
    vehicle_image?: string;
    vehicle_image_entity?: string;
    vehicle_image_width?: number;
    default_vehicle_image?: string;
    status_image_type?: 'none' | 'upload' | 'entity';
    status_image?: string;
    status_image_entity?: string;
    status_image_trigger_entity?: string;
    layout_type?: 'single' | 'double' | 'dashboard';
    column_width?: '50-50' | '30-70' | '70-30' | '40-60' | '60-40';
    formatted_entities?: boolean;
    show_units?: boolean;
    show_action_toasts?: boolean;
    top_view_side_margin?: number;
    top_view_middle_spacing?: number;
    top_view_vertical_spacing?: number;
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
    location_icon_color?: string;
    location_text_color?: string;
    location_text_size?: string | number;
    mileage_entity?: string;
    show_mileage?: boolean;
    mileage_icon_color?: string;
    mileage_text_color?: string;
    mileage_text_size?: string | number;
    car_state_entity?: string;
    show_car_state?: boolean;
    car_state_text_color?: string;
    car_state_text_size?: string | number;
    car_state_template_mode?: boolean;
    car_state_template?: string;
    show_info_icons?: boolean;
    bars?: BarConfig[];
    action_entity?: string;
    action_state?: string;
    action_image_type?: 'default' | 'upload' | 'url' | 'entity' | 'none';
    action_image?: string;
    action_image_entity?: string;
    action_image_width?: number;
    action_images?: ActionImageConfig[];
    action_image_priority?: 'priority' | 'newest';
    icon_rows?: IconRowConfig[];
    vehicle_image_crop?: ImageCropSettings;
    action_image_crop?: ImageCropSettings;
    sections_order?: string[];
    sections_columns?: SectionColumns;
    hidden_sections?: string[];
    section_styles?: SectionStyles;
    section_conditions?: SectionConditions;
    global_css?: string;
    section_breaks?: SectionBreakConfig[];
};
export type SectionColumns = {
    [sectionId: string]: 'right' | 'top' | 'top_middle' | 'left_middle' | 'right_middle' | 'bottom_middle' | 'bottom' | 'middle';
};
interface BarConfig {
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
    percentage_text_color?: string;
    left_title_size?: string | number;
    left_text_size?: string | number;
    right_title_size?: string | number;
    right_text_size?: string | number;
    percentage_text_size?: string | number;
    bar_size?: 'thin' | 'regular' | 'thick' | 'thiccc';
    bar_radius?: 'round' | 'square' | 'rounded-square';
    bar_style?: 'flat' | 'glossy' | 'embossed' | 'inset' | 'gradient' | 'neon' | 'outline' | 'glass' | 'metallic' | 'neumorphic' | 'dashed';
    show_left?: boolean;
    show_right?: boolean;
    show_percentage?: boolean;
    alignment?: string;
    width?: string;
    use_gradient?: boolean;
    gradient_stops?: GradientStop[];
    gradient_display_mode?: 'full' | 'value_based' | 'cropped';
    animation_entity?: string;
    animation_state?: string;
    animation_type?: string;
    action_animation_entity?: string;
    action_animation_state?: string;
    action_animation?: string;
    left_condition?: SectionCondition;
    right_condition?: SectionCondition;
    left_template_mode?: boolean;
    left_template?: string;
    right_template_mode?: boolean;
    right_template?: string;
    percentage_type?: 'entity' | 'difference';
    percentage_amount_entity?: string;
    percentage_total_entity?: string;
}
interface CustomCard {
    type: string;
    name: string;
    description: string;
    draggable?: boolean;
}
interface IconConfig {
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
    active_state_text?: string;
    inactive_state_text?: string;
    show_state?: boolean;
    show_name?: boolean;
    show_name_active?: boolean;
    show_name_inactive?: boolean;
    show_state_active?: boolean;
    show_state_inactive?: boolean;
    show_units?: boolean;
    show_icon_active?: boolean;
    show_icon_inactive?: boolean;
    use_entity_color_for_icon?: boolean;
    use_entity_color_for_icon_active?: boolean;
    use_entity_color_for_icon_inactive?: boolean;
    use_entity_color_for_icon_background?: boolean;
    use_entity_color_for_container_background?: boolean;
    on_click_action?: 'toggle' | 'more-info' | 'navigate' | 'url' | 'call-service' | 'perform-action' | 'show-location-map' | 'location-map' | 'voice-assistant' | 'trigger' | 'no-action';
    navigation_path?: string;
    url?: string;
    service?: string;
    service_data?: Record<string, any> | string;
    action?: Record<string, any> | string;
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
    active_icon_template?: string;
    inactive_icon_template?: string;
    active_state_template?: string;
    inactive_state_template?: string;
}
interface IconRowConfig {
    id: string;
    width?: string;
    alignment?: string;
    vertical_alignment?: string;
    spacing?: string;
    columns?: number;
    icons: IconConfig[];
}
interface ImageCropSettings {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
}
interface SectionStyleSettings {
    marginTop?: number;
    marginBottom?: number;
}
interface SectionStyles {
    [sectionId: string]: SectionStyleSettings;
}
interface ActionImageConfig {
    id: string;
    entity: string;
    state: string;
    image_type: 'upload' | 'url' | 'entity' | 'none';
    image?: string;
    image_entity?: string;
    image_width?: number;
    image_crop?: ImageCropSettings;
    priority?: number;
    template_mode?: boolean;
    template?: string;
}
interface SectionBreakConfig {
    id: string;
    break_style?: 'blank' | 'line' | 'double_line' | 'dotted' | 'double_dotted' | 'shadow';
    break_thickness?: number;
    break_width_percent?: number;
    break_color?: string;
}
export { BarConfig, CustomCard, IconConfig, IconRowConfig, ImageCropSettings, SectionStyleSettings, SectionStyles, GradientStop, ActionImageConfig, SectionBreakConfig, };
