let num = 6;
solution(num);
function solution(num) {
    
    for(let i = 0 ; i < 500; i++) {
       
        //num가 1일때 값을 반환
        if(num == 1) {
            // return i;
            //실행횟수 i를 반환
            console.log(i);
            break;
        } else if(num%2 === 0) {
            num = num /2;
        } else {
            num = num * 3 + 1 
        } 
    }
    
    //return -1;
    console.log(-1);

}


/*◀문제내용▶
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다
작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

◀다른사람들이풀이▶ 

◀어려 웠던 점▶  
실행횟수를 체크하기 
(for문에 i를 이용하여 계산값이 1이되면 return i 돌려줌)
*/
