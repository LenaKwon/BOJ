# [Bronze V] A+B - 1000 

[문제 링크](https://www.acmicpc.net/problem/1000) 

### 성능 요약

메모리: 9340 KB, 시간: 128 ms

### 분류

구현, 사칙연산, 수학

### 문제 설명

<p>두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)</p>

### 출력 

 <p>첫째 줄에 A+B를 출력한다.</p>


##Explanation
```javascript

//need file system module
const fs = require("fs");
//read the file using readFileSync function, this function return Buffer object, so need to convert it into String.
let input = fs.readFileSync("/dev/stdin").toString();
//store it in the Array after seperate the lines with split("\n"). same line will be in the same quote.
input = input.split("\n");

//in this case input value is only one line so grab the value with index 0.
input = input[0];
//now seperate it with space and convert it into number for operational function.
//.map() loop through all value. using + is simple way of Number(item)
input = input.split(' ').map((item) => +item);
//now set the input value for the function.
solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A + B);
}

```
