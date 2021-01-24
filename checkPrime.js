var n = 18;
for (i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log("This is not a prime number.");
        break;
    } else {
        console.log("This is a prime number");
        break;
    }
}

// Define a prime number with function

function isPrime(m) {
    for (i = 2; i < m; i++) {
        if (m % i == 0) {
            return "This is not a prime number.";
        }
    }
    return "This is a prime number."
}
var result = isPrime(57);
console.log(result);
