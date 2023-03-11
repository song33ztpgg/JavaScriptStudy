let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];

var answer = [];

for(let i = 0; i < arr1.length; i++){

    answer[i] =[];
    for(let j = 0; j< arr2[i].length; j++) { 
         answer[i][j]= arr1[i][j] + arr2[i][j];
    }
}

console.log(answer);

/*
◀문제내용▶
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요

입출력 예
arr1	        arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]]

◀다른사람들이풀이▶ 
 A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));

◀어려 웠던 점▶  
2차 배열의 합 구하는 알고리즘이 어려웠다
*/ 