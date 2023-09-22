const input = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase();

let result = new Array(26).fill(0);
for(let i=0; i<input.length; i++){
    result[input.charCodeAt(i)-97]++;
}
let max = Math.max(...result);
let index = result.indexOf(max);

let isSame = false;
for(let j=0; j < 26; j++){
    if(result[j]===max && index != j){
        isSame = true;
        break;
    }
}
console.log(isSame? "?" : String.fromCharCode(index+65))

