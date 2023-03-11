var n = 12345;
solution(n);

function solution(n) {
    var answer = n;

    //숫자로 변환
    answer  = answer.toString();

    //"1","2","3" 자르기
    answer = answer.split(""); 
    
    //"3","2","1" 순서 변경
    answer = answer.reverse();  
    
     // answer = Number(answer); 
     for(let i = 0; i < answer.length; i++) { 
         // answer = parseInt(answer);
         answer[i] =  Number(answer[i]);
     }
    
    
    console.log(answer);function solution(n) {
        var answer = n;
        //"1","2","3"
        answer = answer.split(""); 
        
        //"3","2","1"
        answer = answer.reverse();  
        
         // answer = Number(answer); 
         for(let i = 0; i < answer.length; i++) { 
             // answer = parseInt(answer);
             answer[i] =  Number(answer[i]);
         }
        
        console.log(answer);
    }  
}

/*◀문제내용▶
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

◀다른사람들이풀이▶ 
n = Math.floor(n/10);

◀어려 웠던 점▶  */
