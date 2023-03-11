let s = "a234";

//숫자 배열을 생성
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = "";
let count = 0;

for (let i = 0; i < s.length; i++) {

    for (let j = 0; j < 10; j++) {

        if (total == s[i].indexOf(j)) {
            count++; 
            console.log(i + "/ " + j);
        }
    }


    if (count == 0) {
        // return false;
        console.log("false");
    }

}

// return true;
console.log("ture");




/*◀문제내용▶
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

입출력 예
s	    return
"a234"	false
"1234"	true

◀다른사람들이풀이▶ 
◀어려 웠던 점▶
 /[^0-9]/g;  이 걸 이용하면 숫자 배열을 만들지 않고 해도 되는대 하지 못하였다
  */