const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");
//console.log(fs)
let input = fs[0];
//console.log(input)
input = input.split(" ").map(val=>+val);
//console.log(input)
comparison(input[0],input[1]);
function comparison(a,b) {
  if(a>b){
    console.log(">")
  }else if(a<b){
    console.log("<")
  }else{
    console.log("==")
  }
}