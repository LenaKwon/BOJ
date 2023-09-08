let fs =require("fs").readFileSync("dev/stdin").toString().split("\n");
let num = +fs[0];
let answer ='';
for(let i = 1; i <= num; i++){
    let input = fs[i].split(" ");
    answer += Number(input[0])+Number(input[1])+ "\n";
}
console.log(answer);