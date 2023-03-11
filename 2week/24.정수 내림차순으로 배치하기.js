let n = 118372;
solution(n);

function solution(n) {
    var answer = n;
    let a ="";
    
    answer = answer.toString();
    answer = answer.split(""); 
    
    answer.sort(function(a,b) {
        return  b - a;  
    });
    
    answer.map(function(result) {
         return Number(result);
    });
    
    for(let i = 0; i < answer.length; i++) { 
        a +=answer[i];
    }
    
    console.log(Number(a));
}

/*◀문제내용▶
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 예를들어 n이 118372면 873211을 리턴하면 됩니다.

◀다른사람들이풀이▶ 
◀어려 웠던 점▶  */
