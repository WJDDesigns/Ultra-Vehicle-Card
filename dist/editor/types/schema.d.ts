export interface SchemaBase {
    name?: string;
    label?: string;
    description?: string;
}
export interface SelectOption {
    value: string;
    label: string;
}
export interface SchemaSelector extends SchemaBase {
    selector: {
        text: Record<string, unknown>;
    } | {
        entity: Record<string, unknown>;
    } | {
        boolean: Record<string, unknown>;
    } | {
        select: {
            options: SelectOption[];
            mode?: string;
        };
    } | {
        color: {
            type: string;
        };
    } | {
        color_rgb: Record<string, unknown>;
    } | {
        number: {
            min?: number;
            max?: number;
            step?: number;
            unit?: string;
            mode?: string;
        };
    };
    description?: string;
}
export interface SchemaSectionHeader extends SchemaBase {
    type: 'section';
    label: string;
}
export type SchemaItem = SchemaSelector | SchemaSectionHeader;
export declare const IMAGE_TYPE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const LAYOUT_TYPE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const BAR_SIZE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const BAR_WIDTH_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const BAR_ANIMATION_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const ICON_PATH_EXPAND = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
export declare const ICON_PATH_COLLAPSE = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";
export declare const ICON_PATH_DELETE = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
export declare const ICON_MARGIN_TOP = "mdi:format-vertical-align-top";
export declare const ICON_MARGIN_BOTTOM = "mdi:format-vertical-align-bottom";
export declare const DEFAULT_COLORS: {
    bar_color: string;
    background_color: string;
    border_color: string;
    left_title_color: string;
    left_text_color: string;
    right_title_color: string;
    right_text_color: string;
    limit_indicator_color: string;
};
