# [Silver V] 그룹 단어 체커 - 1316 

[문제 링크](https://www.acmicpc.net/problem/1316) 

### 성능 요약

메모리: 9340 KB, 시간: 128 ms

### 분류

구현, 문자열

### 문제 설명

<p>그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.</p>

<p>단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.</p>

### 출력 

 <p>첫째 줄에 그룹 단어의 개수를 출력한다.</p>

## 여러가지 풀이
1. 배열을 이용한 방법, 제출된 코드는 indexOf() 메서드를 이용해 값이 없을 경우 -1 반환하는 것을 이용했고,</br>
   아래 풀이는 includes() 메서드를 이용했다.
```javascript
"use strict"
const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");
console.log(input)

const n = Number(input[0]);
let result = 0; 

for(let i=1; i<= n; i++){
    const word = input[i]; 
    const used =[];
    let usedChar = true;

    for(let j =0; j< word.length; j++){
        const char = word[j];
        if(!used.includes(char)){
            used.push(char);
        }else if(char !== word[j-1]){
            usedChar = false;
            break;
        }
    } 
    if(usedChar) result ++ ;  
}
console.log(result);
```

2. 객체 활용방법 -입력받은 문자열을 객체에 저장한 후 각 문자열을 비교하면서 그룹단어인지 확인하는 방법
```javascript
"use strict"
const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");
console.log(input)

const n = Number(input[0]);
let result = 0; 

for(let i=1; i <= n; i++){
    const word = input[i]; 
    const used ={}; // 이 부분이 객체형성 부분
    let flag = true;

    for(let j =0; j< word.length; j++){
        const char = word[j];
        // 객체데이터 접근 시에는 includes를 안씀 
        if(!used[char]){
            used[char] = true;
        // 그리고 true 값만 정해줌
        }else if(char !== word[j-1]){
            flag = false;
            break;
        }
    } 
    if(flag) result ++ ;  
}
console.log(result)
```

3. Set 활용방법
```javascript
"use strict"
const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");
console.log(input)

const n = Number(input[0]);
let result = 0; 

for(let i=1; i <= n; i++){
    const word = input[i]; 
    const used = new Set(); // 이 부분이 Set 형성 부분
    let flag = true;

    for(let j =0; j< word.length; j++){
        const char = word[j];
        //Set데이터 접근시에는 has(), add() 메서드를 씀 
        if(!used.has(char)){
            used.add(char);
        }else if(char !== word[j-1]){
            flag = false;
            break;
        }
    } 
    if(flag) result ++ ;  
}
console.log(result)
```

4. Set 과 문자수를 감소시키는 방법
 
참값에 따라 cnt 를 하나씩 증가시키는 것이 아닌 result에 전체 문자열 수 n을 담고, </br>
그룹단어가 아닌 수를 찾을 때마다 result 값을 하나씩 감소시키는 방법

```javascript
"use strict"
const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");
console.log(input)

const n = Number(input[0]);
let result = n; 

for(let i=1; i <= n; i++){
    const word = input[i]; 
    const used = new Set(); // 이 부분이 Set 형성 부분
  
    for(let j =0; j< word.length; j++){
        //Set데이터 접근시에는 has(), add() 메서드를 씀
        // 두가지 조건을 모두 만족하는 경우의 수만 뺌
        if(used.has(word[j]) && word[j] !==word[j-1]){
            result --;
            break;
        }else{
            used.add(word[j]);
        }
    }  
}
console.log(result)
```
