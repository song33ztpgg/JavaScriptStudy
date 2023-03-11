let n = 121;
solution(n)

function solution(n) {
    //제곱근 구하는 함수
    var answer = Math.sqrt([n]);
    
    //소수점 존재하면 ture 
    if (Number.isInteger(answer)) { 
       answer = (answer + 1);
       //return answer ** 2;
       console.log(answer ** 2);
    }

    //return -1;
    console.log(-1);
}


/*◀문제내용▶\
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.


입출력 예
n	    return
121	    144
3	    -1

◀다른사람들이풀이▶ 
switch(n % Math.sqrt(n))
제곱근을 계산해서 나머지 존재 여부 따라 값과 -1결정된다

◀어려 웠던 점▶  */