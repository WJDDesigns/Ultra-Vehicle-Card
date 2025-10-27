[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)

> ⚠️ **Deprecation Notice**
>
> **Ultra Vehicle Card is now deprecated.**  
> Its successor, **[Ultra Card](https://ultracard.io)**, continues the vision with a more powerful, modular system and full visual dashboard builder.  
>
> Please transition to **Ultra Card** for ongoing updates, new features, and support.
>
> Thank you for being part of the journey, your feedback helped shape what’s next.

# Ultra Vehicle Card for Home Assistant

![header-hero-uvc](https://github.com/user-attachments/assets/4fbd3ad9-fc07-4923-895c-4e316adbbf64)

Welcome to the future of vehicle monitoring in Home Assistant! Ultra Vehicle Card brings all your vehicle data into a beautiful, customizable interface that works with any vehicle type - electric, gas, hybrid, or even spacecraft (okay, maybe not yet, but we're working on it! 🚀).

## ✨ Features

- **Universal Vehicle Support:** Electric, gas, hybrid - configure it however you need
- **Fully Customizable Layout:** Drag and drop sections, choose column layouts, adjust spacing
- **Dynamic Vehicle Images:** Show different images based on vehicle status (charging, parked, etc.)
- **Custom Progress Bars:** Battery, fuel, range, charging speed - add as many as you need
- **Interactive Icon Rows:** Create custom control panels with intelligent state detection
- **Beautiful Gradients:** Make your bars pop with custom color transitions
- **Responsive Design:** Looks great on mobile, tablets, and dashboards
- **Smart Template Support:** Use Home Assistant templates for advanced logic
- **Visual Editor:** No YAML required (unless you want to!)

## 🛠️ Installation

### HACS (Recommended)

Ultra Vehicle Card is available in the default HACS repository:

1. Open HACS in your Home Assistant instance
2. Navigate to "Frontend" section
3. Click the "+" button to add a new integration
4. Search for "Ultra Vehicle Card"
5. Click INSTALL
6. Restart Home Assistant

### Manual Installation

For the DIY enthusiasts:

1. Download the latest `ultra-vehicle-card.js` file from the [Releases](https://github.com/WJDDesigns/Ultra-Vehicle-Card/releases) page
2. Upload it to your Home Assistant `config/www/` directory
3. Go to Settings → Dashboards → Resources
4. Add `/local/ultra-vehicle-card.js` as a JavaScript Module
5. Restart your browser

### 📚 Community Guides

Looking for some inspiration or help getting started? Check out these awesome guides created by the community:

- [Ultra Vehicle Card Video Guide by EverythingSmartHome](https://youtu.be/SOdAIGpClFs) 🎥

Have you made a guide you'd like featured here? [Open an issue](https://github.com/WJDDesigns/Ultra-Vehicle-Card/issues) or share it on our [Discord](https://www.discord.gg/6xVgHxzzBV)!

### 📋 Configuration Guide

### Quick Start

1. Add a new card to your dashboard
2. Select "Custom: Ultra Vehicle Card"
3. Use the visual editor to configure your card

### Configuration Tabs

#### 🔧 Settings Tab

The foundation of your card:

- **Card Title:** Name your vehicle and adjust title styling
- **Layout Types:** Choose between "Single" (vertical), "Double" (two-column), or "Dashboard" (top view)
- **Main Image:** Upload a photo of your vehicle or use a dynamic entity-based image
- **Action Images:** Configure different vehicle images based on entity states
- **Section Order:** Drag and drop to rearrange card sections
- **Section Columns:** Assign sections to specific columns in multi-column layouts
- **Section Spacing:** Fine-tune the margins between sections

#### 📊 Bars Tab

Create unlimited progress bars for any numeric sensor:

- **Main Entity:** Select the entity powering the bar (battery level, fuel level, etc.)
- **Limit Entity:** Optionally show a marker on the bar (like charge limit)
- **Left/Right Values:** Show additional info below the bar (range, power, etc.)
- **Bar Styling:** Customize size, radius, colors, and more
- **Gradients:** Create beautiful color transitions based on value
- **Animations:** Add subtle animations based on entity states

#### 🔘 Icons Tab

Build custom control panels:

- **Create Icon Rows:** Organize icons into rows with customizable width and alignment
- **Configure Icons:** Each icon can display entity states and perform actions
- **Smart State Detection:** Decide when icons appear active using states, templates, or attributes
- **Interaction:** Choose what happens on click (toggle, service calls, navigation, etc.)
- **Styling:** Customize icon size, text position, colors, and more

#### ✨ Customize Tab

Global visual settings:

- **Color Scheme:** Set default colors for card elements
- **Gradient Settings:** Configure global gradient stops for progress bars
- **Animation Settings:** Control default animations

#### ℹ️ About Tab

Help and support:

- Version information
- Helpful links
- Support options

## 🧩 Template Mode Power

One of the most powerful features is template mode, which lets you use Home Assistant templates to determine icon states or values. This enables complex logic like:

```
{{ is_state('binary_sensor.car_charging', 'on') and states('sensor.battery_level')|int < 80 }}
```

This would make an icon active only when the car is charging AND battery is below 80%.

## 📱 Example Configurations

### Electric Vehicle Card

```yaml
type: custom:ultra-vehicle-card
title: Tesla Model 3
vehicle_image: /local/images/tesla.png
bars:
  - entity: sensor.tesla_battery_level
    limit_entity: sensor.tesla_charge_limit
    left_entity: sensor.tesla_range_km
    left_title: Range
    right_entity: sensor.tesla_charging_power
    right_title: Charging
    use_gradient: true
  - entity: sensor.tesla_speed
    left_entity: sensor.tesla_power
    left_title: Power
    right_entity: sensor.tesla_efficiency
    right_title: Efficiency
icon_rows:
  - width: '100%'
    alignment: space-between
    icons:
      - entity: switch.tesla_climate
        name: Climate
        icon_active: mdi:fan
        icon_inactive: mdi:fan-off
        on_click_action: toggle
      - entity: lock.tesla_doors
        name: Locks
        icon_active: mdi:lock-open
        icon_inactive: mdi:lock
        on_click_action: toggle
      - entity: binary_sensor.tesla_sentry_mode
        name: Sentry
        icon_active: mdi:shield
        icon_inactive: mdi:shield-off
        on_click_action: toggle
```

### Hybrid Vehicle Card

```yaml
type: custom:ultra-vehicle-card
title: Toyota RAV4 Prime
vehicle_image: /local/images/rav4.png
bars:
  - entity: sensor.rav4_battery_level
    left_entity: sensor.rav4_battery_range
    left_title: EV Range
    use_gradient: true
  - entity: sensor.rav4_fuel_level
    left_entity: sensor.rav4_fuel_range
    left_title: Fuel Range
    use_gradient: true
    gradient_stops:
      - color: '#ff0000'
        position: 0
      - color: '#ffff00'
        position: 50
      - color: '#00ff00'
        position: 100
icon_rows:
  - width: '100%'
    alignment: space-between
    icons:
      - entity: sensor.rav4_location
        name: Location
        icon_inactive: mdi:map-marker
        on_click_action: more-info
      - entity: sensor.rav4_odometer
        name: Mileage
        icon_inactive: mdi:counter
      - entity: binary_sensor.rav4_doors
        name: Doors
        icon_active: mdi:car-door
        icon_inactive: mdi:car-door
        color_active: '#ff0000'
```

## 🔍 Troubleshooting

### Card Not Showing Up

1. Check your browser console for errors
2. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Verify the resource is loaded properly in Dashboard → Resources

### Configuration Not Saving

1. Make sure all required entities exist
2. Check for syntax errors in templates
3. Try recreating the card from scratch if problems persist

### Missing Icons or Weird Styling

1. Reload your entire browser page
2. Inspect browser console for script errors
3. Update to the latest version

## 🖌️ Advanced Customization

### Custom Animations

Bars can animate based on entity states:

```yaml
bars:
  - entity: sensor.tesla_battery_level
    animation_entity: binary_sensor.car_charging
    animation_state: 'on'
    animation_type: 'pulse'
```

### Gradient Display Modes

Control how gradients display on bars:

```yaml
bars:
  - entity: sensor.tesla_battery_level
    use_gradient: true
    gradient_display_mode: 'value_based' # or "full"
    gradient_stops:
      - color: '#ff0000'
        position: 0
      - color: '#ffff00'
        position: 50
      - color: '#00ff00'
        position: 100
```

### Global CSS Injection

Add custom CSS directly to your card:

```yaml
global_css: |
  .my-custom-class {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
```

## ❓ FAQ

### Can I use this with any vehicle?

Yes! Configure it for any vehicle type - electric, gas, hybrid, motorcycle, or even a spaceship (if you have one).

### Do I need special integrations?

The card works with any entity in Home Assistant. Popular integrations include Tesla, Kia/Hyundai Connect, Volvo On Call, PSA Car Controller, and many more.

### Can I have multiple vehicles on one dashboard?

Absolutely! Create multiple cards, one for each vehicle.

### Is there a mobile app version?

The card is fully responsive and works great on mobile through the Home Assistant companion app or browser.

### Can I translate the card to my language?

Yes! The card supports multiple languages. Check the TRANSLATION_GUIDE.md for details.

## ❤️ Support Development

If you find this card useful, consider supporting its continued development:

- [Buy me some caffeine](https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG&clickref=1101lAycwnhU&gad_source=7&pid=328130457&dclid=CjgKEAjwh_i_BhCRhu7RxN_14hYSJACbYkcgx98-Vsb49UI4imjGhPA2lwk73DpbbgCri-G8TCTB9PD_BwE&ssrt=1744735247042)
- [Join our Discord](https://www.discord.gg/6xVgHxzzBV)
- Star the repository
- Share your setup in the Home Assistant community

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Ultra Vehicle Card** - Drive your dashboards to the next level!
