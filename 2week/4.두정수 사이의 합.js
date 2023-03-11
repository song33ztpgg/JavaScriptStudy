
const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);
console.log("넘겨줄 번호 : " + a);
console.log("넘겨줄 번호 : " + b);


    let max = 0;
    let min = 0;
    let answer = 0;
    
    if(a > b) {
        max = a; 
        min = b; 
    } else {
        max = b; 
        min = a;
    }
        
    //최소값에서 최대값 까지 다 더한다.
    for(;min < max +1; min++ ){
        answer += min;   
    }
  
    console.log(answer);


/* 
◀문제내용▶
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

입출력 예
a	b	return
3	5	12
3	3	3
5	3	12

◀다른사람들이풀이▶ 
(a+b) * (Math.abs(a-b)+1) / 2;
abs : 절대값으로 변환
두값의  합과 두값의 차이/2 계산식을 이용하여 계산

◀어려 웠던 점▶  */