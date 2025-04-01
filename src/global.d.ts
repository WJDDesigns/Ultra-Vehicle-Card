import { CustomCard } from './types';

declare global {
  interface Window {
    customCards: CustomCard[];
    customElements: CustomElementRegistry;
  }
} 