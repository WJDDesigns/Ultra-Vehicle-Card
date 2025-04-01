const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

// Extract version from version.js file
function getVersion() {
  try {
    const versionFile = fs.readFileSync(path.resolve(__dirname, 'dist/version.js'), 'utf8');
    const versionMatch = versionFile.match(/v([\d\.\-A-Za-z]+)/);
    if (versionMatch && versionMatch[1]) {
      return versionMatch[1];
    }
  } catch (e) {
    console.error('Error reading version:', e);
  }
  return 'unknown';
}

const version = getVersion();
console.log(`Building Ultra Vehicle Card version: ${version}`);

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: `ultra-vehicle-card-${version}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
    // Generate a versioned file reference for HACS
    {
      apply: compiler => {
        compiler.hooks.afterEmit.tap('GenerateVersionedReference', () => {
          // Create a simple reference file that redirects to the versioned file
          const refContent = `// This file auto-redirects to the current version
import './ultra-vehicle-card-${version}.js';`;

          fs.writeFileSync(path.resolve(__dirname, 'dist/ultra-vehicle-card.js'), refContent);

          console.log(`Created reference file pointing to version ${version}`);
        });
      },
    },
  ],
  performance: {
    hints: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
};
