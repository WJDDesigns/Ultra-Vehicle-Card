import { FrontendLocaleData } from "../types";
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
export declare const relativeTime: (from: Date, locale: FrontendLocaleData, to?: Date | undefined, includeTense?: boolean) => string;
