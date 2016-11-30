module.exports = function reduce(arr, fn, initial) {
  return (function recStep (idx, val) {
    if (idx > arr.length - 1) return val
    return recStep(idx+1, fn(val, arr[idx], idx, arr))
  })(0, initial)
}
