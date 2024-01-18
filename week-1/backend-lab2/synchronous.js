//Step 1 & 5.1
const fs = require('fs')
const os = require('os')
//Step 2,3 & 4
try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File contents (Synchronous Read):', data);
} catch (err) {
    console.error('Error reading file:', err);
}
try {
    fs.writeFileSync('output.txt', 'This is some sample data (Synchronous Write).');
    console.log('Data written to output.txt (Synchronous Write)');
} catch (err) {
    console.error('Error writing file:', err);
}
// Step 5.2, 5.3 & 5.4
console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus());
// Step 6
const info = `Hostname ${os.hostname()}\nPlatform ${os.platform()}`;
try {
    fs.writeFileSync('system_info.txt', info);
    console.log('Sysytem information has been written to system_info.txt');
} catch (err) {
    console.error('Error writing system information:', err);
}