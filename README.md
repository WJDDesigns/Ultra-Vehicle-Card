# Ultra Vehicle Card for Home Assistant

This custom card allows you to display vehicle information in your Home Assistant dashboard, including the vehicle name, image, and fuel or charge level.

## Installation

### HACS (Recommended)

1. Make sure you have [HACS](https://hacs.xyz/) installed in your Home Assistant instance.
2. Go to HACS > Frontend
3. Click on the "+" button
4. Search for "Ultra Vehicle Card"
5. Click Install

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
      
### Cool Tip

Hey there, fellow Home Assistant enthusiast! 🏠✨ 

Did you know that the Ultra Vehicle Card was inspired by a midnight coding session fueled by an unhealthy amount of caffeine and a sudden realization that cars deserve cool cards too? It's true!

If this card has made your dashboard a little more awesome or saved you from the treacherous "low fuel surprise," consider buying the developer a virtual Dr Pepper. It helps keep the creativity flowing and the code bug-free!

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG">
  <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal" style="width: 150px; height: auto;" />
</a>
