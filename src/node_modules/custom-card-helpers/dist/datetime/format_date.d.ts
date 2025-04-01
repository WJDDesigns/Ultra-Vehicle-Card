import { FrontendLocaleData } from "../types";
/**
 * Formatting a Date to the dddd, mmmm yy format e.g. Tuesday, August 10
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns date string like "Tuesday, August 10"
 */
export declare const formatDateWeekday: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to the mmmm dd, yyyy format e.g. August 10, 2021
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns date string like "August 10, 2021"
 */
export declare const formatDate: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to the classic date format e.g. 10/08/2021
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns classic date format "10/08/2021"
 */
export declare const formatDateNumeric: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to just a month with days e.g. Aug 10
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns month and day like "Aug 10"
 */
export declare const formatDateShort: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to just a month with year e.g. August 2021
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns month and year like "August 2021"
 */
export declare const formatDateMonthYear: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to just a month e.g. August
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns the written out months of the date
 */
export declare const formatDateMonth: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
 * Formatting a Date to just a year e.g. 2021
 * @param dateObj The date to convert
 * @param locale The users's locale settings
 * @returns the year of the date in yyyy
 */
export declare const formatDateYear: (dateObj: Date, locale: FrontendLocaleData) => string;
