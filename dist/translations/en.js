export default {
  common: {
    battery: "Battery",
    fuel: "Fuel",
    range: "Range",
    charging: "Charging",
    mileage: "Mileage",
    location: "Location",
    car_state: "Car State",
    charge_limit: "Charge Limit",
    engine_on: "Engine On",
    away: "Away",
    charging_end_time: "Charging End Time",
    charging_ending_soon: "Charging ending soon",
    charging_ending_in: "Charging ending in",
    charging_until: "Charging until",
    minutes: "minutes",
    minute: "minute",
    hours: "hours",
    hour: "hour",
    state: {
      default: {
        on: "On",
        off: "Off"
      }
    }
  },
  vehicle_types: {
    ev: "Electric Vehicle",
    fuel: "Fuel Vehicle",
    hybrid: "Hybrid"
  },
  editor: {
    title: "Ultra Vehicle Card",
    card_title: "Card Title",
    unit_type: "Unit Type",
    show_battery: "Show Battery",
    show_battery_range: "Show Battery Range",
    show_fuel: "Show Fuel",
    show_fuel_range: "Show Fuel Range",
    show_location: "Show Location",
    show_mileage: "Show Mileage",
    show_car_state: "Show Car State",
    show_charge_limit: "Show Charge Limit",
    hybrid_display_order: "Hybrid Display Order",
    fuel_first: "Fuel First",
    battery_first: "Battery First",
    images: "Images",
    main_image: "Main Image",
    charging_image: "Charging Image",
    enter_image_url: "Enter image URL",
    upload_image: "Upload Image",
    entity_settings: "Entity Settings",
    battery_level: "Battery Level",
    battery_range: "Battery Range",
    fuel_level: "Fuel Level",
    fuel_range: "Fuel Range",
    charging_status: "Charging Status",
    location: "Location",
    mileage: "Mileage",
    car_state: "Car State",
    charge_limit: "Charge Limit",
    engine_on: "Engine On",
    icon_grid: "Icon Grid",
    add_entity: "Add Entity",
    add_row_separator: "Add Row Separator",
    custom_icons: "Custom Icons",
    inactive_icon: "Inactive Icon",
    active_icon: "Active Icon",
    no_icon: "NO ICON",
    inactive_icon_colour: "Inactive Icon Colour",
    active_icon_colour: "Active Icon Colour",
    icon_style: "Icon Style",
    icon_size: "Icon Size",
    icon_size_description: "Size of the icon.",
    icon_label_position: "Icon Label Position",
    left: "Left",
    top: "Top",
    right: "Right",
    bottom: "Bottom",
    interaction: "Interaction",
    colors: "Colours",
    cardBackgroundColor: "Card Background Colour",
    barBackgroundColor: "Bar Background Colour",
    barBorderColor: "Bar Border Colour",
    barFillColor: "Bar Fill Colour",
    limitIndicatorColor: "Limit Indicator Colour",
    infoTextColor: "Info Text Color",
    carStateTextColor: "Car State Text Colour",
    rangeTextColor: "Range Text Colour",
    percentageTextColor: "Percentage Text Colour",
    none: "None",
    local_url: "Local/URL",
    entity: "Entity",
    search_entities: "Search Entities",
    battery_level_description: "Select the entity that represents the battery level of your vehicle.",
    battery_range_description: "Select the entity that represents the remaining range of your electric vehicle.",
    charging_status_description: "Select the entity that indicates whether your vehicle is currently charging.",
    charge_limit_description: "Select the entity that represents the charging limit set for your vehicle.",
    location_description: "Select the entity that provides the current location of your vehicle.",
    mileage_description: "Select the entity that represents the total mileage or odometer reading of your vehicle.",
    car_state_description: "Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging).",
    icon_grid_description: "Add entities to the icon grid. Search and select entities to add. Use the drag handle to reorder entities. Click on the icon to change it, and use (×) to remove an entity from the grid.",
    custom_colours_description: "Customise the colours of various elements in the card to match your preferred style or theme.",
    row_separator: "Row Separator",
    add_row_separator: "Add Row Separator",
    separator_colour: "Separator Colour",
    separator_colour_description: "Choose the colour for the row separator.",
    transparent: "Transparent",
    set_colour: "Set Colour",
    separator_height: "Separator Height",
    separator_height_description: "Set the height of the row separator in pixels.",
    icon_gap_size: "Icon Gap Size",
    icon_gap_description: "Set the gap between icons in pixels.",
    horizontal_alignment: "Horizontal Alignment",
    vertical_alignment: "Vertical Alignment",
    inactive_icon: "Inactive Icon",
    active_icon: "Active Icon",
    no_icon: "NO ICON",
    inactive_icon_colour: "Inactive Icon Colour",
    active_icon_colour: "Active Icon Colour",
    icon_style: "Icon Style",
    icon_size: "Icon Size",
    icon_size_description: "Size of the icon.",
    icon_label_position: "Icon Label Position",
    interaction: "Interaction",
    more_info: "More Info",
    bottom: "Bottom",
    select_entity: "Select an Entity",
    entity_provides_image: "This entity provides the image for the display.",
    separator_color: "Separator Colour",
    separator_color_description: "Choose the colour for the row separator.",
    inactive_icon_color: "Inactive Icon Colour",
    active_icon_color: "Active Icon Colour",
    custom_colors_description: "Customise the colours of various elements in the card to match your preferred style or theme.",
    toggle: "Toggle",
    navigate: "Navigate",
    url: "Open URL",
    trigger: "Trigger",
    none: "None",
    formatted_entities: "Formatted Entities",
    formatted_entities_description: "Clean up entity values by rounding numbers, replacing underscores with spaces, capitalizing words, and adding commas to large numbers.",
    fuel_level_description: "Select the entity that represents the fuel level of your vehicle.",
    fuel_range_description: "Select the entity that represents the remaining fuel range of your vehicle.",
    engine_on_description: "Select the entity that indicates whether your vehicle's engine is currently running.",
    main_image_height: "Main Image Height",
    charging_image_height: "Charging Image Height",
    main_image_section: "Main Image Settings",
    charging_image_section: "Charging Image Settings"
  },
  device_class: {
    battery: {
      on: "Low",
      off: "Normal"
    },
    battery_charging: {
      on: "Charging",
      off: "Not Charging"
    },
    carbon_monoxide: {
      on: "Detected",
      off: "Clear"
    },
    cold: {
      on: "Cold",
      off: "Normal"
    },
    connectivity: {
      on: "Connected",
      off: "Disconnected"
    },
    door: {
      on: "Open",
      off: "Closed"
    },
    garage_door: {
      on: "Open",
      off: "Closed"
    },
    gas: {
      on: "Detected",
      off: "Clear"
    },
    heat: {
      on: "Hot",
      off: "Normal"
    },
    light: {
      on: "Detected",
      off: "Clear"
    },
    lock: {
      on: "Unlocked",
      off: "Locked"
    },
    moisture: {
      on: "Wet",
      off: "Dry"
    },
    motion: {
      on: "Detected",
      off: "Clear"
    },
    moving: {
      on: "Moving",
      off: "Stopped"
    },
    occupancy: {
      on: "Occupied",
      off: "Clear"
    },
    opening: {
      on: "Open",
      off: "Closed"
    },
    plug: {
      on: "Plugged In",
      off: "Unplugged"
    },
    power: {
      on: "Detected",
      off: "No Power"
    },
    presence: {
      on: "Home",
      off: "Away"
    },
    problem: {
      on: "Problem",
      off: "OK"
    },
    running: {
      on: "Running",
      off: "Not Running"
    },
    safety: {
      on: "Unsafe",
      off: "Safe"
    },
    smoke: {
      on: "Detected",
      off: "Clear"
    },
    sound: {
      on: "Detected",
      off: "Clear"
    },
    tamper: {
      on: "Detected",
      off: "Clear"
    },
    update: {
      on: "Available",
      off: "Up-to-date"
    },
    vibration: {
      on: "Detected",
      off: "Clear"
    },
    window: {
      on: "Open",
      off: "Closed"
    }
  }
}