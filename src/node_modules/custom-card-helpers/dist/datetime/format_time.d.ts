import { FrontendLocaleData } from "../types";
/**
 * 9:15 PM or 21:15
 * @param dateObj The time to convert
 * @param locale  The users's locale settings
 * @returns Reformated time in hh:mm
 */
export declare const formatTime: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
* 9:15:24 PM or 21:15:24
* @param dateObj The time to convert
* @param locale The users's locale settings
* @returns Reformated time in hh:mm:ss
*/
export declare const formatTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData) => string;
/**
* Tuesday 7:00 PM or Tuesday 19:00
* @param dateObj The datetime to convert
* @param locale The users's locale settings
* @returns Reformated weekday/time in dddd hh:mm
*/
export declare const formatTimeWeekday: (dateObj: Date, locale: FrontendLocaleData) => string;
