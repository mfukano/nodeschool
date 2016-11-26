//console.log(process.argv);
let nums = process.argv.slice(2, process.argv.length).map((x) => parseInt(x));
console.log(nums.reduce((sum, num) => { return sum + num }, 0));
