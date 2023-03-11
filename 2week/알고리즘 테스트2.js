function solution(str){
	let answer= 0;

    //문자열을 하나찍 잘라 배열로 만듬
    str = str.split(""); 
   
    //O가 반복되는 횟수 카운터
    let count = 0;
    //총 점수 채점
    let total = 0;

    for(let i =0; i < str.length; i++){ 

        //O가 나올 경우 카운터 값 1증가 그 값을 total과 합산
        if("O" == str[i]) { 
            count++; 
            total +=count;
        } else { 
            //O가 나오니 않았을 경우 O카운터를 0으로 초기화
            count = 0;
        }

    }

	return total;
}

let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))
// solution(str);