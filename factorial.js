var factorial1 = 1;
for(var i=1; i<=10; i++){
    factorial1 = factorial1*i;
    console.log(i, factorial1);
}

//factorial code with function and if else; (reversive)

function factorial(num){
    if(num < 0){
        return -1;
    }
    else if (num == 0){
        return 1;
    }
    else{
        return(num * factorial(num-1));
    }
}

var factorialize = factorial(20);
console.log(factorialize);


// factorial with function and for loop

function factorial3(n){
    var factorial3 = 1;
    for (var i = 1; i <= n; i++){
        factorial3 = factorial3 * i;
    }
    return factorial3;
}

var factorialize1 = factorial3(0);
console.log(factorialize1);

// factorial with function and for loop
function factorial4(n){
    var i = 1;
    var fact4 = 1;
    while (i<=n){
        fact4 = fact4 * i;
        i++;
    }
    return fact4;
}
var result = factorial4(5);
console.log(result);

