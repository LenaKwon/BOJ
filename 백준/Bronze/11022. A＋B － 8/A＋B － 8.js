let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let num = +input[0];
let answer ='';
for(let i= 1; i <=num; i++){
    nums = input[i].split(' ').map(val=>+val);
    //console.log(nums);
    answer =  nums[0] + nums[1];
    
    console.log("Case #"+[i]+": " + nums[0] + " " + "+ " + nums[1] + " " + "= "+ answer);
}