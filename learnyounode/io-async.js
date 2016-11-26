let fs = require('fs');

let lines = fs.readFile(process.argv[2], 'utf8', (_, file) => {
  console.log(file.split('\n').length - 1);
});
