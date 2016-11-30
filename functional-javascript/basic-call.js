module.exports = function duckCount() {
  return Array.prototype.slice.call(arguments)
  .filter((x) =>
    Object.prototype.hasOwnProperty.call(x, 'quack')
  ).length
}
