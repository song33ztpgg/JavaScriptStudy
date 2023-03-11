let x = 10;
solution(x);

function solution(x) { 
    //기존값을 z에 저장
    let z = x;
 
    let y = 0;
    //숫자를 분리 작업
    x = x.toString();
    x = x.split("");
    
    //함수 값을 전부 y 더함
    for(let i = 0; i < x.length; i++) {
        y += Number(x[i]);
    }
    
    if(z%y == 0) { 
        //return true;
        console.log("true");
        
    }
    //return false;
     console.log(false);
}

/*◀문제내용▶
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요

입출력 예
arr	    return
10	    true
12	    true
11	    false
13	    false

◀다른사람들이풀이▶ 
◀어려 웠던 점▶  */

