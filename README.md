# Ultra Vehicle Card v2.0 - Your Dashboard's New Best Friend! 🚗💨

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
![header-hero-uvc](https://github.com/user-attachments/assets/4fbd3ad9-fc07-4923-895c-4e316adbbf64)

Welcome to the future! Ultra Vehicle Card v2.0 has been rebuilt from the ground up using **TypeScript** and **Lit**, making it more powerful, flexible, and frankly, more awesome than ever before. Forget the old ways; this is a whole new ride!

**🚨 HEADS UP! V2.0 is a total rewrite.** This means your old v1.x configurations **WILL NOT WORK**. You'll need to recreate your cards using the new editor. It's a small bump in the road for a much smoother journey ahead!

## 🛠️ Installation

Get up and running faster than a speeding... well, you get the idea.

### HACS (Home Assistant Community Store) - The Easy Street (Recommended)

Great news! The Ultra Vehicle Card is now available directly in the default HACS repository.

1.  Ensure you have HACS installed in your Home Assistant.
2.  Go to HACS > Frontend.
3.  Click the "+ Explore & Download Repositories" button (usually bottom right).
4.  Search for "**Ultra Vehicle Card**".
5.  Select the card and click "**Download**".
6.  Follow the on-screen instructions (usually involves confirming the download and refreshing your browser). Done!

### Manual Installation - The Scenic Route

Only for the brave or those without HACS:

1.  Grab the latest `ultra-vehicle-card.js` file from the [Releases](https://github.com/WJDDesigns/Ultra-Vehicle-Card/releases) page.
2.  Upload it to your Home Assistant `config/www/` directory. Create the `www` folder if it doesn't exist.
3.  Go to Home Assistant **Settings** > **Dashboards** > **More Options** (3 dots) > **Resources**.
4.  Click **+ Add Resource**.
5.  Set the **URL** to `/local/ultra-vehicle-card.js` (or wherever you put it).
6.  Set the **Resource Type** to **JavaScript Module**.
7.  Click **Create** and refresh your browser.

## ⚙️ Configuration - Let's Build Your Dream Card!

The magic happens in the Visual Editor. Add the card to your dashboard, and you'll be greeted with a powerful but friendly interface organized into these main tabs:

*   **Settings:** Configure the basics like Title, Images, layout options, and core entity settings.
*   **Bars:** Add and customize your progress bars (battery, fuel, range, etc.).
*   **Icons:** Set up rows of interactive icons for quick actions and status info.
*   **Customize:** Fine-tune global colors, gradients, and potentially other visual styles.
*   **About:** Find links, version info, and ways to support the card.

Here's a breakdown of the configuration areas within those tabs:

### 1. Settings Tab: The Basics & Layout

This is where you lay the foundation and arrange the core structure.

*   **Card Title:** Give your card a name! "Batmobile", "Mom's Taxi", whatever fits. Set its alignment and size.
*   **Main Image Settings:**
    *   **Source:** Choose 'None', 'Local/URL' (upload or paste a web link), or 'Entity' (use an entity's state as the image URL).
    *   **Image URL/Upload:** Provide the link or upload your glorious vehicle picture.
    *   **Image Entity:** Select the entity holding the image URL if you chose 'Entity'.
    *   **Image Height:** Control how tall the image is (in pixels). Find that visual sweet spot!
    *   **Default Image:** A fallback image if your primary one fails to load.
*   **Action Image Settings:** *(Optional but cool!)* Want the image to change when something happens (like charging)?
    *   **Action Entity:** Select the entity whose state will trigger an image change (e.g., `binary_sensor.car_is_charging`).
    *   **Action Images:** Map specific states of the `action_entity` to different image URLs (e.g., state 'on' shows `charging.png`, state 'off' shows `parked.png`).
*   **Image Cropping:** *(For Main & Action Images)* Got an image that needs a little trim? Use the sliders or input values (top, right, bottom, left) to crop the image perfectly within the card.
*   **Layout Type:** 'single' (image top, content below) or 'double' (image left, content right).
*   **Sections Order:** *(Likely here or Layout)* Drag and drop sections (like 'Title', 'Image', 'Bars', 'Icon Rows') to change their vertical order.
*   **Sections Columns:** *(Likely here or Layout, only in 'double' layout)* Assign sections to the 'left' or 'right' column.
*   **Section Styles:** *(Likely here or Layout)* Fine-tune spacing! Add custom top/bottom margins (in pixels) to specific sections for perfect vertical rhythm.
*   **Formatted Entities:** (Toggle) Should the card try to make entity states prettier? (e.g., `car_is_charging` becomes "Car Is Charging", numbers get commas). Usually, leave this ON.
*   **Show Units:** (Toggle) Display units (like `mi`, `%`, `kW`) next to values? Your call.

### 2. Bars Tab: The Heart of Your Data

Forget fixed slots! Add custom progress bars for *anything*.

*   **Adding Bars:** Click "Add Bar" to create a new progress bar section. Drag to reorder.
*   **Configuring a Bar:**
    *   **Main Entity:** The primary sensor driving the bar's value (e.g., `sensor.car_battery_level`).
    *   **Limit Entity:** *(Optional)* An entity representing a limit marker on the bar (e.g., `input_number.charge_limit`).
    *   **Left/Right Entities:** *(Optional)* Entities to display text values on the left/right side below the bar (e.g., `sensor.car_range` on the left, `sensor.charging_power` on the right).
    *   **Left/Right Titles:** *(Optional)* Custom text labels for the left/right values.
    *   **Show Left/Right:** Toggles to hide/show the left/right entity sections.
    *   **Colors:** Customize the Bar Fill, Background, Border, Limit Indicator, and Text colors *for this specific bar*. Go wild!
    *   **Text Sizes:** Control the font size for Titles and Text on the left/right.
    *   **Bar Style:**
        *   **Size:** `thin`, `regular`, `thick`, or the mighty `thiccc`.
        *   **Radius:** `square`, `rounded-square`, or `round`.
    *   **Use Gradient:** (Toggle) Want a smooth color transition instead of a solid fill? *(Gradient settings likely under the Customize tab)*
    *   **Animation:** *(Optional)* Make your bar subtly animate based on an entity's state.
        *   **Animation Entity:** The entity triggering the animation (e.g., `binary_sensor.car_is_charging`).
        *   **Animation State:** The state that triggers the animation (e.g., 'on').
        *   **Animation Type:** Choose an effect (like 'pulse').

### 3. Icons Tab: Your Command Center

Add rows of interactive icons.

*   **Adding Rows:** Click "Add Icon Row". Drag to reorder rows.
*   **Configuring a Row:**
    *   **Width:** How much horizontal space should this row occupy?
    *   **Alignment:** Align icons within the row (left, center, right, space-between).
    *   **Spacing:** Gap between icons in the row.
*   **Adding Icons:** Click "Add Icon" within a row. Drag to reorder icons.
*   **Configuring an Icon:**
    *   **Entity:** The entity this icon represents/controls.
    *   **Name:** *(Optional)* A custom name label for the icon.
    *   **Icons (Active/Inactive):** Pick icons from the Material Design Icons set for when the entity is 'on'/'active' and 'off'/'inactive'.
    *   **Colors (Active/Inactive):** Choose colors for the active/inactive states.
    *   **State Logic (Active/Inactive):** This is powerful! How does the card know if the icon should be active?
        *   **Default:** Uses standard Home Assistant logic ('on', 'home', 'open', etc. are active).
        *   **Template:** **(Wizard Mode!)** Write a Home Assistant template (`{{ }}`) for complex conditions. Check multiple entities, attributes, etc. Example: `{{ is_state('binary_sensor.car_charging', 'on') and states('sensor.battery') | int < 80 }}`
        *   **Attribute:** Base the state on a specific attribute of the entity.
        *   **Option:** For `input_select` or similar, choose which option means 'active'.
    *   **Show State/Name/Units:** Toggles to display these pieces of info near the icon.
    *   **Interaction:** What happens when you click? 'more-info', 'toggle', 'navigate', 'url', 'call-service', 'assist', or 'none'. Configure service data/URLs as needed.
    *   **Appearance:**
        *   **Icon Size:** Adjust the icon size (pixels).
        *   **Text Position/Alignment/Size:** Control where the name/state appears and its size/alignment.
        *   **Icon Background:** 'none', 'circle', 'square', 'rounded-square'. Add a background shape!
        *   **Icon Background Color:** Color for that shape.

### 4. Customize Tab: The Finishing Touches

Global style settings that apply if not overridden elsewhere.

*   **Global Colors:** Set default colors for Card Title, Card Background, Bar Background/Fill/Border, Info Text, State Text, etc. These are used if not set specifically on a Bar or Icon.
*   **Bar Gradient:** (Toggle & Configuration) Enable and define default gradient stops for bars that have `Use Gradient` enabled (if not overridden per-bar).
    *   **Gradient Stops:** Define colors at different percentage points (e.g., red at 0%, yellow at 50%, green at 100%). Click "Add Gradient Stop" to add more points.
    *   **Display Mode:** `full` (show whole gradient) or `value_based` (only show gradient up to the current value).
*   *(Other global settings like default text sizes or animation toggles might appear here)*

### 5. About Tab

This section contains helpful links, version information, and ways to support development, like tipping links or Discord invites. Check it out!

## 💻 Advanced YAML Configuration

While the UI editor is king, you can still configure the card using YAML, especially useful for sharing or complex setups.

```yaml
type: custom:ultra-vehicle-card
title: My Awesome Ride
main_image: /local/images/my_car.png
bars:
  - entity: sensor.car_battery
    name: Battery
    # ... other bar options
icon_rows:
  - icons:
      - entity: switch.toggle_climate
        # ... other icon options
# ... other top-level options like title_alignment, layout_type etc.
```

Check the `types.ts` file in the repository for the full configuration spec if you dive into YAML.

## 🤔 FAQs - Frequently Asked Questions

*   **Q: Why the big change from v1? Why break my config?**
    *   **A:** V1 was built on older tech. V2's rewrite to TypeScript/Lit makes the card WAY more stable, flexible, maintainable, and allows for awesome new features (like custom bars/icons/layouts) that just weren't feasible before. It's short-term pain for long-term gain!
*   **Q: Okay, how do I migrate my v1 card?**
    *   **A:** There's no automatic migration. You need to add a new v2 card and manually re-select your entities and options using the new visual editor. Think of it as a fun re-discovery process!
*   **Q: Help! My card looks weird after upgrading!**
    *   **A:** 1) Make sure you've **reconfigured it from scratch** using the v2 editor. 2) Try clearing your browser cache (Ctrl+F5 / Cmd+Shift+R). Old files can sometimes linger.
*   **Q: How do these gradient bars work?**
    *   **A:** You define colors at different percentage points (stops) in the Customize tab (or per-bar). The card blends the colors smoothly between those points. Set 'Display Mode' to 'full' to see the whole gradient, or 'value_based' to color only up to the current sensor value.
*   **Q: What's the big deal with the icon "Template Mode"?**
    *   **A:** It lets you use Home Assistant's powerful templating engine (`{{ }}`) to decide when an icon is active or inactive, or even *which icon* to display. You can base the logic on multiple entities, attributes, times of day – almost anything! It's ultimate customization.
*   **Q: Where did the old "Vehicle Type" (Electric/Fuel/Hybrid) setting go?**
    *   **A:** It's gone! V2 is smarter. You simply add the `bars` and `icons` relevant to your vehicle. Have an EV? Add a battery bar. Have a Fuel car? Add a fuel bar. Hybrid? Add both! The card adapts.
*   **Q: How DO I show both fuel and battery for my hybrid?**
    *   **A:** Easy! Just go to the "Bars" tab and add one bar configured for your battery entity, and *another* bar configured for your fuel entity. Voila!

## ❤️ Fuel the Fun! (Support Development)

Like the card? Find it useful? Awesome! Building and maintaining this card takes a lot of caffeine and late nights. Your support helps fuel development, allowing us to keep improving the card, adding features, and squashing bugs to make it something everyone loves.

If you're feeling generous, consider sending a tip or checking out other ways to contribute (links often found in the **About** tab in the editor!):

*   **[Donate via PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG)**
*   **[Join the Discussion on Discord](https://www.discord.gg/6xVgHxzzBV)**
*   Report bugs or suggest features on [GitHub Issues](https://github.com/WJDDesigns/Ultra-Vehicle-Card/issues).

Every little bit helps keep this project rolling! 🙏

---

Thanks for using the Ultra Vehicle Card! Enjoy the new v2.0 features!
