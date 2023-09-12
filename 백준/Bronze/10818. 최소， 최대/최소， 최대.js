const input =require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const num = +input[0];
const nums = input[1].split(" ").map(val=>+val);

nums.sort((a,b) =>a-b)
console.log(nums[0])
console.log(nums[num-1])