const fs = require('fs');
const path = require('path');

const dir = 'app/claims/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace teal with red
  content = content.replace(/teal-/g, 'red-');
  
  // Replace bg-slate-50 with bg-white on sections
  content = content.replace(/className="([^"]*)bg-slate-50([^"]*)"/g, (match, p1, p2) => {
    // only if it's on a section or main container, wait, let's just replace all bg-slate-50 to bg-white
    return `className="${p1}bg-white${p2}"`;
  });
  
  // Replace bg-navy-950 with bg-white for backgrounds
  content = content.replace(/className="([^"]*)bg-navy-950([^"]*)"/g, (match, p1, p2) => {
     // Be careful, text-white might need to become text-navy-950 if background changes
     return match; // I'll do navy-950 manually to fix text colors
  });
  
  fs.writeFileSync(filePath, content);
}
console.log('Done replacing teal and slate-50');
