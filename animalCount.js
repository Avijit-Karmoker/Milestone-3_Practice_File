function megaFriend(arr){
    var word = "";
    for (var i=0; i<arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i];
        }
    }
    return word;
}
var bigWord= megaFriend(["Avijit", "Rezaul", "Deep", "Himel", "Rafiquel", "SharminHarami"]);
console.log(bigWord);
