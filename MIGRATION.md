# Migration Guide: Upgrading to Ultra Vehicle Card 2.0

This guide will help you safely upgrade from Ultra Vehicle Card 1.x to version 2.0. The new version has been completely rewritten in TypeScript with many improvements and new features.

## Before You Begin

1. **Backup Your Current Configuration**

   - Take a screenshot or save your current card configuration
   - Note any customizations you've made

2. **Check For Dependencies**
   - Make sure your Home Assistant is updated to the latest version
   - If you use custom integrations with this card, check their compatibility

## Installation Options

### Option 1: Clean Installation (Recommended)

For the smoothest experience, we recommend a clean installation:

1. Remove the old Ultra Vehicle Card from HACS
2. Restart Home Assistant
3. Add the repository again using HACS
4. Install the new version
5. Restart Home Assistant

### Option 2: Direct Update

If you prefer to update directly:

1. Update the card through HACS
2. Clear your browser cache (important to get the new files)
3. Restart Home Assistant

## After Upgrading

1. **Check Browser Console**

   - Open your browser's developer console (F12 in most browsers)
   - Verify you see the new version number (2.0-Beta1)
   - Look for any error messages

2. **Re-create Your Cards**

   - The new version should maintain compatibility with your previous configuration
   - However, you may need to make minor adjustments

3. **Explore New Features**
   - Try out the new customization options:
     - Section ordering
     - Enhanced gradients
     - New animations
     - Text size controls
     - Bar size options

## Troubleshooting

If you encounter issues after upgrading:

1. **Clear Browser Cache**

   - The new version includes cache-busting features, but a manual cache clear may still be necessary

2. **Check Version**

   - Look for `Ultra Vehicle Card 2.0-Beta1` in your browser console
   - If you see an older version, you may need to force refresh (Ctrl+F5)

3. **Card Not Loading**

   - Try removing and re-adding the card to your dashboard
   - Check that resource paths are correct in your configuration

4. **Get Support**
   - Join our [Discord community](https://www.discord.gg/6xVgHxzzBV) for help
   - Create an issue on [GitHub](https://github.com/WJDDesigns/Ultra-Vehicle-Card/issues)

## Known Issues in Beta

- Some animations may render differently than in previous versions
- First-time configuration may take slightly longer to load

We appreciate your patience during this beta phase and welcome your feedback to improve the card!
