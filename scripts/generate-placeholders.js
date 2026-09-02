const fs = require('fs');
const path = require('path');

const placeholders = [
  { name: 'hero-balance.jpg', width: 1920, height: 1080, label: 'Hero Balance' },
  { name: 'portrait.jpg', width: 800, height: 1067, label: 'Portrait' },
  { name: 'teaching-squat.jpg', width: 800, height: 1000, label: 'Teaching' },
  { name: 'staff.jpg', width: 800, height: 600, label: 'Staff Work' },
  { name: 'floorwork.jpg', width: 1600, height: 900, label: 'Floor Work' },
  { name: 'ball-balance.jpg', width: 1600, height: 900, label: 'Ball Balance' },
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

placeholders.forEach(({ name, width, height, label }) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="#f4f4f5" width="100%" height="100%"/>
  <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.05}" fill="#a1a1aa" text-anchor="middle" dominant-baseline="middle">${label}</text>
</svg>`;

  const filePath = path.join(imagesDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

console.log('\\nPlaceholder SVGs created. Replace with actual JPGs when available.');
