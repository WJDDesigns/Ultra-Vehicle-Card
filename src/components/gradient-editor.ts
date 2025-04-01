import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface GradientStop {
  id: string;
  position: number;
  color: string;
}

export interface GradientConfig {
  stops: GradientStop[];
  displayMode: 'value_based' | 'full';
}

// Utility function to generate a CSS gradient string from gradient stops
export function generateGradientString(stops: GradientStop[]): string {
  if (!stops || !Array.isArray(stops) || stops.length === 0) {
    return ''; // Return empty string if stops is null, not an array, or empty
  }

  const validStops = stops.filter(
    stop =>
      stop &&
      typeof stop.color === 'string' &&
      stop.color.trim() !== '' &&
      typeof stop.position === 'number' &&
      stop.position >= 0 &&
      stop.position <= 100
  );

  if (validStops.length === 0) {
    return ''; // Return empty string if no valid stops
  }

  const sortedStops = [...validStops].sort((a, b) => a.position - b.position);

  // Create CSS gradient string
  return sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ');
}

// Utility function to create a CSS linear-gradient value
export function createLinearGradient(
  stops: GradientStop[],
  direction: string = 'to right'
): string {
  const gradientStops = generateGradientString(stops);
  if (!gradientStops) return '';
  return `linear-gradient(${direction}, ${gradientStops})`;
}

// Utility to generate a color from a gradient based on a percentage value
export function getColorAtPosition(stops: GradientStop[], position: number): string {
  if (!stops || !Array.isArray(stops) || stops.length < 2) return '#ffffff';

  // Ensure position is between 0 and 100
  position = Math.max(0, Math.min(100, position));

  // Sort stops by position
  const sortedStops = [...stops].sort((a, b) => a.position - b.position);

  // Find the stops that surround the desired position
  let startStop: GradientStop | null = null;
  let endStop: GradientStop | null = null;

  for (let i = 0; i < sortedStops.length - 1; i++) {
    if (position >= sortedStops[i].position && position <= sortedStops[i + 1].position) {
      startStop = sortedStops[i];
      endStop = sortedStops[i + 1];
      break;
    }
  }

  // If we didn't find surrounding stops, use the first or last stop
  if (!startStop || !endStop) {
    if (sortedStops.length === 0) return '#ffffff';
    if (position <= sortedStops[0].position) {
      return sortedStops[0].color || '#ffffff';
    } else {
      return sortedStops[sortedStops.length - 1].color || '#ffffff';
    }
  }

  // Calculate the interpolation factor
  const range = endStop.position - startStop.position;
  const factor = range === 0 ? 0 : (position - startStop.position) / range;

  // Parse the colors
  const startColor = parseColor(startStop.color);
  const endColor = parseColor(endStop.color);

  if (!startColor || !endColor) {
    return startStop.color || '#ffffff'; // Fallback to start color if parsing failed
  }

  // Interpolate between colors
  const r = Math.round(startColor.r + factor * (endColor.r - startColor.r));
  const g = Math.round(startColor.g + factor * (endColor.g - startColor.g));
  const b = Math.round(startColor.b + factor * (endColor.b - startColor.b));

  return `rgb(${r}, ${g}, ${b})`;
}

// Helper function to parse colors in various formats
function parseColor(color: string): { r: number; g: number; b: number } | null {
  // Check for hex format
  const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hexMatch) {
    return {
      r: parseInt(hexMatch[1], 16),
      g: parseInt(hexMatch[2], 16),
      b: parseInt(hexMatch[3], 16),
    };
  }

  // Check for rgb format
  const rgbMatch = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
    };
  }

  return null;
}

// Utility to create default gradient stops
export function createDefaultGradientStops(): GradientStop[] {
  // Ignore generateId, use fixed IDs 1 and 2
  return [
    { id: '1', position: 0, color: '#ff0000' }, // Red at 0%
    { id: '2', position: 100, color: '#00ff00' }, // Green at 100%
  ];
}

// Create a new gradient stop at the largest gap
export function createStopAtLargestGap(stops: GradientStop[]): GradientStop | null {
  // Return null if max stops reached

  // Sort stops by position
  const sortedStops = [...stops].sort((a, b) => a.position - b.position);

  // Check if max stops reached (7 total)
  if (sortedStops.length >= 7) {
    console.warn('[GradientEditor] Max stops reached (7). Cannot add more.');
    return null;
  }

  // Find the next available ID from 3 to 7
  const existingIds = new Set(sortedStops.map(stop => stop.id));
  let nextId = -1;
  for (let i = 3; i <= 7; i++) {
    if (!existingIds.has(String(i))) {
      nextId = i;
      break;
    }
  }

  if (nextId === -1) {
    console.warn('[GradientEditor] Could not find an available ID between 3 and 7.');
    return null; // Should not happen if length check is correct
  }

  // Find largest gap
  let maxGap = 0;
  let gapPosition = 50;
  let startStopIndex = 0;

  for (let i = 0; i < sortedStops.length - 1; i++) {
    const gap = sortedStops[i + 1].position - sortedStops[i].position;
    if (gap > maxGap) {
      maxGap = gap;
      gapPosition = sortedStops[i].position + gap / 2;
      startStopIndex = i;
    }
  }

  // Calculate a color that's between the two surrounding stops
  const startColor = parseColor(sortedStops[startStopIndex].color) || { r: 255, g: 255, b: 0 };
  const endColor = parseColor(sortedStops[startStopIndex + 1].color) || { r: 0, g: 255, b: 0 };

  // Interpolate to get a nice transition color
  const factor = 0.5; // Middle point between the two stops
  const r = Math.round(startColor.r + factor * (endColor.r - startColor.r));
  const g = Math.round(startColor.g + factor * (endColor.g - startColor.g));
  const b = Math.round(startColor.b + factor * (endColor.b - startColor.b));

  // Convert to hex for consistent format
  const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  // Create new stop
  return {
    id: String(nextId),
    position: Math.round(gapPosition),
    color: color,
  };
}

@customElement('gradient-editor')
export class GradientEditor extends LitElement {
  @property({ type: Array }) stops: GradientStop[] = [];
  @property({ type: Number }) key: number = 0; // Add key property to force re-renders

  // --- State for Pointer Dragging ---
  @state() private _isDragging = false;
  @state() private _draggedStopId: string | null = null;
  // ------------------------------------

  private _lastRenderTime: number = 0;

  // --- Event Listeners bound once ---
  private _boundPointerMove = this._handlePointerMove.bind(this);
  private _boundPointerUp = this._handlePointerUp.bind(this);
  // ----------------------------------

  disconnectedCallback() {
    // Clean up listeners if the element is disconnected while dragging
    this.removeEventListener('pointermove', this._boundPointerMove);
    this.removeEventListener('pointerup', this._boundPointerUp);
    document.removeEventListener('pointermove', this._boundPointerMove);
    document.removeEventListener('pointerup', this._boundPointerUp);
    document.removeEventListener('pointercancel', this._boundPointerUp);
    super.disconnectedCallback();
  }

  // Validate and preprocess stops before rendering
  private _getProcessedStops(): GradientStop[] {
    // Filter out invalid stops
    const validStops = (this.stops || []).filter(
      stop =>
        stop &&
        typeof stop.id === 'string' &&
        typeof stop.position === 'number' &&
        typeof stop.color === 'string'
    );

    // Sort by position
    const sortedStops = [...validStops].sort((a, b) => a.position - b.position);

    // Log details about the processed stops
    console.log(
      '[GradientEditor] Processing stops array:',
      validStops.length === this.stops?.length
        ? 'All stops are valid'
        : `Found ${validStops.length} valid stops out of ${this.stops?.length || 0}`
    );

    if (sortedStops.length < 2) {
      console.warn(
        '[GradientEditor] Not enough valid stops, showing defaults with just boundary stops'
      );
      // Use default stops with just 0% red and 100% green
      return [
        { id: 'default-start', position: 0, color: '#ff0000' },
        { id: 'default-end', position: 100, color: '#00ff00' },
      ];
    }

    return sortedStops;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    // Log updates to help with debugging
    if (changedProperties.has('stops') || changedProperties.has('key')) {
      const now = Date.now();
      const timeSinceLastRender = now - this._lastRenderTime;
      this._lastRenderTime = now;

      console.log(
        `[GradientEditor] Updated with ${this.stops?.length || 0} stops, key=${this.key}, time since last render: ${timeSinceLastRender}ms`
      );

      // Ensure the gradient preview is updated
      this._updateGradientPreview();
    }
  }

  private _updateGradientPreview() {
    try {
      // Update the gradient preview element directly
      const gradientPreview = this.shadowRoot?.querySelector('.gradient-preview') as HTMLElement;
      if (gradientPreview) {
        const stops = this._getProcessedStops();
        const gradientString = generateGradientString(stops);
        gradientPreview.style.background = `linear-gradient(to right, ${gradientString})`;
      }
    } catch (error) {
      console.error('[GradientEditor] Error updating gradient preview:', error);
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        width: 100%;
        --gradient-height: 32px;
        --handle-size: 20px;
        --handle-border-width: 2px;
      }

      /* Style for the hidden color input */
      .native-color-input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
        opacity: 0;
      }

      .gradient-container {
        position: relative;
        width: 100%;
        height: var(--gradient-height);
        border-radius: 4px;
        margin-top: 30px;
        margin-bottom: 60px;
        border: 1px solid var(--divider-color, #999);
        overflow: visible;
      }

      .gradient-preview {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }

      .stop-container {
        position: absolute;
        top: 0;
        height: 100%;
        width: var(--handle-size);
        margin-left: calc(var(--handle-size) / -2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1; /* Base z-index */
      }

      /* Apply higher z-index when being dragged */
      .stop-container.dragging {
        z-index: 10;
      }

      .drag-line {
        position: absolute;
        top: -2px;
        bottom: 0px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 13px;
        background-color: rgb(0 0 0 / 55%);
        cursor: grab;
        z-index: 10;
        transition: background-color 0.2s;
        border-radius: 10%;
        border: solid white 2px;
      }
      .drag-line:hover {
        background-color: var(--primary-color);
      }
      .drag-line:active {
        cursor: grabbing;
        background-color: var(--primary-color);
      }

      .color-stop-circle {
        position: absolute;
        top: calc(var(--gradient-height) + 10px);
        left: 50%;
        transform: translateX(-50%);
        width: var(--handle-size);
        height: var(--handle-size);
        border-radius: 50%;
        cursor: pointer;
        border: var(--handle-border-width) solid white;
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.3),
          0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 11;
      }
      .color-stop-circle.active {
        box-shadow:
          0 0 0 2px var(--primary-color),
          0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .handle-position {
        position: absolute;
        top: calc(var(--gradient-height) + 10px + var(--handle-size) + 5px);
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        white-space: nowrap;
        color: var(--primary-text-color);
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        pointer-events: none;
        z-index: 12;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 2px 4px;
        border-radius: 4px;
      }

      .delete-button {
        position: absolute;
        bottom: calc(
          var(--gradient-height) + var(--handle-size) + 15px
        ); /* Position above circle */
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        background-color: var(--error-color, #ff0000);
        color: white;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 12;
        opacity: 0; /* Default hidden */
        pointer-events: none; /* Default no interaction */
        /* transition: opacity 0.2s ease-in-out; */ /* REMOVED transition to prevent flashing */
      }

      /* Add hover effect for delete button */
      .stop-container:hover .delete-button {
        /* Opacity is controlled by inline style based on boundary/count */
      }

      .stop-actions {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        gap: 8px;
      }

      .gradient-info {
        display: flex;
        justify-content: center;
        font-size: 14px;
        margin-top: 8px;
        color: var(--secondary-text-color);
      }

      .gradient-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-top: 24px;
        padding: 0 16px;
        flex-wrap: wrap;
      }

      ha-button.add-button,
      ha-button.reset-button {
        /* Existing styles */
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: white;
        display: inline-flex; /* Ensure flex layout */
        align-items: center; /* Vertically center flex items */
      }

      ha-button.reset-button {
        --mdc-theme-primary: var(--error-color);
      }

      ha-button ha-icon[slot='icon'] {
        color: var(--mdc-theme-on-primary);
        vertical-align: middle; /* Align icon vertically with text */
      }
    `;
  }

  render() {
    try {
      const processedStops = this._getProcessedStops();
      const gradientString = generateGradientString(processedStops);

      console.log(`[GradientEditor] Rendering ${processedStops.length} stops with key ${this.key}`);

      // Track positions for label adjustments
      const positionMap = new Map();
      processedStops.forEach(stop => {
        if (stop && typeof stop.position === 'number') {
          positionMap.set(stop.id, stop.position);
        }
      });

      // Find closely positioned stops for vertical offset
      const closeStops = new Set();
      const sortedStops = [...processedStops].sort((a, b) => a.position - b.position);
      for (let i = 0; i < sortedStops.length - 1; i++) {
        const current = sortedStops[i];
        const next = sortedStops[i + 1];
        if (next.position - current.position < 10) {
          closeStops.add(current.id);
          closeStops.add(next.id);
        }
      }

      return html`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, ${gradientString})"
          ></div>
          ${processedStops.map((stop, index) => {
            if (!stop || typeof stop.position !== 'number' || !stop.id || !stop.color) {
              return html``; // Skip invalid stops
            }

            const isBoundaryStop = stop.position === 0 || stop.position === 100;
            const isDragging = this._isDragging && this._draggedStopId === stop.id;

            // Determine if this stop's label needs vertical offset based on proximity
            const isClose = closeStops.has(stop.id);
            const isOddIndex = index % 2 === 1;
            const labelOffset = isClose
              ? isOddIndex
                ? 'calc(var(--gradient-height) + 10px + var(--handle-size) + 25px)'
                : 'calc(var(--gradient-height) + 10px + var(--handle-size) + 5px)'
              : 'calc(var(--gradient-height) + 10px + var(--handle-size) + 5px)';

            // Apply higher z-index to stops being dragged
            const zIndex = isDragging ? 100 : 10 + index;

            return html`
              <div
                class="stop-container ${isDragging ? 'dragging' : ''}"
                style="left: ${stop.position}%; z-index: ${zIndex};"
                data-stop-id="${stop.id}"
              >
                <div
                  class="delete-button"
                  style="opacity: ${!isBoundaryStop && processedStops.length > 2
                    ? 1
                    : 0}; pointer-events: ${!isBoundaryStop && processedStops.length > 2
                    ? 'auto'
                    : 'none'}"
                  @click=${e => this._handleDeleteClick(e, stop)}
                  title="Delete Stop"
                >
                  ✕
                </div>
                <div
                  class="drag-line"
                  @pointerdown=${(e: PointerEvent) => this._handlePointerDown(e, stop)}
                  title="${isBoundaryStop ? 'Fixed position stop' : 'Drag to move'}"
                  style="${isBoundaryStop ? 'cursor: not-allowed;' : ''}${isDragging
                    ? 'cursor: grabbing;'
                    : ''}"
                  data-stop-id="${stop.id}"
                ></div>
                <label
                  class="color-stop-circle"
                  style="background-color: ${stop.color};"
                  for="color-input-${stop.id}"
                >
                  <input
                    type="color"
                    id="color-input-${stop.id}"
                    class="native-color-input"
                    .value=${stop.color}
                    @input=${(e: InputEvent) => this._handleNativeColorChange(e, stop)}
                  />
                </label>
                <div class="handle-position" style="top: ${labelOffset};">${stop.position}%</div>
              </div>
            `;
          })}
        </div>
        <div class="gradient-info">
          Click on a color stop to change its color. Drag the intermediate stops to adjust position.
        </div>
        <div class="gradient-buttons">
          <ha-button class="add-button" @click=${this._handleAddStop}>
            <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
            Add Stop
          </ha-button>
          <ha-button class="reset-button" @click=${this._handleResetStops}>
            <ha-icon icon="mdi:refresh" slot="icon"></ha-icon>
            Reset
          </ha-button>
        </div>
      `;
    } catch (error) {
      console.error('[GradientEditor] Error in render:', error);
      // Return a minimal fallback UI
      return html`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, #ff0000, #00ff00)"
          ></div>
        </div>
        <div class="gradient-info">Error rendering gradient editor. Try resetting.</div>
        <div class="gradient-buttons">
          <ha-button class="reset-button" @click=${this._handleResetStops}>
            <ha-icon icon="mdi:refresh" slot="icon"></ha-icon>
            Reset
          </ha-button>
        </div>
      `;
    }
  }

  _handleNativeColorChange(e: InputEvent, stop: GradientStop) {
    try {
      if (!e || !e.target || !stop || !stop.id) {
        console.warn('[GradientEditor] Invalid color change event or stop', e, stop);
        return;
      }

      e.stopPropagation();
      const input = e.target as HTMLInputElement;
      const newColor = input.value;

      // Dispatch new event with stopId and newColor
      const event = new CustomEvent('stop-color-change', {
        detail: { stopId: stop.id, newColor: newColor },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    } catch (error) {
      console.error('[GradientEditor] Error in color change handler:', error);
    }
  }

  _handlePointerDown(e: PointerEvent, stop: GradientStop) {
    try {
      // Prevent dragging of boundary stops (0% and 100%)
      if (stop.position === 0 || stop.position === 100) {
        return;
      }

      e.preventDefault(); // Prevent default actions like text selection

      // Verify that the stop exists in our current stops list
      const stopExists = this.stops?.some(s => s?.id === stop?.id);
      if (!stopExists) {
        console.warn(
          `[GradientEditor] Cannot drag stop ${stop?.id} - it no longer exists in stops array`
        );
        return;
      }

      // Store information about the drag start
      const dragLine = e.currentTarget as HTMLElement;

      // Check if the element is still connected to the DOM
      if (!dragLine || !dragLine.isConnected) {
        console.warn('[GradientEditor] Cannot start drag - element is detached from DOM');
        return;
      }

      // Ensure shadowRoot is available
      if (!this.shadowRoot) {
        console.warn('[GradientEditor] Cannot start drag - shadowRoot not available');
        return;
      }

      try {
        dragLine.setPointerCapture(e.pointerId);
      } catch (err) {
        console.warn('[GradientEditor] Failed to set pointer capture:', err);
        // Continue anyway, we'll use document listeners as fallback
      }

      this._isDragging = true;
      this._draggedStopId = stop.id;

      // Add event listeners to both the element and document for better reliability
      try {
        dragLine.addEventListener('pointermove', this._boundPointerMove);
        dragLine.addEventListener('pointerup', this._boundPointerUp, { once: true });
        dragLine.addEventListener('pointercancel', this._boundPointerUp, { once: true });
      } catch (err) {
        console.warn('[GradientEditor] Failed to add element event listeners:', err);
      }

      // Also add document-level listeners as fallback for when element listeners fail
      document.addEventListener('pointermove', this._boundPointerMove);
      document.addEventListener('pointerup', this._boundPointerUp, { once: true });
      document.addEventListener('pointercancel', this._boundPointerUp, { once: true });

      console.log(`[GradientEditor] PointerDown on stop ${stop.id}`);
    } catch (error) {
      console.error('[GradientEditor] Error in pointer down handler:', error);
      this._endDrag(e); // Ensure cleanup happens on error
    }
  }

  _handlePointerMove(e: PointerEvent) {
    try {
      if (!this._isDragging || !this._draggedStopId || !this.shadowRoot) return;

      e.preventDefault();

      // Verify the stop still exists in our current stops list
      const stopBeingDragged = this.stops?.find(s => s?.id === this._draggedStopId);
      if (!stopBeingDragged) {
        console.warn(
          `[GradientEditor] Stop ${this._draggedStopId} no longer exists - canceling drag`
        );
        this._endDrag(e);
        return;
      }

      // Find the gradient container - either through the event target or directly from shadowRoot
      let gradientContainer: Element | null = this.shadowRoot.querySelector('.gradient-container');
      let stopContainer: Element | null = null;

      if (gradientContainer) {
        stopContainer =
          Array.from(gradientContainer.querySelectorAll('.stop-container')).find(
            el => (el as HTMLElement)?.dataset?.stopId === this._draggedStopId
          ) || null;
      }

      // If we couldn't find the necessary elements, cancel the drag
      if (!gradientContainer || !stopContainer || !(stopContainer as HTMLElement).isConnected) {
        console.warn(
          '[GradientEditor] Could not find required elements during drag or stop container disconnected - canceling'
        );
        this._endDrag(e);
        return;
      }

      const rect = gradientContainer.getBoundingClientRect();

      // Calculate the new position based on cursor
      const newPosition = Math.min(99, Math.max(1, ((e.clientX - rect.left) / rect.width) * 100));
      const roundedPosition = Math.round(newPosition);

      // Update the DOM if the elements are still connected
      if (stopContainer.isConnected) {
        const stopContainerEl = stopContainer as HTMLElement;
        stopContainerEl.style.left = `${roundedPosition}%`; // Update style directly
        const positionLabel = stopContainerEl.querySelector('.handle-position');
        if (positionLabel) {
          positionLabel.textContent = `${roundedPosition}%`;
        }
      }

      // Update Gradient Preview - safely
      this._updateDraggedStop(this._draggedStopId, roundedPosition);
    } catch (error) {
      console.error('[GradientEditor] Error in pointer move handler:', error);
      this._endDrag(e); // Ensure cleanup happens on error
    }
  }

  _handlePointerUp(e: PointerEvent) {
    try {
      if (!this._isDragging || !this._draggedStopId) return;

      e.preventDefault();

      // Store draggedStopId for use after reset
      const draggedStopId = this._draggedStopId;

      // Verify the stop still exists in our current stops list
      const stopBeingDragged = this.stops?.find(s => s?.id === draggedStopId);

      // --- CRITICAL: Clean up drag state BEFORE attempting position calculation ---
      // This prevents race conditions if the DOM changes during calculations
      const wasDragging = this._isDragging; // Store state before cleanup
      this._endDrag(e);
      // --- End Critical Section ---

      if (!stopBeingDragged) {
        console.warn(`[GradientEditor] Stop ${draggedStopId} no longer exists after drag ended`);
        // No need to dispatch event if the stop disappeared
        return;
      }

      if (!wasDragging) {
        console.log('[GradientEditor] Drag already ended, skipping pointer up logic.');
        return; // Avoid processing if drag was already ended
      }

      // Get final position - multiple fallback approaches
      let finalPosition = 0;
      let foundPosition = false;

      // Try calculating from event position relative to container FIRST
      if (this.shadowRoot) {
        const gradientContainer = this.shadowRoot.querySelector('.gradient-container');
        if (gradientContainer) {
          const rect = gradientContainer.getBoundingClientRect();
          // Ensure rect has valid dimensions
          if (rect.width > 0) {
            finalPosition = Math.min(
              99,
              Math.max(1, Math.round(((e.clientX - rect.left) / rect.width) * 100))
            );
            foundPosition = true;
            console.log(`[GradientEditor] Calculated final position from event: ${finalPosition}`);
          } else {
            console.warn(
              '[GradientEditor] Gradient container has zero width, cannot calculate position from event.'
            );
          }
        }
      }

      // If calculation from event failed, try finding the DOM element's style (less reliable)
      if (!foundPosition && this.shadowRoot) {
        const stopContainer = Array.from(this.shadowRoot.querySelectorAll('.stop-container')).find(
          el => (el as HTMLElement)?.dataset?.stopId === draggedStopId
        ) as HTMLElement | null;

        if (stopContainer && stopContainer.isConnected) {
          const leftStyle = stopContainer.style.left;
          if (leftStyle) {
            const numValue = parseFloat(leftStyle);
            if (!isNaN(numValue)) {
              finalPosition = Math.round(numValue);
              foundPosition = true;
              console.log(`[GradientEditor] Got final position from style: ${finalPosition}`);
            }
          }
        }
      }

      // Last resort: use the last known position from the stops array (least reliable)
      if (!foundPosition) {
        const currentStop = this.stops?.find(s => s?.id === draggedStopId);
        if (currentStop && typeof currentStop.position === 'number') {
          finalPosition = currentStop.position;
          console.log(
            `[GradientEditor] Using last known stop position as fallback: ${finalPosition}`
          );
          foundPosition = true; // Mark as found even if it's a fallback
        } else {
          console.warn(
            `[GradientEditor] Could not determine final position for stop ${draggedStopId}. Aborting update.`
          );
          return; // Abort if no position could be determined
        }
      }

      // Clamp final position again just in case
      finalPosition = Math.min(99, Math.max(1, finalPosition));

      console.log(
        `[GradientEditor] Finalizing PointerUp for stop ${draggedStopId}, final position: ${finalPosition}`
      );

      // Create final stops array - use defensive copies to avoid reference issues
      const newStops = this.stops?.map(s =>
        s?.id === draggedStopId ? { ...s, position: finalPosition } : { ...s }
      );

      // Ensure newStops is valid before proceeding
      if (!newStops || !Array.isArray(newStops)) {
        console.error('[GradientEditor] Failed to create new stops array after drag.');
        return;
      }

      const sortedStops = [...newStops].sort((a, b) => (a?.position ?? 0) - (b?.position ?? 0));

      // Dispatch event with the updated gradient
      try {
        this.dispatchEvent(
          new CustomEvent('gradient-changed', {
            detail: { stops: sortedStops },
            bubbles: true,
            composed: true,
          })
        );
        console.log(
          '[GradientEditor] Dispatched gradient-changed event after pointer up finalized'
        );
      } catch (err) {
        console.error('[GradientEditor] Error dispatching gradient-changed event:', err);
      }
    } catch (error) {
      console.error('[GradientEditor] Error in pointer up handler:', error);
      this._endDrag(e); // Ensure cleanup happens on error
    }
  }

  // Helper method to safely end dragging and clean up state
  private _endDrag(e: PointerEvent | null) {
    // Allow null event for calls outside handlers
    try {
      // First, check if we are actually dragging to avoid redundant calls
      if (!this._isDragging && !this._draggedStopId) {
        // console.log('[GradientEditor] _endDrag called but not dragging.');
        return;
      }

      // Reset state variables immediately
      const wasDragging = this._isDragging;
      const previousDraggedStopId = this._draggedStopId;

      this._isDragging = false;
      this._draggedStopId = null;

      // Log that dragging ended *before* removing listeners
      if (wasDragging) {
        console.log(
          `[GradientEditor] Ending drag for stop ${previousDraggedStopId}. Removing listeners.`
        );
      }

      // Then clean up event listeners

      // 1. Clean up element-level event listeners if pointer event and target exist
      if (e?.currentTarget && typeof (e.currentTarget as HTMLElement).isConnected !== 'undefined') {
        const element = e.currentTarget as HTMLElement;

        // Check connection again before removing listeners/capture
        if (element.isConnected) {
          try {
            // Use hasPointerCapture to avoid errors if capture was already released
            if (e.pointerId && element.hasPointerCapture(e.pointerId)) {
              element.releasePointerCapture(e.pointerId);
            }
          } catch (err) {
            console.warn('[GradientEditor] Error releasing pointer capture:', err);
          }

          try {
            element.removeEventListener('pointermove', this._boundPointerMove);
            element.removeEventListener('pointerup', this._boundPointerUp);
            element.removeEventListener('pointercancel', this._boundPointerUp);
          } catch (err) {
            console.warn('[GradientEditor] Error removing element listeners:', err);
          }
        } else {
          // console.log('[GradientEditor] Element disconnected during _endDrag, skipping element listener removal.');
        }
      }

      // 2. Always clean up document-level listeners to be safe
      try {
        document.removeEventListener('pointermove', this._boundPointerMove);
        document.removeEventListener('pointerup', this._boundPointerUp);
        document.removeEventListener('pointercancel', this._boundPointerUp);
      } catch (docErr) {
        console.warn('[GradientEditor] Error removing document listeners:', docErr);
      }

      // Schedule a safe update only if the element is still connected
      // Use requestAnimationFrame for better timing relative to browser repaints
      requestAnimationFrame(() => {
        if (this.isConnected) {
          // console.log('[GradientEditor] Requesting update after drag end.');
          this.requestUpdate();
        } else {
          // console.log('[GradientEditor] Element disconnected, skipping final update request.');
        }
      });
    } catch (err) {
      console.error('[GradientEditor] Error in _endDrag:', err);

      // Final fallback - ensure document listeners are removed *again* just in case
      try {
        document.removeEventListener('pointermove', this._boundPointerMove);
        document.removeEventListener('pointerup', this._boundPointerUp);
        document.removeEventListener('pointercancel', this._boundPointerUp);
      } catch (e) {
        console.warn(
          '[GradientEditor] Error during fallback document listener removal in _endDrag catch block:',
          e
        );
      }

      // Reset state again in case of error during cleanup
      this._isDragging = false;
      this._draggedStopId = null;
    }
  }

  _handleDeleteClick(e: Event, stop: GradientStop) {
    e.stopPropagation();

    // Add null check for stop
    if (!stop || !stop.id) {
      console.warn('[GradientEditor] Attempted to delete invalid stop:', stop);
      return;
    }

    // Prevent deletion of boundary stops (0% and 100%)
    if (stop.position === 0 || stop.position === 100) {
      console.warn('[GradientEditor] Cannot delete boundary stops at 0% or 100%');
      return;
    }

    // Add null check for this.stops
    if (!this.stops || this.stops.length <= 2) {
      console.warn('[GradientEditor] Cannot delete stop - minimum 2 stops required');
      return;
    }

    // If we're trying to delete a stop that's currently being dragged, end the dragging operation
    if (this._isDragging && this._draggedStopId === stop.id) {
      console.log(
        `[GradientEditor] Deleting stop ${stop.id} which was being dragged. Ending drag first.`
      );
      this._endDrag(null); // Pass null as event is not directly from pointer
    }

    // Log the stop being deleted for debugging
    console.log(`[GradientEditor] Attempting to delete stop with ID: ${stop.id}`);
    console.log(`[GradientEditor] Current stops:`, JSON.stringify(this.stops));

    this.dispatchEvent(
      new CustomEvent('gradient-stop-delete', {
        detail: { stopId: stop.id },
        bubbles: true,
        composed: true,
      })
    );
  }

  _handleAddStop() {
    this.dispatchEvent(
      new CustomEvent('gradient-stop-add', {
        bubbles: true,
        composed: true,
      })
    );
  }

  _handleResetStops() {
    this.dispatchEvent(
      new CustomEvent('gradient-stop-reset', {
        bubbles: true,
        composed: true,
      })
    );
  }

  // New helper method to update gradient during drag with error handling
  private _updateDraggedStop(stopId: string, newPosition: number) {
    try {
      if (!stopId || typeof newPosition !== 'number') {
        return;
      }

      // Create new stops array with updated position
      const newStops = this.stops.map(s => (s.id === stopId ? { ...s, position: newPosition } : s));

      // Update the gradient preview immediately
      const gradientPreview = this.shadowRoot?.querySelector('.gradient-preview') as HTMLElement;
      if (gradientPreview) {
        const sortedStops = [...newStops].sort((a, b) => a.position - b.position);
        const gradientString = generateGradientString(sortedStops);
        if (gradientString) {
          gradientPreview.style.background = `linear-gradient(to right, ${gradientString})`;
        }
      }
    } catch (error) {
      console.error('[GradientEditor] Error updating dragged stop:', error);
    }
  }
}
