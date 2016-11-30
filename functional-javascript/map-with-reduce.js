module.exports = function arrayMap(arr, fn) {
  return arr.reduce((newArr, val, idx) => {
    newArr[idx] = fn(val)
    return newArr
  }, [])
}
