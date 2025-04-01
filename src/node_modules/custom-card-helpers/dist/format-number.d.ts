import { HassEntity } from "home-assistant-js-websocket";
import { FrontendLocaleData } from "./types";
/**
 * Returns true if the entity is considered numeric based on the attributes it has
 * @param stateObj The entity state object
 */
export declare const isNumericState: (stateObj: HassEntity) => boolean;
export declare const numberFormatToLocale: (localeOptions: FrontendLocaleData) => string | string[] | undefined;
export declare const round: (value: number, precision?: number) => number;
/**
 * Formats a number based on the specified language with thousands separator(s) and decimal character for better legibility.
 * @param num The number to format
 * @param locale The user-selected language and number format, from `hass.locale`
 * @param options Intl.NumberFormatOptions to use
 */
export declare const formatNumber: (num: string | number, localeOptions?: FrontendLocaleData | undefined, options?: Intl.NumberFormatOptions | undefined) => string;
