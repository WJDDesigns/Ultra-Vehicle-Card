import { HassEntity } from "home-assistant-js-websocket";
import { LocalizeFunc } from "./translations/localize";
import { FrontendLocaleData } from "./types";
export declare const computeStateDisplay: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, state?: string | undefined) => string;
