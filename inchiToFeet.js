var inchi = 156;
var feet = inchi/12;
console.log(feet);

function inchiToFeet(inchi){
    var feet = inchi/12;
    return feet;
}

var inchiValues = [156, 178, 200, 500, 300];
var nanaFeet = inchiToFeet(inchiValues[0]);
console.log(nanaFeet);
var nanaFeet = inchiToFeet(inchiValues[3]);
console.log(nanaFeet);
var nanaFeet = inchiToFeet(300);
console.log(nanaFeet);
