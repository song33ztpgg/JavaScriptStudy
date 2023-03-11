let phone_number = "01033334444";
var answer = '';

//문자열 길이중 4번을 제외하고 더한다
for (let i = 4; i < phone_number.length; i++) {
    answer += "*";
}

//문자열에 마지막 4자리를 더해준다
answer += phone_number.substr(phone_number.length - 4);

console.log(answer);

/*
◀문제내용▶
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	    "*****8888"

◀다른사람들이풀이▶ 
s.replace(/\d(?=\d{4})/g, "*");

◀어려 웠던 점▶  
전체 값에서 마지막 4번을 제외하기 
전체 값에서 *을 더하기
*/