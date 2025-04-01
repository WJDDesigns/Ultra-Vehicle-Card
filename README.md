[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

# Ultra Vehicle Card for Home Assistant

![header-hero-uvc](https://github.com/user-attachments/assets/4fbd3ad9-fc07-4923-895c-4e316adbbf64)

https://ultravehiclecard.com

This custom card allows you to display vehicle information in your Home Assistant dashboard, including the vehicle name, image, and fuel or charge level. For EVs you will see an animation when charging. Now completely rewritten in TypeScript with improved performance and reliability in version 2.0!

## What's New in Version 2.0

- **Complete TypeScript Rewrite**: Improved performance, type safety, and code quality
- **Improved Animation System**: More fluid and responsive animations for charging and engine status
- **Version Control System**: Built-in version tracking with cache busting for reliable updates
- **Enhanced Gradients**: More customization options for gradient bars
- **Better Mobile Support**: Improved responsive design for various screen sizes

## Installation

### HACS (Recommended)

UVC is available in HACS (Home Assistant Community Store).

Use this link to directly go to the repository in HACS

[![HACS Repository](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=wjddesigns&repository=ultra-vehicle-card&category=plugin)

### Alternate HACS Install method

1. Make sure you have [HACS](https://hacs.xyz/) installed in your Home Assistant instance.
2. Go to HACS > Frontend
3. Click on the three dots in the top right corner and select "Custom repositories."
4. Add your repository URL: `https://github.com/WJDDesigns/Ultra-Vehicle-Card` and select the category as "Lovelace."
5. Click on the "+" button
6. Search for "Ultra Vehicle Card"
7. Click Install
8. Restart Home Assistant

## Manual Installation (Using the Resource Tab)

1. **Download the Files**  
   Download all the files from this repository.

2. **Copy the Files**  
   Copy the downloaded files to the `config/www` folder in your Home Assistant configuration directory.

3. **Add the Resource in Home Assistant**
   - Go to **Settings** > **Lovelace Dashboards** > **Resources**.
   - Click the **+ Add Resource** button in the bottom right corner.
   - In the URL field, enter:  
     `/local/ultra-vehicle-card.js`
   - Set the **Resource Type** to **JavaScript Module**.
   - Click **Create**.

Your Ultra Vehicle Card is now installed and ready for use in Home Assistant.

> **Note about Versioning**: The Ultra Vehicle Card uses a smart versioning system that embeds the version number in filenames (e.g., `ultra-vehicle-card-2.0-Beta1.js`). This helps prevent caching issues when updating. The main file (`ultra-vehicle-card.js`) automatically redirects to the current version, so you'll always get the latest version after an update.

### Cool Tip

Hey there, fellow Home Assistant enthusiast! 🏠✨

Did you know that the Ultra Vehicle Card was inspired by a midnight coding session fueled by an unhealthy amount of caffeine and a sudden realization that cars deserve cool cards too? It's true!

If this card has made your dashboard a little more awesome or saved you from the treacherous "low fuel surprise," consider buying the developer a virtual Dr Pepper. It helps keep the creativity flowing and the code bug-free!

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG" target="_blank"> <img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" alt="Donate with PayPal" style="width: 150px; height: auto;" />
</a>

# Ultra Vehicle Card - User Guide

## Settings Tab

<img width="300" alt="Settings Tab" src="https://github.com/user-attachments/assets/79b43138-17c4-44d4-8fac-80966b47323b">

The Settings tab allows you to configure the basic layout and appearance of your Ultra Vehicle Card. Here's a comprehensive guide to each option:

### Card Title

- **Purpose**: Sets the main title for your vehicle card.
- **Usage**: Enter any text you want to appear at the top of the card.
- **Tips**:
  - Use a descriptive name like "My Tesla Model 3" or "Family SUV".
  - Keep it short for better layout, especially on mobile devices.

### Title Alignment & Size

- **Purpose**: Controls the positioning and size of the card title.
- **Options**: Left, Center, Right alignment
- **Size**: Adjust the font size of the title in pixels.

### Vehicle Type

- **Purpose**: Defines the type of vehicle, which affects which entities and images are used.
- **Options**:
  - Electric Vehicle (EV)
  - Fuel Vehicle
  - Hybrid
- **Usage**: Select the option that matches your vehicle type.
- **Note**: For Hybrid vehicles, an additional option appears:
  - **Hybrid Display Order**: Choose whether to display fuel or battery information first.
    - Fuel First
    - Battery First

### Main Image Settings

- **Purpose**: Configures the primary image of your vehicle.
- **Options**:
  1. **Image Source**:
     - None: No image displayed
     - Local/URL: Upload an image or provide a URL
     - Entity: Use an entity that provides an image URL
  2. **Upload Image**: Appears when Local/URL is selected. Click to upload an image from your device.
  3. **Main Image Height**: Set the height of the image in pixels.
- **Usage**:
  - For Local/URL, either upload an image or paste an image URL.
  - For Entity, select an entity that returns an image URL as its state.
- **Tips**:
  - Use a clear, high-quality image of your vehicle.
  - Adjust the height to balance between visibility and card size.

### Charging Image Settings (for EV and Hybrid)

- **Purpose**: Sets an alternative image to display when the vehicle is charging.
- **Options**: Same as Main Image Settings
- **Usage**: Configure similarly to the Main Image, but choose an image representing your vehicle while charging.

### Engine On Image Settings (for Fuel and Hybrid)

- **Purpose**: Provides an image to show when the engine is running.
- **Options**: Same as Main Image Settings
- **Usage**: Select or upload an image that represents your vehicle with the engine on.

### Layout Type

- **Purpose**: Determines the overall layout of the card.
- **Options**:
  Single Column: Vertical layout with image on top

    <img width="300" alt="Layout 1" src="https://github.com/user-attachments/assets/fa741fa2-428f-463b-a004-bbea96a55323">
    
  Double Column: Side-by-side layout with image on left

    <img width="300" alt="Layout 2" src="https://github.com/user-attachments/assets/ed96680d-3bcb-44a3-bef4-5b3b5b5a754d">


- **Usage**: Choose based on your preferred aesthetic and available space.
- **Note**: Double Column may work better for wider screens or sidebars.

### Section Order

- **Purpose**: Allows you to rearrange the order of sections in your card.
- **Usage**: Drag and drop sections to customize their display order.
- **Available Sections**: Title, Image, Info, Bars, Icons

### Formatted Entities

- **Type**: Toggle switch
- **Purpose**: Enables or disables automatic formatting of entity values.
- **When Enabled**:
  - Rounds numbers
  - Replaces underscores with spaces
  - Capitalizes words
  - Adds commas to large numbers
- **Usage**: Generally recommended to keep this on for better readability.

### Entity Settings

For each of the following entities, you can:

1. Select the appropriate entity from your Home Assistant instance.
2. Toggle visibility on/off using the switch next to each entity picker.

Available entities:

- **Battery Level**: Shows the current battery charge percentage (for EV and Hybrid).
- **Battery Range**: Displays the estimated driving range on battery (for EV and Hybrid).
- **Fuel Level**: Indicates the current fuel level (for Fuel and Hybrid vehicles).
- **Fuel Range**: Shows the estimated driving range on fuel (for Fuel and Hybrid vehicles).
- **Charging Status**: Reflects whether the vehicle is currently charging (for EV and Hybrid).
- **Charge Limit**: Displays the set charging limit (for EV and Hybrid).
- **Location**: Shows the current location of the vehicle.
- **Mileage**: Displays the total mileage or odometer reading.
- **Car State**: Indicates the overall state of the car (e.g., parked, driving, charging).
- **Engine On**: Shows whether the engine is currently running (for Fuel and Hybrid).

**Usage Tips**:

- Only select entities that are relevant to your vehicle type.
- Ensure that the entities you select provide the correct type of data (e.g., percentage for battery level).
- Use the visibility toggles to customize which information is displayed on your card.
- If you need a percentage entity and your entity only provides remaining fuel/charge use the template below to convert and pull in a new entity.
  > ```
  > sensor:
  >   - platform: template
  >     sensors:
  >       bmw_320i_fuel_percentage:
  >         friendly_name: "BMW 320i Fuel Percentage"
  >         unit_of_measurement: "%"
  >         value_template: >
  >           {% set liters = states('sensor.320i_remaining_fuel') | float %}
  >           {{ (liters / 65 * 100) | round(0) }}
  > ```

## Icon Grid Configuration

<img width="300" alt="Icon Grid Tab" src="https://github.com/user-attachments/assets/1927f5c0-977c-4ff4-9bbf-90f83e554e73">

The icon grid allows you to add custom icons representing various entities related to your vehicle. Here's a detailed explanation of each option:

### Adding Entities

1. Use the search bar to find entities you want to add to the grid.
2. Click on an entity from the search results to add it to the grid.
3. The entity will appear in the grid with default settings.

### Row Separators

<img width="300" alt="Separator Options" src="https://github.com/user-attachments/assets/718f5280-e462-4d84-b1a3-9761b4a2b6ca">

Row separators help organize your icons into distinct groups.

1. Click "Add Row Separator" to insert a separator.
2. Configure the separator:
   - **Color**: Choose any color for the separator line.
   - **Height**: Set the thickness of the separator (in pixels).
   - **Icon Gap**: Adjust the space between icons in this row.
   - **Horizontal Alignment**: Determine how icons are aligned horizontally (left, center, right).
   - **Vertical Alignment**: Set how icons align vertically within their row (top, middle, bottom).

### Icon Configuration

<img width="300" alt="Icon Config" src="https://github.com/user-attachments/assets/62362632-ea5c-4ae4-a54b-0bc901a6c9c6">

For each icon in the grid, you can customize its appearance and behavior:

#### Icon Selection

- **Inactive Icon**: The icon displayed when the entity is in its "off" or inactive state.
- **Active Icon**: The icon shown when the entity is "on" or active.

To change an icon:

1. Click on the current icon.
2. Search for a new icon or select from the popular icons shown.
3. Click "no-icon" if you don't want an icon for that state.

#### Icon Colors

- **Inactive Color**: The color of the icon in its inactive state.
- **Active Color**: The color when the icon is active.

Use the color picker to select custom colors or input specific hex values.

#### Icon Style

Choose how the icon is displayed:

- **Icon**: Just the icon itself.
- **Round**: Icon within a circular background.
- **Square**: Icon within a square background.
- **Label**: Text label instead of an icon.

#### Icon Size

Adjust the size of the icon in pixels. This setting affects both the icon and its background (if using round or square style).

#### Text Size

Control the size of any text labels associated with the icon.

#### Text Position

If you want to display a label with your icon, choose where it appears:

- **None**: No label is shown.
- **Left/Right/Top/Bottom**: Places the label in the specified position relative to the icon.

#### Interaction

Determine what happens when a user clicks the icon:

- **More Info**: Opens the entity's more info dialog.
- **Toggle**: Switches the entity between on and off states.
- **Navigate**: Goes to a specific page in your Home Assistant interface.
- **Open URL**: Opens a specified web address.
- **Assist**: Opens the voice assistant.
- **Trigger**: Activates the entity (useful for automations or scripts).
- **None**: Disables interaction for this icon.

#### Vertical Alignment

Control how your icon and text align vertically:

- **Top**: Aligns content to the top
- **Center**: Centers content vertically (default)
- **Bottom**: Aligns content to the bottom

### State Configuration

This advanced feature allows you to customize when an icon is considered "active" or "inactive". For both active and inactive states, you have these options:

#### Default

When selected, the card uses built-in logic to determine the active state:

- For most entities, "on", "home", "open", "locked", etc. are considered active.
- For numeric sensors, any value above 0 is typically considered active.

#### Template

Allows you to write a custom Jinja2 template to determine the icon state. This is for advanced users who need complex logic. For example:

> {{ states('sensor.temperature') | float > 20 }}
> This would make the icon active when the temperature is above 20 degrees.

#### Attribute

You can base the icon state on a specific attribute of the entity. For example, if your car has a "status" attribute, you could set it to be active when status is "driving".

#### Option

For entities that have predefined options (like input_select), you can choose which option represents the active state.

### Practical Example

Let's say you're adding an icon for your car's climate control:

1. Search for and add the climate control entity.
2. Set the inactive icon to "mdi:air-conditioner" and active to "mdi:air-conditioner-on".
3. Choose blue for inactive and red for active colors.
4. Set the style to "Round" for a nice background effect.
5. Set the interaction to "Toggle" so you can turn it on/off directly from the card.
6. Add a label at the bottom showing "Climate".
7. In state configuration, you might use an attribute like "hvac_action" to determine when it's truly active, rather than just being on but not actively cooling/heating.

## Customize Tab

<img width="300" alt="Customize Tab" src="https://github.com/user-attachments/assets/46780552-c508-4380-8a9e-cefb52c8f4a8">

The Customize tab allows you to fine-tune the visual aspects of your Ultra Vehicle Card. Here's a comprehensive guide to each option:

### Colors

This section lets you customize the colors of various elements in the card to match your preferred style or theme.

#### Color Customization Options:

1. **Card Title Color**

   - Purpose: Sets the color of the card's title text.
   - Usage: Choose a color that contrasts well with the card background.

2. **Card Background Color**

   - Purpose: Defines the background color of the entire card.
   - Usage: Select a color that complements your overall Home Assistant theme.

3. **Bar Background Color**

   - Purpose: Sets the color of the unfilled portion of progress bars (e.g., battery or fuel level).
   - Usage: Often set to a muted or lighter version of the bar fill color.

4. **Bar Border Color**

   - Purpose: Defines the color of the border around progress bars.
   - Usage: Choose a color that provides a clear boundary for the bars.

5. **Bar Fill Color**

   - Purpose: Sets the color of the filled portion of progress bars.
   - Usage: Select a color that clearly indicates the level (e.g., green for battery, blue for fuel).

6. **Limit Indicator Color**

   - Purpose: Defines the color of the charge limit indicator on the battery bar.
   - Usage: Choose a contrasting color to make the limit clearly visible.

7. **Info Text Color**

   - Purpose: Sets the color of general information text on the card.
   - Usage: Ensure it's readable against the card background.

8. **Car State Text Color**

   - Purpose: Defines the color of the text showing the car's current state.
   - Usage: Consider using a distinctive color to make this information stand out.

9. **Range Text Color**

   - Purpose: Sets the color of text displaying range information.
   - Usage: Choose a color that's easily readable but doesn't overshadow other information.

10. **Percentage Text Color**
    - Purpose: Defines the color of percentage values (e.g., battery percentage).
    - Usage: Select a color that stands out against the bar fill color.

#### For each color option:

- Click the color swatch to open the color picker.
- Use the color wheel or input a specific hex value.
- Click the refresh icon next to each color to reset it to the default.

### Bar Customization

#### Bar Size Options

- **Thin**: Smaller, more compact bars
- **Regular**: Standard size bars (default)
- **Thick**: Larger bars for emphasis
- **Thiccc**: Extra large bars for maximum visibility

#### Bar Width

Control how much horizontal space the bar takes up in the card (as a percentage).

### Use Bar Gradient

- Type: Toggle switch
- Purpose: Enables or disables a color gradient for the progress bars.
- When enabled:
  - The progress bars use a gradient instead of a solid color.
  - You can define multiple color stops for a dynamic visual representation.

#### Gradient Display Modes

- **Value Based**: Color changes based on the current value
- **Full Gradient**: Shows the entire gradient across the bar

#### Gradient Configuration (when enabled):

<img width="300" alt="Gradient Bar" src="https://github.com/user-attachments/assets/f5644915-4fac-4ed4-8aa1-76c0e535f0d4">

1. **Adding Gradient Stops**

   - Click "Add Gradient Stop" to insert a new color point.
   - You can add up to 11 gradient stops.

2. **Configuring Each Stop**

   - **Percentage**: Set the position of the color stop (0-100%).
   - **Color**: Choose the color for this stop point.

3. **Gradient Preview**

   - A live preview of your gradient is displayed at the top.
   - Percentage markers help visualize the gradient distribution.

4. **Removing Stops**

   - Click the (x) icon next to a stop to remove it.

5. **Tips for Effective Gradients**:
   - Start with at least two stops (e.g., red at 0%, green at 100%).
   - Add intermediate stops for more complex gradients.
   - Ensure a smooth transition between colors for a pleasing effect.

### Animation Settings

1. **Animation Types**

   - **Charging Lines**: Moving stripes indicating charging activity
   - **Pulse**: Gentle pulsing effect
   - **Blinking**: On/off blinking effect
   - **Bouncing**: Size-changing animation
   - **Glow**: Glowing highlight effect
   - **Rainbow**: Color cycling animation
   - **Fill**: Fill-and-empty animation
   - **Bubbles**: Bubble floating animation

2. **Animation Triggers**
   - **Show Engine Animation**: Enables animation when the engine is running
   - **Show Charging Animation**: Enables animation when the vehicle is charging
   - **Custom Animation Entity**: Define a specific entity to trigger animations

### Additional Notes:

- Color choices significantly impact the card's readability and aesthetic appeal.
- Consider your Home Assistant's overall theme when selecting colors.
- The gradient feature can provide a more dynamic and informative progress bar, especially for battery levels.
- Animations can make the card more engaging but consider performance on less powerful devices.

By carefully customizing these visual elements, you can create a card that not only provides valuable information about your vehicle but also integrates beautifully with your Home Assistant dashboard's look and feel.

## Developer Notes

Ultra Vehicle Card is now built with TypeScript, providing better performance and reliability. The card includes a built-in versioning system that helps ensure users always get the latest updates, even when browsers cache files.

When checking your browser console, you'll see the current version displayed with stylish formatting, making it easy to verify which version you're running.

**Note**: All configuration is done through the graphical interface - no manual code editing is required! You can of course use code if needed.

[<img alt="Discord" width="320px" src="https://github.com/user-attachments/assets/d924143e-e6fd-48f0-82f0-9bbd85e0235c" />](https://www.discord.gg/6xVgHxzzBV)
