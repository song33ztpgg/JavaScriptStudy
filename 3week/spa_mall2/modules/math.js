

function add(a,b) { 
    return a + b;
}

//exports로 내보낼수 있는게 1개 밖에 안되는것으로 추측

//함수 자체로 내보냄
module.exports = add;

//객체로 내보냄, add키 값에 add함수가 들어가는 방법
// module.exports = {add: add};

/*
 * 객체로 내보냄
 * 모듈을 호출했을 때 add 키 값에는 (a,b) {return a + b} 익명함수가 할당
 * 
 */
exports.add2 = function (a,b) { 
    return a + b;
}