# [Bronze V] 과제 안 내신 분..? - 5597 

[문제 링크](https://www.acmicpc.net/problem/5597) 

### 성능 요약

메모리: 9320 KB, 시간: 120 ms

### 분류

구현

### 문제 설명

<p>X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.</p>

<p>교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.</p>

### 출력 

 <p>출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.</p>

## 생각할 점
```javascript

//다른 풀이 - Set().prototype.has() 를 이용해서 더 간단히 코딩했다.

const INPUT_FILE = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let submittedStudents = require('fs').readFileSync(INPUT_FILE).toString().trim().split('\n').map(Number);

submittedStudents = new Set(submittedStudents); 
for (let student = 1; student <= 30; student += 1) {
  if (!submittedStudents.has(student)) console.log(student);
}

//has() 메서드는 Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환.
//자료구조 중 세트(set)는 순서대로 저장하는 배열과 다르게 순서가 없는 중복되지 않은 데이터의 집합이다. 그래서 인덱스로 접근 불가능.
//set() 은 class 여서 new 키워드와 생성자를 통해 객체생성 가능하다 const set = new Set();
//배열을 인자로 받을 때 const numSet = new Set([1, 2, 3]); // Set(3) {1, 2, 3}
//새로운 값을 추가할 때는 add() 메서드 set.add(1); // Set(1) {1} 중복된 값이 추가되지 않으며 유일한 값만 저장됨

```
