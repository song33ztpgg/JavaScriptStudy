let day = new Date(2016, a - 1, b);
let totalDay = day.getDay()

if (totalDay == 1) { totalDay = "MON" }
if (totalDay == 2) { totalDay = "TUE" }
if (totalDay == 3) { totalDay = "WED" }
if (totalDay == 4) { totalDay = "THU" }
if (totalDay == 5) { totalDay = "FRI" }
if (totalDay == 6) { totalDay = "SAT" }
if (totalDay == 0) { totalDay = "SUN" }

console.log(totalDay);

/*
◀문제내용▶
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, 
solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

입출력 예
a	b	result
5	24	"TUE"

◀다른사람들이풀이▶ 
tempDate = new Date(2016, a-1, b);
지정된 날짜의 모든 정보를 가져온다
tempDate.toString().slice(0,3).toUpperCase();
요일을 표시하는 앞 3글자를 짜른다

◀어려 웠던 점▶  
Date 함수가 존재 여부를 몰랐다
*/