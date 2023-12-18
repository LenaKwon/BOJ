const fs = require('fs');
const input = fs
   .readFileSync('./dev/stdin')
   .toString()
   .trim()
   .split('\n')
   .map((v) => v.split(' ').map((v) => +v));
const n = input.shift();
let arr = Array.from(Array(100), () => Array(100).fill(false));
for (let i = 0; i < input.length; i++) {
    let x = input[i][0];
    let y = input[i][1];

    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            arr[x + j][y + k] = true;
        }
    }  
}
let result = arr.reduce((prev, curr) => {
    for (let el of curr) {
        if (el) prev++;
    }
    
    return prev;
}, 0);

console.log(result);