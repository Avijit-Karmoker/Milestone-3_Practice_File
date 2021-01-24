//fibonacci itirative way

function fibonacci(n){
    var fibo = [0, 1];
    for (var i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);


//fibonacci recursive way

function fibonaci1(m){
    if(m == 0){
        return 0;
    }
    else if (m == 0){
        return 1;
    }
    else{
        return (fibonacci1(m-1)+fibonacci1(m-2));
    }
}

var result = fibonacci(20);
console.log (result);

//fibonacci recarsive full series

function fibonacci2(l) {
    if (l == 0) {
        return[0];
    }
    else if (l == 1) {
        return [0, 1];
    }
    else{
        //calculate nth element of an array
        var fibo1 = fibonacci2(l-1);
        var nextElement = fibo1[l - 1] + fibo1[l - 2];
        fibo1.push(nextElement);
        return fibo1;
    }
}
var result1 = fibonacci2(30);
console.log(result1);










