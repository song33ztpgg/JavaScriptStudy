let absolutes = [4, 7, 12];
let signs = [true, false, true];
var answer = 0;

for (let i = 0; i < absolutes.length; i++) {

    //sings가 false 경우 -로 저장
    if (signs[i] == false) {
        answer -= absolutes[i];
    } else {
        answer += absolutes[i];
    }
} 

console.log(answer);


/*◀문제내용▶
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

absolutes	signs	            result
[4,7,12]	[true,false,true]	9
[1,2,3] 	[false,false,true]	0

입출력 예 #1

signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
따라서 세 수의 합인 9를 return 해야 합니다.

◀다른사람들이풀이▶ 
absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
sings 참 일경우 + 거짓일 경우 -을 곱해준다
acc전제 값 저장 

◀어려 웠던 점▶  
전제값 중에 음수 값을 저장 하는 방법이 어려웠다
*/