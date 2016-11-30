function Spy(target, method) {
  var tempMethod = target[method]
  var dumb = { count: 0 }
  target[method] = function() {
    ++dumb.count
    return tempMethod.apply(this, arguments)
  }
  return dumb 
}

module.exports = Spy
