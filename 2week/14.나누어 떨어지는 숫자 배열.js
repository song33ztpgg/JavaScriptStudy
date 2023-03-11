
arr = [5, 9, 7, 10];
divisor = 5;
var answer = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {

    //배열중 div에서 나머지가 없을 경우
    if (arr[i] % divisor == 0) {
        //count 위치에 해당 값을 넣는다
        answer[count] = arr[i];
        //값을 넣은 후 count 증가한다
        count++;
    };
}

//값을 하나도 못 넣었을 경우 -1을 반환한다
if (count == 0) {
    answer[0] = -1;
    console.log(answer);
}

//내림차순으로 정렬한다
answer.sort(function (a, b) {
    console.log(a - b);
});

console.log(answer)


/*
◀문제내용▶
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

arr         	divisor	    return
[5, 9, 7, 10]	5	        [5, 10]
[2, 36, 1, 3]	1	        [1, 2, 3, 36]
[3,2,6]	        10	        [-1]

◀다른사람들이풀이▶ 
answer = arr.filter(v => v%divisor == 0);
배열 v값을 나누어서 0되는 것만 반환 

◀어려 웠던 점▶  
answer 배열에 값이 존재 할때만 넣는 방법
*/