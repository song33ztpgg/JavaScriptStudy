
let s = "Pyy";
let countP = 0;
let countY = 0;

//모든 문자를 대문자료 변경
s = s.toUpperCase();
for (let i = 0; i < s.length; i++) {

    if (s[i] == "P") {
        countP++;
    }

    if ("Y" === s[i]) {
        countY++;
    }
}

//개수가 틀리면 false 반환
if (countY != countP) {
    // return false; 
    // return 문을 사용해 밑에 ture사용 안되도록 함
    console.log(false);
}

console.log(true);

/*◀문제내용▶
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 
True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 
개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

입출력 예
s	        answer
"pPoooyY"	true
"Pyy"	    false

◀다른사람들이풀이▶ 
s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
대문자로 만들고 split으로 P와 Y을 자리고 p의길이와 y의 길이를 비교한다

◀어려 웠던 점▶  
if문을 너무 많아서 줄이는 방법이 어려웠다
(모든 문자를 대문자로 변경해서 해결)
*/