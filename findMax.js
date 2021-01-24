var business = 600;
var minister = 900;
var sochib = 1200;
if (business > minister) {
    if (business > sochib) {
        console.log("Business is bigger.");
    }
    else {
        console.log("Sochib is bigger.");
    }
}
else {
    if (minister > sochib) {
        console.log("Minister is bigger.");
    }
    else{
       console.log("Sochib is bigger.");
    }
}

//Another way

var maxValue = Math.max(business, sochib, minister);
console.log(maxValue);



