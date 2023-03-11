solution(3);

function solution(n) {
    var answer = '';
    
    for(let i = 0; i < n; i++) { 
        if( i%2 == 0) { 
            answer += "수"
        } else { 
            answer += "박"
        }
    }   
    console.log(answer);
}


/*◀문제내용▶
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

◀다른사람들이풀이▶ 
waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
repeat를 이용해 주어진 n횟수를 계산해 홀수인경우 '수'를 붙여주는 방식
◀어려 웠던 점▶  */