/**function fibonacciIterative(num) {
    var fibo = [0, 1];
    for (var i = 2; i < num; i++){
        var nextElement = fibo[i-1] + fibo[i-2];
        fibo.push(nextElement);
    }
    return fibo;
}
var result = fibonacciIterative(11);
console.log(result); **/

function fibonacciRecursive(num) {
    //stoping condition
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [0, 1];
    }
    //recursive call
    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo);
    return fibo;
}
var result = fibonacciRecursive(10);
console.log(result);
