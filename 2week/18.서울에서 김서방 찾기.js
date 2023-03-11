let seoul = ["Jane", "Kim"]
let count = 0;

for (let i = 0; i < seoul.length; i++) {

    //for문 반복 횟수를 통해 kim 위치를 판별
    if ("Kim" == seoul[i]) {
        count = i;
    }
}

console.log("김서방은 " + count + "에 있다");


/*◀문제내용▶
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, 
solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

입출력 예
seoul	return
["Jane", "Kim"]	"김서방은 1에 있다"

◀다른사람들이풀이▶ 
count = seoul.indexOf('Kim');
indexOf을 이용해 kim위치를 찾아낸다
◀어려 웠던 점▶  */
