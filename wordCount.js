var speech = "I am     studing in Gono University in     Department of CSE."
var count = 0;
for (var i=0;i<=speech.length; i++){
    var word = speech[i];
    if(word ==" "&& speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);

















