/**const year = 4931;
let reminder = year % 4;
if (reminder == 0){
    console.log('This year is leap year.');
}
else{
    console.log('This is not a leap year.')
} */

/**function checkLeapYear(year){
    if((reminder == year % 4) && (reminder != year % 100) || (reminder == year % 400)){
        console.log(year + 'is a leap year');
    }
    else{
        console.log(year + 'is not a leap year');
    }
}

const year = prompt('Enter a year:');
checkLeapYear (year); **/

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return(year + ' is a leap year');
    }
    else {
        return(year + ' is not a leap year');
    }
}

// take input
const year = checkLeapYear(1900);

console.log(year);
