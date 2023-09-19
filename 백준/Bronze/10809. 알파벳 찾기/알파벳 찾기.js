const input = require("fs").readFileSync("dev/stdin").toString().trim();
const alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let result =[];
for(let i=0; i< alpha.length; i++){
    result.push(input.search(alpha[i]));
}console.log(result.join(" "))