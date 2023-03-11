    let nums = [1,2,3,4] ;
    let total = [];
    
   
    for(let i =0; i< nums.length; i++){ 
        for(let j = 0; j <nums.length; j++){
            if(nums[i] != nums[j]){
                for(let k =0; k<nums.length; k++) {
                    if(nums[i] != nums[k] && nums[j] != nums[k]){
                    total.push(nums[i] + nums[j] + nums[k]);
                   
               }
            }
        }
    }
    
}    

total.sort(function(a,b) { 
    return a -b
}) 
    console.log("total[0]");
    console.log(total[0]);
    let temp =[];
    temp = temp.push(total[0]);

    for(let i =0; i < total.length; i++) {
        console.log((temp != total[i])? 1 : 0);

            if(temp != total[i]) {
                temp.push(total[i]);
            }
     }

     console.log(temp);

    // console.log(temp);
     
    //  console.log(temp)

//     console.log(total);

//     for(let i =0; i< total.length; i++){ 

//     //번호크기를 저장
//     //소수를 지나가면 증가 하는 카운트
//     let temp = total[i];
//     let count = 0;

//     for (let j = 2; j < temp; j++) {
//         //소수가 맞으면 카운트 증가
//         if (Number(total[i]) % j == 0) {
//             count++;
//         }
//     }

//     //카운터 0 였을 경우 저장
//     if (count == 0) {
//         temp = total[i];
//     }
//     }

// console.log(temp);
        
        
    
    
  
