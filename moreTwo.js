function add(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum = sum + i;
        }
        else{
            return 'There is a negative value.'
        }
    }
    return sum;
}
var total = add([162, 128, -137, 383, 500]);
console.log(total);
