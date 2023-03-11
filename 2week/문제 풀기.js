function solution(s) {
    var answer = 0;
    //다 자르기  
    s = s.split(""); 
    //for문으로 숫자 나올경우 그전 단어 조합하기 
    let word = "";
    let endWord;
    for(let i = 0; i <s.length; i++){
    
         if(isNaN(s[i])) { 
          word += s[i] ;
         } else {
             switch(word){
                     case "one" : 
                     endWord = 1;
                     break;
                     case "two" :
                     endWord = 2;
                     break;
                     case "three": 
                     endWord = 3;
                     break;
                     case "four": 
                     endWord = 4;
                     break;
                     case "five": 
                     endWord = 5;
                     break;
                     case "six" : 
                     endWord = 6;
                     break;
                     case "seven" : 
                     endWord = 7;
                     break;
                     case "eight" : 
                     endWord = 8;
                     break;
                     case "nine" : 
                     endWord = 9;
                     break;
                     case "zero" : 
                     endWord = 0;
                     break;
             }
             word ="";
         }
        
        
        
        
    }
    //전체 저장하기
    return word;
}