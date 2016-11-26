var fs = require('fs');

let lines = fs.readFileSync(process.argv[2], 'utf8');
console.log(lines.split('\n').length-1);
