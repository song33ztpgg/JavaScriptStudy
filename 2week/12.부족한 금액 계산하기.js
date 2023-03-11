let price = 3;
let money = 20;
let count = 4;

var answer = 0;
let total = 0;

// i횟수가 증가 할때마다 가격을 i만큼 곱해준다
for (let i = 1; i < count + 1; i++) {
    total += (price * i);
}

//총가격이 돈보다 적을 경우 차이 만큼 반환
if (total > money) {
    answer = total - money;
} else {
    answer = 0;
}

console.log(answer);

/*
◀문제내용▶

이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

입출력 예
price	money	count	result
3	    20	    4	    10

◀다른사람들이풀이▶ 
  const tmp = price * count * (count + 1) / 2 - money; 
  가우스 공식법
  
◀어려 웠던 점▶  
증가 할때마다 가격을 증가 시키는 방법 
이전 가격과 증가된 가격을 합을 구하는 방법 
*/