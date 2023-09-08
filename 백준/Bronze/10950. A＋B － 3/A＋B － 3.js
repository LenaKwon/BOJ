let input = require("fs").readFileSync("dev/stdin").toString().trim().split('\n');
//console.log(input);

for(let i=1; i <input.length; i++){
   let nums = (input[i].split(' ')).map(val=>+val)
    console.log (nums[0]+nums[1])
}