import { dedupingMixin } from "https://unpkg.com/@polymer/polymer@3.4.1/lib/utils/mixin.js?module";

const LocalizeMixin = dedupingMixin(
  (superClass) =>
    class extends superClass {
      static get properties() {
        return {
          hass: Object,
          localize: Function,
        };
      }

      connectedCallback() {
        super.connectedCallback();
        this.loadResources(this.hass.language);
      }

      async loadResources(language) {
        let resources;
        const languagesToTry = [language, language.split('-')[0], 'en'];

        for (const lang of languagesToTry) {
          try {
            resources = await this.loadTranslationFile(lang);
            if (resources) {
              break;
            }
          } catch (e) {
            console.error(`Failed to load translations for ${lang}:`, e);
          }
        }

        if (!resources) {
          console.warn('No translations could be loaded. Using default strings.');
          resources = {};
        }

        this.localize = (key, ...args) => {
          const translatedValue = key.split('.').reduce((o, i) => o && o[i], resources);
          if (translatedValue === undefined) return key;
          return translatedValue;
        };
      }

      loadTranslationFile(lang) {
        const url = `./translations/${lang}.js`;
        return import(url)
          .then(module => {
            if (typeof module.default !== 'object') {
              throw new Error('Translation file does not export a default object');
            }
            return module.default;
          })
          .catch(error => {
            console.error(`Failed to load translations for ${lang}:`, error);
            return null;
          });
      }
    }
);

export const localize = LocalizeMixin;