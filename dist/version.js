// Upon any change to this file update 'import ... from 'version.js?v=0'' with a newer version number.
// In all files importing this file.

let version = 'undefined';
function setVersion(value) {
  version = value;
}

export { version, setVersion };
