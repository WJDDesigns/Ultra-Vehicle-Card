import { HASSDomEvent } from "./fire-event";
/**
 * Broadcast haptic feedback requests
 */
export declare type HapticType = "success" | "warning" | "failure" | "light" | "medium" | "heavy" | "selection";
declare global {
    interface HASSDomEvents {
        haptic: HapticType;
    }
    interface GlobalEventHandlersEventMap {
        haptic: HASSDomEvent<HapticType>;
    }
}
export declare const forwardHaptic: (hapticType: HapticType) => void;
