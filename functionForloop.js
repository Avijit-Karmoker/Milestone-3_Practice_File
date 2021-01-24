function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var numbers = [23, 27, 29, 83, 73, 92, 84, 95];
var output = largestNumber(numbers);
console.log('output', output);
