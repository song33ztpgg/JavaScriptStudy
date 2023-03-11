console.log(solution("try hello world"));

function solution(s) {
    var answer = [];
    let a = [];
    let temp = "";
    let b = "";
    //공백구분으로 행렬 정의 try / hello / world
    answer = s.split(" ");

    //단어수 만큼 for문 실행
    for (let i = 0; i < answer.length; i++) {

        //단어 한개를 한글자로 전부 변환
        a[i] = answer[i];
        b = a[i].split("")

        //한글자의 위치를 판단해 대소문자 변형
        for (let j = 0; j < b.length; j++) {
            if (j % 2 == 0) {
                temp += b[j].toUpperCase();
            } else {
                temp += b[j].toLowerCase();
            }
        }

        //한단어가 끝날때 띄어쓰기를 적용, 맨 마지막은 실행되지 않게 -1 적용
        if (i < answer.length - 1) {
            temp += " ";
        }
    }

    return temp;
}




/*◀문제내용▶
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

입출력 예
s	                return
"try hello world"	"TrY HeLlO WoRlD"

◀다른사람들이풀이▶ 
s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

◀어려 웠던 점▶
문자열중 공백으로 문자들을 구별하여 홀짝구분 해야 하는 부분이 어려웠다 
*/