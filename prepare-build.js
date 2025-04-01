/**
 * Script to ensure version.js is in place before building
 */
const fs = require('fs');
const path = require('path');

// Make sure the dist directory exists
if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist'));
  console.log('Created dist directory');
}

// Check if version.js exists in dist folder
const versionFilePath = path.resolve(__dirname, 'dist/version.js');
if (!fs.existsSync(versionFilePath)) {
  // Copy from src if it exists there
  const srcVersionPath = path.resolve(__dirname, 'src/version.js');
  if (fs.existsSync(srcVersionPath)) {
    fs.copyFileSync(srcVersionPath, versionFilePath);
    console.log('Copied version.js from src to dist');
  } else {
    // Create a default version file
    const defaultVersionContent = `/**
 * Ultra Vehicle Card Version
 * v2.0-Beta1
 * 
 * When updating this file, increment the version number in the comment above
 * and in the setVersion call below.
 */

let version = "undefined";

function setVersion(value) {
  version = value;
}

// Set default version (will be overridden by card)
setVersion('2.0-Beta1');

export { version, setVersion };`;

    fs.writeFileSync(versionFilePath, defaultVersionContent);
    console.log('Created default version.js in dist');
  }
}

console.log('Version file is ready. Continuing with build...');
