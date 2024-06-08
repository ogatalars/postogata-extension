const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, 'out/_next');
const newPath = path.join(__dirname, 'out/next_assets');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('Folder renamed successfully');
} else {
  console.log('Folder not found:', oldPath);
}
