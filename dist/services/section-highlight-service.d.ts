export declare class SectionHighlightService {
    private static instance;
    private _highlightedSections;
    private _highlightTimeout;
    private _callbacks;
    private _isEnabled;
    static getInstance(): SectionHighlightService;
    private constructor();
    onHighlightChange(callback: () => void): () => void;
    getHighlightedSections(): string[];
    isHighlighted(sectionId: string): boolean;
    setEnabled(enabled: boolean): void;
    getHighlightClass(sectionId: string): string;
    highlightSections(sections: string[], clearAfterDelay?: boolean): void;
    clearHighlights(): void;
    getHighlightedSectionsForTab(tabId: string, config: any): string[];
    handleTabChange(tabId: string, config: any, helpHighlightEnabled?: boolean): void;
    private _handleHighlightEvent;
    private _handleClearEvent;
    private _notifyCallbacks;
    destroy(): void;
}
