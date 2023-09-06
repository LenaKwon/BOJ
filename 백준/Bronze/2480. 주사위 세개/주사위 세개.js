//문제해결 방법을 먼저 생각 후 그에 따른 input에 대한 배열이 선행되면 코드가 가벼워진다.
//input을 sort()로 오름차순(a-b)이나 내림차순(b-a)으로 정렬해두면 
//조건문의 길이를 줄일 수 있고, Math.max()함수를 부분적으로 쓸 필요도 없다.
//또한 반복문이 필요없기 때문에 function사용을 하지 않았고, 변수선언도 최소화했다.

const [a,b,c] = require("fs").readFileSync("dev/stdin").toString().trim().split(' ').map(Number).sort((a,b)=>b-a);


if (a===b && b===c) console.log(10000 + a * 1000)
else if (a===b || b===c) console.log(1000 + b * 100)
else  console.log(a * 100)