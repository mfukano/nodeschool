let fs = require('fs');

let lines = fs.readdir(process.argv[2], 'utf8', (_,files) => {
  console.log(files.filter((x) => {
    let dot = x.indexOf('.');
    return x.slice(dot) == '.' + process.argv[3];
  }).join('\n'));
});
