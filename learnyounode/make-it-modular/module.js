let fs = require('fs');
let path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err)

    let ret = files.reduce((filtered, file) => {
      if (path.extname(file) === '.' + ext)
        filtered.push(file)
      return filtered;
    }, [])

    callback(null, ret)
  })
}
