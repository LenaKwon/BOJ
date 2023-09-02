# [Bronze V] 꼬마 정민 - 11382 

[문제 링크](https://www.acmicpc.net/problem/11382) 

### 성능 요약

메모리: 9332 KB, 시간: 144 ms

### 분류

구현, 사칙연산, 수학

### 문제 설명

<p>꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!</p>

### 입력 

 <p>첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 10<sup>12</sup>)이 공백을 사이에 두고 주어진다.</p>

### 출력 

 <p>A+B+C의 값을 출력한다.</p>

# 다른 답
문제 접근: 각 자릿수를 나누기의 몫과 나머지로 얻는다.
```javascript
const fs=require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const oneNum=num2%10;
const tenNum=Math.floor((num2%100)/10);
const hundredNum=Math.floor(num2/100);

console.log(num1*oneNum);
console.log(num1*tenNum);
console.log(num1*hundredNum);
console.log(num1*num2);
```

각 줄에 하나씩 값을 출력해야 할 때 배열 안에 결과물을 넣고 `array.join('\n')`을 통해 출력하는 방법도 있다.
string.split('')를 이용하면 쉽게 한 문자마다 끊어낼 수 있다.
ex. '123' → '1','2','3'

### Number()와 parseInt()

공통점: 둘 다 문자열 타입의 숫자를 Number 타입으로 바꿔주는 역할을 함. 흔히 연산을 위해 사용된다.

차이점

`parseInt()` : 문자열을 파싱해서 숫자를 찾는 기능이 있다. 하지만 문자열로 시작하면 이 함수도 찾지 못한다. 그리고 소수점 아래는 출력하지 못한다.
`Number()` : 숫자를 생성하는 역할을 한다. 소수점도 OK

# 참고
[블로그](https://velog.io/@wiostz98kr/%EB%B0%B1%EC%A4%80-2588%EB%B2%88-%EA%B3%B1%EC%85%88)
