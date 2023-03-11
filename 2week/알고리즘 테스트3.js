function solution(N, arr1) {
    // let x = [1, -1, 0, 0, 1, 1, -1, -1];
    // let y = [0, 0, 1, -1, 1, -1, 1, -1];
    let arr2 = [];


    //N * N크기를 확장하고 담을 수 있는  arr2선언 
    //상하좌우 1칸식 배열이 늘어 나야하기에 N+2실행
    
    for (let i = 0; i < N + 2; i++) {
        arr2[i] = [];
        for (let j = 0; j < N + 2; j++) {
            //모든 배열에 0을 삽입
            arr2[i][j] = 0;
        }
    }

    //arr2에 arr1정보들을 넣는 작업 
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            //arr1 크기는 N * N이기에 이걸 막족 할때만 실행
            if (i < N && j < N) {
                // console.log(arr1[i][j]);
                arr1[i][i] = Number(arr1[i][i]);

                //arr1배열중 숫자였을 경우만 실행 (isNaN ! 조건을 못챴았습니다)
                if (isNaN(arr1[i][j])) {
                } else {
                    //arr1의 위치를 조정한 값을 arr2에 삽입
                    arr2[i + 1][j + 1] = arr1[i][j];
                }
            }
        }
    }


    //최종 값 넣을 arr3생성  
    //arr1의 크기를 넣을 거기에 N * N 사이즈로 생성  
    //arr3값이 없어서 오류 나는것 같에 전부 0삽입js
    let arr3 = [];
    for (let i = 0; i < N; i++) {
        arr3[i] = [];
        for (let j = 0; j < N; j++) {
            arr3[i][j] = 0;
        }
    }

    let temp;
  
    //arr2값에서 arr1범위만 for문 사용하기
    for (let i = 1; i < arr2.length - 1; i++) {
        for (let j = 1; j < arr2.length - 1; j++) {

            //arr2와 arr3위치 값은 1정도 나기에 -1을 넣어준다
            //check 함수에 i,j,arr2값을 보내준다
            arr3[i - 1][j - 1] = check(i, j, arr2);
        }
    }
    
    //  ★   ★   ★   ★   ★   ★   ★   ★   ★   ★   ★   ★   ★  
    //사용 가능한 디버거가 없으므로 'variables'을(를) 보낼 수 없습니다 
    //이 오류를 해결하지 못해서 console로 답을 출력 합니다
    for(let i =0; i < arr3.length;i++) {
        console.log(arr3[i]);
    }

    return arr3;
}


function check(i, j, arr2) {
    total = 0;
    if (arr2[i][j] != 0) {
        return '*';
    } else {

        //for문 알아보기 쉽게 정리
        let maxI = i+2; 
        let maxJ = j+2; 
        let minI = i-1;
        let minJ = j-1;
        
        //넘겨온 숫자에서 [-1][-1] ~ [+1][+1] 범위만큼 주변 계산
        for (let a = minI ; a < maxI; a += 1) {
            for (let b = minJ; b < maxJ; b += 1) {
                //출력 값을 total에 대입
                 total += Number(arr2[a][b]);
            }
        }
       
        // 10이 넘을 경우 M로 반환
        if(total >=10) {
            total = "M";
        }
        return total;
    }
}

let N = 5;
let arr1 = [['1', '.', '.', '.', '.'],
['.', '.', '3', '.', '.'],
['.', '.', '.', '.', '.'],
['.', '4', '.', '.', '.'],
['.', '.', '.', '9', '.']];
console.log(solution(N, arr1));
