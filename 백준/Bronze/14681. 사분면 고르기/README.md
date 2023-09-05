# [Bronze V] 사분면 고르기 - 14681 

[문제 링크](https://www.acmicpc.net/problem/14681) 

### 성능 요약

메모리: 9452 KB, 시간: 172 ms

### 분류

구현, 기하학

### 문제 설명

<p>흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.</p>

<img width="555" alt="Screenshot 2023-09-05 at 8 47 27 PM" src="https://github.com/LenaKwon/BOJ/assets/37726487/106af7ed-1f20-4fd1-9f3c-678dd5eedf0f">

<p>예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.</p>

<p>점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.</p>

### 입력 

 <p>첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)</p>

### 출력 

 <p>점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.</p>

### Thinking
`fs` 모듈을 사용할 경우 런타임오류가 발생하여 `readline` 모듈을 사용해야 한다. 
로컬 `txt` 파일을 불러올때 코드는 찾기 힘들었는데 아래가 하나의 방법이다.

```javascript
//solution

const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({

//vscode 에서 입력할때 코드
    input: fs.createReadStream("input.txt"),
    output: false,
    console:false

//제출시코드 
 // input: process.stdin,
 // output: process.stdout
});

```
특이한 점은 `readline`을 사용하면서도 로컬 파일을 불러올때는 여전히 `fs`모듈도 필요로 하다는 것이다. 
`readline.createReadStream`을 하면 `error` 가 난다.

### Reference
[fs,readline 입출력 방식](https://nyang-in.tistory.com/156) </br>
[readline tutorial](https://www.youtube.com/watch?v=dKYNLjtTtXw)
