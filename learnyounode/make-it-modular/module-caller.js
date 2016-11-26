let mod = require('./modular')
let directory = process.argv[2]
let extension = process.argv[3]

mod(directory, extension, (err,ret) => {
  if(err) console.log("Error: " + err)
  console.log(ret.join('\n'))
})
