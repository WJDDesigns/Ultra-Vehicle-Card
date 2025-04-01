import { LitElement, html, css, nothing, render as litRender } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import {
  UltraVehicleCardConfig,
  BarConfig,
  IconConfig,
  IconRowConfig,
  ImageCropSettings,
} from '../types';
import '../components/entity-picker';
import memoizeOne from 'memoize-one';
import '../components/color-picker';
import '../components/gradient-editor';
import {
  GradientStop,
  createDefaultGradientStops,
  createStopAtLargestGap,
} from '../components/gradient-editor';
import { mdiDelete } from '@mdi/js';

// Define schema types
interface SchemaBase {
  name?: string;
  label?: string;
  description?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

interface SchemaSelector extends SchemaBase {
  selector:
    | { text: Record<string, unknown> }
    | { entity: Record<string, unknown> }
    | { boolean: Record<string, unknown> }
    | { select: { options: SelectOption[]; mode?: string } }
    | { color: { type: string } }
    | { color_rgb: Record<string, unknown> }
    | { number: { min?: number; max?: number; step?: number; unit?: string; mode?: string } };
  description?: string;
}

interface SchemaSectionHeader extends SchemaBase {
  type: 'section';
  label: string;
}

type SchemaItem = SchemaSelector | SchemaSectionHeader;

// Schema definitions
const IMAGE_TYPE_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'default', label: 'Default' },
  { value: 'upload', label: 'Upload' },
  { value: 'url', label: 'URL' },
  { value: 'entity', label: 'Entity' },
];

const LAYOUT_TYPE_OPTIONS = [
  { value: 'single', label: 'Single Column' },
  { value: 'double', label: 'Two Columns' },
];

const BAR_SIZE_OPTIONS = [
  { value: 'thin', label: 'Thin' },
  { value: 'regular', label: 'Regular' },
  { value: 'thick', label: 'Thick' },
  { value: 'thiccc', label: 'Extra Thick' },
];

// Define bar width options
const BAR_WIDTH_OPTIONS = [
  { value: '100', label: '100% (Full Width)' },
  { value: '75', label: '75% Width' },
  { value: '50', label: '50% Width' },
  { value: '25', label: '25% Width' },
];

// Define animation options for bars
const BAR_ANIMATION_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'charging-lines', label: 'Charging (Diagonal Lines)' },
  { value: 'pulse', label: 'Pulse' },
  { value: 'blinking', label: 'Blinking' },
  { value: 'bouncing', label: 'Bouncing' },
  { value: 'glow', label: 'Glow' },
  { value: 'rainbow', label: 'Rainbow' },
  { value: 'bubbles', label: 'Bubbles' },
  { value: 'fill', label: 'Fill' },
];

// Define constants for the SVG paths to prevent typos and inconsistencies
const ICON_PATH_EXPAND = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';
const ICON_PATH_COLLAPSE = 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z';
const ICON_PATH_DELETE =
  'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';

// Define default colors
const DEFAULT_COLORS = {
  bar_color: '#3498db',
  background_color: '#e0e0e0',
  border_color: '#cccccc',
  left_title_color: 'var(--text-primary-color, #777777)',
  left_text_color: 'var(--text-primary-color, #000000)',
  right_title_color: 'var(--text-primary-color, #777777)',
  right_text_color: 'var(--text-primary-color, #000000)',
  limit_indicator_color: '#ff0000',
};

// Update the DEFAULT_BAR_CONFIG with proper typing
const DEFAULT_BAR_CONFIG: BarConfig = {
  entity: '',
  left_title: '',
  left_entity: '',
  right_title: '',
  right_entity: '',
  bar_color: DEFAULT_COLORS.bar_color,
  background_color: DEFAULT_COLORS.background_color,
  border_color: DEFAULT_COLORS.border_color,
  left_title_color: DEFAULT_COLORS.left_title_color,
  left_text_color: DEFAULT_COLORS.left_text_color,
  right_title_color: DEFAULT_COLORS.right_title_color,
  right_text_color: DEFAULT_COLORS.right_text_color,
  limit_indicator_color: DEFAULT_COLORS.limit_indicator_color,
  // Default sizes
  left_title_size: 14,
  left_text_size: 16,
  right_title_size: 14,
  right_text_size: 16,
  // End default sizes
  bar_size: 'regular',
  show_left: true,
  show_right: true,
  alignment: 'space-between',
  width: '100',
  use_gradient: false,
  gradient_display_mode: 'value_based', // Default gradient display mode
  gradient_stops: [
    { id: '1', position: 0, color: '#ff0000' }, // Red at 0%
    { id: '2', position: 100, color: '#00ff00' }, // Green at 100%
  ] as GradientStop[],
  animation_entity: '',
  animation_state: '',
  animation_type: 'none',
  // Keep old properties for backward compatibility
  action_animation_entity: '',
  action_animation_state: '',
  action_animation: 'none',
};

// Default configuration for clean YAML output reference
const DEFAULT_CONFIG = {
  vehicle_image_type: 'none',
  status_image_type: 'none',
  layout_type: 'single',
  formatted_entities: false,
  vehicle_image_width: 100, // Set default image width to 100%
  action_image_width: 100, // Set default action image width to 100% as well
  title_size: 22, // Default title size
  show_units: true, // Default show units enabled
};

// Compute schema for the settings tab with proper types
const computeSettingsSchema = memoizeOne((imageType): any[] => {
  const schema: any[] = [
    {
      name: 'title',
      selector: { text: {} },
      label: 'Card Title',
    },
    {
      name: 'vehicle_image_type',
      selector: {
        select: {
          options: IMAGE_TYPE_OPTIONS,
          mode: 'dropdown',
        },
      },
      label: 'Vehicle Image Type',
    },
    // Only add URL field if URL type is selected
    ...(imageType === 'url'
      ? [
          {
            name: 'vehicle_image',
            selector: { text: {} },
            label: 'Image URL',
          },
        ]
      : []),
    // Only add entity picker if entity type is selected
    ...(imageType === 'entity'
      ? [
          {
            name: 'vehicle_image_entity',
            selector: { entity: {} },
            label: 'Image Entity',
          },
        ]
      : []),
    // Only add upload field if upload type is selected
    ...(imageType === 'upload'
      ? [
          {
            name: 'vehicle_image_upload',
            selector: { text: {} },
            label: 'Vehicle Image Upload',
            description: 'Select an image to upload to Home Assistant',
          },
        ]
      : []),
    {
      name: 'layout_type',
      selector: {
        select: {
          options: LAYOUT_TYPE_OPTIONS,
          mode: 'dropdown',
        },
      },
      label: 'Layout Style',
    },
    {
      name: 'formatted_entities',
      selector: { boolean: {} },
      label: 'Format Entities',
      description:
        'Clean up entity values by rounding numbers, replacing underscores with spaces, capitalizing words, and adding commas to large numbers.',
    },
    {
      name: 'show_units',
      selector: { boolean: {} },
      label: 'Show Units of Measurement',
      description: 'Display units, currencies, and other formatting from entity attributes.',
    },
  ];

  // Vehicle info fields
  schema.push(
    {
      type: 'section',
      label: 'Vehicle Information',
    },
    {
      name: 'location_entity',
      selector: { entity: {} },
      label: 'Location Entity',
      description: 'Select the entity that provides the current location of your vehicle.',
    },
    {
      name: 'show_location',
      selector: { boolean: {} },
      label: 'Show Location',
    },
    {
      name: 'mileage_entity',
      selector: { entity: {} },
      label: 'Mileage Entity',
      description:
        'Select the entity that represents the total mileage or odometer reading of your vehicle.',
    },
    {
      name: 'show_mileage',
      selector: { boolean: {} },
      label: 'Show Mileage',
    },
    {
      name: 'car_state_entity',
      selector: { entity: {} },
      label: 'Car State Entity',
      description:
        'Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging).',
    },
    {
      name: 'show_car_state',
      selector: { boolean: {} },
      label: 'Show Car State',
    }
  );

  return schema;
});

// Compute schema for a bar with proper types
const computeBarSchema = memoizeOne((index): any[] => {
  return [
    {
      name: `bars.${index}.entity`,
      selector: { entity: {} },
      label: 'Bar Percentage Entity',
      description:
        'Select an entity that returns a percentage value (0-100). This controls the fill of the bar.',
    },
    {
      name: `bars.${index}.limit_entity`,
      selector: { entity: {} },
      label: 'Limit Entity (optional)',
      description: 'Optional: Add a limit indicator on the bar (e.g., charge limit for EV).',
    },
    {
      name: `bars.${index}.bar_size`,
      selector: {
        select: {
          options: BAR_SIZE_OPTIONS,
          mode: 'dropdown',
        },
      },
      label: 'Bar Size',
      description: 'Select the height of the progress bar.',
    },
    {
      name: `bars.${index}.width`,
      selector: {
        select: {
          options: BAR_WIDTH_OPTIONS,
          mode: 'dropdown',
        },
      },
      label: 'Bar Width',
      description:
        'Select the width of the bar. Multiple bars with partial widths will be placed side by side if possible.',
    },
    {
      type: 'section',
      label: 'Left Side',
    },
    {
      name: `bars.${index}.left_title`,
      selector: { text: {} },
      label: 'Left Title',
    },
    {
      name: `bars.${index}.left_entity`,
      selector: { entity: {} },
      label: 'Left Entity',
    },
    {
      name: `bars.${index}.left_title_size`,
      selector: { number: { mode: 'box', unit: 'px' } },
      label: 'Left Title Size',
      description: 'Size of the left title text (default: 14px).',
    },
    {
      name: `bars.${index}.left_text_size`,
      selector: { number: { mode: 'box', unit: 'px' } },
      label: 'Left Value Size',
      description: 'Size of the left entity value text (default: 16px).',
    },
    {
      type: 'section',
      label: 'Right Side',
    },
    {
      name: `bars.${index}.right_title`,
      selector: { text: {} },
      label: 'Right Title',
    },
    {
      name: `bars.${index}.right_entity`,
      selector: { entity: {} },
      label: 'Right Entity',
    },
    {
      name: `bars.${index}.right_title_size`,
      selector: { number: { mode: 'box', unit: 'px' } },
      label: 'Right Title Size',
      description: 'Size of the right title text (default: 14px).',
    },
    {
      name: `bars.${index}.right_text_size`,
      selector: { number: { mode: 'box', unit: 'px' } },
      label: 'Right Value Size',
      description: 'Size of the right entity value text (default: 16px).',
    },
    {
      type: 'section',
      label: 'Colors',
    },
    {
      name: `bars.${index}.bar_color`,
      selector: { color_rgb: {} },
      label: 'Bar Color',
      description: `Default: ${DEFAULT_COLORS.bar_color}`,
    },
    {
      name: `bars.${index}.background_color`,
      selector: { color_rgb: {} },
      label: 'Background Color',
      description: `Default: ${DEFAULT_COLORS.background_color}`,
    },
    {
      name: `bars.${index}.border_color`,
      selector: { color_rgb: {} },
      label: 'Border Color',
      description: `Default: ${DEFAULT_COLORS.border_color}`,
    },
    {
      name: `bars.${index}.left_title_color`,
      selector: { color_rgb: {} },
      label: 'Left Title Color',
      description: `Default: ${DEFAULT_COLORS.left_title_color}`,
    },
    {
      name: `bars.${index}.left_text_color`,
      selector: { color_rgb: {} },
      label: 'Left Value Color',
      description: `Default: ${DEFAULT_COLORS.left_text_color}`,
    },
    {
      name: `bars.${index}.right_title_color`,
      selector: { color_rgb: {} },
      label: 'Right Title Color',
      description: `Default: ${DEFAULT_COLORS.right_title_color}`,
    },
    {
      name: `bars.${index}.right_text_color`,
      selector: { color_rgb: {} },
      label: 'Right Value Color',
      description: `Default: ${DEFAULT_COLORS.right_text_color}`,
    },
  ];
});

// Add these constants for icon configuration

const ICON_ROW_WIDTH_OPTIONS = [
  { value: '100', label: '100% (Full Width)' },
  { value: '75', label: '75% Width' },
  { value: '50', label: '50% Width' },
  { value: '25', label: '25% Width' },
];

// Update the icon row alignment selector with better display values and documentation
const ICON_ALIGNMENT_OPTIONS = [
  { value: 'flex-start', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'flex-end', label: 'Right' },
  { value: 'space-between', label: 'Space Between' },
  { value: 'space-around', label: 'Space Around' },
  { value: 'space-evenly', label: 'Space Evenly' },
];

const ICON_SPACING_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

const ICON_ACTION_OPTIONS = [
  { value: 'toggle', label: 'Toggle Entity' },
  { value: 'more-info', label: 'Show More Info' },
  { value: 'call-service', label: 'Call Service' },
  { value: 'none', label: 'No Action' },
];

// Add these title alignment options near the top of the file with other constants
const TITLE_ALIGNMENT_OPTIONS = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'right', label: 'Right' },
];

// Add these new constants for icon text alignment and size options
const ICON_TEXT_POSITION_OPTIONS = [
  { value: 'bottom', label: 'Bottom' },
  { value: 'top', label: 'Top' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
];

const ICON_VERTICAL_ALIGNMENT_OPTIONS = [
  { value: 'flex-start', label: 'Top' },
  { value: 'center', label: 'Center' },
  { value: 'flex-end', label: 'Bottom' },
];

const ICON_SIZE_OPTIONS = [
  { value: '16', label: '16px (Small)' },
  { value: '24', label: '24px (Medium)' },
  { value: '32', label: '32px (Large)' },
  { value: '40', label: '40px (Extra Large)' },
];

const TEXT_SIZE_OPTIONS = [
  { value: '0.75', label: '12px (Small)' },
  { value: '0.9', label: '14px (Medium)' },
  { value: '1.1', label: '18px (Large)' },
  { value: '1.4', label: '22px (Extra Large)' },
];

// Add these new constants for icon background options
const ICON_BACKGROUND_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'circle', label: 'Circle' },
  { value: 'square', label: 'Square' },
  { value: 'rounded-square', label: 'Rounded Square' },
];

@customElement('ultra-vehicle-card-editor')
export class UltraVehicleCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() private config!: UltraVehicleCardConfig;
  @state() private activeTab: string = 'settings';
  @state() private _showEntityList: boolean = false;
  @state() private _activeField: string = '';
  @state() private _entityFilter: string = '';
  @state() private _entities: any[] = [];
  @state() private _expandedBar: number | null = null;
  @state() private _preventExpandCollapse: boolean = false;
  @state() private _draggedBarIndex: number | null = null;
  @state() private _dropTargetIndex: number | null = null;
  @state() private _expandedIconRow: string | null = null;
  @state() private _expandedIcon: { rowId: string; iconIndex: number } | null = null;
  @state() private _draggedIconRow: string | null = null;
  @state() private _draggedIcon: { rowId: string; iconIndex: number } | null = null;
  @state() private _dropTargetRow: string | null = null;
  @state() private _dropTargetIcon: { rowId: string; iconIndex: number } | null = null;
  @state() private _cropperActive: boolean = false;
  @state() private _cropperImage: string = '';
  @state() private _cropperTargetField: string = '';
  @state() private _vehicleCropExpanded: boolean = false;
  @state() private _actionCropExpanded: boolean = false;
  @property() private _draggedBar = null;
  @property() private _dropTargetBar = null;
  @property() private _dropTargetIconRow = null;
  @state() private _draggedSection: number | null = null;
  private _editorVersion = '1.2.0-debug'; // Add version to help with debugging
  @state() private _activeIconTabs: Record<string, string> = {};
  @state() private _activeBarTabs: Record<number, string> = {}; // State for bar tabs
  @state() private _gradientEditorKeys: Record<number, number> = {}; // State for gradient editor keys

  // CRITICAL FIX: Create a robust persistence mechanism for stop positions
  // This ensures positions are preserved even if the component re-renders
  private _latestStopPositions: Record<string, number> = {};

  setConfig(config: UltraVehicleCardConfig) {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    console.log(`[EDITOR VERSION] Ultra Vehicle Card Editor v${this._editorVersion}`);

    // Create a new config object with our defaults
    this.config = {
      // Default values
      vehicle_image_type: 'default',
      status_image_type: 'none',
      layout_type: 'single',
      formatted_entities: false,
      show_location: true,
      show_mileage: true,
      show_car_state: true,
      sections_order: ['title', 'image', 'info'],
      bars: [],
      icon_rows: [],
      // Override with user config
      ...config,
    };

    // If existing sections_order doesn't have info, add it after image
    if (this.config.sections_order && !this.config.sections_order.includes('info')) {
      // Create a new array to avoid modifying a potentially frozen array
      const newSectionsOrder = [...this.config.sections_order];

      const imageIndex = newSectionsOrder.indexOf('image');
      if (imageIndex !== -1) {
        // Add info after image
        newSectionsOrder.splice(imageIndex + 1, 0, 'info');
      } else {
        // Add info at the beginning if image not found
        newSectionsOrder.unshift('info');
      }

      // Update the config with the new array
      this.config.sections_order = newSectionsOrder;
    }

    // If width values are missing, set defaults separately
    if (this.config.vehicle_image_width === undefined) {
      this.config.vehicle_image_width = 100;
    }

    if (this.config.action_image_width === undefined) {
      this.config.action_image_width = 100;
    }

    // Convert existing bar and icon sections to individual sections if needed
    this._migrateToIndividualSections();
  }

  private _migrateToIndividualSections() {
    if (!this.config.sections_order) return;

    // Make a copy of the sections order to modify
    let updatedSectionsOrder = [...this.config.sections_order];
    let changed = false;

    // Handle 'bars' section
    const barsIndex = updatedSectionsOrder.indexOf('bars');
    if (barsIndex !== -1 && this.config.bars && this.config.bars.length > 0) {
      // Check if there are already bar_X sections - if so, don't migrate
      const hasIndividualBarSections = updatedSectionsOrder.some(section =>
        section.startsWith('bar_')
      );

      if (!hasIndividualBarSections) {
        // Replace 'bars' with individual bar sections
        const barSections = this.config.bars.map((_, idx) => `bar_${idx}`);
        updatedSectionsOrder.splice(barsIndex, 1, ...barSections);
        changed = true;
      }
    }

    // Handle 'icons' section
    const iconsIndex = updatedSectionsOrder.indexOf('icons');
    if (iconsIndex !== -1 && this.config.icon_rows && this.config.icon_rows.length > 0) {
      // Check if there are already icon_row_X sections - if so, don't migrate
      const hasIndividualIconSections = updatedSectionsOrder.some(section =>
        section.startsWith('icon_row_')
      );

      if (!hasIndividualIconSections) {
        // Replace 'icons' with individual icon row sections
        const iconRowSections = this.config.icon_rows.map(row => `icon_row_${row.id}`);
        updatedSectionsOrder.splice(iconsIndex, 1, ...iconRowSections);
        changed = true;
      }
    }

    // Update config if changes were made
    if (changed) {
      this.config.sections_order = updatedSectionsOrder;
    }
  }

  private async handleFileUpload(ev: Event, configKey: string) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      try {
        console.log('[UPLOAD] Starting direct API upload for', configKey);

        // Create form data for upload
        const formData = new FormData();
        formData.append('file', file);

        // Upload to Home Assistant
        const response = await fetch('/api/image_upload', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.hass.auth.data.access_token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload image: ${response.statusText}`);
        }

        const result = await response.json();

        if (!result || !result.path) {
          throw new Error('Invalid response from server: missing path');
        }

        console.log('[UPLOAD] Image uploaded successfully, path:', result.path);

        // Update the config with the image path
        this._updateConfig({
          [configKey]: result.path,
        });

        // Show success message
        alert(`Image uploaded successfully and stored as path (not base64)`);
      } catch (error) {
        console.error('[UPLOAD] Error:', error);
        alert(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        // Clear input
        input.value = '';
      }
    }
  }

  private _getCleanConfig(): UltraVehicleCardConfig {
    // Create a shallow copy of the config
    const cleanConfig = { ...this.config };

    // Process bars to ensure they're ordered consistently and have clean properties
    if (cleanConfig.bars && cleanConfig.bars.length > 0) {
      cleanConfig.bars = cleanConfig.bars.map(bar => {
        // Create a new bar object, initially partial
        const cleanBar: Partial<BarConfig> = {
          entity: bar.entity, // Required
          // Only include properties if they differ from defaults
          bar_size: bar.bar_size !== DEFAULT_BAR_CONFIG.bar_size ? bar.bar_size : undefined,
          width: bar.width !== DEFAULT_BAR_CONFIG.width ? bar.width : undefined,
          bar_color: bar.bar_color !== DEFAULT_COLORS.bar_color ? bar.bar_color : undefined,
          background_color:
            bar.background_color !== DEFAULT_COLORS.background_color
              ? bar.background_color
              : undefined,
          border_color:
            bar.border_color !== DEFAULT_COLORS.border_color ? bar.border_color : undefined,
          left_title_color:
            bar.left_title_color !== DEFAULT_COLORS.left_title_color
              ? bar.left_title_color
              : undefined,
          left_text_color:
            bar.left_text_color !== DEFAULT_COLORS.left_text_color
              ? bar.left_text_color
              : undefined,
          right_title_color:
            bar.right_title_color !== DEFAULT_COLORS.right_title_color
              ? bar.right_title_color
              : undefined,
          right_text_color:
            bar.right_text_color !== DEFAULT_COLORS.right_text_color
              ? bar.right_text_color
              : undefined,
          limit_indicator_color:
            bar.limit_indicator_color !== DEFAULT_COLORS.limit_indicator_color
              ? bar.limit_indicator_color
              : undefined,
          // Add new size properties with defaults check
          left_title_size:
            bar.left_title_size !== DEFAULT_BAR_CONFIG.left_title_size
              ? bar.left_title_size
              : undefined,
          left_text_size:
            bar.left_text_size !== DEFAULT_BAR_CONFIG.left_text_size
              ? bar.left_text_size
              : undefined,
          right_title_size:
            bar.right_title_size !== DEFAULT_BAR_CONFIG.right_title_size
              ? bar.right_title_size
              : undefined,
          right_text_size:
            bar.right_text_size !== DEFAULT_BAR_CONFIG.right_text_size
              ? bar.right_text_size
              : undefined,
          // End new size properties
          alignment: bar.alignment !== DEFAULT_BAR_CONFIG.alignment ? bar.alignment : undefined,
          show_left: bar.show_left !== DEFAULT_BAR_CONFIG.show_left ? bar.show_left : undefined,
          show_right: bar.show_right !== DEFAULT_BAR_CONFIG.show_right ? bar.show_right : undefined,
        };

        // Add optional text/entity properties only if they exist
        if (bar.limit_entity) cleanBar.limit_entity = bar.limit_entity;
        if (bar.left_title) cleanBar.left_title = bar.left_title;
        if (bar.left_entity) cleanBar.left_entity = bar.left_entity;
        if (bar.right_title) cleanBar.right_title = bar.right_title;
        if (bar.right_entity) cleanBar.right_entity = bar.right_entity;

        // *** Add Gradient properties only if use_gradient is true ***
        if (bar.use_gradient === true) {
          // Explicitly check for true
          cleanBar.use_gradient = true;
          // Only include mode if it's not the default ('value_based')
          if (bar.gradient_display_mode !== DEFAULT_BAR_CONFIG.gradient_display_mode) {
            cleanBar.gradient_display_mode = bar.gradient_display_mode;
          }
          // Always include stops if gradient mode is on and stops exist
          if (bar.gradient_stops && bar.gradient_stops.length > 0) {
            cleanBar.gradient_stops = bar.gradient_stops;
          }
        } // If use_gradient is false (default), it will be omitted correctly.

        // *** Add Animation properties if animation_type is defined and not 'none' ***
        if (bar.animation_type && bar.animation_type !== 'none') {
          cleanBar.animation_type = bar.animation_type;
          // Only include entity/state if they are also defined
          if (bar.animation_entity) cleanBar.animation_entity = bar.animation_entity;
          if (bar.animation_state) cleanBar.animation_state = bar.animation_state;
        } else {
          // Check legacy properties for backward compatibility if new ones aren't set
          if (bar.action_animation && bar.action_animation !== 'none') {
            cleanBar.action_animation = bar.action_animation;
            if (bar.action_animation_entity)
              cleanBar.action_animation_entity = bar.action_animation_entity;
            if (bar.action_animation_state)
              cleanBar.action_animation_state = bar.action_animation_state;
          }
        }

        // Remove any properties that ended up undefined
        Object.keys(cleanBar).forEach(key => cleanBar[key] === undefined && delete cleanBar[key]);

        return cleanBar as BarConfig; // Cast back to BarConfig
      });
    }

    // Remove empty arrays for bars and icon_rows
    if (cleanConfig.bars && cleanConfig.bars.length === 0) {
      delete cleanConfig.bars;
    }
    if (cleanConfig.icon_rows && cleanConfig.icon_rows.length === 0) {
      delete cleanConfig.icon_rows;
    }

    // Remove top-level properties if they match the defaults from DEFAULT_CONFIG
    Object.keys(DEFAULT_CONFIG).forEach(prop => {
      // Need to check existence because DEFAULT_CONFIG might have keys not in cleanConfig
      if (prop in cleanConfig && cleanConfig[prop] === DEFAULT_CONFIG[prop]) {
        delete cleanConfig[prop];
      }
    });

    // Remove other potentially empty/default top-level fields
    if (!cleanConfig.title) delete cleanConfig.title;
    if (!cleanConfig.location_entity) delete cleanConfig.location_entity;
    if (cleanConfig.show_location === true) delete cleanConfig.show_location; // Default is true
    if (!cleanConfig.mileage_entity) delete cleanConfig.mileage_entity;
    if (cleanConfig.show_mileage === true) delete cleanConfig.show_mileage; // Default is true
    if (!cleanConfig.car_state_entity) delete cleanConfig.car_state_entity;
    if (cleanConfig.show_car_state === true) delete cleanConfig.show_car_state; // Default is true
    // Add cleanup for title_alignment, title_size, etc. if needed, comparing to their defaults

    return cleanConfig;
  }

  private _updateConfig(updates: Partial<UltraVehicleCardConfig>) {
    const newConfig = {
      ...(this.config || {}),
      ...updates,
    } as UltraVehicleCardConfig;

    if (updates.vehicle_image_type) {
      if (updates.vehicle_image_type !== this.config.vehicle_image_type) {
        delete newConfig.vehicle_image;
        delete newConfig.vehicle_image_entity;
      }
      console.log('Image config update:', {
        type: updates.vehicle_image_type,
        image: newConfig.vehicle_image ? 'present' : 'missing',
        entity: newConfig.vehicle_image_entity,
      });
    }

    if (updates.status_image_type) {
      if (updates.status_image_type !== this.config.status_image_type) {
        delete newConfig.status_image;
        delete newConfig.status_image_entity;
        delete newConfig.status_image_trigger_entity;
      }
    }

    this.config = newConfig;

    this.requestUpdate();

    // Before dispatching the event, clean the config
    const cleanConfig = this._getCleanConfig();

    const event = new CustomEvent('config-changed', {
      detail: { config: cleanConfig },
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    fireEvent(this, 'config-changed', { config });
  }

  // Fix the _barValueChanged method to handle gradient toggling more explicitly
  private _barValueChanged(ev: CustomEvent, index: number): void {
    ev.stopPropagation();

    if (!this.config.bars || !this.config.bars[index]) return;

    // Create a copy of the config
    const newConfig = JSON.parse(JSON.stringify(this.config));

    // Extract detail from event
    const value = ev.detail?.value;
    let gradientToggled = false;
    let gradientPropertyChanged = false;

    // Preserve gradient settings
    const currentUseGradient = newConfig.bars[index].use_gradient;
    const currentGradientDisplayMode = newConfig.bars[index].gradient_display_mode;
    const currentGradientStops = newConfig.bars[index].gradient_stops;

    // Handle object-style updates (like from ha-form)
    if (value && typeof value === 'object') {
      const barPrefix = `bars.${index}.`;
      Object.entries(value).forEach(([key, val]) => {
        if (key.startsWith(barPrefix)) {
          const prop = key.substring(barPrefix.length);

          // Check if this is toggling gradient mode
          if (prop === 'use_gradient') {
            gradientToggled = true;
            gradientPropertyChanged = true;

            // If turning on gradient mode, ensure it has default stops
            if (val === true) {
              console.log('Gradient mode turned ON');

              // Make sure we have stops ready
              if (
                !newConfig.bars[index].gradient_stops ||
                newConfig.bars[index].gradient_stops.length < 2
              ) {
                // Create default gradient stops
                newConfig.bars[index].gradient_stops = [
                  { id: this._generateUniqueId(), position: 0, color: '#ff0000' }, // Red at 0%
                  { id: this._generateUniqueId(), position: 50, color: '#ffff00' }, // Yellow at 50%
                  { id: this._generateUniqueId(), position: 100, color: '#00ff00' }, // Green at 100%
                ];

                // Set a default gradient display mode if not set
                if (!newConfig.bars[index].gradient_display_mode) {
                  newConfig.bars[index].gradient_display_mode = 'value_based';
                }
              }
            }
          }

          // Check for gradient-related properties
          if (prop === 'gradient_display_mode' || prop.startsWith('gradient_')) {
            gradientPropertyChanged = true;
          }

          // Special handling for color values
          if (prop.includes('color')) {
            // Convert color values to proper CSS format
            if (Array.isArray(val)) {
              // If it's an RGB array [r, g, b]
              newConfig.bars[index][prop] = `rgb(${val.join(', ')})`;
            } else if (typeof val === 'object' && val !== null) {
              // If it's an object with r, g, b properties
              if ('r' in val && 'g' in val && 'b' in val) {
                newConfig.bars[index][prop] = `rgb(${val.r}, ${val.g}, ${val.b})`;
              } else if (val.toString) {
                // If it has a toString method
                newConfig.bars[index][prop] = val.toString();
              } else {
                // Fallback
                newConfig.bars[index][prop] = val;
              }
            } else {
              // If it's already a string like "#ff0000"
              newConfig.bars[index][prop] = val;
            }
          } else {
            // For non-color properties
            newConfig.bars[index][prop] = val;
          }
        }
      });
    } else {
      // If we get a direct path/value update (for single field changes)
      const propPath = ev.detail?.path || ev.detail?.name;
      if (propPath) {
        // Check if this is toggling gradient mode
        if (propPath === `bars.${index}.use_gradient`) {
          gradientToggled = true;
          gradientPropertyChanged = true;

          // If turning on gradient mode, ensure it has default stops
          if (value === true) {
            // Make sure we have stops ready
            if (
              !newConfig.bars[index].gradient_stops ||
              newConfig.bars[index].gradient_stops.length < 2
            ) {
              // Create default gradient stops
              newConfig.bars[index].gradient_stops = [
                { id: this._generateUniqueId(), position: 0, color: '#ff0000' }, // Red at 0%
                { id: this._generateUniqueId(), position: 50, color: '#ffff00' }, // Yellow at 50%
                { id: this._generateUniqueId(), position: 100, color: '#00ff00' }, // Green at 100%
              ];

              // Set a default gradient display mode if not set
              if (!newConfig.bars[index].gradient_display_mode) {
                newConfig.bars[index].gradient_display_mode = 'value_based';
              }
            }
          }
        }

        // Check for gradient-related properties
        if (propPath.includes('gradient')) {
          gradientPropertyChanged = true;
        }

        // Set the value
        this._setNestedValue(newConfig, propPath, value);
      }
    }

    // Critical fix: Preserve gradient settings if they're not being explicitly changed
    // This ensures that when other properties change, we don't lose gradient configuration
    if (currentUseGradient && !gradientToggled) {
      newConfig.bars[index].use_gradient = true;
      if (currentGradientDisplayMode) {
        newConfig.bars[index].gradient_display_mode = currentGradientDisplayMode;
      }
      if (currentGradientStops && currentGradientStops.length >= 2) {
        newConfig.bars[index].gradient_stops = currentGradientStops;
      }
    }

    // Update config first
    this._updateConfig(newConfig);

    // Force refresh gradient immediately for any gradient-related changes
    if (gradientPropertyChanged || currentUseGradient) {
      this._fireForceGradientRefreshEvent();
    }

    // Now handle UI updates for gradient toggling
    if (gradientToggled) {
      // If gradient was turned on, expand the bar to show gradient editor
      if (newConfig.bars[index].use_gradient) {
        this._expandedBar = index;

        // Critical: Force a complete re-render of the component
        setTimeout(() => {
          this.requestUpdate();
        }, 0);
      }
    }
  }

  // Helper method to set a nested property by path
  private _setNestedValue(obj: any, path: string, value: any): void {
    const parts = path.split('.');
    let current = obj;

    // Navigate through the object structure until we're at the parent of the property to set
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];

      // If the path doesn't exist, create it
      if (!current[part]) {
        current[part] = isNaN(Number(parts[i + 1])) ? {} : [];
      }

      current = current[part];
    }

    // Set the final property
    current[parts[parts.length - 1]] = value;
  }

  private _toggleBarExpand(index: number) {
    if (this._preventExpandCollapse) {
      this._preventExpandCollapse = false;
      return;
    }

    this._expandedBar = this._expandedBar === index ? null : index;
  }

  private _addBar() {
    const bars = [...(this.config.bars || [])];
    // Create a deep copy of DEFAULT_BAR_CONFIG to ensure all default colors are applied
    const newBar = JSON.parse(JSON.stringify(DEFAULT_BAR_CONFIG));
    bars.push(newBar);

    // Update the sections_order to include the new bar
    const sectionsOrder = [...(this.config.sections_order || ['title', 'image', 'info'])];

    // Check if we're using the legacy section format (with 'bars') or individual bars
    const usesLegacyFormat = sectionsOrder.includes('bars');
    const hasIndividualBars = sectionsOrder.some(section => section.startsWith('bar_'));

    if (usesLegacyFormat) {
      // Already using legacy format, no need to modify sections_order
    } else if (hasIndividualBars) {
      // Using individual bar sections, add a new one
      const newBarSectionId = `bar_${bars.length - 1}`;
      sectionsOrder.push(newBarSectionId);
    } else {
      // Using neither format, add the legacy 'bars' section for compatibility
      sectionsOrder.push('bars');
    }

    fireEvent(this, 'config-changed', {
      config: {
        ...this.config,
        bars,
        sections_order: sectionsOrder,
      },
    });

    this._expandedBar = bars.length - 1;
  }

  private _removeBar(index: number) {
    const bars = [...(this.config.bars || [])];
    bars.splice(index, 1);

    // Update sections_order to remove the bar section
    const sectionsOrder = [...(this.config.sections_order || [])];
    const barSectionId = `bar_${index}`;
    const barSectionIndex = sectionsOrder.indexOf(barSectionId);

    if (barSectionIndex !== -1) {
      sectionsOrder.splice(barSectionIndex, 1);
    }

    // Rename bar sections with higher indices
    for (let i = 0; i < sectionsOrder.length; i++) {
      const section = sectionsOrder[i];
      if (section.startsWith('bar_')) {
        const barIdx = parseInt(section.substring(4));
        if (barIdx > index) {
          // Update the index in the section ID
          sectionsOrder[i] = `bar_${barIdx - 1}`;
        }
      }
    }

    fireEvent(this, 'config-changed', {
      config: {
        ...this.config,
        bars,
        sections_order: sectionsOrder,
      },
    });

    if (this._expandedBar === index) {
      this._expandedBar = null;
    } else if (this._expandedBar !== null && this._expandedBar > index) {
      this._expandedBar = this._expandedBar - 1;
    }
  }

  private _renderSettingsTab() {
    // Define the schema for Card Settings separately
    const cardSettingsSchema = [
      {
        name: 'layout_type',
        selector: {
          select: {
            options: [
              { value: 'single', label: 'Single Column' },
              { value: 'double', label: 'Two Columns' },
            ],
            mode: 'dropdown',
          },
        },
        label: 'Layout Type',
        description: 'Choose between a single column or two-column layout',
      },
      {
        name: 'formatted_entities',
        selector: { boolean: {} },
        label: 'Format Entity Values',
        description:
          'Enable additional formatting of entity values (add commas, convert units, etc.)',
      },
      {
        name: 'show_units',
        selector: { boolean: {} },
        label: 'Show Units',
        description: 'Display units of measurement alongside values',
      },
    ];

    return html`
      <div class="tab-content">
        <!-- Card Title Section -->
        <div class="settings-section">
          <div class="section-header">Card Title</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${this.config}
              .schema=${[
                {
                  name: 'title',
                  selector: {
                    text: {},
                  },
                  label: 'Card Title',
                  description: 'Title displayed at the top of the card (optional)',
                },
                {
                  name: 'title_alignment',
                  selector: {
                    select: {
                      options: [
                        { value: 'left', label: 'Left' },
                        { value: 'center', label: 'Center' },
                        { value: 'right', label: 'Right' },
                      ],
                      mode: 'dropdown',
                    },
                  },
                  label: 'Title Alignment',
                  description: 'How to align the card title',
                },
              ]}
              .computeLabel=${schema => schema.label || this._formatFieldName(schema.name)}
              .computeDescription=${schema => schema.description}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <!-- Title Size with reset button -->
            <div class="size-fields-container" style="margin-top: 8px;">
              <div class="size-field">
                <ha-form
                  .hass=${this.hass}
                  .data=${this.config}
                  .schema=${[
                    {
                      name: 'title_size',
                      selector: {
                        number: {
                          mode: 'box',
                          unit: 'px',
                        },
                      },
                      label: 'Title Size',
                      description: 'Size of the card title in pixels',
                    },
                  ]}
                  .computeLabel=${schema => schema.label || this._formatFieldName(schema.name)}
                  .computeDescription=${schema => schema.description}
                  @value-changed=${this._valueChanged}
                ></ha-form>
                <ha-icon-button class="inline-reset-button" @click=${this._resetTitleSize}>
                  <ha-icon icon="mdi:refresh"></ha-icon>
                </ha-icon-button>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle Information Section -->
        <div class="settings-section">
          <div class="section-header">Vehicle Information</div>
          <div class="settings-content">
            ${[
              [
                {
                  name: 'location_entity',
                  selector: { entity: {} },
                  label: 'Location Entity',
                  description:
                    'Select the entity that provides the current location of your vehicle.',
                },
                {
                  name: 'show_location',
                  selector: { boolean: {} },
                  label: 'Show Location',
                  description: 'Display the vehicle location',
                },
              ],
              [
                {
                  name: 'mileage_entity',
                  selector: { entity: {} },
                  label: 'Mileage Entity',
                  description:
                    'Select the entity that represents the total mileage or odometer reading of your vehicle.',
                },
                {
                  name: 'show_mileage',
                  selector: { boolean: {} },
                  label: 'Show Mileage',
                  description: 'Display the vehicle mileage',
                },
              ],
              [
                {
                  name: 'car_state_entity',
                  selector: { entity: {} },
                  label: 'Car State Entity',
                  description:
                    'Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging).',
                },
                {
                  name: 'show_car_state',
                  selector: { boolean: {} },
                  label: 'Show Car State',
                  description: 'Display the vehicle state',
                },
              ],
            ].map(
              pair => html`
                <div class="vehicle-info-card">
                  <div class="vehicle-info-title">${pair[0].label}</div>
                  <div class="vehicle-info-description">${pair[0].description}</div>
                  <div class="vehicle-info-controls">
                    <div class="vehicle-info-entity">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this.config}
                        .schema=${[pair[0]]}
                        .computeLabel=${() => ''}
                        @value-changed=${this._valueChanged}
                      ></ha-form>
                    </div>
                    <div class="vehicle-info-toggle">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this.config}
                        .schema=${[pair[1]]}
                        .computeLabel=${() => ''}
                        @value-changed=${this._valueChanged}
                      ></ha-form>
                    </div>
                  </div>
                </div>
              `
            )}
          </div>
        </div>

        <!-- Vehicle Image Section -->
        <div class="settings-section">
          <div class="section-header">Vehicle Image</div>
          <div class="image-description">
            Configure the primary image displayed for the vehicle.
          </div>
          <div class="settings-content">
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${this._getImageSchema('vehicle')}
              .computeLabel=${schema => schema.label || this._formatFieldName(schema.name)}
              .computeDescription=${schema => schema.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
            ${this.config.vehicle_image_type === 'upload'
              ? html`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label">Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            @change=${(e: Event) => this._handleImageUpload(e, 'vehicle_image')}
                            id="vehicle-image-upload"
                            style="display: none;"
                          />
                        </div>
                      </label>

                      <div class="path-display">
                        ${this.config.vehicle_image
                          ? html`<span class="uploaded-path" title="${this.config.vehicle_image}">
                              ${this._truncatePath(this.config.vehicle_image)}
                            </span>`
                          : html`<span class="no-file">No file chosen</span>`}
                      </div>
                    </div>
                  </div>
                `
              : ''}
            ${this.config.vehicle_image_type && this.config.vehicle_image_type !== 'none'
              ? html`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${() => {
                        this._vehicleCropExpanded = !this._vehicleCropExpanded;
                        this.requestUpdate();
                      }}
                    >
                      <span>Image Crop</span>
                      <ha-icon
                        icon="${this._vehicleCropExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                      ></ha-icon>
                    </div>
                    ${this._vehicleCropExpanded
                      ? html`
                          <div class="crop-controls">
                            ${this._renderCropSliders('vehicle_image_crop')}
                          </div>
                        `
                      : ''}
                  </div>
                `
              : ''}
          </div>
        </div>

        <!-- Action Image Section -->
        <div class="settings-section">
          <div class="section-header">Action Image</div>
          <div class="image-description">
            Optionally, display a different image when a specific entity reaches a certain state
            (e.g., show a charging image when the car is plugged in).
          </div>
          <div class="settings-content">
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${this._getImageSchema('action')}
              .computeLabel=${schema => schema.label || this._formatFieldName(schema.name)}
              .computeDescription=${schema => schema.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
            ${this.config.action_image_type === 'upload'
              ? html`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label">Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            @change=${(e: Event) => this._handleImageUpload(e, 'action_image')}
                            id="action-image-upload"
                            style="display: none;"
                          />
                        </div>
                      </label>

                      <div class="path-display">
                        ${this.config.action_image
                          ? html`<span class="uploaded-path" title="${this.config.action_image}">
                              ${this._truncatePath(this.config.action_image)}
                            </span>`
                          : html`<span class="no-file">No file chosen</span>`}
                      </div>
                    </div>
                  </div>
                `
              : ''}
            ${this.config.action_image_type && this.config.action_image_type !== 'none'
              ? html`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${() => {
                        this._actionCropExpanded = !this._actionCropExpanded;
                        this.requestUpdate();
                      }}
                    >
                      <span>Image Crop</span>
                      <ha-icon
                        icon="${this._actionCropExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                      ></ha-icon>
                    </div>
                    ${this._actionCropExpanded
                      ? html`
                          <div class="crop-controls">
                            ${this._renderCropSliders('action_image_crop')}
                          </div>
                        `
                      : ''}
                  </div>
                `
              : ''}
          </div>
        </div>

        <!-- Card Settings Section -->
        <div class="settings-section">
          <div class="section-header">Card Settings</div>
          <div class="settings-content">
            ${cardSettingsSchema.map(item => {
              const isBooleanToggle = item.selector && 'boolean' in item.selector;
              return html`
                <div class="vehicle-info-card">
                  <div class="vehicle-info-title">${item.label}</div>
                  ${item.description
                    ? html`<div class="vehicle-info-description">${item.description}</div>`
                    : ''}
                  <div class="${isBooleanToggle ? 'toggle-form-container' : 'settings-content'}">
                    <ha-form
                      .hass=${this.hass}
                      .data=${this.config}
                      .schema=${[item]}
                      .computeLabel=${() => ''}
                      @value-changed=${this._valueChanged}
                    ></ha-form>
                  </div>
                </div>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }

  private _renderCustomizeTab() {
    // Layout style schema
    const layoutSchema = [
      {
        name: 'layout_type',
        selector: {
          select: {
            options: LAYOUT_TYPE_OPTIONS,
            mode: 'dropdown',
          },
        },
        label: 'Layout Style',
        description: 'Choose between single column or two-column layout for the card',
      },
    ];

    return html`
      <div class="tab-content">
        <div class="settings-section">
          <div class="section-header">Layout Settings</div>
          <div class="settings-content">
            <ha-form
              class="config-form layout-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${layoutSchema}
              .computeLabel=${schema => schema.label || schema.name}
              .computeDescription=${schema => schema.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <div class="settings-section">
          <div class="section-header">Card Sections</div>
          <div class="settings-content">
            <h4>Section Arrangement</h4>
            <p>
              Drag and drop sections to arrange their order on the card.
              ${this.config.layout_type === 'double'
                ? 'In two-column layout, you can place all sections in either column.'
                : 'All sections will display in a single column.'}
            </p>

            <div class="sections-container">${this._renderDraggableSections()}</div>
          </div>
        </div>
      </div>
    `;
  }

  private _renderBarsTab() {
    return html`
      <div class="tab-content">
        <div class="section-header">Percentage Bars</div>

        <div class="bars-description">
          Add percentage bars to display values like fuel level, battery charge, or range. Each bar
          can display a main percentage value with optional left and right labels.
        </div>

        <div class="bars-container">
          ${this.config.bars?.map((bar, index) => this._renderBar(bar, index)) || ''}
        </div>

        <div class="add-bar-container">
          <ha-button class="add-bar-button" @click=${this._addBar}>
            <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
            Add New Bar
          </ha-button>
        </div>
      </div>
    `;
  }

  private _truncateText(text: string, maxLength: number = 15): string {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  private _getFriendlyName(entityId: string): string {
    if (!entityId || !this.hass || !this.hass.states[entityId]) return '';
    return this.hass.states[entityId]?.attributes?.friendly_name || entityId.split('.').pop() || '';
  }

  private _renderBar(bar: BarConfig, index: number) {
    const isExpanded = this._expandedBar === index;
    const isDragging = this._draggedBarIndex === index;
    const isDropTarget = this._dropTargetIndex === index;

    // Get entity display name for the header
    const entityName = this._getFriendlyName(bar.entity);
    const displayName = this._truncateText(entityName, 20);

    // Initialize or get the active tab for this bar
    const activeTab = this._activeBarTabs[index] || 'config'; // Default to 'config'

    return html`
      <div
        class="bar ${isExpanded ? 'expanded' : ''} ${isDragging ? 'dragging' : ''} ${isDropTarget
          ? 'drop-target'
          : ''}"
        draggable="true"
        @dragstart=${e => this._handleDragStart(e, index)}
        @dragend=${this._handleDragEnd}
        @dragover=${e => this._handleDragOver(e, index)}
        @dragleave=${this._handleDragLeave}
        @drop=${e => this._handleDrop(e, index)}
      >
        <div class="bar-header" @click=${() => this._toggleBarExpand(index)}>
          <div class="bar-title">
            <div class="drag-handle" @mousedown=${_ => (this._preventExpandCollapse = true)}>
              <ha-icon icon="mdi:drag"></ha-icon>
            </div>
            Bar ${index + 1}
            <span class="bar-entity">${displayName || 'No entity selected'}</span>
          </div>
          <div class="bar-actions">
            <ha-icon-button
              .path=${isExpanded ? ICON_PATH_COLLAPSE : ICON_PATH_EXPAND}
              @click=${e => {
                e.stopPropagation();
                this._toggleBarExpand(index);
              }}
            >
            </ha-icon-button>
            <ha-icon-button
              .path=${ICON_PATH_DELETE}
              @click=${e => {
                e.stopPropagation();
                this._removeBar(index);
              }}
            >
            </ha-icon-button>
          </div>
        </div>

        ${isExpanded
          ? html`
              <div class="bar-content">
                <!-- Bar Settings Tabs -->
                <div class="bar-settings-tabs">
                  <div
                    class="bar-settings-tab ${activeTab === 'config' ? 'active' : ''}"
                    @click=${e => this._setActiveBarTab(e, index, 'config')}
                  >
                    Configuration
                  </div>
                  <div
                    class="bar-settings-tab ${activeTab === 'colors' ? 'active' : ''}"
                    @click=${e => this._setActiveBarTab(e, index, 'colors')}
                  >
                    Colors
                  </div>
                  <div
                    class="bar-settings-tab ${activeTab === 'animation' ? 'active' : ''}"
                    @click=${e => this._setActiveBarTab(e, index, 'animation')}
                  >
                    Animation
                  </div>
                </div>

                <!-- Tab Content -->
                <div class="bar-settings-content">
                  ${activeTab === 'config' ? this._renderBarConfigurationTab(bar, index) : ''}
                  ${activeTab === 'colors' ? this._renderBarColorsTab(bar, index) : ''}
                  ${activeTab === 'animation' ? this._renderBarAnimationTab(bar, index) : ''}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  // --- New Tab Rendering Methods ---

  private _renderBarConfigurationTab(bar: BarConfig, index: number) {
    // Create alignment options for the selector
    const alignmentOptions = [
      { value: 'flex-start', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'flex-end', label: 'Right' },
    ];

    return html`
      <!-- Main bar properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Bar Configuration</span>
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(bar, index)}
          .schema=${this._getMainBarSchema(index)}
          .computeLabel=${schema => schema.label || schema.name}
          .computeDescription=${schema => schema.description}
          @value-changed=${ev => this._barValueChanged(ev, index)}
        ></ha-form>
      </div>

      <!-- Left side properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Left Side</span>
          <ha-switch
            .checked=${bar.show_left !== false}
            @change=${e => this._updateBarProperty(index, 'show_left', e.target.checked)}
            title="Show or hide the left side label of the bar"
          ></ha-switch>
        </div>

        ${bar.show_left !== false
          ? html`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(bar, index)}
                .schema=${this._getLeftSideSchema(index)}
                .computeLabel=${schema => schema.label || schema.name}
                .computeDescription=${schema => schema.description}
                @value-changed=${ev => this._barValueChanged(ev, index)}
              ></ha-form>

              <!-- Replace ha-select with ha-form for alignment -->
              ${bar.show_right === false
                ? html`
                    <div class="alignment-control">
                      <ha-form
                        .hass=${this.hass}
                        .data=${{ alignment: bar.alignment || 'flex-start' }}
                        .schema=${[
                          {
                            name: 'alignment',
                            selector: {
                              select: {
                                options: alignmentOptions,
                                mode: 'dropdown',
                              },
                            },
                            label: 'Alignment',
                            description: 'Controls how this label is aligned under the bar.',
                          },
                        ]}
                        @value-changed=${ev => {
                          ev.stopPropagation();
                          this._updateBarProperty(index, 'alignment', ev.detail.value.alignment);
                        }}
                      ></ha-form>
                      <div class="helper-text">
                        Controls how this label is aligned under the bar.
                      </div>
                    </div>
                  `
                : ''}

              <!-- Add Size Controls with Reset -->
              <div class="size-fields-container">
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(bar, index)}
                    .schema=${this._getLeftTitleSizeSchema(index)}
                    .computeLabel=${schema => schema.label || schema.name}
                    .computeDescription=${schema => schema.description}
                    @value-changed=${ev => this._barValueChanged(ev, index)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${() => this._resetBarSize(index, 'left_title_size')}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(bar, index)}
                    .schema=${this._getLeftTextSizeSchema(index)}
                    .computeLabel=${schema => schema.label || schema.name}
                    .computeDescription=${schema => schema.description}
                    @value-changed=${ev => this._barValueChanged(ev, index)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${() => this._resetBarSize(index, 'left_text_size')}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
              </div>
              <!-- End Size Controls -->
            `
          : html` <div class="side-disabled">Left side is hidden</div> `}
      </div>

      <!-- Right side properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Right Side</span>
          <ha-switch
            .checked=${bar.show_right !== false}
            @change=${e => this._updateBarProperty(index, 'show_right', e.target.checked)}
            title="Show or hide the right side label of the bar"
          ></ha-switch>
        </div>

        ${bar.show_right !== false
          ? html`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(bar, index)}
                .schema=${this._getRightSideSchema(index)}
                .computeLabel=${schema => schema.label || schema.name}
                .computeDescription=${schema => schema.description}
                @value-changed=${ev => this._barValueChanged(ev, index)}
              ></ha-form>

              <!-- Replace ha-select with ha-form for alignment -->
              ${bar.show_left === false
                ? html`
                    <div class="alignment-control">
                      <ha-form
                        .hass=${this.hass}
                        .data=${{ alignment: bar.alignment || 'flex-start' }}
                        .schema=${[
                          {
                            name: 'alignment',
                            selector: {
                              select: {
                                options: alignmentOptions,
                                mode: 'dropdown',
                              },
                            },
                            label: 'Alignment',
                            description: 'Controls how this label is aligned under the bar.',
                          },
                        ]}
                        @value-changed=${ev => {
                          ev.stopPropagation();
                          this._updateBarProperty(index, 'alignment', ev.detail.value.alignment);
                        }}
                      ></ha-form>
                      <div class="helper-text">
                        Controls how this label is aligned under the bar.
                      </div>
                    </div>
                  `
                : ''}

              <!-- Add Size Controls with Reset -->
              <div class="size-fields-container">
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(bar, index)}
                    .schema=${this._getRightTitleSizeSchema(index)}
                    .computeLabel=${schema => schema.label || schema.name}
                    .computeDescription=${schema => schema.description}
                    @value-changed=${ev => this._barValueChanged(ev, index)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${() => this._resetBarSize(index, 'right_title_size')}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(bar, index)}
                    .schema=${this._getRightTextSizeSchema(index)}
                    .computeLabel=${schema => schema.label || schema.name}
                    .computeDescription=${schema => schema.description}
                    @value-changed=${ev => this._barValueChanged(ev, index)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${() => this._resetBarSize(index, 'right_text_size')}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
              </div>
              <!-- End Size Controls -->
            `
          : html` <div class="side-disabled">Right side is hidden</div> `}
      </div>
    `;
  }

  private _renderBarColorsTab(bar: BarConfig, index: number) {
    return html`
      <!-- Colors configuration -->
      <div class="section-group">${this._renderColorPickersGrid(bar, index)}</div>

      <!-- Gradient toggle and editor -->
      <div class="section-group" @click=${e => e.stopPropagation()}>
        <div class="subsection-header">
          <span>Gradient Mode</span>
        </div>
        <div style="padding: 16px;">
          <ha-form
            .hass=${this.hass}
            .data=${this._prepareBarData(bar, index)}
            .schema=${this._getGradientToggleSchema(index)}
            .computeLabel=${schema => schema.label || schema.name}
            .computeDescription=${schema => schema.description}
            @value-changed=${ev => {
              ev.stopPropagation();
              // Just call _barValueChanged - it will handle everything
              this._barValueChanged(ev, index);
            }}
          ></ha-form>
        </div>
      </div>

      <!-- Only render the gradient editor if gradient mode is on -->
      ${bar.use_gradient ? this._renderGradientEditor(bar, index) : ''}
    `;
  }

  private _renderBarAnimationTab(bar: BarConfig, index: number) {
    return html`
      <!-- Action Animation section -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Action Animation</span>
        </div>
        <div
          class="action-animation-description"
          style="padding: 8px 16px; margin-bottom: 8px; color: var(--secondary-text-color);"
        >
          Add animations to the bar when a specific entity reaches a certain state. Perfect for
          showing charging status, alerting conditions, and more.
        </div>

        <div
          style="background: rgba(0,0,0,0.05); padding: 8px 16px; margin: 0 16px 16px; border-radius: 4px; color: var(--primary-text-color);"
        >
          <strong>Pro Tip:</strong> For "always on" animations, select an animation type but leave
          the entity and state fields empty. Try the "Bubbles" and "Fill" animations!
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(bar, index)}
          .schema=${[
            {
              name: `bars.${index}.animation_entity`,
              selector: { entity: {} },
              label: 'Animation Entity',
              description: 'Entity that triggers the animation when it matches the specified state',
            },
          ]}
          .computeLabel=${schema => schema.label || schema.name}
          .computeDescription=${schema => schema.description}
          @value-changed=${ev => {
            this._barValueChanged(ev, index);
            // Force re-render to update the state options
            this.requestUpdate();
          }}
        ></ha-form>

        <!-- Entity State with dynamic options based on selected entity -->
        ${bar.animation_entity || bar.action_animation_entity
          ? html`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(bar, index)}
                .schema=${[
                  {
                    name: `bars.${index}.animation_state`,
                    selector: {
                      text: {},
                    },
                    label: 'Entity State',
                    description:
                      'When the entity state equals this value, the animation will be triggered',
                  },
                ]}
                .computeLabel=${schema => schema.label || schema.name}
                .computeDescription=${schema => schema.description}
                @value-changed=${ev => this._barValueChanged(ev, index)}
              ></ha-form>
            `
          : html`
              <div style="padding: 0 16px 16px; color: var(--secondary-text-color);">
                Select an entity above to see available states
              </div>
            `}

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(bar, index)}
          .schema=${[
            {
              name: `bars.${index}.animation_type`,
              selector: {
                select: {
                  options: BAR_ANIMATION_OPTIONS,
                  mode: 'dropdown',
                },
              },
              label: 'Animation Type',
              description: 'The animation effect to display when the entity state matches',
            },
          ]}
          .computeLabel=${schema => schema.label || schema.name}
          .computeDescription=${schema => schema.description}
          @value-changed=${ev => this._barValueChanged(ev, index)}
        ></ha-form>
      </div>
    `;
  }

  // --- End New Tab Rendering Methods ---

  // --- Add Method to Set Active Bar Tab ---
  private _setActiveBarTab(e: Event, index: number, tab: string) {
    e.stopPropagation();
    this._activeBarTabs = {
      ...this._activeBarTabs,
      [index]: tab,
    };
  }
  // --- End Add Method to Set Active Bar Tab ---

  // Split the schema into different parts for better organization
  private _getMainBarSchema(index: number): SchemaItem[] {
    // Ensure return type is an array
    return [
      {
        name: `bars.${index}.entity`,
        selector: { entity: {} },
        label: 'Bar Percentage Entity',
        description:
          'Select an entity that returns a percentage value (0-100). This controls the fill level of the bar.',
      },
      {
        name: `bars.${index}.limit_entity`,
        selector: { entity: {} },
        label: 'Limit Entity (optional)',
        description:
          'Optional: Add a vertical indicator line on the bar (e.g., charge limit for EV battery).',
      },
      {
        name: `bars.${index}.limit_indicator_color`,
        selector: { color: { type: 'hex' } },
        label: 'Limit Indicator Color',
        description:
          'Color of the vertical line that indicates the limit position on the bar. Changes to this will force a refresh of the card.',
      },
      {
        name: `bars.${index}.bar_size`,
        selector: {
          select: {
            options: BAR_SIZE_OPTIONS,
            mode: 'dropdown',
          },
        },
        label: 'Bar Size',
        description: 'Set the thickness/height of the progress bar.',
      },
      {
        name: `bars.${index}.width`,
        selector: {
          select: {
            options: BAR_WIDTH_OPTIONS,
            mode: 'dropdown',
          },
        },
        label: 'Bar Width',
        description: 'Set the width of the bar as a percentage of the card width.',
      },
      {
        name: `bars.${index}.alignment`,
        selector: {
          select: {
            options: [
              { value: 'space-between', label: 'Space Between' },
              { value: 'flex-start', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'flex-end', label: 'Right' },
            ],
            mode: 'dropdown',
          },
        },
        label: 'Label Alignment',
        description: 'How to align the left and right labels relative to each other.',
      },
    ];
  }

  private _getLeftSideSchema(index: number): SchemaItem[] {
    // Ensure return type is an array
    return [
      {
        name: `bars.${index}.left_title`,
        selector: { text: {} },
        label: 'Left Title',
        description: 'Optional label to display on the left side below the bar.',
      },
      {
        name: `bars.${index}.left_entity`,
        selector: { entity: {} },
        label: 'Left Entity',
        description: 'Entity whose value will be displayed on the left side of the bar.',
      },
    ];
  }

  private _getRightSideSchema(index: number): SchemaItem[] {
    // Ensure return type is an array
    return [
      {
        name: `bars.${index}.right_title`,
        selector: { text: {} },
        label: 'Right Title',
        description: 'Optional label to display on the right side below the bar.',
      },
      {
        name: `bars.${index}.right_entity`,
        selector: { entity: {} },
        label: 'Right Entity',
        description: 'Entity whose value will be displayed on the right side of the bar.',
      },
    ];
  }

  private _prepareBarData(bar: BarConfig, index: number) {
    // Create flattened data for the form with prefixed keys
    const data = {};

    // If titles aren't set but entities are, use friendly names as defaults
    const leftTitle =
      bar.left_title || (bar.left_entity ? this._getFriendlyName(bar.left_entity) : '');
    const rightTitle =
      bar.right_title || (bar.right_entity ? this._getFriendlyName(bar.right_entity) : '');

    // Truncate the titles to ensure they don't break layout
    const preparedBar = {
      ...bar,
      left_title: leftTitle ? this._truncateText(leftTitle) : '',
      right_title: rightTitle ? this._truncateText(rightTitle) : '',
    };

    // Flatten the data for the form
    Object.entries(preparedBar).forEach(([key, value]) => {
      data[`bars.${index}.${key}`] = value;
    });

    return data;
  }

  private _renderColorPickersGrid(bar: BarConfig, index: number) {
    // Define the color fields to display
    const colorFields = [
      { name: 'bar_color', label: 'Bar Color', default: DEFAULT_COLORS.bar_color },
      {
        name: 'background_color',
        label: 'Background Color',
        default: DEFAULT_COLORS.background_color,
      },
      { name: 'border_color', label: 'Border Color', default: DEFAULT_COLORS.border_color },
      {
        name: 'limit_indicator_color',
        label: 'Limit Indicator Color',
        default: DEFAULT_COLORS.limit_indicator_color,
      },
      {
        name: 'left_title_color',
        label: 'Left Title Color',
        default: DEFAULT_COLORS.left_title_color,
      },
      {
        name: 'left_text_color',
        label: 'Left Value Color',
        default: DEFAULT_COLORS.left_text_color,
      },
      {
        name: 'right_title_color',
        label: 'Right Title Color',
        default: DEFAULT_COLORS.right_title_color,
      },
      {
        name: 'right_text_color',
        label: 'Right Value Color',
        default: DEFAULT_COLORS.right_text_color,
      },
    ];

    return html`
      <div class="section-header">Colors</div>
      <div class="color-pickers-grid">
        ${colorFields.map(field => {
          // Get the current value or use default
          const currentValue = bar[field.name] || field.default;

          return html`
            <div class="color-picker-item">
              <ultra-vehicle-color-picker
                .label=${field.label}
                .value=${currentValue}
                @value-changed=${(ev: CustomEvent) => {
                  ev.stopPropagation();
                  this._updateBarProperty(index, field.name, ev.detail.value);
                }}
              ></ultra-vehicle-color-picker>
              <ha-icon-button
                class="color-reset-button"
                .path=${'M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23L19,8M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12H6Z'}
                @click=${() => this._resetBarColor(index, field.name, field.default)}
                title="Reset to default color"
              ></ha-icon-button>
            </div>
          `;
        })}
      </div>
    `;
  }

  // Updated method to convert CSS variables to actual colors for display
  private _convertCssVariableToColor(colorValue: string): string {
    if (!colorValue) {
      return '#000000';
    }

    // Handle CSS variables by mapping them to appropriate colors
    if (typeof colorValue === 'string' && colorValue.includes('var(--')) {
      // For standard CSS variables, map to appropriate colors
      if (colorValue.includes('--text-primary-color')) {
        if (colorValue.includes('#777777')) {
          return '#777777'; // Use the fallback for title colors
        }
        if (colorValue.includes('#000000')) {
          return '#000000'; // Use the fallback for text colors
        }
        return '#FFFFFF'; // Default fallback
      } else if (colorValue.includes('--primary-color')) {
        return '#03A9F4';
      }

      // Extract fallback if present
      const fallbackMatch = colorValue.match(/var\(--[\w-]+,\s*([^)]+)\)/);
      if (fallbackMatch && fallbackMatch[1]) {
        return fallbackMatch[1].trim();
      }

      // Default fallback
      return '#FFFFFF';
    }

    return colorValue;
  }

  // Updated reset method to ensure the color picker updates properly
  private _resetBarColor(index: number, colorProperty: string, defaultValue: string) {
    const bars = [...(this.config.bars || [])];
    if (bars[index]) {
      // Update with the default color
      bars[index] = {
        ...bars[index],
        [colorProperty]: defaultValue,
      };

      // Remove the property completely if it's set to default to ensure clean config
      if (defaultValue === DEFAULT_COLORS[colorProperty]) {
        delete bars[index][colorProperty];
      }

      // Update the config
      this._updateConfig({ bars });

      // Force a re-render to ensure UI updates
      setTimeout(() => {
        this.requestUpdate();
      }, 10);
    }
  }

  private async _updateBarProperty(index: number, property: string, value: any) {
    const newConfig = JSON.parse(JSON.stringify(this.config));
    if (!newConfig.bars || !newConfig.bars[index]) return;

    // Save previous use_gradient value and related settings before update
    const previousUseGradient = newConfig.bars[index].use_gradient;
    const previousGradientDisplayMode = newConfig.bars[index].gradient_display_mode;
    const previousGradientStops = newConfig.bars[index].gradient_stops;

    // Update the property
    newConfig.bars[index][property] = value;

    // Add debug logging for special properties
    if (property.includes('color') || property === 'gradient_stops') {
      console.log(
        `Bar ${index} ${property} updated:`,
        JSON.stringify(newConfig.bars[index][property])
      );
    }

    // Special handling for gradient properties to ensure they don't disable each other
    if (property === 'gradient_display_mode') {
      // When changing display mode, ensure use_gradient stays on
      newConfig.bars[index].use_gradient = true;
      console.log('Preserving gradient mode while updating display mode');
    } else if (property === 'use_gradient' && value === true) {
      // When enabling gradients, ensure we have gradient stops
      this._ensureGradientStops(newConfig.bars[index]);
    } else if (property !== 'use_gradient' && previousUseGradient) {
      // For any other property change, preserve gradient settings if they were enabled
      newConfig.bars[index].use_gradient = true;
      if (previousGradientDisplayMode) {
        newConfig.bars[index].gradient_display_mode = previousGradientDisplayMode;
      }
      if (previousGradientStops && previousGradientStops.length >= 2) {
        newConfig.bars[index].gradient_stops = previousGradientStops;
      }
    }

    // For gradient_stops property, ensure stops are sorted by position
    if (property === 'gradient_stops' && Array.isArray(value)) {
      newConfig.bars[index].gradient_stops = [...value].sort((a, b) => a.position - b.position);

      // Force gradient mode on when updating stops
      newConfig.bars[index].use_gradient = true;

      // Increment key for gradient editor to force a re-render
      this._gradientEditorKeys = {
        ...this._gradientEditorKeys,
        [index]: (this._gradientEditorKeys[index] || 0) + 1,
      };
    }

    // Update config
    this._updateConfig(newConfig);

    // Always wait for the update to complete
    await this.updateComplete;

    // Determine if we need to refresh the gradient
    const needsGradientRefresh =
      property === 'use_gradient' ||
      property === 'gradient_display_mode' ||
      property === 'gradient_stops' ||
      property.includes('color') ||
      previousUseGradient;

    if (needsGradientRefresh) {
      // Fire the refresh event with multiple delays for reliability
      [0, 20, 100].forEach(delay => {
        setTimeout(() => {
          this._fireForceGradientRefreshEvent();
          console.log(`[Editor] Fired gradient refresh for ${property} after ${delay}ms delay`);
        }, delay);
      });
    }
  }

  // Add a new method to fire a special event for gradient refresh
  private _fireForceGradientRefreshEvent() {
    // Send a special event to the parent card to force a refresh
    const event = new CustomEvent('force-gradient-refresh', {
      bubbles: true,
      composed: true,
      detail: {
        timestamp: Date.now(), // Add a unique timestamp to ensure the event is treated as new
        config: this.config, // Include the current config in the event
      },
    });

    // Dispatch the event both from this element and document-level to ensure it propagates
    this.dispatchEvent(event);
    document.dispatchEvent(
      new CustomEvent('force-card-update', {
        bubbles: true,
        composed: true,
      })
    );

    console.log(
      '[Editor] Fired force gradient refresh event with timestamp:',
      event.detail.timestamp
    );
  }

  private _renderActionSchema(actionEntity: string) {
    if (!actionEntity || !this.hass.states[actionEntity]) {
      return html``;
    }

    // Get all available states from the selected entity
    const actionEntityObj = this.hass.states[actionEntity];
    const currentState = actionEntityObj.state;

    // Create state options from the entity
    const stateOptions = this._getEntityStateOptions(actionEntity);

    // First part: Action State
    const actionStateSchema = html`
      <ha-form
        class="config-form action-state-form"
        .hass=${this.hass}
        .data=${this.config}
        .schema=${[
          {
            name: 'action_state',
            selector: {
              select: {
                options: stateOptions,
                mode: 'dropdown',
              },
            },
            label: 'Action State',
            description: 'Select the state that will trigger the action image.',
          },
        ]}
        .computeLabel=${schema => schema.label || schema.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;

    // Second part (conditional): Action Image Type and Upload Action Image
    let actionImageContent = html``;
    if (this.config.action_state) {
      const imageSchema = [
        {
          name: 'action_image_type',
          selector: {
            select: {
              options: IMAGE_TYPE_OPTIONS,
              mode: 'dropdown',
            },
          },
          label: 'Action Image Type',
        },
      ];

      // Add URL field if URL type is selected
      if (this.config.action_image_type === 'url') {
        imageSchema.push({
          name: 'action_image',
          selector: { text: {} } as any,
          label: 'Action Image URL',
        });
      }

      // Add entity picker if entity type is selected
      if (this.config.action_image_type === 'entity') {
        imageSchema.push({
          name: 'action_image_entity',
          selector: { entity: {} } as any,
          label: 'Action Image Entity',
        });
      }

      // Add image width slider if action image type is not "none"
      if (this.config.action_image_type && this.config.action_image_type !== 'none') {
        imageSchema.push({
          name: 'action_image_width',
          selector: {
            number: {
              min: 0,
              max: 100,
              step: 1,
              unit: '%',
              mode: 'slider',
            },
          },
          label: 'Image Width',
          description: 'Adjust the width of the action image (height will adjust automatically)',
        } as any);
      }

      actionImageContent = html`
        <ha-form
          class="config-form action-image-type-form"
          .hass=${this.hass}
          .data=${this.config}
          .schema=${imageSchema}
          .computeLabel=${schema => schema.label || schema.name}
          @value-changed=${this._valueChanged}
        ></ha-form>

        <!-- File upload for Action Image if upload type is selected -->
        ${this.config.action_image_type === 'upload'
          ? html`
              <div class="upload-container">
                <label>Upload Action Image for "${this.config.action_state}" state</label>
                <input
                  type="file"
                  accept="image/*"
                  @change=${e => this._handleActionImageUpload(e)}
                  style="width: 100%; margin-top: 8px;"
                />

                <div class="crop-accordion">
                  <div
                    class="crop-accordion-header"
                    @click=${() => {
                      this._actionCropExpanded = !this._actionCropExpanded;
                      this.requestUpdate();
                    }}
                  >
                    <span>Image Crop</span>
                    <ha-icon
                      icon="${this._actionCropExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                    ></ha-icon>
                  </div>

                  ${this._actionCropExpanded
                    ? html`
                        <div class="crop-controls">
                          ${this._renderCropSliders('action_image_crop')}
                        </div>
                      `
                    : ''}
                </div>
              </div>
            `
          : ''}
      `;
    }

    return html` <div class="action-content">${actionStateSchema} ${actionImageContent}</div> `;
  }

  private _getEntityStateOptions(entityId: string | undefined) {
    if (!entityId || !this.hass.states[entityId]) {
      return [];
    }

    const entity = this.hass.states[entityId];

    // For select entities, return the options from attributes
    if (entity.attributes.options && Array.isArray(entity.attributes.options)) {
      return entity.attributes.options.map(option => ({
        value: option,
        label: option,
      }));
    }

    // For binary sensors and switches, return on/off states
    if (['binary_sensor', 'switch', 'light', 'input_boolean'].includes(entityId.split('.')[0])) {
      return [
        { value: 'on', label: 'On' },
        { value: 'off', label: 'Off' },
      ];
    }

    // For EV charging status entities, provide common charging states
    if (entityId.includes('charging') || entityId.includes('charger')) {
      return [
        { value: 'charging', label: 'Charging' },
        { value: 'not_charging', label: 'Not Charging' },
        { value: 'complete', label: 'Complete' },
        { value: 'disconnected', label: 'Disconnected' },
      ];
    }

    // Default: return the current state if available
    if (entity.state) {
      return [{ value: entity.state, label: entity.state }];
    }

    return [];
  }

  private async _handleActionImageUpload(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || !input.files[0]) return;

    const file = input.files[0];

    // Get action entity and state from config
    const actionEntity = this.config.action_entity || '';
    const actionState = this.config.action_state || '';

    if (!actionEntity || !actionState) {
      return;
    }

    try {
      console.log('[ACTION UPLOAD DEBUG] Starting upload to Home Assistant API');

      // Use the uploadImage utility function
      const { uploadImage } = await import('../utils/image-upload');
      const result = await uploadImage(this.hass, file);

      if (!result.success) {
        throw new Error(result.error || 'Failed to upload image');
      }

      console.log('[ACTION UPLOAD DEBUG] Upload successful, path:', result.path);

      // Create a deep copy of the config
      const newConfig = JSON.parse(JSON.stringify(this.config));

      // Initialize action_images if needed
      if (!newConfig.action_images) {
        newConfig.action_images = {};
      }

      // Initialize entity entry if needed
      if (!newConfig.action_images[actionEntity]) {
        newConfig.action_images[actionEntity] = {};
      }

      // Set the image path from upload instead of base64
      newConfig.action_images[actionEntity][actionState] = result.path;

      // Update the config
      this._updateConfig(newConfig);
    } catch (error) {
      console.error('[ACTION UPLOAD DEBUG] Error uploading file:', error);
      alert(
        'Failed to upload image. Please try again or upload the image manually to the Media Library.'
      );
    }
  }

  private _renderIconsTab() {
    const iconRows = this.config.icon_rows || [];

    return html`
      <div class="tab-content">
        <div class="description">
          Add icon rows to display multiple icons in your card. Each row can be configured with
          different settings.
          <strong>Note:</strong> Icon rows and section order can be rearranged in the Customize tab.
        </div>

        <div class="bar-list">
          ${iconRows.map((row, index) => this._renderIconRow(row, index))}

          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addIconRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              Add Icon Row
            </ha-button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderIconRow(row: IconRowConfig, rowIndex: number) {
    const isExpanded = this._expandedIconRow === row.id;

    return html`
      <div class="bar ${isExpanded ? 'expanded' : ''}">
        <div class="bar-header" @click=${() => this._toggleIconRowExpand(row.id)}>
          <div class="bar-title">
            Row ${rowIndex + 1}
            <span class="bar-details">${row.width}% width</span>
          </div>
          <div class="bar-actions">
            ${isExpanded
              ? html`
                  <ha-icon-button
                    @click=${e => {
                      e.stopPropagation();
                      this._removeIconRow(row.id);
                    }}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                `
              : ''}
            <ha-icon-button
              @click=${e => {
                e.stopPropagation();
                this._toggleIconRowExpand(row.id);
              }}
            >
              <ha-icon icon="${isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${isExpanded
          ? html`
              <div class="bar-content">
                <!-- Row configuration -->
                <div class="settings-section">
                  <div class="section-header">Row Settings</div>
                  <div class="settings-content">
                    <ha-form
                      .hass=${this.hass}
                      .data=${{
                        width: row.width,
                        alignment: row.alignment,
                        spacing: row.spacing || 'medium',
                      }}
                      .schema=${[
                        {
                          name: 'width',
                          selector: {
                            select: {
                              options: [
                                { value: '100', label: '100% (Full Width)' },
                                { value: '75', label: '75% Width' },
                                { value: '50', label: '50% Width' },
                                { value: '25', label: '25% Width' },
                              ],
                              mode: 'dropdown',
                            },
                          },
                          label: 'Row Width',
                          description:
                            'Set the width of the icon row as a percentage of the card width',
                        } as any,
                        {
                          name: 'alignment',
                          selector: {
                            select: {
                              options: ICON_ALIGNMENT_OPTIONS,
                              mode: 'dropdown',
                            },
                          },
                          label: 'Icon Alignment',
                          description: 'How icons are positioned within the row',
                        } as any,
                        {
                          name: 'spacing',
                          selector: {
                            select: {
                              options: [
                                { value: 'none', label: 'None' },
                                { value: 'small', label: 'Small' },
                                { value: 'medium', label: 'Medium' },
                                { value: 'large', label: 'Large' },
                              ],
                              mode: 'dropdown',
                            },
                          },
                          label: 'Icon Spacing',
                          description: 'Amount of space between icons',
                        } as any,
                      ]}
                      .computeLabel=${schema => schema.label || this._formatFieldName(schema.name)}
                      .computeDescription=${schema => schema.description}
                      @value-changed=${e => this._updateIconRowConfig(row.id, e.detail.value)}
                    ></ha-form>
                  </div>
                </div>

                <!-- Icons List -->
                <div class="settings-section">
                  <div class="section-header">Icons</div>
                  <div class="settings-content">
                    <div class="bar-list mini-bar-list">
                      ${row.icons.map((icon, iconIndex) =>
                        this._renderIcon(row.id, icon, iconIndex)
                      )}
                    </div>

                    <div class="add-bar-container">
                      <ha-button class="add-icon-button" @click=${() => this._addIcon(row.id)}>
                        <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
                        Add Icon
                      </ha-button>
                    </div>
                  </div>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _renderIcon(rowId: string, icon: IconConfig, iconIndex: number) {
    const isExpanded =
      this._expandedIcon &&
      this._expandedIcon.rowId === rowId &&
      this._expandedIcon.iconIndex === iconIndex;

    // Get friendly name from entity or use custom name if provided
    const entityName = icon.entity ? this._getFriendlyName(icon.entity) : '';
    const displayName = icon.name || entityName || 'Icon ' + (iconIndex + 1);
    const truncatedName = this._truncateText(displayName, 15);

    // Preview values
    const displayIcon = icon.icon_inactive || 'mdi:help-circle-outline';
    const displayActiveIcon = icon.icon_active || 'mdi:help-circle';
    const displayColor = icon.color_inactive || 'var(--secondary-text-color)';
    const displayActiveColor = icon.color_active || 'var(--primary-color)';

    // Create state for active icon settings tab
    if (!this._activeIconTabs) {
      this._activeIconTabs = {};
    }

    const iconKey = `${rowId}_${iconIndex}`;
    if (!this._activeIconTabs[iconKey]) {
      this._activeIconTabs[iconKey] = 'general';
    }

    const activeTab = this._activeIconTabs[iconKey];

    return html`
      <div
        class="mini-bar ${isExpanded ? 'expanded' : ''}"
        draggable="true"
        @dragstart=${(e: DragEvent) => this._handleIconDragStart(e, rowId, iconIndex)}
        @dragover=${(e: DragEvent) => this._handleIconDragOver(e, rowId, iconIndex)}
        @dragleave=${this._handleIconDragLeave}
        @drop=${(e: DragEvent) => this._handleIconDrop(e, rowId, iconIndex)}
        @dragend=${this._handleIconDragEnd}
      >
        <div class="mini-bar-header" @click=${() => this._toggleIconEdit(rowId, iconIndex)}>
          <div class="drag-handle">
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <div class="bar-icon-preview">
            <ha-icon icon="${displayIcon}" style="color: ${displayColor};"></ha-icon>
          </div>
          <div class="bar-title">${truncatedName || 'Unnamed Icon'}</div>
          <div class="bar-actions">
            <ha-icon-button
              @click=${e => {
                e.stopPropagation();
                e.preventDefault();
                this._removeIcon(rowId, iconIndex);
              }}
              @mousedown=${e => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${e => {
                e.stopPropagation();
                this._toggleIconEdit(rowId, iconIndex);
              }}
            >
              <ha-icon icon="${isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${isExpanded
          ? html`
              <div class="mini-bar-content">
                <!-- Icon Settings Tabs -->
                <div class="icon-settings-tabs">
                  <div
                    class="icon-settings-tab ${activeTab === 'general' ? 'active' : ''}"
                    @click=${e => {
                      e.stopPropagation();
                      this._activeIconTabs[iconKey] = 'general';
                      this.requestUpdate();
                    }}
                  >
                    General
                  </div>
                  <div
                    class="icon-settings-tab ${activeTab === 'appearance' ? 'active' : ''}"
                    @click=${e => {
                      e.stopPropagation();
                      this._activeIconTabs[iconKey] = 'appearance';
                      this.requestUpdate();
                    }}
                  >
                    Appearance
                  </div>
                  <div
                    class="icon-settings-tab ${activeTab === 'states' ? 'active' : ''}"
                    @click=${e => {
                      e.stopPropagation();
                      this._activeIconTabs[iconKey] = 'states';
                      this.requestUpdate();
                    }}
                  >
                    States
                  </div>
                </div>

                <!-- Tab Content -->
                <div class="icon-settings-content">
                  ${activeTab === 'general'
                    ? html`
                        <!-- General Settings -->
                        <div class="icon-settings-section">
                          <ha-form
                            .hass=${this.hass}
                            .data=${icon}
                            .schema=${[
                              {
                                name: 'entity',
                                selector: { entity: {} },
                                label: 'Entity',
                                description: 'Entity that determines the icon state',
                              },
                              {
                                name: 'name',
                                selector: { text: {} },
                                label: 'Name',
                                description: 'Custom name (uses entity name if empty)',
                              },
                              {
                                name: 'on_click_action',
                                selector: {
                                  select: {
                                    options: ICON_ACTION_OPTIONS,
                                    mode: 'dropdown',
                                  },
                                },
                                label: 'Click Action',
                              },
                            ]}
                            .computeLabel=${schema =>
                              schema.label || this._formatFieldName(schema.name)}
                            .computeDescription=${schema => schema.description}
                            @value-changed=${e =>
                              this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                          ></ha-form>
                        </div>
                      `
                    : ''}
                  ${activeTab === 'appearance'
                    ? html`
                        <!-- Appearance Settings -->
                        <div class="icon-settings-section">
                          <ha-form
                            .hass=${this.hass}
                            .data=${icon}
                            .schema=${[
                              {
                                name: 'show_name',
                                selector: { boolean: {} },
                                label: 'Show Name',
                                description:
                                  'Display the entity name or custom name below/next to the icon',
                              },
                              {
                                name: 'show_state',
                                selector: { boolean: {} },
                                label: 'Show State',
                                description:
                                  'Display the current entity state value below/next to the icon',
                              },
                              {
                                name: 'show_units',
                                selector: { boolean: {} },
                                label: 'Show Units',
                                description:
                                  'Include the unit of measurement with the state value (e.g. °F, mph)',
                              },
                              {
                                name: 'text_position',
                                selector: {
                                  select: {
                                    options: ICON_TEXT_POSITION_OPTIONS,
                                    mode: 'dropdown',
                                  },
                                },
                                label: 'Text Position',
                                description: 'Position of the text relative to the icon',
                              },
                              {
                                name: 'vertical_alignment',
                                selector: {
                                  select: {
                                    options: ICON_VERTICAL_ALIGNMENT_OPTIONS,
                                    mode: 'dropdown',
                                  },
                                },
                                label: 'Vertical Alignment',
                                description: 'How the icon is aligned vertically in the row',
                              },
                              {
                                name: 'icon_background',
                                selector: {
                                  select: {
                                    options: ICON_BACKGROUND_OPTIONS,
                                    mode: 'dropdown',
                                  },
                                },
                                label: 'Icon Background',
                                description: 'Add a background shape behind the icon',
                              },
                            ]}
                            .computeLabel=${schema =>
                              schema.label || this._formatFieldName(schema.name)}
                            .computeDescription=${schema => schema.description}
                            @value-changed=${e =>
                              this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                          ></ha-form>

                          <!-- Size Settings with inline reset buttons -->
                          <div class="size-fields-container">
                            <div class="size-field">
                              <ha-form
                                .hass=${this.hass}
                                .data=${icon}
                                .schema=${[
                                  {
                                    name: 'icon_size',
                                    selector: {
                                      number: {
                                        mode: 'box',
                                        unit: 'px',
                                      },
                                    },
                                    label: 'Icon Size',
                                    description: 'Size of the icon in pixels',
                                  },
                                ]}
                                .computeLabel=${schema =>
                                  schema.label || this._formatFieldName(schema.name)}
                                .computeDescription=${schema => schema.description}
                                @value-changed=${e =>
                                  this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                              ></ha-form>
                              <ha-icon-button
                                class="inline-reset-button"
                                @click=${() => this._resetIconSize(rowId, iconIndex, 'icon_size')}
                              >
                                <ha-icon icon="mdi:refresh"></ha-icon>
                              </ha-icon-button>
                            </div>

                            <div class="size-field">
                              <ha-form
                                .hass=${this.hass}
                                .data=${icon}
                                .schema=${[
                                  {
                                    name: 'text_size',
                                    selector: {
                                      number: {
                                        mode: 'box',
                                        unit: 'px',
                                      },
                                    },
                                    label: 'Text Size',
                                    description: 'Size of the text in pixels',
                                  },
                                ]}
                                .computeLabel=${schema =>
                                  schema.label || this._formatFieldName(schema.name)}
                                .computeDescription=${schema => schema.description}
                                @value-changed=${e =>
                                  this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                              ></ha-form>
                              <ha-icon-button
                                class="inline-reset-button"
                                @click=${() => this._resetIconSize(rowId, iconIndex, 'text_size')}
                              >
                                <ha-icon icon="mdi:refresh"></ha-icon>
                              </ha-icon-button>
                            </div>
                          </div>
                        </div>
                      `
                    : ''}
                  ${activeTab === 'states'
                    ? html`
                        <!-- States Settings -->
                        <div class="icon-settings-section">
                          <!-- Preview Section -->
                          <div class="icon-preview-section">
                            <div class="icon-state-preview active">
                              <ha-icon
                                icon="${displayActiveIcon}"
                                style="color: ${displayActiveColor};"
                              ></ha-icon>
                              ${icon.show_name !== false
                                ? html`<div class="preview-name">Active</div>`
                                : ''}
                            </div>
                            <div class="icon-state-preview inactive">
                              <ha-icon
                                icon="${displayIcon}"
                                style="color: ${displayColor};"
                              ></ha-icon>
                              ${icon.show_name !== false
                                ? html`<div class="preview-name">Inactive</div>`
                                : ''}
                            </div>
                          </div>

                          <!-- Active State Settings -->
                          <div class="state-settings-group">
                            <div class="subsection-header">
                              <span>Active State</span>
                            </div>
                            <ha-form
                              .hass=${this.hass}
                              .data=${icon}
                              .schema=${[
                                {
                                  name: 'active_template_mode',
                                  selector: { boolean: {} },
                                  label: 'Template Mode',
                                  description: 'Use a template to determine active state',
                                },
                                ...(icon.active_template_mode
                                  ? [
                                      {
                                        name: 'active_template',
                                        selector: { text: { multiline: true } },
                                        label: 'Active State Template',
                                        description:
                                          'Jinja template that will evaluate the active state condition',
                                      },
                                    ]
                                  : [
                                      {
                                        name: 'active_state',
                                        selector: { text: {} },
                                        label: 'Active State Value',
                                        description:
                                          'When the entity state matches this value, the icon will appear in its active state',
                                      },
                                    ]),
                                {
                                  name: 'icon_active',
                                  selector: { icon: {} },
                                  label: 'Active Icon',
                                },
                              ]}
                              .computeLabel=${schema =>
                                schema.label || this._formatFieldName(schema.name)}
                              .computeDescription=${schema => schema.description}
                              @value-changed=${e =>
                                this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                            ></ha-form>
                            <div class="color-picker-container">
                              <div class="color-picker-header">
                                <div class="color-picker-label">Active Color</div>
                                <ha-icon-button
                                  @click=${() => this._resetIconColor(rowId, iconIndex, 'active')}
                                >
                                  <ha-icon icon="mdi:refresh"></ha-icon>
                                </ha-icon-button>
                              </div>
                              <ultra-vehicle-color-picker
                                .value=${icon.color_active || 'var(--primary-color)'}
                                @value-changed=${e =>
                                  this._updateIconConfig(rowId, iconIndex, {
                                    color_active: e.detail.value,
                                  })}
                              ></ultra-vehicle-color-picker>
                            </div>
                          </div>

                          <!-- Inactive State Settings -->
                          <div class="state-settings-group">
                            <div class="subsection-header">
                              <span>Inactive State</span>
                            </div>
                            <ha-form
                              .hass=${this.hass}
                              .data=${icon}
                              .schema=${[
                                {
                                  name: 'inactive_template_mode',
                                  selector: { boolean: {} },
                                  label: 'Template Mode',
                                  description: 'Use a template to determine inactive state',
                                },
                                ...(icon.inactive_template_mode
                                  ? [
                                      {
                                        name: 'inactive_template',
                                        selector: { text: { multiline: true } },
                                        label: 'Inactive State Template',
                                        description:
                                          'Jinja template that will evaluate the inactive state condition',
                                      },
                                    ]
                                  : [
                                      {
                                        name: 'inactive_state',
                                        selector: { text: {} },
                                        label: 'Inactive State Value',
                                        description:
                                          'When the entity state matches this value, the icon will appear in its inactive state',
                                      },
                                    ]),
                                {
                                  name: 'icon_inactive',
                                  selector: { icon: {} },
                                  label: 'Inactive Icon',
                                },
                              ]}
                              .computeLabel=${schema =>
                                schema.label || this._formatFieldName(schema.name)}
                              .computeDescription=${schema => schema.description}
                              @value-changed=${e =>
                                this._updateIconConfig(rowId, iconIndex, e.detail.value)}
                            ></ha-form>
                            <div class="color-picker-container">
                              <div class="color-picker-header">
                                <div class="color-picker-label">Inactive Color</div>
                                <ha-icon-button
                                  @click=${() => this._resetIconColor(rowId, iconIndex, 'inactive')}
                                >
                                  <ha-icon icon="mdi:refresh"></ha-icon>
                                </ha-icon-button>
                              </div>
                              <ultra-vehicle-color-picker
                                .value=${icon.color_inactive || 'var(--secondary-text-color)'}
                                @value-changed=${e =>
                                  this._updateIconConfig(rowId, iconIndex, {
                                    color_inactive: e.detail.value,
                                  })}
                              ></ultra-vehicle-color-picker>
                            </div>
                          </div>
                        </div>
                      `
                    : ''}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  // Helper methods for icon rows management
  private _addIconRow() {
    const iconRows = [...(this.config.icon_rows || [])];
    const newRow = this._createDefaultIconRow();
    iconRows.push(newRow);

    // Update the sections_order to include the new icon row
    const sectionsOrder = [...(this.config.sections_order || ['title', 'image', 'info'])];

    // Check if we're using the legacy section format (with 'icons') or individual icon rows
    const usesLegacyFormat = sectionsOrder.includes('icons');
    const hasIndividualIconRows = sectionsOrder.some(section => section.startsWith('icon_row_'));

    if (usesLegacyFormat) {
      // Already using legacy format, no need to modify sections_order
    } else if (hasIndividualIconRows) {
      // Using individual icon row sections, add a new one
      const newIconRowSectionId = `icon_row_${newRow.id}`;
      sectionsOrder.push(newIconRowSectionId);
    } else {
      // Using neither format, add the legacy 'icons' section for compatibility
      sectionsOrder.push('icons');
    }

    this._updateConfig({
      icon_rows: iconRows,
      sections_order: sectionsOrder,
    });

    this._expandedIconRow = newRow.id;
  }

  private _removeIconRow(rowId: string) {
    const iconRows = (this.config.icon_rows || []).filter(row => row.id !== rowId);

    // Update sections_order to remove the icon row section
    const sectionsOrder = [...(this.config.sections_order || [])];
    const iconRowSectionId = `icon_row_${rowId}`;
    const iconRowSectionIndex = sectionsOrder.indexOf(iconRowSectionId);

    if (iconRowSectionIndex !== -1) {
      sectionsOrder.splice(iconRowSectionIndex, 1);
    }

    this._updateConfig({
      icon_rows: iconRows,
      sections_order: sectionsOrder,
    });

    if (this._expandedIconRow === rowId) {
      this._expandedIconRow = null;
    }

    if (this._expandedIcon && this._expandedIcon.rowId === rowId) {
      this._expandedIcon = null;
    }
  }

  private _toggleIconRowExpand(rowId: string) {
    this._expandedIconRow = this._expandedIconRow === rowId ? null : rowId;

    // Close any open icon edit forms when collapsing a row
    if (
      this._expandedIcon &&
      this._expandedIcon.rowId === rowId &&
      this._expandedIconRow === null
    ) {
      this._expandedIcon = null;
    }
  }

  private _updateIconRowConfig(rowId: string, updates: Partial<IconRowConfig>) {
    const iconRows = [...(this.config.icon_rows || [])];
    const rowIndex = iconRows.findIndex(row => row.id === rowId);

    if (rowIndex >= 0) {
      // Log the update
      console.log(`[EDITOR] Updating icon row ${rowId}:`, updates);

      // Store the old values for comparison
      const oldAlignment = iconRows[rowIndex].alignment;

      // Create updated row
      iconRows[rowIndex] = {
        ...iconRows[rowIndex],
        ...updates,
      };

      // Log any alignment changes
      if (updates.alignment && updates.alignment !== oldAlignment) {
        console.log(
          `[EDITOR] Icon row alignment changed from ${oldAlignment} to ${updates.alignment}`
        );
      }

      this._updateConfig({ icon_rows: iconRows });

      // Force an immediate update
      setTimeout(() => this.requestUpdate(), 10);
    }
  }

  // Helper methods for icon management
  private _addIcon(rowId: string) {
    // Create a complete deep copy of the config to avoid reference issues
    const newConfig = JSON.parse(JSON.stringify(this.config));

    // Make sure icon_rows exists
    if (!newConfig.icon_rows) {
      newConfig.icon_rows = [];
    }

    // Find the row
    const rowIndex = newConfig.icon_rows.findIndex(row => row.id === rowId);

    if (rowIndex >= 0) {
      // Ensure the icons array exists
      if (!newConfig.icon_rows[rowIndex].icons) {
        newConfig.icon_rows[rowIndex].icons = [];
      }

      // Add a new default icon
      newConfig.icon_rows[rowIndex].icons.push({
        entity: '',
        icon_inactive: 'mdi:help-circle-outline',
        icon_active: 'mdi:help-circle',
        color_inactive: 'var(--secondary-text-color)',
        color_active: 'var(--primary-color)',
        inactive_state: 'off',
        show_state: false,
        show_name: true,
        name: '',
        on_click_action: 'toggle',
        text_position: 'bottom',
        vertical_alignment: 'center',
        icon_size: 'medium',
        text_size: 'medium',
        draggable: true,
      });

      // Get the index of the newly added icon
      const newIconIndex = newConfig.icon_rows[rowIndex].icons.length - 1;

      // Update the config
      this._updateConfig(newConfig);

      // Open the edit form for the new icon
      setTimeout(() => {
        this._expandedIcon = {
          rowId,
          iconIndex: newIconIndex,
        };
        this.requestUpdate();
      }, 50);
    }
  }

  private _removeIcon(rowId: string, iconIndex: number) {
    // Create a deep copy of the config to avoid reference issues
    const newConfig = JSON.parse(JSON.stringify(this.config));

    // Make sure icon_rows exists
    if (!newConfig.icon_rows || !Array.isArray(newConfig.icon_rows)) {
      console.warn('Cannot remove icon: icon_rows not found or not an array');
      return;
    }

    // Find the row
    const rowIndex = newConfig.icon_rows.findIndex(row => row.id === rowId);

    if (rowIndex === -1) {
      console.warn(`Cannot remove icon: row with id ${rowId} not found`);
      return;
    }

    const row = newConfig.icon_rows[rowIndex];

    // Make sure icons array exists and is valid
    if (!row.icons || !Array.isArray(row.icons)) {
      console.warn('Cannot remove icon: icons array not found or not an array');
      return;
    }

    // Check if the icon index is valid
    if (iconIndex < 0 || iconIndex >= row.icons.length) {
      console.warn(
        `Cannot remove icon: index ${iconIndex} out of bounds (0-${row.icons.length - 1})`
      );
      return;
    }

    // Remove the icon
    row.icons.splice(iconIndex, 1);

    // Update config
    this._updateConfig(newConfig);

    // Clear expanded icon if it was the one removed
    if (
      this._expandedIcon &&
      this._expandedIcon.rowId === rowId &&
      this._expandedIcon.iconIndex === iconIndex
    ) {
      this._expandedIcon = null;
    } else if (
      this._expandedIcon &&
      this._expandedIcon.rowId === rowId &&
      this._expandedIcon.iconIndex > iconIndex
    ) {
      // Adjust index if we removed an icon before the expanded one
      this._expandedIcon = {
        rowId: this._expandedIcon.rowId,
        iconIndex: this._expandedIcon.iconIndex - 1,
      };
    }

    // Force an update to reflect changes immediately
    this.requestUpdate();
  }

  private _toggleIconEdit(rowId: string, iconIndex: number) {
    if (
      this._expandedIcon &&
      this._expandedIcon.rowId === rowId &&
      this._expandedIcon.iconIndex === iconIndex
    ) {
      this._expandedIcon = null;
    } else {
      this._expandedIcon = { rowId, iconIndex };
    }

    // Set the initial active tab to 'general' when opening
    const iconKey = `${rowId}_${iconIndex}`;
    this._activeIconTabs[iconKey] = 'general';

    // Force update to ensure the tab content renders properly
    this.requestUpdate();
  }

  private _updateIconConfig(rowId: string, iconIndex: number, updates: Partial<IconConfig>) {
    // Create a deep copy of the config to avoid object reference issues
    const newConfig = JSON.parse(JSON.stringify(this.config));

    // Ensure icon_rows exists
    if (!newConfig.icon_rows) {
      newConfig.icon_rows = [];
      return; // No rows to update
    }

    // Find the row
    const rowIndex = newConfig.icon_rows.findIndex(row => row.id === rowId);

    if (rowIndex >= 0 && iconIndex >= 0 && iconIndex < newConfig.icon_rows[rowIndex].icons.length) {
      // Store old values for comparison
      const oldIcon = newConfig.icon_rows[rowIndex].icons[iconIndex];
      const oldTextPosition = oldIcon.text_position;
      const oldVerticalAlignment = oldIcon.vertical_alignment;
      const oldIconSize = oldIcon.icon_size;
      const oldTextSize = oldIcon.text_size;

      // Log the icon config update
      console.log(`[EDITOR] Updating icon ${rowId}/${iconIndex}:`, updates);

      // Update the icon with the new properties
      newConfig.icon_rows[rowIndex].icons[iconIndex] = {
        ...newConfig.icon_rows[rowIndex].icons[iconIndex],
        ...updates,
      };

      // Log appearance changes
      if (updates.text_position && updates.text_position !== oldTextPosition) {
        console.log(
          `[EDITOR] Text position changed from ${oldTextPosition || 'default'} to ${updates.text_position}`
        );
      }

      if (updates.vertical_alignment && updates.vertical_alignment !== oldVerticalAlignment) {
        console.log(
          `[EDITOR] Vertical alignment changed from ${oldVerticalAlignment || 'default'} to ${updates.vertical_alignment}`
        );
      }

      if (updates.icon_size && updates.icon_size !== oldIconSize) {
        console.log(
          `[EDITOR] Icon size changed from ${oldIconSize || 'default'} to ${updates.icon_size}`
        );
      }

      if (updates.text_size && updates.text_size !== oldTextSize) {
        console.log(
          `[EDITOR] Text size changed from ${oldTextSize || 'default'} to ${updates.text_size}`
        );
      }

      // Update config
      this._updateConfig(newConfig);

      // Force update to the preview
      this.requestUpdate();
    }
  }

  // Helper methods for spacing and alignment
  private _getAlignmentLabel(alignment: string): string {
    const option = ICON_ALIGNMENT_OPTIONS.find(opt => opt.value === alignment);
    return option ? option.label : 'Left';
  }

  private _getSpacingValue(spacing: string): string {
    switch (spacing) {
      case 'none':
        return '0';
      case 'small':
        return '8px';
      case 'medium':
        return '16px';
      case 'large':
        return '24px';
      default:
        return '16px';
    }
  }

  // Drag and drop methods for icon rows
  private _handleIconRowDragStart(e: DragEvent, rowId: string) {
    this._draggedIconRow = rowId;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('application/ultra-vehicle-row', rowId);
    }
  }

  private _handleIconRowDragEnd() {
    this._draggedIconRow = null;
    this._dropTargetRow = null;
  }

  private _handleIconRowDragOver(e: DragEvent, rowId: string) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    if (this._draggedIconRow && this._draggedIconRow !== rowId) {
      this._dropTargetRow = rowId;
    }
  }

  private _handleIconRowDragLeave() {
    this._dropTargetRow = null;
  }

  private _handleIconRowDrop(e: DragEvent, rowId: string) {
    e.preventDefault();

    const data = e.dataTransfer?.getData('application/ultra-vehicle-row');
    if (data && data === this._draggedIconRow && this._draggedIconRow !== rowId) {
      this._rearrangeIconRows(this._draggedIconRow, rowId);
    }

    this._draggedIconRow = null;
    this._dropTargetRow = null;
  }

  // Drag and drop methods for icons
  private _handleIconDragStart(e: DragEvent, rowId: string, iconIndex: number) {
    e.stopPropagation();
    this._draggedIcon = { rowId, iconIndex };
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData(
        'application/ultra-vehicle-icon',
        JSON.stringify({ rowId, iconIndex })
      );

      // Create a better ghost image
      const draggedEl = e.currentTarget as HTMLElement;
      if (draggedEl) {
        const rect = draggedEl.getBoundingClientRect();
        const ghostEl = draggedEl.cloneNode(true) as HTMLElement;

        // Style the ghost element to look like the original
        ghostEl.style.width = `${rect.width}px`;
        ghostEl.style.height = `${rect.height}px`;
        ghostEl.style.opacity = '0.85';
        ghostEl.style.position = 'absolute';
        ghostEl.style.top = '-1000px';
        ghostEl.style.borderRadius = '8px';
        ghostEl.style.backgroundColor = 'var(--card-background-color, #303030)';
        ghostEl.style.border = '2px dashed var(--primary-color)';
        ghostEl.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        ghostEl.style.zIndex = '9999';
        ghostEl.style.whiteSpace = 'nowrap';
        ghostEl.style.overflow = 'hidden';

        // Ensure mini-bar-header stays as a single line
        const header = ghostEl.querySelector('.mini-bar-header');
        if (header && header instanceof HTMLElement) {
          header.style.flexShrink = '0';
          header.style.whiteSpace = 'nowrap';
          header.style.overflow = 'hidden';
          header.style.display = 'flex';
          header.style.alignItems = 'center';
        }

        document.body.appendChild(ghostEl);
        e.dataTransfer.setDragImage(ghostEl, 20, 20);

        // Clean up ghost element after a short delay
        setTimeout(() => {
          if (document.body.contains(ghostEl)) {
            document.body.removeChild(ghostEl);
          }
        }, 300);
      }
    }

    console.log('Started dragging icon:', { rowId, iconIndex });
  }

  private _handleIconDragEnd(e: DragEvent) {
    e.stopPropagation();
    this._draggedIcon = null;
    this._dropTargetIcon = null;
    console.log('Finished dragging icon');
  }

  private _handleIconDragOver(e: DragEvent, rowId: string, iconIndex: number) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    // Only set as drop target if it's different from the dragged item
    if (
      this._draggedIcon &&
      (this._draggedIcon.rowId !== rowId || this._draggedIcon.iconIndex !== iconIndex)
    ) {
      this._dropTargetIcon = { rowId, iconIndex };

      // Add visual feedback for drop target
      const target = e.currentTarget as HTMLElement;
      const allIcons = this.shadowRoot?.querySelectorAll('.mini-bar');
      if (allIcons) {
        [...allIcons].forEach(icon => icon.classList.remove('drop-target'));
        target.classList.add('drop-target');
      }
    }

    console.log('Dragging over icon:', { rowId, iconIndex });
  }

  private _handleIconDragLeave(e: DragEvent) {
    e.stopPropagation();
    this._dropTargetIcon = null;

    // Remove visual feedback
    const target = e.currentTarget as HTMLElement;
    target.classList.remove('drop-target');
  }

  private _handleIconDrop(e: DragEvent, rowId: string, iconIndex: number) {
    e.preventDefault();
    e.stopPropagation();

    console.log('Drop event on icon:', { rowId, iconIndex });

    try {
      const data = e.dataTransfer?.getData('application/ultra-vehicle-icon');
      if (data && this._draggedIcon) {
        const { rowId: fromRowId, iconIndex: fromIconIndex } = JSON.parse(data);

        if (fromRowId === rowId && fromIconIndex === iconIndex) {
          console.log('Dropped on self, ignoring');
          return; // Dropped on itself
        }

        console.log('Moving icon from', { fromRowId, fromIconIndex }, 'to', { rowId, iconIndex });
        this._rearrangeIcons(fromRowId, fromIconIndex, rowId, iconIndex);
      } else {
        console.log('No valid data in drop event:', e.dataTransfer?.types);
      }
    } catch (error) {
      console.error('Error in icon drop handler:', error);
    }

    // Clear state
    this._draggedIcon = null;
    this._dropTargetIcon = null;

    // Remove visual feedback from all icons
    const icons = this.shadowRoot?.querySelectorAll('.mini-bar');
    if (icons) {
      [...icons].forEach(icon => icon.classList.remove('drop-target'));
    }

    // Force UI update
    this.requestUpdate();
  }

  private _rearrangeIcons(
    fromRowId: string,
    fromIconIndex: number,
    toRowId: string,
    toIconIndex: number
  ) {
    console.log(
      `Rearranging icons: from ${fromRowId}[${fromIconIndex}] to ${toRowId}[${toIconIndex}]`
    );

    // Get deep copies of the current icon rows to avoid reference issues
    const iconRows = JSON.parse(JSON.stringify(this.config.icon_rows || []));

    // Find the source and destination rows
    const fromRowIndex = iconRows.findIndex((row: IconRowConfig) => row.id === fromRowId);
    const toRowIndex = iconRows.findIndex((row: IconRowConfig) => row.id === toRowId);

    if (fromRowIndex === -1 || toRowIndex === -1) {
      console.error('Could not find source or destination row', { fromRowIndex, toRowIndex });
      return;
    }

    // Get the icon being moved
    const fromRow = iconRows[fromRowIndex];
    const iconToMove = fromRow.icons[fromIconIndex];

    if (!iconToMove) {
      console.error('Could not find icon to move at index', fromIconIndex);
      return;
    }

    // If moving within same row
    if (fromRowId === toRowId) {
      console.log('Moving within same row', { from: fromIconIndex, to: toIconIndex });

      // Remove icon from its current position
      fromRow.icons.splice(fromIconIndex, 1);

      // Insert it at the new position
      fromRow.icons.splice(toIconIndex, 0, iconToMove);
    } else {
      // Moving between different rows
      console.log('Moving between rows', { fromRow: fromRowId, toRow: toRowId });

      // Remove icon from source row
      fromRow.icons.splice(fromIconIndex, 1);

      // Add icon to destination row
      const toRow = iconRows[toRowIndex];
      toRow.icons.splice(toIconIndex, 0, iconToMove);
    }

    // Update the config
    this._updateConfig({ icon_rows: iconRows });

    console.log('Rearrangement complete', iconRows);
  }

  render() {
    if (!this.config) {
      return nothing;
    }

    return html`
      <div class="card-config">
        <div class="tabs">
          <div
            class="tab ${this.activeTab === 'settings' ? 'active' : ''}"
            @click="${() => (this.activeTab = 'settings')}"
          >
            Settings
          </div>
          <div
            class="tab ${this.activeTab === 'bars' ? 'active' : ''}"
            @click="${() => (this.activeTab = 'bars')}"
          >
            Bars
          </div>
          <div
            class="tab ${this.activeTab === 'icons' ? 'active' : ''}"
            @click="${() => (this.activeTab = 'icons')}"
          >
            Icons
          </div>
          <div
            class="tab ${this.activeTab === 'customize' ? 'active' : ''}"
            @click="${() => (this.activeTab = 'customize')}"
          >
            Customize
          </div>
        </div>

        ${this.activeTab === 'settings' ? this._renderSettingsTab() : ''}
        ${this.activeTab === 'bars' ? this._renderBarsTab() : ''}
        ${this.activeTab === 'icons' ? this._renderIconsTab() : ''}
        ${this.activeTab === 'customize'
          ? this._renderCustomizeTab() // Replace the placeholder with the actual function call
          : ''}
      </div>
    `;
  }

  static get styles() {
    return css`
      /* Base layout */
      .card-config {
        display: flex;
        flex-direction: column;
      }

      /* Tab navigation */
      .tabs {
        display: flex;
        margin-bottom: 16px;
      }
      .tab {
        padding: 8px 16px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
      }
      .tab.active {
        border-bottom: 2px solid var(--primary-color);
      }

      /* Content sections */
      .tab-content,
      .section-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .settings-section {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, #212121);
      }

      .section-header {
        font-size: 1.1em;
        font-weight: 500;
        padding: 12px 16px;
        background-color: #1d1d1d;
        color: white;
        margin-bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      .settings-content {
        padding: 16px;
        display: grid;
        background-color: #2b2b2b;
      }

      /* Forms and inputs */
      ha-form {
        padding: 0;
        margin-bottom: 16px;
      }

      ha-form[.schema*='Card Title'] ha-selector {
        padding-bottom: 8px;
      }

      .mdc-select.mdc-select--filled {
        margin-bottom: 32px !important;
      }

      ha-selector {
        margin-bottom: 16px;
        --selector-label-spacing: 8px;
        --selector-padding: 8px 0;
      }

      ha-selector ha-slider {
        width: 100%;
      }

      ha-selector[data-name='vehicle_image_width'],
      ha-selector[data-name='action_image_width'] {
        margin-top: 16px;
        padding-bottom: 8px;
      }

      ha-select {
        width: 100%;
        margin: 8px 16px;
      }

      .upload-container {
        margin: 8px 0 16px 0;
        padding: 0 16px;
      }

      .image-preview {
        margin-top: 16px;
        max-width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }

      .image-preview img {
        max-width: 100%;
        max-height: 200px;
        object-fit: contain;
      }

      /* Bar containers and items */
      .bars-description {
        color: var(--secondary-text-color);
        font-size: 0.8em;
        margin-bottom: 16px;
      }

      .bars-container,
      .bar-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      }

      .bar-list {
        margin-top: 16px;
      }

      .mini-bar-list {
        margin-top: 8px;
      }

      /* Bar styling */
      .bar,
      .mini-bar {
        margin-bottom: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background-color: var(--secondary-background-color);
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .bar.expanded,
      .mini-bar.expanded {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        border-color: var(--primary-color);
      }

      .bar-header,
      .mini-bar-header {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        cursor: pointer;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
      }

      .mini-bar-header {
        padding: 0px 12px;
        min-height: 48px;
      }

      .bar-content,
      .mini-bar-content {
        padding: 16px;
      }

      .mini-bar-content {
        padding: 16px;
      }

      .bar-title {
        flex-grow: 1;
        font-weight: 500;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .bar-entity,
      .bar-details {
        display: block;
        margin-left: 24px;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 0.7;
        font-size: 0.9em;
      }

      .bar-details {
        margin-left: 8px;
      }

      .bar-actions {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
      }

      .bar-grip,
      .drag-handle {
        color: var(--secondary-text-color);
        margin-right: 8px;
        cursor: grab;
        display: flex;
        align-items: center;
        opacity: 0.7;
      }

      .bar-grip:hover,
      .drag-handle:hover,
      .draggable-section:hover .drag-handle {
        opacity: 1;
        color: var(--primary-color);
      }

      .bar-icon-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        min-width: 28px;
        height: 28px;
      }

      /* Add buttons */
      .add-bar-container {
        display: flex;
        justify-content: center;
        margin: 16px 0;
        width: 100%;
      }

      .add-bar-button,
      .add-icon-button {
        --mdc-theme-primary: var(--primary-color);
        width: 100%;
        color: white !important;
      }

      .add-icon-button {
        margin-top: 8px;
      }

      .add-icon {
        margin-right: 8px;
        color: white !important;
      }

      ha-button.add-bar-button::part(button),
      ha-button.add-icon-button::part(button) {
        color: white !important;
      }

      /* Section groups and subsections */
      .section-group {
        margin-bottom: 20px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, #1c1c1c);
        padding: 16px;
      }

      .subsection-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 16px;
        background-color: var(--secondary-background-color);
        font-weight: 500;
        border-bottom: 1px solid var(--divider-color);
      }

      .side-disabled {
        padding: 16px;
        color: var(--secondary-text-color);
        font-style: italic;
        text-align: center;
      }

      .helper-text {
        color: var(--secondary-text-color);
        font-size: 0.8em;
        padding: 0 16px 16px;
      }

      .alignment-control {
        padding: 0 16px 16px;
        border-top: 1px solid var(--divider-color);
        margin-top: 8px;
        padding-top: 16px;
      }

      .alignment-control ha-form {
        padding: 0;
      }

      .section-group ha-form ha-form {
        padding: 0;
      }

      /* Color pickers */
      .color-pickers-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
        padding: 0 8px;
      }

      .color-picker-item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        width: 100%;
      }

      .color-picker-item ultra-vehicle-color-picker {
        flex-grow: 1;
      }

      .color-reset-button {
        margin-left: 8px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        opacity: 0.8;
        align-self: center;
      }

      .color-reset-button:hover {
        opacity: 1;
        color: var(--primary-color);
      }

      .color-picker-container {
        margin-top: 16px;
      }

      .color-picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
      }

      .color-picker-label {
        font-weight: 500;
        margin-bottom: 4px;
      }

      .color-picker-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .color-preview {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      /* Action content */
      .action-content {
        margin-top: 8px;
      }

      .action-content ha-form {
        margin-bottom: 24px;
      }

      /* Icon styles */
      .icon-rows-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
      }

      .icon-row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
      }

      .icon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
      }

      .icon-container:hover {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-container ha-icon {
        font-size: 24px;
        margin-bottom: 4px;
      }

      .icon-label,
      .icon-state {
        text-align: center;
        max-width: 100%;
        width: 100%;
        overflow: visible;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal !important;
      }

      .icon-label {
        font-size: 0.85em;
        margin-top: 4px;
        margin-bottom: 2px;
      }

      .icon-state {
        font-size: 0.75em;
        color: var(--secondary-text-color);
      }

      /* Preview containers */
      .icon-preview-container {
        margin-top: 16px;
        padding: 16px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
        border-radius: 8px;
        border: 1px solid var(--divider-color);
      }

      .preview-header {
        font-weight: 500;
        margin-bottom: 16px;
        text-align: center;
      }

      .icon-states-preview {
        display: flex;
        justify-content: space-around;
      }

      .preview-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
      }

      .preview-state ha-icon {
        font-size: 32px;
        margin-bottom: 8px;
      }

      .preview-label {
        font-size: 14px;
        margin-top: 4px;
      }

      .preview-name {
        font-size: 14px;
        font-weight: 500;
        margin-top: 6px;
        text-align: center;
      }

      .preview-state-value {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        text-align: center;
      }

      /* Crop styles */
      .crop-accordion {
        margin-top: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .crop-accordion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
        cursor: pointer;
        font-weight: 500;
      }

      .crop-controls {
        padding: 16px;
      }

      .crop-sliders {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .crop-slider {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .crop-label {
        min-width: 50px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .crop-value {
        min-width: 36px;
        text-align: right;
      }

      .crop-reset {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }

      .crop-explanation {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
        color: var(--secondary-text-color);
        font-size: 0.9em;
        padding: 8px;
        background: rgba(var(--rgb-primary-color), 0.05);
        border-radius: 4px;
      }

      .crop-explanation ha-icon {
        color: var(--primary-color);
      }

      .crop-input-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 16px;
      }

      .crop-input-field {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
      }

      .crop-input-field ha-textfield {
        width: 100%;
        min-width: 60px;
      }

      .crop-unit {
        margin-top: 4px;
        font-size: 0.9em;
        color: var(--secondary-text-color);
      }

      /* Gradient editor */
      .gradient-editor-section {
        margin-top: 16px;
        padding: 16px;
        background-color: var(--card-background-color, #303030);
        border-radius: 8px;
        border: 1px solid var(--divider-color);
      }

      .gradient-header {
        font-size: 1.1em;
        font-weight: 500;
        padding: 0 0 12px 0;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--divider-color);
      }

      .gradient-preview {
        height: 32px;
        border-radius: 16px;
        margin: 16px 0 24px;
        border: 1px solid var(--divider-color);
        overflow: hidden; /* Ensure colors don't bleed outside */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      .gradient-stops-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .gradient-stop-row {
        display: grid;
        grid-template-columns: 40px 60px 1fr 60px auto;
        gap: 12px;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color, rgba(0, 0, 0, 0.05));
      }

      .gradient-slider-container {
        width: 100%;
      }

      .gradient-stop-row.drop-target {
        background: var(--primary-color-lighten, rgba(var(--rgb-primary-color), 0.1));
        border-color: var(--primary-color);
      }

      .gradient-color-picker {
        width: 48px;
        height: 48px;
      }

      .position-label {
        min-width: 48px;
        text-align: center;
        font-weight: 500;
      }

      .drag-handle {
        cursor: grab;
        color: var(--secondary-text-color);
        display: flex;
        justify-content: center;
        width: 24px;
      }

      .gradient-stop-row:hover .drag-handle {
        color: var(--primary-text-color);
      }

      /* Drag and drop styles */
      .bar.dragging,
      .mini-bar.dragging,
      .draggable-section.dragging {
        opacity: 0.5;
        transform: scale(0.98);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        border: 1px dashed var(--primary-color);
        z-index: 10;
        background-color: var(--card-background-color, #fff);
      }

      .bar.drop-target,
      .mini-bar.drop-target,
      .gradient-stop-row.drop-target,
      .draggable-section.drag-over {
        border: 2px dashed var(--primary-color);
        background-color: rgba(var(--rgb-primary-color), 0.1);
        transform: translateY(-2px);
      }

      /* Draggable section styles */
      .draggable-sections-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
      }

      .draggable-sections {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
      }

      .draggable-sections.two-columns {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .draggable-sections.two-columns .draggable-section {
        width: calc(50% - 4px);
        box-sizing: border-box;
      }

      .draggable-sections.two-columns .draggable-section[data-section='image'],
      .draggable-sections.two-columns .draggable-section[data-section='title'] {
        width: 100%;
      }

      .draggable-section {
        border: 1px solid var(--divider-color);
        background-color: var(--card-background-color, #fff);
        border-radius: 6px;
        padding: 10px 12px;
        cursor: grab;
        transition:
          background-color 0.2s ease,
          transform 0.2s ease,
          box-shadow 0.2s ease;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1;
        min-width: 120px;
        white-space: nowrap;
        flex-wrap: nowrap;
      }

      .draggable-section:hover {
        background-color: var(--secondary-background-color);
        transform: translateY(-2px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        z-index: 2;
      }

      .draggable-section:active {
        cursor: grabbing;
      }

      .section-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        white-space: nowrap;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      .section-info ha-icon {
        color: var(--primary-color);
      }

      /* Column styles */
      .column-headers {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        gap: 16px;
      }

      .column-header {
        flex: 1;
        text-align: center;
        font-weight: 500;
        color: var(--primary-color);
        padding: 8px;
        background-color: var(--secondary-background-color);
        border-radius: 8px 8px 0 0;
        border: 1px solid var(--divider-color);
        border-bottom: none;
      }

      .columns-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
      }

      .column-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-height: 120px;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 0 0 8px 8px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
        transition: all 0.2s ease;
        position: relative;
      }

      .empty-column-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--secondary-text-color);
        opacity: 0.7;
        font-style: italic;
        pointer-events: none;
      }

      .column-container.column-drag-over {
        border: 2px dashed var(--primary-color);
        background-color: rgba(var(--rgb-primary-color), 0.1);
        padding: 7px;
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(var(--rgb-primary-color), 0.3);
        z-index: 1;
      }

      .column-container.left-column.column-drag-over {
        border-right-width: 1px;
      }

      .column-container.right-column.column-drag-over {
        border-left-width: 1px;
      }

      /* Card preview */
      .card-title {
        text-align: center;
      }

      .card-header {
        display: flex;
      }

      .card-header.left,
      .card-title.left {
        justify-content: flex-start;
        text-align: left;
      }

      .card-header.center,
      .card-title.center {
        justify-content: center;
        text-align: center;
      }

      .card-header.right,
      .card-title.right {
        justify-content: flex-end;
        text-align: right;
      }

      .description {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      /* Utility classes */
      .instructions {
        color: var(--secondary-text-color);
        font-size: 0.9em;
        margin-bottom: 16px;
      }

      .row {
        margin-bottom: 16px;
        width: 100%;
      }

      .icon-state-section {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, rgba(255, 255, 255, 0.1));
      }

      .icon-state-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background-color: var(--secondary-background-color);
        border-bottom: 1px solid var(--divider-color);
      }

      .icon-state-title {
        font-weight: 500;
        color: var(--primary-color);
      }

      .icon-state-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 60px;
      }

      .icon-state-preview ha-icon {
        font-size: 24px;
        margin-bottom: 4px;
      }

      .icon-state-content {
        padding: 16px 24px;
      }

      .active-section {
        border-left: 3px solid var(--primary-color);
      }

      .inactive-section {
        border-left: 3px solid var(--secondary-text-color);
      }

      /* Form descriptions */
      ha-form .description {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin-top: 2px;
        margin-bottom: 12px;
        padding: 0 8px;
        line-height: 1.3;
        width: 100%;
        display: block;
      }

      /* Make field labels more visible */
      ha-form mwc-formfield {
        font-weight: 500;
        color: var(--primary-text-color);
        margin-top: 8px;
      }

      /* File upload styles */
      .file-upload-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8px;
      }

      .file-upload-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 8px;
      }

      .file-upload-button ha-icon {
        margin-right: 8px;
      }

      .uploaded-image-preview {
        width: 100%;
        max-width: 300px;
        margin-top: 8px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid var(--divider-color);
      }

      .uploaded-image-preview img {
        width: 100%;
        display: block;
      }

      /* Notification styles */
      .notification {
        position: fixed;
        top: 16px;
        right: 16px;
        padding: 12px 16px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 300px;
        animation: slide-in 0.3s ease-out;
      }

      @keyframes slide-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .notification-info {
        background-color: var(--primary-color, #03a9f4);
        color: white;
      }

      .notification-success {
        background-color: var(--success-color, #4caf50);
        color: white;
      }

      .notification-warning {
        background-color: var(--warning-color, #ff9800);
        color: white;
      }

      .notification-error {
        background-color: var(--error-color, #f44336);
        color: white;
      }

      /* Icon Settings Tabs */
      .icon-settings-tabs {
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 16px;
      }

      .icon-settings-tab {
        padding: 8px 12px;
        font-size: 0.9em;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
        text-align: center;
        flex: 1;
      }

      .icon-settings-tab:hover {
        background-color: rgba(var(--rgb-primary-color), 0.1);
        color: var(--primary-text-color);
      }

      .icon-settings-tab.active {
        border-bottom: 2px solid var(--primary-color);
        color: var(--primary-color);
        font-weight: 500;
      }

      .icon-settings-content {
        padding: 0 4px;
      }

      .icon-settings-section {
        padding-bottom: 8px;
      }

      /* Icon preview section */
      .icon-preview-section {
        display: flex;
        justify-content: space-around;
        margin-bottom: 16px;
        background: rgba(var(--rgb-primary-color), 0.05);
        border-radius: 8px;
        padding: 12px 8px;
      }

      .icon-state-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 16px;
        border-radius: 8px;
      }

      .icon-state-preview.active {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-state-preview.inactive {
        background: rgba(var(--rgb-secondary-text-color), 0.1);
      }

      .icon-state-preview ha-icon {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .preview-name {
        font-size: 0.8em;
        opacity: 0.8;
      }

      .state-settings-group {
        margin-bottom: 20px;
        padding: 8px;
        border-radius: 4px;
        background: rgba(var(--rgb-primary-background-color), 0.5);
      }

      /* Responsive adjustments for mobile */
      @media (max-width: 460px) {
        .icon-settings-tabs {
          position: sticky;
          top: 0;
          background: var(--card-background-color);
          z-index: 1;
          padding-top: 4px;
        }

        .icon-settings-tab {
          padding: 6px 4px;
          font-size: 0.8em;
        }

        .icon-preview-section {
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .icon-state-preview {
          width: 100%;
          max-width: 120px;
        }

        .mini-bar-content {
          padding: 12px 8px;
        }

        .state-settings-group {
          padding: 4px;
          margin-bottom: 12px;
        }

        .color-picker-container {
          margin-top: 8px;
        }

        .color-picker-header {
          margin-bottom: 4px;
        }
      }

      /* Size Reset Buttons */
      .reset-buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
        padding: 0 8px;
      }

      .reset-button {
        flex: 1;
        min-width: 150px;
        font-size: 0.85em;
        padding: 4px 8px;
        --mdc-theme-primary: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .reset-button:hover {
        --mdc-theme-primary: var(--primary-color);
      }

      .reset-icon {
        margin-right: 4px;
        font-size: 16px;
      }

      /* Size field with inline reset button */
      .size-fields-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }

      .size-field {
        display: flex;
        align-items: center;
        position: relative;
      }

      .size-field ha-form {
        flex: 1;
        margin-bottom: 0;
      }

      .inline-reset-button {
        --mdc-icon-button-size: 36px;
        margin-left: 8px;
        color: var(--secondary-text-color);
        opacity: 0.8;
      }

      .inline-reset-button:hover {
        opacity: 1;
        color: var(--primary-color);
      }

      .drag-handle {
        cursor: grab;
        display: flex;
        align-items: center;
        margin-right: 8px;
        color: var(--secondary-text-color);
      }

      .mini-bar {
        position: relative;
      }

      .mini-bar.drag-over:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px dashed var(--primary-color);
        pointer-events: none;
      }

      .gradient-editor-container {
        margin-top: 16px;
        padding: 8px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.05);
      }

      .hass-error {
        color: var(--error-color);
        font-size: 0.8em;
        margin-top: 4px;
      }

      /* Styles for Bar Settings Tabs */
      .bar-settings-tabs {
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 16px;
      }

      .bar-settings-tab {
        padding: 8px 12px;
        font-size: 0.9em;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
        text-align: center;
        flex: 1;
      }

      .bar-settings-tab:hover {
        background-color: rgba(var(--rgb-primary-color), 0.1);
        color: var(--primary-text-color);
      }

      .bar-settings-tab.active {
        border-bottom: 2px solid var(--primary-color);
        color: var(--primary-color);
        font-weight: 500;
      }

      .bar-settings-content {
        padding: 0 4px; /* Add some padding if needed */
      }
      /* End Bar Settings Tabs Styles */

      /* Style for manually rendered descriptions */
      .form-item-container {
        /* Remove margin here, let the inner elements handle it */
      }
      .form-item-container ha-form {
        margin-bottom: 4px; /* Add small space after the form element */
      }
      .description {
        font-size: 14px;
        color: var(--secondary-text-color);
        padding: 0 8px; /* Match ha-form padding */
        margin-top: 8px; /* Remove the negative margin */
        margin-bottom: 16px; /* Add space after the description */
      }
      /* End Style for manually rendered descriptions */

      /* Vehicle information styles */
      .vehicle-info-card {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background-color: #2b2b2b;
        overflow: hidden;
        padding: 0;
      }

      .vehicle-info-title {
        font-weight: 500;
        padding: 12px 16px 4px;
        color: var(--primary-text-color);
      }

      .vehicle-info-description {
        font-size: 0.9em;
        padding: 0 16px 8px;
        color: var(--secondary-text-color);
      }

      .vehicle-info-controls {
        display: flex;
        padding: 8px 16px 16px;
        justify-content: space-between;
        align-items: center;
      }

      .vehicle-info-entity {
        flex-grow: 1;
        margin-right: 16px;
      }

      .vehicle-info-toggle {
        flex-shrink: 0;
        width: 68px;
      }

      .vehicle-info-controls ha-form {
        margin-bottom: 0;
      }

      .color-picker-container {
        margin-top: 16px;
      }

      ha-form [name='active_template'] textarea,
      ha-form [name='inactive_template'] textarea {
        min-height: 100px;
        font-family: monospace;
      }

      /* Style for the uploaded path span */
      .uploaded-path {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 250px; /* Adjust as needed */
        display: inline-block;
        vertical-align: middle;
      }

      .file-upload-row {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
      }

      .path-container {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      .uploaded-path {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        opacity: 0.9;
      }

      .file-upload-row {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin-bottom: 16px;
      }

      .file-input-container {
        min-width: 120px;
      }

      .path-display {
        flex: 1;
        overflow: hidden;
        padding: 4px 8px;
        background: var(--secondary-background-color);
        border-radius: 4px;
      }

      .uploaded-path {
        display: block;
        font-size: 0.9em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .file-upload-button {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        font-size: 14px;
        text-align: center;
        min-width: 120px;
        white-space: nowrap;
      }

      .file-upload-button:hover {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .no-file {
        color: var(--disabled-text-color);
        font-style: italic;
      }

      /* Add spacing for image descriptions */
      .image-description {
        padding: 4px 16px 12px 16px; /* T R B L padding */
        color: var(--secondary-text-color);
        font-size: 0.9em;
        line-height: 1.4;
      }

      .vehicle-info-toggle ha-form {
        margin-bottom: 0;
      }

      /* Reduce padding specifically for boolean toggle containers */
      .toggle-form-container {
        padding: 0 16px 16px; /* Reduce top padding */
      }

      .color-picker-container {
        margin-top: 16px;
      }
    `;
  }

  firstUpdated() {
    // Initialize entities list from hass
    this._refreshEntityList();

    // Add click listener to close dropdown when clicking outside
    document.addEventListener('click', e => {
      if (!this.shadowRoot?.contains(e.target as Node)) {
        this._showEntityList = false;
      }
    });

    // Load cropperjs dynamically
    this._loadCropperJS();
  }

  private _refreshEntityList() {
    if (!this.hass) return;

    // Create a list of all entities with friendly names
    this._entities = Object.keys(this.hass.states).map(entityId => ({
      entity_id: entityId,
      friendly_name: this.hass.states[entityId]?.attributes?.friendly_name || '',
    }));
  }

  private _onEntityInputChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const field = input.dataset.field || '';
    this._entityFilter = input.value;
    this._activeField = field;
    this._showEntityList = true;

    // Also update the config directly for manual typing
    if (field.includes('.')) {
      // Handle nested properties like 'bars.0.entity'
      const parts = field.split('.');
      if (parts[0] === 'bars' && parts.length === 3) {
        const index = parseInt(parts[1]);
        const property = parts[2];
        const bars = [...(this.config.bars || [])];

        if (bars[index]) {
          bars[index] = {
            ...bars[index],
            [property]: input.value,
          };
          this._updateConfig({ bars });
        }
      }
    } else {
      this._updateConfig({ [field]: input.value });
    }
  }

  private _onEntityFocus(ev: Event, field: string) {
    ev.stopPropagation();
    this._activeField = field;
    this._showEntityList = true;
    this._entityFilter = (ev.target as HTMLInputElement).value;
    this._refreshEntityList();
  }

  private _getFilteredEntities() {
    if (!this._entityFilter || this._entityFilter.length < 2) {
      return this._entities.sort((a, b) => a.entity_id.localeCompare(b.entity_id)).slice(0, 15); // Show first 15 by default, sorted alphabetically
    }

    const filter = this._entityFilter.toLowerCase();
    return this._entities
      .filter(
        entity =>
          entity.entity_id.toLowerCase().includes(filter) ||
          entity.friendly_name.toLowerCase().includes(filter)
      )
      .sort((a, b) => {
        // Sort exact matches first, then by whether they start with the filter, then alphabetically
        const aExact = a.entity_id.toLowerCase() === filter;
        const bExact = b.entity_id.toLowerCase() === filter;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;

        const aStartsWith = a.entity_id.toLowerCase().startsWith(filter);
        const bStartsWith = b.entity_id.toLowerCase().startsWith(filter);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;

        return a.entity_id.localeCompare(b.entity_id);
      })
      .slice(0, 15); // Limit to 15 results
  }

  private _selectEntity(field: string, entityId: string) {
    // Support for nested fields like 'bars.0.entity'
    if (field.includes('.')) {
      const parts = field.split('.');
      if (parts[0] === 'bars' && parts.length === 3) {
        const index = parseInt(parts[1]);
        const property = parts[2];
        const bars = [...(this.config.bars || [])];

        if (bars[index]) {
          bars[index] = {
            ...bars[index],
            [property]: entityId,
          };
          this._updateConfig({ bars });
        }
      }
    } else {
      this._updateConfig({ [field]: entityId });
    }

    this._showEntityList = false;
  }

  private _handleDragStart(e: DragEvent, index: number) {
    this._draggedBarIndex = index;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());

      // Add a ghost image
      const draggedEl = e.currentTarget as HTMLElement;
      if (draggedEl && e.dataTransfer) {
        const rect = draggedEl.getBoundingClientRect();
        const ghostEl = draggedEl.cloneNode(true) as HTMLElement;

        // Style the ghost element
        ghostEl.style.width = `${rect.width}px`;
        ghostEl.style.opacity = '0.7';
        ghostEl.style.position = 'absolute';
        ghostEl.style.top = '-1000px';
        ghostEl.style.border = '2px dashed var(--primary-color)';

        document.body.appendChild(ghostEl);
        e.dataTransfer.setDragImage(ghostEl, 20, 20);

        // Clean up ghost element after a short delay
        setTimeout(() => {
          document.body.removeChild(ghostEl);
        }, 100);
      }
    }
  }

  private _handleDragEnd() {
    this._draggedBarIndex = null;
    this._dropTargetIndex = null;
  }

  private _handleDragOver(e: DragEvent, index: number) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (this._draggedBarIndex !== index) {
      this._dropTargetIndex = index;
    }
  }

  private _handleDragLeave() {
    this._dropTargetIndex = null;
  }

  private _handleDrop(e: DragEvent, _index: number) {
    e.preventDefault();

    const data = e.dataTransfer?.getData('text/plain');
    if (data && this._draggedBarIndex !== null) {
      const newIndex = parseInt(data);
      this._rearrangeBars(this._draggedBarIndex, newIndex);
    }

    this._draggedBarIndex = null;
    this._dropTargetIndex = null;
  }

  private _rearrangeBars(fromIndex: number, toIndex: number) {
    const bars = [...(this.config.bars || [])];
    // Check if indexes are valid before modifying the array
    if (fromIndex < 0 || fromIndex >= bars.length || toIndex < 0 || toIndex >= bars.length) {
      console.error('Invalid bar indexes for rearrangement', {
        fromIndex,
        toIndex,
        totalBars: bars.length,
      });
      return;
    }

    const [movedBar] = bars.splice(fromIndex, 1);
    bars.splice(toIndex, 0, movedBar);

    // Update expanded bar index if needed
    if (this._expandedBar === fromIndex) {
      this._expandedBar = toIndex;
    } else if (this._expandedBar !== null && this._expandedBar > fromIndex) {
      this._expandedBar = this._expandedBar - 1;
    }

    this._updateConfig({ bars });
  }

  private _createDefaultConfig(): UltraVehicleCardConfig {
    return {
      type: 'custom:ultra-vehicle-card',
      vehicle_image_type: 'upload',
      status_image_type: 'none',
      layout_type: 'single',
      formatted_entities: false,
      bars: [],
    };
  }

  private async _handleFileInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || !input.files[0]) return;

    const file = input.files[0];

    try {
      console.log('[UPLOAD DEBUG] Starting upload to Home Assistant API');

      // Use the uploadImage utility function
      const { uploadImage } = await import('../utils/image-upload');
      const result = await uploadImage(this.hass, file);

      if (!result.success) {
        throw new Error(result.error || 'Failed to upload image');
      }

      // Check if we have a valid path from the upload
      if (!result.path) {
        console.error('[UPLOAD DEBUG] Error: Upload successful but no path returned');
        throw new Error('Upload successful but no path returned from server');
      }

      console.log('[UPLOAD DEBUG] Upload successful, path:', result.path);

      // Update the configuration with the image path
      this._updateConfig({
        vehicle_image: result.path,
        vehicle_image_type: 'upload',
      });

      console.log('[UPLOAD DEBUG] Updated config with new image path:', result.path);
    } catch (error) {
      console.error('[UPLOAD DEBUG] Error uploading file:', error);
      // Keep error alert for failures
      alert('Error uploading image: ' + (error instanceof Error ? error.message : String(error)));
    }
  }

  private _formatFieldName(name: string): string {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Add these helper methods inside the class, before the render() method

  private _createDefaultIconRow(): IconRowConfig {
    return {
      id: this._generateUniqueId(),
      width: '100',
      alignment: 'space-between',
      spacing: 'medium',
      icons: [], // Make sure this is an empty array, not undefined
    };
  }

  private _createDefaultIcon(): IconConfig {
    return {
      entity: '',
      icon_inactive: 'mdi:help-circle-outline',
      icon_active: 'mdi:help-circle',
      color_inactive: 'var(--secondary-text-color)',
      color_active: 'var(--primary-color)',
      inactive_state: 'off',
      active_state: 'on',
      inactive_template_mode: false,
      active_template_mode: false,
      inactive_template: '',
      active_template: '',
      show_state: true, // Default: show state enabled
      show_name: false,
      show_units: true, // Default: show units enabled
      name: '',
      on_click_action: 'toggle',
      text_position: 'bottom',
      vertical_alignment: 'center',
      icon_size: 22, // Default: icon size 22
      text_size: 12, // Default: text size 12
      icon_background: 'none', // Default: icon background none
      draggable: true,
    };
  }

  private _generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  private _rearrangeIconRows(fromRowId: string, toRowId: string) {
    const iconRows = [...(this.config.icon_rows || [])];
    const fromIndex = iconRows.findIndex(row => row.id === fromRowId);
    const toIndex = iconRows.findIndex(row => row.id === toRowId);

    if (fromIndex >= 0 && toIndex >= 0) {
      const [movedRow] = iconRows.splice(fromIndex, 1);
      iconRows.splice(toIndex, 0, movedRow);

      this._updateConfig({ icon_rows: iconRows });
    }
  }

  // Add this helper method for creating default crop settings
  private _createDefaultCropSettings(): ImageCropSettings {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  }

  // Add a method to load the cropperjs library
  private async _loadCropperJS() {
    // Check if cropperjs is already loaded
    if (window.cropperjs) return;

    // Create script element for cropperjs
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js';
    script.async = true;

    // Create link element for cropperjs CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.css';

    // Add to document
    document.head.appendChild(script);
    document.head.appendChild(link);

    // Wait for script to load
    await new Promise(resolve => {
      script.onload = resolve;
    });

    // Add cropperjs to window for typechecking purposes
    window.cropperjs = window.Cropper;
  }

  // Add a method to render the image cropper
  private _renderImageCropper() {
    if (!this._cropperActive) return html``;

    return html`
      <div class="cropper-overlay">
        <div class="cropper-container">
          <div class="cropper-header">
            <h3>Crop Image</h3>
            <ha-icon-button
              @click=${() => {
                this._cropperActive = false;
                this._cropperImage = '';
              }}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </ha-icon-button>
          </div>
          <div class="cropper-body">
            <img
              src="${this._cropperImage}"
              id="crop-image"
              style="max-width: 100%; max-height: 60vh;"
            />
            <div class="cropper-instructions">
              Drag to create a crop area. Double-click to crop.
            </div>
          </div>
          <div class="cropper-footer">
            <ha-button
              @click=${() => {
                this._cropperActive = false;
                this._cropperImage = '';
              }}
            >
              Cancel
            </ha-button>
            <ha-button @click=${this._applyCrop} class="primary"> Apply Crop </ha-button>
          </div>
        </div>
      </div>
    `;
  }

  // Add a method to apply the crop
  private _applyCrop() {
    // Get the cropper instance
    const cropImage = this.shadowRoot?.getElementById('crop-image');
    if (!cropImage || !window.cropperjs) {
      this._cropperActive = false;
      return;
    }

    const cropper = (cropImage as any).cropper;
    if (!cropper) {
      this._cropperActive = false;
      return;
    }

    // Get the cropped canvas
    const canvas = cropper.getCroppedCanvas({
      minWidth: 256,
      minHeight: 256,
      maxWidth: 4096,
      maxHeight: 4096,
      fillColor: '#fff',
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    });

    // Convert canvas to base64
    const croppedImage = canvas.toDataURL('image/png');

    // Update the config with the cropped image
    if (this._cropperTargetField === 'vehicle_image') {
      this._updateConfig({ vehicle_image: croppedImage });
    } else if (this._cropperTargetField.startsWith('action_image_')) {
      // Handle action image update
      const [_, entity, state] = this._cropperTargetField.split('_');

      // Create a deep copy of the config
      const newConfig = JSON.parse(JSON.stringify(this.config));

      // Initialize action_images if needed
      if (!newConfig.action_images) {
        newConfig.action_images = {};
      }

      // Initialize entity entry if needed
      if (!newConfig.action_images[entity]) {
        newConfig.action_images[entity] = {};
      }

      // Set the cropped image
      newConfig.action_images[entity][state] = croppedImage;

      // Update the config
      this._updateConfig(newConfig);
    }

    // Reset the cropper state
    this._cropperActive = false;
    this._cropperImage = '';
  }

  // Initialize cropper when the image is loaded
  updated(changedProperties) {
    super.updated(changedProperties);

    // Initialize the cropper when the cropper becomes active
    if (changedProperties.has('_cropperActive') && this._cropperActive) {
      setTimeout(() => {
        const cropImage = this.shadowRoot?.getElementById('crop-image');
        if (!cropImage || !window.cropperjs) return;

        new window.cropperjs(cropImage, {
          aspectRatio: NaN, // Free aspect ratio
          viewMode: 1,
          dragMode: 'crop',
          autoCrop: true,
          background: true,
          modal: true,
          guides: true,
          highlight: true,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: true,
        });
      }, 100);
    }
  }

  private _renderCropSliders(cropProperty: string) {
    // Get current crop settings or use defaults
    const cropSettings = this.config[cropProperty] || this._createDefaultCropSettings();

    return html`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">Top</span>
          <ha-textfield
            type="number"
            .value=${cropSettings.top || 0}
            @change=${e =>
              this._updateImageCrop(cropProperty, 'top', parseInt(e.target.value) || 0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Right</span>
          <ha-textfield
            type="number"
            .value=${cropSettings.right || 0}
            @change=${e =>
              this._updateImageCrop(cropProperty, 'right', parseInt(e.target.value) || 0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Bottom</span>
          <ha-textfield
            type="number"
            .value=${cropSettings.bottom || 0}
            @change=${e =>
              this._updateImageCrop(cropProperty, 'bottom', parseInt(e.target.value) || 0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Left</span>
          <ha-textfield
            type="number"
            .value=${cropSettings.left || 0}
            @change=${e =>
              this._updateImageCrop(cropProperty, 'left', parseInt(e.target.value) || 0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span>Enter pixel values (positive or negative) to adjust cropping and padding</span>
      </div>
    `;
  }

  private _renderIconRows() {
    const { icon_rows = [] } = this.config;

    if (!icon_rows || icon_rows.length === 0) return html``;

    return html`
      <div class="icon-rows-container">${icon_rows.map(row => this._renderCardIconRow(row))}</div>
    `;
  }

  private _renderCardIconRow(row: IconRowConfig) {
    if (!row.icons || !row.icons.length) return html``;

    const width = row.width || '100';
    const alignment = row.alignment || 'space-between';
    const spacing = row.spacing || 'medium';

    const spacingValue =
      {
        none: '0',
        small: '8px',
        medium: '16px',
        large: '24px',
      }[spacing] || '16px';

    return html`
      <div
        class="icon-row"
        style="width: ${width}%; justify-content: ${alignment}; gap: ${spacingValue};"
      >
        ${row.icons.map(icon => this._renderCardIcon(icon))}
      </div>
    `;
  }

  private _renderCardIcon(icon: IconConfig) {
    if (!icon.entity) return html``;

    const state = this.hass.states[icon.entity];
    if (!state) return html``;

    const isActive = state.state !== icon.inactive_state;
    const displayIcon = isActive && icon.icon_active ? icon.icon_active : icon.icon_inactive;
    const displayColor = isActive && icon.color_active ? icon.color_active : icon.color_inactive;

    // Use name if provided, otherwise use friendly name from entity
    const displayName = icon.name || state.attributes.friendly_name || '';

    // Get original state
    let displayState = state.state;
    const unit = state.attributes.unit_of_measurement;

    // Format state if formatted_entities is enabled
    if (this.config.formatted_entities && displayState) {
      // Handle numeric values with proper formatting
      if (!isNaN(Number(displayState))) {
        const numValue = Number(displayState);

        // If it's a large integer or has many decimal places, format it appropriately
        if (Math.abs(numValue) >= 1000 || numValue % 1 !== 0) {
          // Format large numbers with commas and limit decimal places
          displayState = numValue.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
          });
        }
      } else {
        // For non-numeric values, capitalize and replace underscores
        displayState = displayState
          .replace(/_/g, ' ')
          .replace(/\b\w/g, match => match.toUpperCase());
      }
    }

    // Add unit of measurement, currency, or other formatting from attributes
    if (displayState && icon.show_state) {
      const prefix = state.attributes.prefix || '';
      const suffix = state.attributes.suffix || '';

      // Show units if enabled
      if (unit && icon.show_units) {
        displayState = `${displayState} ${unit}`;
      }

      // Apply any prefix/suffix if they exist
      displayState = `${prefix}${displayState}${suffix}`;
    }

    // Set icon size based on configuration
    const iconSize = icon.icon_size ? `${icon.icon_size}px` : '24px';

    // Set text size based on configuration
    const textSize = icon.text_size ? `${icon.text_size}px` : '14px';

    // Set flex direction based on text position
    const flexDirection = {
      bottom: 'column',
      top: 'column-reverse',
      left: 'row-reverse',
      right: 'row',
    }[icon.text_position || 'bottom'];

    // Apply vertical alignment
    const alignItems = icon.vertical_alignment || 'center';

    return html`
      <div
        class="icon-container"
        @click=${() => this._handleIconClick(icon)}
        style="flex-direction: ${flexDirection}; align-items: ${alignItems};"
      >
        <ha-icon
          .icon="${displayIcon || 'mdi:help-circle-outline'}"
          style="color: ${displayColor || 'var(--primary-text-color)'}; font-size: ${iconSize};"
        ></ha-icon>
        <div
          style="display: flex; flex-direction: column; align-items: center; font-size: ${textSize};"
        >
          ${icon.show_name ? html`<div class="icon-label">${displayName}</div>` : ''}
          ${icon.show_state ? html`<div class="icon-state">${displayState}</div>` : ''}
        </div>
      </div>
    `;
  }

  private _handleIconClick(icon: IconConfig) {
    if (!icon.entity || !icon.on_click_action) return;

    switch (icon.on_click_action) {
      case 'toggle':
        const domain = icon.entity.split('.')[0];
        this.hass.callService(domain, 'toggle', { entity_id: icon.entity });
        break;
      case 'more-info':
        const event = new CustomEvent('hass-more-info', {
          detail: { entityId: icon.entity },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        break;
      // Add more actions if needed
    }
  }

  // Add this to your _renderVehicleImageConfig and _renderActionImageConfig methods

  private _renderVehicleImageConfig() {
    const { vehicle_image_type } = this.config;

    return html`
      <div class="image-config-container">
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="Vehicle Image Type"
          .configValue=${'vehicle_image_type'}
          .value=${vehicle_image_type}
          @selected=${this._valueChanged}
        >
          ${IMAGE_TYPE_OPTIONS.map(
            option => html`<mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>`
          )}
        </ha-select>

        ${vehicle_image_type === 'url'
          ? html`
              <ha-textfield
                label="Image URL"
                .configValue=${'vehicle_image'}
                .value=${this.config.vehicle_image || ''}
                @input=${this._valueChanged}
              ></ha-textfield>
            `
          : ''}
        ${vehicle_image_type === 'entity'
          ? html`
              <ha-entity-picker
                label="Image Entity"
                .hass=${this.hass}
                .configValue=${'vehicle_image_entity'}
                .value=${this.config.vehicle_image_entity || ''}
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
            `
          : ''}
        ${vehicle_image_type === 'upload'
          ? html`
              <div class="upload-container">
                <label>Upload Vehicle Image</label>
                <input
                  type="file"
                  accept="image/*"
                  @change=${this._handleFileInputChange}
                  style="width: 100%; margin-top: 8px;"
                />

                <div class="crop-accordion">
                  <div
                    class="crop-accordion-header"
                    @click=${() => {
                      this._vehicleCropExpanded = !this._vehicleCropExpanded;
                      this.requestUpdate();
                    }}
                  >
                    <span>Image Crop</span>
                    <ha-icon
                      icon="${this._vehicleCropExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                    ></ha-icon>
                  </div>

                  ${this._vehicleCropExpanded
                    ? html`
                        <div class="crop-controls">
                          ${this._renderCropSliders('vehicle_image_crop')}
                        </div>
                      `
                    : ''}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  // Add a new method to handle image uploads through Home Assistant's image_upload API
  private async _handleImageUpload(e: Event, configKey: string) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    try {
      // Import the uploadImage function
      const { uploadImage } = await import('../utils/image-upload');

      // Show loading notification
      const loadingNotification = this._showNotification('Uploading image...');

      // Upload the image to Home Assistant
      const result = await uploadImage(this.hass, file);

      // Close loading notification
      this._closeNotification(loadingNotification);

      if (!result.success) {
        // Show error notification
        this._showNotification(`Upload failed: ${result.error}`, 'error');
        return;
      }

      // Update config with the path from the server
      this._updateConfig({
        [configKey]: result.path,
      });

      // Show success notification
      this._showNotification('Image uploaded successfully', 'success');
    } catch (error) {
      console.error('[IMAGE UPLOAD] Error:', error);
      this._showNotification(
        `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'error'
      );
    } finally {
      // Clear the file input
      input.value = '';
    }
  }

  // Helper to show notifications
  private _showNotification(
    message: string,
    type: 'info' | 'success' | 'warning' | 'error' = 'info'
  ) {
    if (!this.shadowRoot) return null;

    const notificationEl = document.createElement('div');
    notificationEl.className = `notification notification-${type}`;
    notificationEl.textContent = message;

    this.shadowRoot.appendChild(notificationEl);

    // Auto-remove after 3 seconds for non-error notifications
    if (type !== 'error') {
      setTimeout(() => {
        this._closeNotification(notificationEl);
      }, 3000);
    }

    return notificationEl;
  }

  // Helper to close notifications
  private _closeNotification(notificationEl: HTMLElement | null) {
    if (notificationEl && notificationEl.parentNode) {
      notificationEl.parentNode.removeChild(notificationEl);
    }
  }

  // Do the same for the Action Image config
  private _renderActionImageConfig() {
    const { action_image_type } = this.config;

    return html`
      <div class="image-config-container">
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="Action Image Type"
          .configValue=${'action_image_type'}
          .value=${action_image_type}
          @selected=${this._valueChanged}
        >
          ${IMAGE_TYPE_OPTIONS.map(
            option => html`<mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>`
          )}
        </ha-select>

        ${action_image_type === 'url'
          ? html`
              <ha-textfield
                label="Image URL"
                .configValue=${'action_image'}
                .value=${this.config.action_image || ''}
                @input=${this._valueChanged}
              ></ha-textfield>
            `
          : ''}
        ${action_image_type === 'entity'
          ? html`
              <ha-entity-picker
                label="Image Entity"
                .hass=${this.hass}
                .configValue=${'action_image_entity'}
                .value=${this.config.action_image_entity || ''}
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
            `
          : ''}
        ${action_image_type === 'upload'
          ? html`
              <div class="upload-container">
                <label>Upload Action Image for "${this.config.action_state}" state</label>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <input
                    type="file"
                    accept="image/*"
                    @change=${(e: Event) => this._handleImageUpload(e, 'action_image')}
                  />
                  ${this.config.action_image
                    ? html`<span class="uploaded-path" title="${this.config.action_image}"
                        >${this._truncatePath(this.config.action_image)}</span
                      >`
                    : ''}
                </div>
              </div>
            `
          : ''}
        ${action_image_type && this.config.action_image_type !== 'none'
          ? html`
              <div class="crop-accordion" style="margin-top: 16px;">
                <div
                  class="crop-accordion-header"
                  @click=${() => {
                    this._actionCropExpanded = !this._actionCropExpanded;
                    this.requestUpdate();
                  }}
                >
                  <span>Image Crop</span>
                  <ha-icon
                    icon="${this._actionCropExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                  ></ha-icon>
                </div>

                ${this._actionCropExpanded
                  ? html`
                      <div class="crop-controls">
                        ${this._renderCropSliders('action_image_crop')}
                      </div>
                    `
                  : ''}
              </div>
            `
          : ''}
      </div>
    `;
  }

  // Add these helper methods
  private _updateImageCrop(cropProperty: string, side: string, value: number) {
    const currentCrop = this.config[cropProperty] || { top: 0, right: 0, bottom: 0, left: 0 };
    const updatedCrop = { ...currentCrop, [side]: value };

    const newConfig = {
      ...this.config,
      [cropProperty]: updatedCrop,
    };

    this._updateConfig(newConfig);
  }

  private _resetImageCrop(cropProperty: string) {
    const newConfig = {
      ...this.config,
      [cropProperty]: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    this._updateConfig(newConfig);
  }

  // Add drag and drop methods for bars
  private _handleBarDragStart(e, index) {
    this._draggedBar = index;
    e.dataTransfer.effectAllowed = 'move';
    // Use a transparent image as drag "ghost"
    const dragImage = document.createElement('div');
    dragImage.textContent = 'Bar ' + (index + 1);
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-1000px';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
  }

  private _handleBarDragEnd() {
    this._draggedBar = null;
    this._dropTargetBar = null;
  }

  private _handleBarDragOver(e, index) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (this._draggedBar !== null && this._draggedBar !== index) {
      this._dropTargetBar = index;
    }
  }

  private _handleBarDragLeave() {
    this._dropTargetBar = null;
  }

  private _handleBarDrop(e, index) {
    e.preventDefault();
    if (this._draggedBar === null || this._draggedBar === index) {
      return;
    }

    // Reorder bars
    const bars = [...(this.config.bars || [])];
    const [movedBar] = bars.splice(this._draggedBar, 1);
    bars.splice(index, 0, movedBar);

    this._updateConfig({
      ...this.config,
      bars,
    });

    this._draggedBar = null;
    this._dropTargetBar = null;
  }

  // Add this helper method
  private _resetIconColor(rowId: string, iconIndex: number, type: 'active' | 'inactive') {
    const defaultColors = {
      active: 'var(--primary-color)',
      inactive: 'var(--secondary-text-color)',
    };

    const updateProperty = type === 'active' ? 'color_active' : 'color_inactive';
    const updateValue = defaultColors[type];

    this._updateIconConfig(rowId, iconIndex, { [updateProperty]: updateValue });
  }

  // Add this new method to render draggable sections
  private _renderDraggableSections() {
    // Default section order if not set
    const defaultSections = ['title', 'image', 'info', 'bars', 'icons'];
    const sections = this.config.sections_order || defaultSections;
    const layoutType = this.config.layout_type || 'single';

    // If layout is double but sections_columns is not defined, initialize it
    if (layoutType === 'double' && !this.config.sections_columns) {
      // Initialize with all sections in the left column by default
      const initialColumns = {};
      sections.forEach(section => {
        initialColumns[section] = 'left';
      });
      this._updateConfig({ sections_columns: initialColumns });
    }

    // Get column assignments for sections or default to left
    const columns = this.config.sections_columns || {};

    if (layoutType === 'double') {
      // For two-column layout, split sections into left and right columns
      const leftSections = sections.filter(section => columns[section] !== 'right');
      const rightSections = sections.filter(section => columns[section] === 'right');

      return html`
        <div class="draggable-sections-container">
          <div class="columns-wrapper" style="display: flex; flex-direction: column; gap: 24px;">
            <div
              class="column-container left-column"
              @dragover=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this._handleColumnDragOver(e, 'left');
              }}
              @drop=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this._handleSectionDrop(e, 'left');
              }}
              @dragenter=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                const container = e.currentTarget as HTMLElement;
                container.classList.add('column-drag-over');
              }}
              @dragleave=${(e: DragEvent) => {
                e.stopPropagation();
                const container = e.currentTarget as HTMLElement;
                const rect = container.getBoundingClientRect();
                // Only remove if we actually leave the container (not just enter a child)
                if (
                  e.clientX < rect.left ||
                  e.clientX > rect.right ||
                  e.clientY < rect.top ||
                  e.clientY > rect.bottom
                ) {
                  container.classList.remove('column-drag-over');
                }
              }}
            >
              <div class="column-header">Left Column</div>
              ${leftSections.map((section, index) =>
                this._renderDraggableSection(section, index, 'left')
              )}
              ${leftSections.length === 0
                ? html`<div class="empty-column-message">Drag sections here</div>`
                : ''}
            </div>
            <div
              class="column-container right-column"
              @dragover=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this._handleColumnDragOver(e, 'right');
              }}
              @drop=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this._handleSectionDrop(e, 'right');
              }}
              @dragenter=${(e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                const container = e.currentTarget as HTMLElement;
                container.classList.add('column-drag-over');
              }}
              @dragleave=${(e: DragEvent) => {
                e.stopPropagation();
                const container = e.currentTarget as HTMLElement;
                const rect = container.getBoundingClientRect();
                if (
                  e.clientX < rect.left ||
                  e.clientX > rect.right ||
                  e.clientY < rect.top ||
                  e.clientY > rect.bottom
                ) {
                  container.classList.remove('column-drag-over');
                }
              }}
            >
              <div class="column-header">Right Column</div>
              ${rightSections.map((section, index) =>
                this._renderDraggableSection(section, index, 'right')
              )}
              ${rightSections.length === 0
                ? html`<div class="empty-column-message">Drag sections here</div>`
                : ''}
            </div>
          </div>
        </div>
      `;
    } else {
      // For single column layout, use the original rendering
      return html`
        <div class="draggable-sections-container">
          <div
            class="draggable-sections single-column"
            @dragover=${e => this._handleSectionDragOver(e)}
            @drop=${e => this._handleSectionDrop(e)}
          >
            ${sections.map((section, index) => this._renderDraggableSection(section, index))}
          </div>
        </div>
      `;
    }
  }

  private _handleColumnDragOver(e: DragEvent, targetColumn: string) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    // Highlight the column container
    const container = e.currentTarget as HTMLElement;

    // Add highlight class to the column
    const allColumns = this.shadowRoot?.querySelectorAll('.column-container');
    if (allColumns) {
      [...allColumns].forEach(col => col.classList.remove('column-drag-over'));
      container.classList.add('column-drag-over');
    }

    console.log('Dragging over column:', targetColumn);
  }

  private _renderDraggableSection(section: string, index: number, column: string | null = null) {
    // Check if this is a bar or icon row section
    if (section.startsWith('bar_')) {
      const barId = section.substring(4); // Remove 'bar_' prefix
      const barIndex = parseInt(barId);
      const bar = this.config.bars?.[barIndex];

      if (bar) {
        // Get entity display name for the header
        const entityName = this._getFriendlyName(bar.entity);
        const displayName = this._truncateText(entityName, 20) || 'Bar ' + (barIndex + 1);

        // Check if this section is hidden
        const isHidden = this.config.hidden_sections?.includes(section);

        return html`
          <div
            class="draggable-section"
            draggable="true"
            @dragstart=${(e: DragEvent) => this._handleSectionDragStart(e, index, column)}
            @dragend=${this._handleSectionDragEnd}
            data-index="${index}"
            data-section="${section}"
            data-column="${column || ''}"
          >
            <div class="drag-handle">
              <ha-icon icon="mdi:drag"></ha-icon>
            </div>
            <div class="section-info" style="flex: 1; overflow: hidden;">
              <ha-icon
                icon="mdi:chart-bar"
                style="font-size: 20px; color: var(--primary-color);"
              ></ha-icon>
              <span
                style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;"
                >Bar: ${displayName}</span
              >
            </div>
            <div
              style="margin-left: auto; cursor: pointer;"
              @click=${(e: MouseEvent) => this._toggleSectionVisibility(e, section)}
            >
              <ha-icon icon="${isHidden ? 'mdi:eye-off' : 'mdi:eye'}"></ha-icon>
            </div>
          </div>
        `;
      }
    } else if (section.startsWith('icon_row_')) {
      const rowId = section.substring(9); // Remove 'icon_row_' prefix
      const row = this.config.icon_rows?.find(r => r.id === rowId);

      if (row) {
        // Get a summary of the icons in this row
        const iconCount = row.icons?.length || 0;
        const displayName = `Icon Row (${iconCount} icon${iconCount !== 1 ? 's' : ''})`;

        // Check if this section is hidden
        const isHidden = this.config.hidden_sections?.includes(section);

        return html`
          <div
            class="draggable-section"
            draggable="true"
            @dragstart=${(e: DragEvent) => this._handleSectionDragStart(e, index, column)}
            @dragend=${this._handleSectionDragEnd}
            data-index="${index}"
            data-section="${section}"
            data-column="${column || ''}"
          >
            <div class="drag-handle">
              <ha-icon icon="mdi:drag"></ha-icon>
            </div>
            <div class="section-info" style="flex: 1; overflow: hidden;">
              <ha-icon
                icon="mdi:view-grid"
                style="font-size: 20px; color: var(--primary-color);"
              ></ha-icon>
              <span
                style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;"
                >${displayName}</span
              >
            </div>
            <div
              style="margin-left: auto; cursor: pointer;"
              @click=${(e: MouseEvent) => this._toggleSectionVisibility(e, section)}
            >
              <ha-icon icon="${isHidden ? 'mdi:eye-off' : 'mdi:eye'}"></ha-icon>
            </div>
          </div>
        `;
      }
    }

    // If not a special section, use the default rendering
    const sectionInfo = {
      title: { name: 'Title', icon: 'mdi:format-title' },
      image: { name: 'Vehicle Image', icon: 'mdi:car' },
      info: { name: 'Vehicle Info', icon: 'mdi:information-outline' },
    };

    const info = sectionInfo[section] || { name: section, icon: 'mdi:help-circle' };

    // Check if this section is hidden
    const isHidden = this.config.hidden_sections?.includes(section);

    return html`
      <div
        class="draggable-section"
        draggable="true"
        @dragstart=${(e: DragEvent) => this._handleSectionDragStart(e, index, column)}
        @dragend=${this._handleSectionDragEnd}
        data-index="${index}"
        data-section="${section}"
        data-column="${column || ''}"
      >
        <div class="drag-handle">
          <ha-icon icon="mdi:drag"></ha-icon>
        </div>
        <div class="section-info" style="flex: 1; overflow: hidden;">
          <ha-icon
            icon="${info.icon}"
            style="font-size: 20px; color: var(--primary-color);"
          ></ha-icon>
          <span
            style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;"
            >${info.name}</span
          >
        </div>
        <div
          style="margin-left: auto; cursor: pointer;"
          @click=${(e: MouseEvent) => this._toggleSectionVisibility(e, section)}
        >
          <ha-icon icon="${isHidden ? 'mdi:eye-off' : 'mdi:eye'}"></ha-icon>
        </div>
      </div>
    `;
  }

  // Add a method to toggle section visibility
  private _toggleSectionVisibility(e: MouseEvent, section: string) {
    e.preventDefault();
    e.stopPropagation();

    // Create a copy of the hidden_sections array or initialize if it doesn't exist
    const hiddenSections = [...(this.config.hidden_sections || [])];

    // Toggle the section's visibility
    const sectionIndex = hiddenSections.indexOf(section);
    if (sectionIndex === -1) {
      // Section is currently visible, hide it
      hiddenSections.push(section);
    } else {
      // Section is currently hidden, show it
      hiddenSections.splice(sectionIndex, 1);
    }

    // Update the config
    this._updateConfig({ hidden_sections: hiddenSections });
  }

  // Drag and drop handlers
  private _handleSectionDragStart(e: DragEvent, index: number, column: string | null = null) {
    // Store both the index and column of the dragged section
    this._draggedSection = index;
    // Store the column and section data directly on the dataTransfer object
    const sectionElement = e.currentTarget as HTMLElement;
    const sectionName = sectionElement.getAttribute('data-section');

    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());
      if (sectionName) {
        e.dataTransfer.setData('application/section-name', sectionName);
      }
      e.dataTransfer.setData('application/section-column', column || '');

      // Create a better ghost image for dragging
      const rect = sectionElement.getBoundingClientRect();
      const ghostEl = sectionElement.cloneNode(true) as HTMLElement;

      // Style the ghost element to look like the original
      ghostEl.style.width = `${rect.width}px`;
      ghostEl.style.opacity = '0.9';
      ghostEl.style.position = 'absolute';
      ghostEl.style.top = '-1000px';
      ghostEl.style.zIndex = '9999';
      ghostEl.style.pointerEvents = 'none';
      ghostEl.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';
      ghostEl.style.transform = 'rotate(2deg)';

      // Keep exact styles from the original
      ghostEl.style.backgroundColor = window.getComputedStyle(sectionElement).backgroundColor;
      ghostEl.style.color = window.getComputedStyle(sectionElement).color;
      ghostEl.style.padding = window.getComputedStyle(sectionElement).padding;
      ghostEl.style.borderRadius = window.getComputedStyle(sectionElement).borderRadius;
      ghostEl.style.fontWeight = window.getComputedStyle(sectionElement).fontWeight;

      // Add ghost to document body
      document.body.appendChild(ghostEl);

      // Set the drag image with appropriate offset
      e.dataTransfer.setDragImage(ghostEl, 20, 20);

      // Clean up ghost element after a short delay
      setTimeout(() => {
        if (document.body.contains(ghostEl)) {
          document.body.removeChild(ghostEl);
        }
      }, 300);

      console.log('Drag started for section:', sectionName, 'from column:', column || 'single');
    }

    if (e.currentTarget && e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.add('dragging');
    }
  }

  private _handleSectionDragEnd(e: DragEvent) {
    if (e.currentTarget && e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.remove('dragging');
    }
    this._draggedSection = null;
  }

  private _handleSectionDragOver(e: DragEvent, targetColumn: string | null = null) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    // In single column layout, use the original target finding logic
    if (!targetColumn) {
      const target = this._findDraggableSectionParent(e.target as HTMLElement);
      if (!target) return;

      const targetIndex = parseInt(target.getAttribute('data-index') || '0');

      if (this._draggedSection !== null && this._draggedSection !== targetIndex) {
        // Highlight drop zone
        const sections = this.shadowRoot?.querySelectorAll('.draggable-section');
        if (sections) {
          [...sections].forEach(s => s.classList.remove('drag-over'));
          target.classList.add('drag-over');
        }
      }
    } else {
      // For two-column layout, highlight the column
      const columnContainer = e.currentTarget as HTMLElement;

      // Highlight the column as a drop target
      const allColumns = this.shadowRoot?.querySelectorAll('.column-container');
      if (allColumns) {
        [...allColumns].forEach(col => col.classList.remove('column-drag-over'));
        columnContainer.classList.add('column-drag-over');
      }
    }
  }

  private _handleSectionDrop(e: DragEvent, targetColumn: string | null = null) {
    e.preventDefault();

    // Get the section that is being moved
    if (!e.dataTransfer) return;

    const sectionName = e.dataTransfer.getData('application/section-name');
    const sourceColumn = e.dataTransfer.getData('application/section-column');

    console.log(
      'Dropping section:',
      sectionName,
      'from column:',
      sourceColumn,
      'to column:',
      targetColumn
    );

    if (this.config.layout_type === 'double' && targetColumn) {
      // Handle drop in two-column layout
      // Update the column assignment
      if (!sectionName) {
        console.error('No section name found in dataTransfer');
        return;
      }

      const columns = { ...(this.config.sections_columns || {}) };

      // Make sure we're getting a valid target column
      if (targetColumn !== 'left' && targetColumn !== 'right') {
        console.error('Invalid target column:', targetColumn);
        return;
      }

      // Update the section's column
      columns[sectionName] = targetColumn as 'left' | 'right';

      // Get updated config with deep copy to avoid reference issues
      const newConfig = JSON.parse(JSON.stringify(this.config));
      newConfig.sections_columns = columns;

      // Apply the update
      this._updateConfig(newConfig);
      console.log('Updated columns config:', columns);
    } else {
      // Handle drop in single-column layout (original behavior)
      const target = this._findDraggableSectionParent(e.target as HTMLElement);
      if (!target) return;

      const targetIndex = parseInt(target.getAttribute('data-index') || '0');

      if (this._draggedSection !== null && this._draggedSection !== targetIndex) {
        // Create a copy of the sections array instead of modifying it directly
        const sections = [
          ...(this.config.sections_order || ['title', 'image', 'info', 'bars', 'icons']),
        ];

        // Perform the reordering on the copy
        const movedSection = sections[this._draggedSection];
        const newSections = sections.filter((_, i) => i !== this._draggedSection);
        newSections.splice(targetIndex, 0, movedSection);

        console.log('Reordering sections:', {
          from: this._draggedSection,
          to: targetIndex,
          sections,
          newSections,
        });

        // Update config with the new array
        this._updateConfig({ sections_order: newSections });
      }
    }

    // Clear highlighting
    const sectionElements = this.shadowRoot?.querySelectorAll('.draggable-section');
    if (sectionElements) {
      [...sectionElements].forEach(s => s.classList.remove('drag-over'));
    }

    const columnElements = this.shadowRoot?.querySelectorAll('.column-container');
    if (columnElements) {
      [...columnElements].forEach(col => col.classList.remove('column-drag-over'));
    }

    // Force UI update
    this.requestUpdate();
  }

  private _findDraggableSectionParent(element: HTMLElement): HTMLElement | null {
    let el: HTMLElement | null = element;
    while (el && !el.classList.contains('draggable-section')) {
      el = el.parentElement;
    }
    return el;
  }

  // Find the _ensureGradientStops method and remove the unused barIndex parameter
  private _ensureGradientStops(bar: BarConfig): void {
    // Helper to ensure a bar has valid gradient stops
    if (!Array.isArray(bar.gradient_stops) || bar.gradient_stops.length < 2) {
      // Create default stops (0% red, 100% green)
      bar.gradient_stops = createDefaultGradientStops();
      console.log('[Editor] Created default boundary stops:', JSON.stringify(bar.gradient_stops));
    }

    // Ensure the boundary stops (ID '1' and '2') exist and have correct positions
    let stop1 = bar.gradient_stops.find(s => s.id === '1');
    let stop2 = bar.gradient_stops.find(s => s.id === '2');

    if (!stop1) {
      stop1 = { id: '1', position: 0, color: '#ff0000' };
      bar.gradient_stops.push(stop1);
      console.log('[Editor] Added missing boundary stop 1');
    } else {
      stop1.position = 0; // Ensure position is correct
    }

    if (!stop2) {
      stop2 = { id: '2', position: 100, color: '#00ff00' };
      bar.gradient_stops.push(stop2);
      console.log('[Editor] Added missing boundary stop 2');
    } else {
      stop2.position = 100; // Ensure position is correct
    }

    // Validate and sort all stops
    bar.gradient_stops = this._sortAndValidateStops(bar.gradient_stops);

    // Update the position cache for all stops
    const barIndex = this.config.bars?.findIndex(b => b === bar) ?? -1;
    if (barIndex !== -1) {
      bar.gradient_stops.forEach(stop => {
        const globalKey = `bar${barIndex}-stop-${stop.id}`;
        this._latestStopPositions[globalKey] = stop.position;
        console.log(`[Editor] Refreshed position cache for ${globalKey}: ${stop.position}`);
      });
    }

    // Ensure gradient mode and display mode are set
    if (bar.use_gradient === undefined) {
      bar.use_gradient = false;
    }
    if (!bar.gradient_display_mode) {
      bar.gradient_display_mode = 'value_based';
    }
  }

  // CRITICAL FIX: Create a shared reference outside the component to store the latest drag position
  // This ensures the position data survives even if the component re-renders
  // We need to use a global variable since the local state isn't being preserved correctly
  latestStopPositions: Record<string, number> = {};

  // Add a dedicated method to sort and validate gradient stops
  private _sortAndValidateStops(stops: any[]): GradientStop[] {
    // Filter out invalid stops
    const validStops = (stops || []).filter(
      stop =>
        stop &&
        typeof stop.id === 'string' &&
        typeof stop.position === 'number' &&
        typeof stop.color === 'string'
    );

    // Sort by position
    return [...validStops].sort((a, b) => a.position - b.position);
  }

  private _renderGradientEditor(bar: BarConfig, index: number) {
    // First ensure bar has gradient stops array initialized
    if (!bar.gradient_stops || bar.gradient_stops.length < 2) {
      this._ensureGradientStops(bar);
    }

    // Validate the stops are properly formed
    const validStops = (bar.gradient_stops || []).filter(
      stop =>
        stop &&
        typeof stop.id === 'string' &&
        typeof stop.position === 'number' &&
        typeof stop.color === 'string'
    );

    // Make a clean copy of stops sorted by position
    const sortedStops = this._sortAndValidateStops(validStops);

    // Get the editor key for this bar if one exists
    const editorKey = this._gradientEditorKeys[index] || 0;

    // Log what we're rendering
    console.log(
      `[Editor] Rendering gradient editor for bar ${index} with ${sortedStops.length} stops and key ${editorKey}`
    );

    // Handler for gradient changed event (e.g., stop moved)
    const handleGradientChanged = async (e: CustomEvent) => {
      console.log(`[Editor] Gradient changed for bar ${index}:`, e.detail);
      const stops = e.detail.stops;

      if (!Array.isArray(stops)) {
        console.warn('[Editor] Invalid stops array received in gradient-changed event');
        return;
      }

      const newConfig = JSON.parse(JSON.stringify(this.config));
      newConfig.bars[index].gradient_stops = stops;

      // CRITICAL: Update position cache with new positions
      this._updateAllStopPositions(index, stops);

      this._updateConfig(newConfig);

      // Note: Removed _forceCompleteGradientRefresh since we're updating position cache directly
    };

    // --- Handler for stops that don't show up during operations ---
    const handleGeneralUpdateNeeded = () => {
      // Force a refresh of the gradient editor by incrementing the key
      this._gradientEditorKeys = {
        ...this._gradientEditorKeys,
        [index]: (this._gradientEditorKeys[index] || 0) + 1,
      };

      this.requestUpdate();

      // Fire a refresh event to update the gradient display
      setTimeout(() => {
        this._fireForceGradientRefreshEvent();
        console.log(`[Editor] Forced refresh after general update need detected`);
      }, 0);
    };

    // --- Handle new stop-color-change event from native input ---
    const handleStopColorChange = async (e: CustomEvent) => {
      e.stopPropagation();
      const { stopId, newColor } = e.detail;

      console.log(`[Editor] Received stop-color-change for stop ${stopId} to ${newColor}`);

      // Create a deep copy of the config for updating
      const newConfig = JSON.parse(JSON.stringify(this.config));

      if (!newConfig.bars || !newConfig.bars[index] || !newConfig.bars[index].gradient_stops) {
        console.warn(`[Editor] Cannot update color - no gradient stops for bar ${index}`);
        return;
      }

      // CRITICAL FIX: Use the class-based storage for this specific stop
      const globalKey = `bar${index}-stop-${stopId}`;
      const latestPosition = this._latestStopPositions[globalKey];

      console.log(`[Editor] Retrieved latest position for ${stopId}: ${latestPosition}`);

      let stopFound = false;

      // Update the gradient stops with the new color and latest position
      newConfig.bars[index].gradient_stops = newConfig.bars[index].gradient_stops.map(stop => {
        if (stop.id === stopId) {
          stopFound = true;

          // If we have a latest position, use it, otherwise keep the current position
          const position = latestPosition !== undefined ? latestPosition : stop.position;

          console.log(
            `[Editor] Updating stop ${stopId} with color ${newColor} and position ${position}`
          );
          return { ...stop, color: newColor, position };
        }
        return stop;
      });

      // Sort stops by position before updating
      newConfig.bars[index].gradient_stops = this._sortAndValidateStops(
        newConfig.bars[index].gradient_stops
      );

      if (!stopFound) {
        console.warn(`[Editor] Stop ${stopId} not found in config.`);
        return;
      }

      // Make sure use_gradient stays on
      newConfig.bars[index].use_gradient = true;

      // Ensure gradient_display_mode is preserved
      if (!newConfig.bars[index].gradient_display_mode) {
        newConfig.bars[index].gradient_display_mode = 'value_based';
      }

      // Increment key to force re-rendering
      this._gradientEditorKeys = {
        ...this._gradientEditorKeys,
        [index]: (this._gradientEditorKeys[index] || 0) + 1,
      };

      // Update the config directly
      this._updateConfig(newConfig);

      // Force an additional update
      // REMOVED unnecessary this.requestUpdate();

      // Wait for the component to finish updating
      // REMOVED unnecessary await this.updateComplete;

      // Force immediate refresh of the gradient
      // REMOVED timeout loop for _fireForceGradientRefreshEvent
      await this._forceCompleteGradientRefresh(index);

      // REMOVED redundant _forceCompleteGradientRefresh call
    };

    // Handle add stop event
    const handleAddStop = (e: CustomEvent) => {
      e.stopPropagation();
      this._addGradientStop(index);
    };

    // Handle delete stop event
    const handleDeleteStop = (e: CustomEvent) => {
      e.stopPropagation();
      const { stopId } = e.detail;

      // Debug event contents
      console.log(`[Editor] Received delete event for stop ID: ${stopId}`);
      console.log(`[Editor] Delete event detail:`, JSON.stringify(e.detail));

      // Check if the stop exists in the current configuration
      if (bar.gradient_stops && bar.gradient_stops.length > 0) {
        const stopExists = bar.gradient_stops.some(stop => stop.id === stopId);
        if (!stopExists) {
          console.warn(`[Editor] Stop with ID ${stopId} not found in configuration`);
          // Try to match by index if ID doesn't match
          if (bar.gradient_stops.length > 2) {
            const indexToRemove = Math.min(
              Math.floor(bar.gradient_stops.length / 2),
              bar.gradient_stops.length - 1
            );
            const alternativeStopId = bar.gradient_stops[indexToRemove].id;
            console.log(
              `[Editor] Attempting to remove alternative stop with ID: ${alternativeStopId}`
            );
            this._removeGradientStop(index, alternativeStopId);
          }
          return;
        }
      } else {
        console.warn(`[Editor] No gradient stops found in bar ${index}`);
        return;
      }

      this._removeGradientStop(index, stopId);
    };

    // Handle reset stops event
    const handleResetStops = (e: CustomEvent) => {
      e.stopPropagation();
      this._resetGradientStops(index);
    };

    return html`
      <div class="section-group">
        <div
          class="gradient-editor-container"
          @click=${(e: Event) => e.stopPropagation()}
          @dragstart=${(e: Event) => e.stopPropagation()}
          @dragover=${(e: Event) => e.stopPropagation()}
          @drop=${(e: Event) => e.stopPropagation()}
        >
          <gradient-editor
            .key=${editorKey}
            .stops=${sortedStops}
            @gradient-changed=${handleGradientChanged}
            @stop-color-change=${handleStopColorChange}
            @gradient-stop-add=${handleAddStop}
            @gradient-stop-delete=${handleDeleteStop}
            @gradient-stop-reset=${handleResetStops}
            // REMOVED @click=${handleGeneralUpdateNeeded}
          ></gradient-editor>
        </div>
      </div>
    `;
  }

  private _getGradientToggleSchema(index: number): SchemaItem[] {
    // Ensure return type is an array
    // Ensure config and the specific bar exist before generating schema
    const barExists = this.config?.bars?.[index];
    // More robust check for use_gradient
    const useGradient =
      barExists && typeof barExists === 'object' && barExists.use_gradient === true;

    return [
      {
        name: `bars.${index}.use_gradient`,
        selector: { boolean: {} },
        label: 'Use Gradient Mode',
        description: 'Use a color gradient instead of a solid color',
      },
      // Conditionally add gradient display mode only if the bar exists and use_gradient is true
      ...(useGradient // Use the refined check
        ? [
            {
              name: `bars.${index}.gradient_display_mode`,
              selector: {
                select: {
                  options: [
                    { value: 'value_based', label: 'Value-Based Color' },
                    { value: 'full', label: 'Full Gradient' },
                  ],
                  mode: 'dropdown',
                },
              },
              label: 'Gradient Display Mode',
              description: 'Choose how to display the gradient on the bar',
            },
          ]
        : []),
    ];
  }

  private _resetIconSize(rowId: string, iconIndex: number, field: 'icon_size' | 'text_size') {
    const newConfig = JSON.parse(JSON.stringify(this.config));
    if (!newConfig.icon_rows || !newConfig.icon_rows.length) return;

    const rowIndex = newConfig.icon_rows.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    const icon = newConfig.icon_rows[rowIndex].icons[iconIndex];
    if (!icon) return;

    // Set the default sizes based on field type
    let defaultValue;
    if (field === 'icon_size') {
      defaultValue = 24; // Default icon size in px
    } else {
      defaultValue = 14; // Default text size in px
    }

    // Update the icon with default value
    const updatedIcon = { ...icon };
    delete updatedIcon[field]; // Remove the property to use default

    // Apply the update
    newConfig.icon_rows[rowIndex].icons[iconIndex] = updatedIcon;
    this._updateConfig(newConfig);

    // Show feedback notification that size was reset
    const fieldName = field === 'icon_size' ? 'Icon size' : 'Text size';
    console.log(`Reset ${fieldName} to ${defaultValue}px`);
  }

  private _resetTitleSize() {
    this._updateConfig({ title_size: 24 });
  }

  private _getImageSchema(prefix: 'vehicle' | 'action') {
    const imageTypeField = `${prefix}_image_type`;
    const imageField = `${prefix}_image`;
    const imageEntityField = `${prefix}_image_entity`;
    const imageWidthField = `${prefix}_image_width`;

    const schema: any[] = [
      {
        name: imageTypeField,
        selector: {
          select: {
            options: [
              { value: 'none', label: 'None' },
              { value: 'default', label: 'Default' },
              { value: 'upload', label: 'Upload' },
              { value: 'url', label: 'URL' },
              { value: 'entity', label: 'Entity' },
            ],
            mode: 'dropdown',
          },
        },
        label: `${prefix === 'vehicle' ? 'Vehicle' : 'Action'} Image Type`,
        description: `Select how to display the ${prefix === 'vehicle' ? 'vehicle' : 'action'} image`,
      },
    ];

    const imageType = this.config[imageTypeField];

    // Move URL and Entity fields before width
    if (imageType === 'url') {
      schema.push({
        name: imageField,
        selector: { text: {} },
        label: 'Image URL',
        description: `URL pointing to the image to display ${prefix === 'vehicle' ? 'normally' : 'when the action state is met.'}`,
      });
    } else if (imageType === 'entity') {
      schema.push({
        name: imageEntityField,
        selector: { entity: {} },
        label: 'Image Entity',
        description: `Entity whose state provides the URL for the ${prefix === 'vehicle' ? 'normal' : 'action'} image.`,
      });
    }

    // Add width field last
    if (imageType && imageType !== 'none') {
      schema.push({
        name: imageWidthField,
        selector: {
          number: {
            min: 0,
            max: 100,
            step: 1,
            mode: 'box',
            suffix: '%',
          },
        },
        label: 'Image Width',
        description: `Width of the ${prefix === 'vehicle' ? 'vehicle' : 'action'} image as a percentage of card width`,
      });
    }

    // Add Action Entity and Action State fields *only* for the action image
    if (prefix === 'action') {
      schema.push(
        {
          name: 'action_entity',
          selector: { entity: {} },
          label: 'Action Entity',
          description: 'Entity to monitor for the action state.',
        },
        {
          name: 'action_state',
          selector: { text: {} },
          label: 'Action State',
          description: 'State value that triggers the action image display.',
        }
      );
    }

    return schema;
  }

  // Add methods for gradient stop management
  private async _addGradientStop(barIndex: number) {
    const newConfig = JSON.parse(JSON.stringify(this.config));
    if (!newConfig.bars || !newConfig.bars[barIndex]) return;

    // Ensure gradient_stops exists and is an array
    if (!Array.isArray(newConfig.bars[barIndex].gradient_stops)) {
      newConfig.bars[barIndex].gradient_stops = [];
    }

    const currentStops = newConfig.bars[barIndex].gradient_stops;

    // Check stop limit (max 7)
    if (currentStops.length >= 7) {
      console.warn('[Editor] Max stops (7) reached. Cannot add more.');
      // Maybe show a user notification here?
      return;
    }

    // Instead of adding at the largest gap, we'll create evenly distributed stops
    // First, sort stops by position
    const sortedStops = [...currentStops].sort((a, b) => a.position - b.position);

    // Find next available ID (3-7)
    const existingIds = new Set(sortedStops.map(stop => stop.id));
    let nextId = -1;
    for (let i = 3; i <= 7; i++) {
      if (!existingIds.has(String(i))) {
        nextId = i;
        break;
      }
    }

    if (nextId === -1) {
      console.warn('[Editor] Could not find an available ID between 3 and 7.');
      return;
    }

    // Calculate target positions - we want them evenly spaced
    // For example, with 3 stops: 0%, 50%, 100%
    //              with 4 stops: 0%, 33%, 67%, 100%
    //              with 5 stops: 0%, 25%, 50%, 75%, 100%
    const targetStopCount = sortedStops.length + 1; // +1 for the new stop we're adding
    const targetPositions = Array.from({ length: targetStopCount }, (_, i) =>
      Math.round((i / (targetStopCount - 1)) * 100)
    );

    console.log(
      `[Editor] Creating equally distributed stops. Target positions: ${targetPositions.join(', ')}`
    );

    // Create a new array with stops at the target positions
    // Keep the 0% and 100% boundary stops with their current colors
    const newStops: GradientStop[] = [];

    // Find existing boundary stops (closest to 0% and 100%)
    const startStop =
      sortedStops.find(s => s.position === 0) ||
      (sortedStops.length > 0
        ? sortedStops.reduce((prev, curr) => (prev.position < curr.position ? prev : curr))
        : null);

    const endStop =
      sortedStops.find(s => s.position === 100) ||
      (sortedStops.length > 0
        ? sortedStops.reduce((prev, curr) => (prev.position > curr.position ? prev : curr))
        : null);

    // Create our new stops array with target positions
    for (let i = 0; i < targetPositions.length; i++) {
      const position = targetPositions[i];

      // For first and last position, try to use existing boundary stops
      if (i === 0 && startStop) {
        const stop: GradientStop = { ...startStop, position: 0 };
        newStops.push(stop);
      } else if (i === targetPositions.length - 1 && endStop) {
        const stop: GradientStop = { ...endStop, position: 100 };
        newStops.push(stop);
      } else {
        // For other positions, find closest existing stop or create new
        const closestStop =
          sortedStops.length > 0
            ? sortedStops.reduce((prev, curr) =>
                Math.abs(curr.position - position) < Math.abs(prev.position - position)
                  ? curr
                  : prev
              )
            : null;

        if (closestStop && closestStop.position === position) {
          // If we already have a stop at this exact position, use it
          newStops.push({ ...closestStop, position });
        } else if (i === targetPositions.length - 2) {
          // For the new stop we're adding (second to last position)
          // Interpolate color between start and end stops
          const startColor = startStop?.color || '#ff0000';
          const endColor = endStop?.color || '#00ff00';

          // Simple RGB interpolation - could be improved for more sophisticated gradients
          const startRGB = startStop?.color
            ? this.parseColor(startStop.color) || { r: 255, g: 0, b: 0 }
            : { r: 255, g: 0, b: 0 };
          const endRGB = endStop?.color
            ? this.parseColor(endStop.color) || { r: 0, g: 255, b: 0 }
            : { r: 0, g: 255, b: 0 };

          const factor = position / 100;
          const r = Math.round(startRGB.r + factor * (endRGB.r - startRGB.r));
          const g = Math.round(startRGB.g + factor * (endRGB.g - startRGB.g));
          const b = Math.round(startRGB.b + factor * (endRGB.b - startRGB.b));

          const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

          newStops.push({
            id: String(nextId),
            position,
            color,
          });
        } else {
          // For other new positions, try to reuse existing stops
          const existingStop = sortedStops.find(s => !newStops.some(ns => ns.id === s.id));
          if (existingStop) {
            newStops.push({ ...existingStop, position });
          }
        }
      }
    }

    // Fill in any gaps in our array (should not happen with our logic)
    if (newStops.length < targetPositions.length) {
      const missingPositions = targetPositions.filter(
        pos => !newStops.some(stop => stop.position === pos)
      );

      for (const position of missingPositions) {
        // Interpolate color
        const factor = position / 100;
        const startRGB = { r: 255, g: 0, b: 0 };
        const endRGB = { r: 0, g: 255, b: 0 };

        const r = Math.round(startRGB.r + factor * (endRGB.r - startRGB.r));
        const g = Math.round(startRGB.g + factor * (endRGB.g - startRGB.g));
        const b = Math.round(startRGB.b + factor * (endRGB.b - startRGB.b));

        const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

        newStops.push({
          id: String(nextId++),
          position,
          color,
        });
      }
    }

    // Ensure we have at least two stops
    if (newStops.length < 2) {
      newStops.push(
        { id: '1', position: 0, color: '#ff0000' },
        { id: '2', position: 100, color: '#00ff00' }
      );
    }

    // Sort one final time
    newStops.sort((a, b) => a.position - b.position);

    // Update the config with our new evenly-distributed stops
    newConfig.bars[barIndex].gradient_stops = newStops;

    // Ensure gradient mode is on and display mode is set
    newConfig.bars[barIndex].use_gradient = true;
    if (!newConfig.bars[barIndex].gradient_display_mode) {
      newConfig.bars[barIndex].gradient_display_mode = 'value_based';
    }

    // Update the positions cache with all stops
    newStops.forEach(stop => {
      const globalKey = `bar${barIndex}-stop-${stop.id}`;
      this._latestStopPositions[globalKey] = stop.position;
      console.log(`[Editor] Initialized position cache for ${globalKey}: ${stop.position}`);
    });

    // Update config
    this._updateConfig(newConfig);

    // Force a complete refresh
    await this._forceCompleteGradientRefresh(barIndex);
  }

  // Helper function to parse color hex string to RGB object
  private parseColor(color: string): { r: number; g: number; b: number } | null {
    if (!color) return null;

    // Remove # if present
    color = color.replace('#', '');

    // Handle 3-character hex
    if (color.length === 3) {
      color = color
        .split('')
        .map(c => c + c)
        .join('');
    }

    // Ensure we have a valid 6-character hex
    if (color.length !== 6) {
      return null;
    }

    try {
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
      return { r, g, b };
    } catch (e) {
      return null;
    }
  }

  // Helper method to update all stop positions in our position cache
  private _updateAllStopPositions(barIndex: number, stops: GradientStop[]) {
    if (!stops || !Array.isArray(stops)) return;

    // Clear existing positions for this bar
    Object.keys(this._latestStopPositions).forEach(key => {
      if (key.startsWith(`bar${barIndex}-stop-`)) {
        delete this._latestStopPositions[key];
      }
    });

    // Update with new positions
    stops.forEach(stop => {
      if (stop && stop.id) {
        const globalKey = `bar${barIndex}-stop-${stop.id}`;
        this._latestStopPositions[globalKey] = stop.position;
        console.log(`[Editor] Updated position cache for ${globalKey}: ${stop.position}`);
      }
    });
  }

  private async _removeGradientStop(barIndex: number, stopId: string) {
    const newConfig = JSON.parse(JSON.stringify(this.config));
    if (
      !newConfig.bars ||
      !newConfig.bars[barIndex] ||
      !Array.isArray(newConfig.bars[barIndex].gradient_stops)
    ) {
      return;
    }

    const currentStops = newConfig.bars[barIndex].gradient_stops;

    // Prevent removing boundary stops '1' and '2'
    if (stopId === '1' || stopId === '2') {
      console.warn(`[Editor] Cannot remove boundary stop with ID ${stopId}.`);
      return;
    }

    // Don't allow fewer than 2 stops (boundary stops)
    if (currentStops.length <= 2) {
      console.warn('[Editor] Cannot remove stop. Minimum 2 stops required.');
      return;
    }

    console.log(
      `[Editor] Attempting to remove stop ${stopId}. Current stops:`,
      JSON.stringify(currentStops)
    );

    // Filter out the stop
    newConfig.bars[barIndex].gradient_stops = currentStops.filter(stop => stop.id !== stopId);

    // Verify removal
    if (newConfig.bars[barIndex].gradient_stops.length === currentStops.length) {
      console.warn(`[Editor] Failed to remove stop with ID ${stopId}. Stop not found?`);
      return; // Stop wasn't found or removed
    }

    console.log(
      '[Editor] Stops after removal:',
      JSON.stringify(newConfig.bars[barIndex].gradient_stops)
    );

    // Update positions cache
    this._updateAllStopPositions(barIndex, newConfig.bars[barIndex].gradient_stops);

    // Ensure gradient settings are preserved
    newConfig.bars[barIndex].use_gradient = true;
    if (!newConfig.bars[barIndex].gradient_display_mode) {
      newConfig.bars[barIndex].gradient_display_mode = 'value_based';
    }

    // Update config
    this._updateConfig(newConfig);
  }

  // Reset gradient stops to the default configuration
  private async _resetGradientStops(barIndex: number) {
    const newConfig = JSON.parse(JSON.stringify(this.config));
    if (!newConfig.bars || !newConfig.bars[barIndex]) return;

    // Reset to default stops (0% red, 100% green with IDs '1' and '2')
    const defaultStops = createDefaultGradientStops(); // No ID generator needed
    newConfig.bars[barIndex].gradient_stops = defaultStops;

    // Sort and validate (safeguard)
    newConfig.bars[barIndex].gradient_stops = this._sortAndValidateStops(
      newConfig.bars[barIndex].gradient_stops
    );

    // Update the position cache with default positions
    this._updateAllStopPositions(barIndex, newConfig.bars[barIndex].gradient_stops);

    console.log(`[Editor] Reset gradient stops for bar ${barIndex} and updated position cache`);

    // Ensure gradient settings are set
    newConfig.bars[barIndex].use_gradient = true;
    newConfig.bars[barIndex].gradient_display_mode = 'value_based';

    // Update config
    this._updateConfig(newConfig);
  }

  private async _updateGradientStopColor(barIndex: number, stopId: string, color: string) {
    // Create a deep copy of the config first
    const newConfig = JSON.parse(JSON.stringify(this.config));

    if (!newConfig.bars || !newConfig.bars[barIndex] || !newConfig.bars[barIndex].gradient_stops) {
      console.warn(`[Editor] Cannot update color - no gradient stops for bar ${barIndex}`);
      return;
    }

    console.log(
      `[Editor] Attempting to update color for stop ${stopId} in bar ${barIndex} to ${color}. Current stops:`,
      JSON.stringify(newConfig.bars[barIndex].gradient_stops)
    );

    // CRITICAL FIX: Get latest position from our _latestStopPositions object
    const globalKey = `bar${barIndex}-stop-${stopId}`;
    const latestPosition = this._latestStopPositions[globalKey];

    console.log(`[Editor] Latest position for stop ${stopId}: ${latestPosition}`);

    let stopFound = false;

    // Update the gradient stops with the new color and latest position
    newConfig.bars[barIndex].gradient_stops = newConfig.bars[barIndex].gradient_stops.map(stop => {
      if (stop.id === stopId) {
        stopFound = true;

        // If we have a latest position, use it, otherwise keep the current position
        const position = latestPosition !== undefined ? latestPosition : stop.position;

        console.log(
          `[Editor] Updating stop ${stopId} with color ${color} and position ${position}`
        );
        return { ...stop, color, position };
      }
      return stop;
    });

    // Sort stops by position before updating
    newConfig.bars[barIndex].gradient_stops = this._sortAndValidateStops(
      newConfig.bars[barIndex].gradient_stops
    );

    if (!stopFound) {
      console.warn(`[Editor] Stop ${stopId} not found in config.`);
      return;
    }

    // Update the position cache
    this._updateAllStopPositions(barIndex, newConfig.bars[barIndex].gradient_stops);

    // Make sure use_gradient stays on
    newConfig.bars[barIndex].use_gradient = true;

    // Ensure gradient_display_mode is preserved
    if (!newConfig.bars[barIndex].gradient_display_mode) {
      newConfig.bars[barIndex].gradient_display_mode = 'value_based';
    }

    // Update config with the entirely new gradient stops array
    this._updateConfig(newConfig);

    // Force a complete refresh - we keep this one since it's a color change
    await this._forceCompleteGradientRefresh(barIndex);
  }

  // Helper method to force a complete refresh of gradient editor
  private async _forceCompleteGradientRefresh(barIndex: number) {
    // Increment the gradient editor key to force a complete DOM re-render
    this._gradientEditorKeys = {
      ...this._gradientEditorKeys,
      [barIndex]: (this._gradientEditorKeys[barIndex] || 0) + 1,
    };

    // Force an immediate update to pass the new key down
    this.requestUpdate();
    console.log(`[Editor] Incremented gradient key for bar ${barIndex} to force refresh.`);

    // REMOVED await this.updateComplete;
    // REMOVED loop firing _fireForceGradientRefreshEvent
  }

  private async _handleStopColorChange(ev: CustomEvent, barIndex: number): Promise<void> {
    const { stopId, newColor } = ev.detail;
    if (!stopId || !newColor || !this.config?.bars || !this.config.bars[barIndex]) return;

    const newConfig = JSON.parse(JSON.stringify(this.config));

    if (!Array.isArray(newConfig.bars[barIndex].gradient_stops)) {
      console.warn(
        `[Editor] Cannot change color - gradient_stops for bar ${barIndex} is not an array.`
      );
      return;
    }

    let foundStop = false;
    newConfig.bars[barIndex].gradient_stops = newConfig.bars[barIndex].gradient_stops.map(stop => {
      if (stop.id === stopId) {
        foundStop = true;
        return { ...stop, color: newColor };
      }
      return stop;
    });

    if (!foundStop) {
      console.warn(
        `[Editor] Cannot change color - Stop with ID ${stopId} not found for bar ${barIndex}.`
      );
      return;
    }

    console.log(
      `[Editor] Received stop-color-change for bar ${barIndex}, stop ${stopId}, new color ${newColor}`
    );

    this._updateConfig(newConfig);

    // Force a refresh to ensure sync after color change
    await this._forceCompleteGradientRefresh(barIndex);
    console.log(`[Editor] Forced gradient refresh for bar ${barIndex} after stop-color-change.`);
  }

  // Add new methods for specific size schemas
  private _getLeftTitleSizeSchema(index: number): SchemaItem[] {
    return [
      {
        name: `bars.${index}.left_title_size`,
        selector: { number: { mode: 'box', unit: 'px' } },
        label: 'Title Size',
        description: 'Size of the left title text',
      },
    ];
  }

  private _getLeftTextSizeSchema(index: number): SchemaItem[] {
    return [
      {
        name: `bars.${index}.left_text_size`,
        selector: { number: { mode: 'box', unit: 'px' } },
        label: 'Value Size',
        description: 'Size of the left entity value text',
      },
    ];
  }

  private _getRightTitleSizeSchema(index: number): SchemaItem[] {
    return [
      {
        name: `bars.${index}.right_title_size`,
        selector: { number: { mode: 'box', unit: 'px' } },
        label: 'Title Size',
        description: 'Size of the right title text',
      },
    ];
  }

  private _getRightTextSizeSchema(index: number): SchemaItem[] {
    return [
      {
        name: `bars.${index}.right_text_size`,
        selector: { number: { mode: 'box', unit: 'px' } },
        label: 'Value Size',
        description: 'Size of the right entity value text',
      },
    ];
  }

  // Add new reset method for bar sizes
  private _resetBarSize(index: number, sizeProperty: string) {
    const bars = [...(this.config.bars || [])];
    if (bars[index]) {
      // Create a copy of the bar config
      const updatedBar = { ...bars[index] };

      // Remove the specific size property to revert to default
      delete updatedBar[sizeProperty];

      // Update the bar in the array
      bars[index] = updatedBar;

      // Update the config
      this._updateConfig({ bars });

      // Force a re-render to ensure UI updates
      setTimeout(() => {
        this.requestUpdate();
      }, 10);
    }
  }
  // End new methods

  // Helper function to truncate long paths/URLs
  private _truncatePath(path: string, maxLength = 40): string {
    if (!path || path.length <= maxLength) {
      return path;
    }
    const startLength = Math.floor(maxLength / 2) - 2;
    const endLength = Math.ceil(maxLength / 2) - 1;
    return `${path.substring(0, startLength)}...${path.substring(path.length - endLength)}`;
  }
}
