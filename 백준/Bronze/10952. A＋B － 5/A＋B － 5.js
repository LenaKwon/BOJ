let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

for(let i=0; i< input.length-1; i++){
    let nums = input[i].split(" ").map(val=>+val);
    console.log (nums[0]+nums[1]);
  
    
}