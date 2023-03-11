
    // let s = "Zbcdefg";  
    // let s = "XYZabc"  ;
    let  s = "bac"  ;
    // let s = "54321"  ;
    let upText = [];
    let lowText = [];
    
    // s = s.split("");
    console.log(s);
    
    //오름 차순으로 정렬
    s.sort(function(a,b){
        return b-a;
    });
    console.log(s);
    
    let count = 0;
    for(let i = 0; i < s.length; i++){ 
        //불러온 값이 대문자와 같을 경우 카운터 증가
        if(s[i] == s[i].toUpperCase()){
            count++;
        }
    } 

    
    //대문자가 오름 차순으로 정렬 되기에 
    //대문자가 있는 경우 만큼 자른다
    upText = s.slice(0,count);
    lowText = s.slice(count);
    
    for(let i = 0; i < upText.length; i++) { 
        lowText.push(upText[i]);
    }
    
    consol.log(lowText);




    /* 이방식으로는 왜 안됬나*/
    // for(x in s) { 
    //     console.log("x = " + x);
    //     console.log("x.up = " + x.toUpperCase());
    //     if(x == x.toUpperCase()) {   
    //        count++;
    //     }
    //} 

    /* 26번 경우를 사용하지 않아도 다르게  해답을 푸는 과정이 알고 싶다  */ 


