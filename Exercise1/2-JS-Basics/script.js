
//Lecture variabls

/*

var name = 'john';
console.log(name);
var lastName = 'Smith';
console.log(lastName);
var age = 26
console.log(age);
var fullAge = true;
console.log(fullAge);

*/

/*
var name = 'John'
var age = 26
//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'Teacher';

isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + 
            ' is he married? ' + isMarried)

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + 
            ' is he married? ' + isMarried)

//var lastName = prompt('What is the last name');

//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + 
            ' is he married? ' + isMarried);
            
*/

//Lecture: operators

/*
var now = 2018;

var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);


var ageOfJohn = 30;
var ageOfMark = 30;


ageOfJohn = (3 + 5) * 4 - 6;

fdsfd


*/

/*
var name = 'John';
var age = 26;
var isMarried = 'yes'

if (isMarried === 'yes') {
    console.log(name + isMarried)
} else {
    console.log(name + 'will hopefully marry soon')
}

*/

/*
var age = 25;

if (age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is a young man')
} else {
    console.log('John is a man');
}

var job = 'teacher';

job = prompt('What does John do?')

switch (job) {
        
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
        break;
}

*/

/*
var heightJohn = 180;
var heightFred = 160;
var ageJohn = 10;
var ageFred = 11;
var heightBill = 190;
var ageBill = 13;

var scoreJohn = heightJohn + (5 * ageJohn);
var scoreFred = heightFred + (5 * ageFred);
var scoreBill = heightBill + (5 * ageBill);

if (scoreFred > scoreJohn && scoreFred > scoreBill) {
    console.log('Fred wins ' + scoreFred + ' ' + scoreJohn + ' ' + scoreBill);
} else if (scoreJohn > scoreFred && scoreJohn > scoreBill) {
    console.log('John wins ' + scoreJohn + ' ' + scoreFred + ' ' + scoreBill);
} else if (scoreBill > scoreFred && scoreBill > scoreJohn) {
    console.log('Bill wins ' + scoreBill + ' ' + scoreFred + ' ' + scoreJohn)
} else {
    console.log('Its a draw ' + scoreFred + ' ' + scoreJohn);
}

*/

/*

function calculateAge(yearOfBirth) {
    "use strict";
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

*/

/*
//function expression

var someFun = function (par) {
    
}

//expressions produce a value
3 + 4;
var x = 3;

//statements
//does not produce an immediate value
if (x === 5) {
    //do something
}

*/

//Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);


console.log(names)

console.log(names[0]);

names[1] = 'Ben';

console.log(names)


var john = ['John', 'Smith', 1990, 'Teacher', false];

console.log(john);

john.push('blue');

console.log(john);

john.unshift('Mr');

console.log(john);

john.pop();

console.log(john);

john.shift();

console.log(john);
console.log(john.indexOf('Smith'));


*/

//Objects

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'Teacher',
    isMarried: false,
    family: ['jane','mark'],
    xyz: function () {
        console.log(this.yearOfBirth)
}
}

console.log(john);

console.log(john.lastName);

console.log(john['lastName']);

var xyz = 'job';

console.log(john);

john.xyz();

*/

//loops

/*
for (var i = 0; i<10; i++) {
    console.log(i);
}

var names = ['John','Mary','Mark','Bob']

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

*/

var yearsBorn = [1967, 1987, 1945, 1923, 1879, 2012];

var agesOfPerson = [];

function calculateAgeFromYear(year) {
    return 2018 - year;
}

function fullage(currentAge) {
    if (currentAge >= 18) {
        return true;
    } else {
        return false;
    }
}


for (var i = 0; i < yearsBorn.length; i++) {
    var age = calculateAgeFromYear(yearsBorn[i]);
    agesOfPerson.push(age);
}



function printFullAge(years) {
    var fullAgeArr = [];
    
    
    for (i = 0; i < years.length; i++) {
        var age = calculateAgeFromYear(years[i]);
        var full = fullage(age);
        fullAgeArr.push(full);
    }
    return fullAgeArr;
}
    
var input1 = [1954, 2001, 2003, 2007, 1921, 1949];
var full1 = printFullAge(input1);
console.log(input1 + full1)

var input2 = [1977, 2014, 2007, 2010, 2011, 2008];
var full2 = printFullAge(input1);
console.log(input2 + full2)


//EcmaScript5 2016
//EcmaScript6 or ES2015 minor changes
