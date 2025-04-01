import './cards/ultra-vehicle-card';
import './editor/ultra-vehicle-card-editor';
import './components/entity-picker';
import { CustomCard } from './types';
import { version } from '../dist/version.js';

// Initialize customCards array if it doesn't exist
window.customCards = window.customCards || [];

// Add our card to the list
window.customCards.push({
  type: 'ultra-vehicle-card',
  name: 'Ultra Vehicle Card',
  description:
    'A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.',
  preview: true,
  documentationURL: 'https://github.com/WJDDesigns/Ultra-Vehicle-Card',
  version: version,
} as CustomCard);
