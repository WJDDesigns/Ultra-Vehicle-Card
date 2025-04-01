/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. It will be called after it stops being called for `wait` ms.
 * This can be usefull for ResizeObservers for example.
 * @param func The function you want to debounce
 * @param wait Period to wait in ms
 * @param immediate Triggering on the leading edge instead of the trailing
 * @returns Debounced Function
 */
export declare const debounce: <T extends (...args: any[]) => unknown>(func: T, wait: number, immediate?: boolean) => T;
