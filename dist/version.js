/**
 * Ultra Vehicle Card Version
 * v2.0-Beta6
 * 
 * When updating this file, increment the version number in the comment above
 * and in the setVersion call below.
 */

let version = "undefined";

function setVersion(value) {
  version = value;
}

// Set default version (will be overridden by card)
setVersion('2.0-Beta6');

export { version, setVersion };