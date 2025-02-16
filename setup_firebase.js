const fs = require('node:fs');
const path = require('node:path');

const projectName = 'my-ecommerce-app'; // Change to your desired project name
const functionsDir = path.join(projectName, 'functions');
const publicDir = path.join(projectName, 'public');


// Function to create a directory
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Function to create a file
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`Created file: ${filePath}`);
}


// Create project directory and subdirectories
createDir(projectName);
createDir(functionsDir);
createDir(publicDir);


// Create package.json for Cloud Functions
createFile(path.join(functionsDir, 'package.json'), `{
  "name": "${projectName}-functions",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "firebase emulators:start",
    "install": "npm install"
  },
  "author": "allyelvis",
  "license": "ISC",
  "dependencies": {
    "firebase-admin": "^11.8.0",
    "firebase-functions": "^4.4.0"
  }
}`);


// Create index.js for Cloud Functions
createFile(path.join(functionsDir, 'index.js'), `// Your Cloud Functions will go here.`);


// Create placeholder files for the frontend
createFile(path.join(publicDir, 'index.html'), `<!DOCTYPE html>
<html>
<head>
  <title>${projectName}</title>
</head>
<body>
  <h1>Welcome to ${projectName}!</h1>
</body>
</html>`);

createFile(path.join(publicDir, 'style.css'), `/* Your CSS styles will go here */`);

createFile(path.join(projectName, 'firestore.rules'), `//Your Firestore security rules will go here.  THIS IS CRITICAL FOR SECURITY`);


console.log("Basic project structure created.  Now:");
console.log("1. Navigate to the '" + projectName + "' directory.");
console.log("2. Run 'npm install' in the functions directory to install dependencies.");
console.log("3. Initialize Firebase in the main project directory: 'firebase init'.");
console.log("4. Manually write your application code (backend functions, frontend, and VERY IMPORTANT security rules).");
console.log("5. Deploy your application: 'firebase deploy'");
