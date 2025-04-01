import { FrontendLocaleData } from "../types";
/**
 * Formatting a dateObject to date with time e.g. August 9, 2021, 8:23 AM
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns month and day like "August 9, 2021, 8:23 AM"
 */
export declare const formatDateTime: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a dateObject to date with time e.g. August 9, 2021, 8:23:15 AM
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns month and day like "August 9, 2021, 8:23:15 AM"
 */
export declare const formatDateTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to just date with AM/PM time e.g. 9/8/2021, 8:23 AM
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns month and day like "9/8/2021, 8:23 AM"
 */
export declare const formatDateTimeNumeric: (dateObj: Date, locale: FrontendLocaleData) => string;
