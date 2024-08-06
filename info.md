[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

# Ultra Vehicle Card for Home Assistant

<img width="921" alt="Screenshot 2024-08-06 at 9 04 20 AM" src="https://github.com/user-attachments/assets/3289effd-9ded-4f52-97b9-ad3741632126">
<img width="918" alt="Screenshot 2024-08-06 at 9 05 18 AM" src="https://github.com/user-attachments/assets/83dd08a7-dc82-450f-a8d3-cf38eb275d77">

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

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG" target="_blank">
  <img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" alt="Donate with PayPal" style="width: 150px; height: auto;" />
</a>
