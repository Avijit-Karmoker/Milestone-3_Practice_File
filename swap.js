var a = 7;
var b = 5;
console.log("before swap: a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);

//second method

var x = 10;
var y = 15;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);

//javascript method

var p = 12;
var q = 16;

[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);
