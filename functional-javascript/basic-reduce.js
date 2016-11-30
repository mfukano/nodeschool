module.exports = function countWords (inputWords) { 
  return inputWords.reduce((inc, val) => { 
    inc[val] = ++inc[val] || 1
    return inc
  }, {})
}
