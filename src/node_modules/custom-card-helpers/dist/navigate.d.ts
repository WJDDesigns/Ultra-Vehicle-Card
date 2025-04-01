declare global {
    interface HASSDomEvents {
        "location-changed": {
            replace: boolean;
        };
    }
}
export declare const navigate: (_node: any, path: string, replace?: boolean) => void;
