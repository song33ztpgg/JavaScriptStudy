
let x = "2"
let n = "5"

const answer = new Array();
//반복 횟수 n을 for문으로 돌린다
for (let i = 1; i < n + 1; i++) {
    
    //배열의 지정된 위치에, 삭제할 갯수는 0개에, x * 반복횟수를 저장한다
    answer.splice(i - 1, 0, x * i);
}

console.log(answer);

/*
◀문제내용▶
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 
숫자를 n개 지니는 리스트를 리턴해야 합니다. 

입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]

◀다른사람들이풀이▶ 
Array(n).fill(x).map((v, i) => (i + 1) * v)
n개의 배열에 x값을 반복횟수 만큼 곱해주고 그값을 Array에 저장한다.

◀어려 웠던 점▶ 
배열의 index값과 곱해줄 i와 일정하게 증가하는 방법이 어려웠다
*/