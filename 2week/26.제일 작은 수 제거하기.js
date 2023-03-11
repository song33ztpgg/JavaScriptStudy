let arr= [4,3,2,1];
solution(arr);

function solution(arr) {
    var answer = []; 

    //배열값이 1개 밖에 없을 경우 -1반환
     if(arr.length < 2) {
        answer.push(-1);
       return answer;
    }
    
    // 최소값찾기(arr 배열의 전체값)
    let min = Math.min(...arr)

    //최소값이 나올경우 for문을 빠져 나온다
    for(let i = 0; i < arr.length; i++) { 
        
        if(arr[i] == min) {
            arr.splice(i,1);  
            i--;
        }   
    }

    console.log(arr);
}


/*◀문제내용▶
문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다 

입출력 예
arr     	return
[4,3,2,1]	[4,3,2]
[10]	    [-1]

◀다른사람들이풀이▶ 
◀어려 웠던 점▶  
배열에서 작은 수를 알게 된뒤  삭제하는 기능 
(for문을 이용해서 최소값 발견될때 split으로 삭제)
*/
