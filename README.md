[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

# Ultra Vehicle Card for Home Assistant

<img width="380" alt="Screenshot 2024-08-06 at 9 04 20 AM" src="https://github.com/user-attachments/assets/5b2dbc41-107a-4c24-a649-b4cd7461aa79">
<img width="921" alt="Screenshot 2024-08-06 at 9 04 20 AM" src="https://github.com/user-attachments/assets/3289effd-9ded-4f52-97b9-ad3741632126">

This custom card allows you to display vehicle information in your Home Assistant dashboard, including the vehicle name, image, and fuel or charge level. For any EVs you will see an animation when charging.

## Installation

### HACS (Recommended)

1. Make sure you have [HACS](https://hacs.xyz/) installed in your Home Assistant instance.
2. Go to HACS > Frontend
3. Click on the three dots in the top right corner and select "Custom repositories."
4. Add your repository URL: `https://github.com/WJDDesigns/Ultra-Vehicle-Card` and select the category as "Lovelace."
5. Click on the "+" button
6. Search for "Ultra Vehicle Card"
7. Click Install
8. Restart Home Assistant

### Manual Installation

1. Download the `ultra-vehicle-card.js`, `styles.js`, and `ultra-vehicle-card-editor.js` files from this repository.
2. Copy the files to your `config/www` folder in your Home Assistant configuration directory.
3. Add the following to your `configuration.yaml` file:

```yaml
lovelace:
  resources:
    - url: /local/ultra-vehicle-card.js
      type: module
```     

[![Repo](https://camo.githubusercontent.com/0ab6126849ccb8c77891afcd6d5b01f76ed99518f52387df274c41c8e3d15c64/68747470733a2f2f6d792e686f6d652d617373697374616e742e696f2f6261646765732f686163735f7265706f7369746f72792e737667)](https://my.home-assistant.io/redirect/hacs_repository/?owner=wjddesigns&repository=ultra-vehicle-card&category=plugin)

    
### Cool Tip

Hey there, fellow Home Assistant enthusiast! 🏠✨ 

Did you know that the Ultra Vehicle Card was inspired by a midnight coding session fueled by an unhealthy amount of caffeine and a sudden realization that cars deserve cool cards too? It's true!

If this card has made your dashboard a little more awesome or saved you from the treacherous "low fuel surprise," consider buying the developer a virtual Dr Pepper. It helps keep the creativity flowing and the code bug-free!

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG" target="_blank"> <img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" alt="Donate with PayPal" style="width: 150px; height: auto;" />
</a>

# Ultra Vehicle Card - User Guide

## Table of Contents
1. [Basic Configuration](#basic-configuration)
2. [Entity Information](#entity-information)
3. [Icon Grid](#icon-grid)
4. [Layout Customization](#layout-customization)
5. [Color Customization](#color-customization)
6. [Visibility Settings](#visibility-settings)
7. [Using the Card](#using-the-card)

## Basic Configuration

### Title
- Enter your vehicle's name (e.g., "2024 BMW IX")

### Vehicle Type
- Choose between:
  - Electric Vehicle
  - Fuel Vehicle
  - PHEV (Hybrid)

### Images
Set up both a main image and a charging image:
- Options: 
  - None
  - Local/Url (upload an image or provide a URL)
  - Entity (select an entity that provides the image)

## Entity Information

Expand this section to set up various entities for your vehicle:

- Battery Level
- Fuel Level
- Battery Range
- Fuel Range
- Charging Status
- Engine On
- Location
- Mileage

Use the entity picker to search and select the appropriate entities from your Home Assistant setup.

## Icon Grid

Customize your icon grid for additional functionality:

1. Search for entities to add to the icon grid
2. For each added entity, customize:
   - Inactive Icon: Choose an icon for the inactive state
   - Active Icon: Choose an icon for the active state
   - Inactive Color: Set the color for the inactive state
   - Active Color: Set the color for the active state
   - Button Style: Choose between Icon, Round, or Square
   - Interaction: Set the interaction type (e.g., Toggle, More Info)
   - Icon Size: Adjust the size of the icon (e.g., 33px)

## Layout Customization

- **Icon Gap Size**: Adjust the spacing between icons (e.g., 10px)

## Color Customization

Customize various color elements:

- Card Background Color
- Bar Background Color
- Bar Border Color
- Bar Fill Color
- Limit Indicator Color
- Info Text Color
- Car State Text Color
- Range Text Color
- Percentage Text Color

## Visibility Settings

Use the visibility tab to toggle the visibility of different elements on your card.

## Using the Card

1. Add the Ultra Vehicle Card to your dashboard
2. Click to configure the card
3. Fill in all the relevant information in the GUI
4. Customize the appearance using the color pickers and style options
5. Add and customize icons for additional functionality
6. Save your configuration

The card will display your vehicle's information, including its charge/fuel level, range, location, and any custom icons you've added. The appearance will update based on your color and style choices. This card works for both Dark and Light mode, which switching make sure you default all colors needed and it will use the default for that mode.

**Note**: All configuration is done through the graphical interface - no manual code editing is required! You can of course use code if needed.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG" target="_blank"> <img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" alt="Donate with PayPal" style="width: 150px; height: auto;" />
</a>


Jopin our Discord: https://discord.gg/6xVgHxzzBV
