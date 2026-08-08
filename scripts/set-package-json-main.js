const fs = require('fs');

const path = require('path');

// eslint-disable-next-line no-undef
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkgFile = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK === 'true';
const newEntry = isStorybook ? 'expo-router/entry' : 'dist/index.js';

if (pkgFile.main !== newEntry) {
  pkgFile.main = newEntry;
  fs.writeFileSync(pkgPath, JSON.stringify(pkgFile, null, 2) + '\n');
  console.log(`[set-package-json-main] main update to: ${newEntry}`);
} else {
  console.log(`[set-package-json-main] main already is updated: ${newEntry}`);
}
