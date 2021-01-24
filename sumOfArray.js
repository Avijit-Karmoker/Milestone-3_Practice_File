
//Get total without function


var numbers = [23, 45, 69, 85, 91, 80, 73, 47, 72, 27, 198];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("The total is:", sum);

//Get total with a function

function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [23, 45, 69, 85, 91, 80, 73, 47, 72];
var result = getArraySum(numbers);
console.log("The total is:", result);

var total = getArraySum([69, 85, 91, 80, 73, 47, 72]);
console.log("The total is:", total);
