/**
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

export { version, setVersion }; 