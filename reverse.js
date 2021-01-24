//var statement = "Hello Alien vai brother.";
function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "hello alen va brother ki obostha kamon acen."
var froAlien = reverseString(statement);
console.log(froAlien);
var foodVlog = reverseString("Amar biriani khaite icca kore.");
console.log(foodVlog);
