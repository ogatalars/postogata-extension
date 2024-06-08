const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const htmlFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\/_next\//g, '/next_assets/');
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('References to _next have been replaced with next_assets');
