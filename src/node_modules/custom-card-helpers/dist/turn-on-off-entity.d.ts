import { HomeAssistant } from "./types";
export declare const turnOnOffEntity: (hass: HomeAssistant, entityId: string, turnOn?: boolean) => Promise<void>;
