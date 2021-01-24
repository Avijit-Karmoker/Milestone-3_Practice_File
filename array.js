var friendAges = [21, 20, 23, 24];
console.log(friendAges);
var sonaliAge = friendAges [3];
console.log(sonaliAge);
friendAges [2] = 25;
var position = friendAges.indexOf(24);
console.log(position);
console.log(friendAges);
friendAges.push (24);       //to add a element at last in an array.
friendAges.push (19);
console.log(friendAges);
console.log(friendAges.length);    //jevabe ekta array te koyta element ace jana jabe....
friendAges.pop();    //to romove a element at last in an array.
console.log(friendAges);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");      //to add a element at first in an array.
console.log(fruits);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift("Lemon", "Pineapple");      //to romove a element at first in an array.
console.log(fruits);
var fruit = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Pineapple"];
var finalList = fruit.slice(1,5);      //take a part of an array length.
console.log(finalList);
