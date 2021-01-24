function promise(){
    console.log("I never forget you.");
    console.log("I always stay beside you.");
    console.log("I always love you more than me.");
}



promise();

function doubleIt(num){
    var result = num*2;
    return result;
}

var firstNum = doubleIt(5);
var secondNum = doubleIt(10);
var total = firstNum + secondNum;
console.log(firstNum,secondNum,total);


function add(num1, num2){                       //num1, num2 are function parameter.
    var output = num1+num2;
    return output;
}

var show = add(63, 19);
console.log(show);
