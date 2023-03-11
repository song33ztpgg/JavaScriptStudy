const jwt =require("jsonwebtoken");

const playloadData = { 
    
    myPayloadData:1234
}
//                     어떤데이터를 넣을지 , 어떤 비밀키를 넣을지
const token = jwt.sign(playloadData, "mysecretKey"); 
console.log(token);

//복호화 방법
const decodedValue = jwt.decode(token); 
console.log("복호화한 token입니다", decodedValue);

//jtw만들때 사용한 비밀키가 일치하는지 
//verify ( 토큰 , 키값) 
const  decodedValueByverify = jwt.verify(token, "mysecretKey"); 
console.log("decodedValueByverify : ",decodedValueByverify)


//JsonWebTokenError: invalid signature : 키값 에러문구 출력
const  decodedValueByError = jwt.verify(token, "Error키입력"); 
console.log("decodedValueByError : ",decodedValueByverify)