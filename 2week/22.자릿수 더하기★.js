console.log(solution(123));

function solution(n)
{
    let sum = 0;
    n = n.toString();

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    
    return sum;
}

/*◀문제내용▶
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

N	    answer
123	    6
987	    24

◀다른사람들이풀이▶ 
(n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

◀어려 웠던 점▶ 
n을 인식하지 못하였다. 
(문자로 다시 저장하고 계산을 숫자로 변환해서 저장)
*/

