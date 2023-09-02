let input = require("fs").readFileSync("dev/stdin").toString().split(' ');
operation(Number(input[0]),Number(input[1]));
function operation(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(Math.floor(a/b));  
    console.log(a%b);
}