const os = require('os');

// Basic Info

console.log(os.type());        // OS name (e.g., 'Linux', 'Darwin', 'Windows_NT')
console.log(os.platform());    // Platform (e.g., 'win32', 'linux')
console.log(os.arch());        // CPU architecture (e.g., 'x64')

// Memory Info

console.log(os.totalmem());    // Total system memory (in bytes)
console.log(os.freemem());     // Free system memory (in bytes)

// Uptime

console.log(os.uptime());      // System uptime in seconds

// User Info

console.log(os.userInfo());
/*
{
  uid: 1000,
  username: 'yourname',
  homedir: '/home/yourname',
  shell: '/bin/bash'
}
*/

// CPU Info

console.log(os.cpus());  // Array of CPU core info
console.log(os.cpus().length);

// Network Interfaces

console.log(os.networkInterfaces());
