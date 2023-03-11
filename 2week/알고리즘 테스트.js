
function solution(num) {
    let answer = 0;

    //르탄이가 가지고 있는 1000원 - 구입한 물건갑
    let total = 1000 - num1;

    let count = 0;

    // 시작값 필요없음, 총 가격이 0으로 떨어질때까지 실행, if문에서 total 가격 수정
    for (   ;total != 0;   ) {

        //total 가격이 if문 보다 큰 순간 그 가격만큼 차감되며 카운트 1식 증가
        if (total > 500) {
            total -= 500;
            count++;
        } else if (total > 100){
            total -= 100;
            count++
        } else if (total >50) {
            total -= 50;
            count++;
        } else  {
            total -= 10; 
            count++;
        }
    }

    return count;
}

let num1 = 160;
console.log(solution(num1))