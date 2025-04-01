# Ultra Vehicle Card Version Management

This project uses a versioning system that embeds the version number in the filenames for better cache management.

## How it works

1. The version number is stored in `dist/version.js` and is extracted during the build process.
2. Webpack outputs the main bundle as `ultra-vehicle-card-[version].js` (e.g., `ultra-vehicle-card-2.0-Beta1.js`).
3. A reference file `ultra-vehicle-card.js` is created that simply imports the versioned file.

## When releasing a new version

1. Update the version number in these files:

   - `dist/version.js` - Update both the comment and the `setVersion()` call
   - `src/cards/ultra-vehicle-card.ts` - Update the `setVersion()` call
   - `package.json` - Update the version field

2. Build the project:

   ```bash
   npm run build
   ```

3. The build process will:

   - Read the version from `dist/version.js`
   - Generate `ultra-vehicle-card-[version].js`
   - Create a reference file `ultra-vehicle-card.js` that imports the versioned file

4. For deployment, you can use:
   ```bash
   npm run build:deploy
   ```

## Benefits

- Users always see the correct version in the browser console
- Cache busting is automatic with version changes
- Even if browsers cache the main entry file, it will always redirect to the current version
- Version number is consistent across all places it appears
