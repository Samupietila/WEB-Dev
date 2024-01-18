const os = require('os');
const fs = require('fs');
// PART1
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});
// PART2
fs.writeFile('output.txt', 'Here is text:', (err, data) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
    }
});
// PART3 
console.log('Hostname:', os.hostname())
console.log('Platform:', os.platform())
console.log('CPUs', os.cpus())