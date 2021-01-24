var marks = [23, 45, 69, 85, 91, 80, 73, 47, 72];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element>max){
        max = element;
    }
}

console.log("Highest value is:", max);
