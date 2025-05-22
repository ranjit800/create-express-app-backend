#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the project name from the command
const projectName = process.argv[2] || 'my-express-app';
const targetDir = path.join(process.cwd(), projectName);

// Get the path to your template folder
const templateDir = path.join(__dirname, 'template');

// Function to copy files and folders
const copy = (src, dest) => {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(file => {
      copy(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Step 1: Create target directory
fs.mkdirSync(targetDir, { recursive: true });

// Step 2: Copy template files
copy(templateDir, targetDir);

// Step 3: Show success message
console.log(`\n✅ Express backend created in folder: ${projectName}`);
console.log(`\n👉 Next steps:`);
console.log(`   cd ${projectName}`);
console.log(`   npm install`);
console.log(`   npm start`);
