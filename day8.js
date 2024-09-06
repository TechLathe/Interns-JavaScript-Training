///parseInt


function convertToInterger(str){
    return parseInt(str);
}

function convertToIntergerRadix(str){
    return parseInt(str, 2);  //2 for binary
}
console.log(convertToInterger(100));
console.log(convertToIntergerRadix(111)); // binary of 7


///Ternary 
var ac=10;
var bc=10;

ac===bc ? console.log("Equal") : console.log("Not Equal");

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0));

//let 

var catName = "meow";
var catName = "boka";

// let catN = "Hello";  
// let catN = "Challo";  -> ERROR

//Scope is in block where let is declared 
//Scope of var is global

let i = "OUTSIDE";
if(true){
    let i = "IN_IF";
    console.log("INSIDE IF : "+i);
}
console.log("OUTSIDE IF : "+i);


//CONSTANT
const ab="constant"
const arr = [4,5,6];
//arr=[5,7,8] -> ERROR
// ab="ah"; -> ERROR
console.log(arr);
arr[0]=9;
arr[1]=7;
console.log(arr);

//PREVENT OBJ MUTATION

function freezezObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezezObj();

console.log(PI);


//ARROW FUNCTIONS
var magic = () => new Date();
console.log(magic);

var myConCat = (arr1, arr2) =>  arr1.concat(arr2);
console.log(myConCat([1,3],[3,5,7,9]));

const realNum = [4,5,-2,-5,6,7,8.9];

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x=> x*x);
    return squaredInt;
};

const squaredInt=squareList(realNum);
console.log(squaredInt);

const increment = (function(){
    return function increment(number, value=1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

//REST OPERATOR
const sum = (function () {
    return function sum(...arg){
        return arg.reduce((a,b) => a+b, 0);
    }
})();
console.log(sum(1,2,3,4,11));

// Spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2; 
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);

//Destructuring Assignment
var voxel  = {x:3.6,y:7.4,z:6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x:a, y:b, z:c} = voxel;

const AVG_TEMP = {
    today : 77.5,
    tomorrow : 79
};

function getTemp(avgTemp){
    "use strict";
    const tempOfTomorrow = avgTemp;
    return tempOfTomorrow;
}

console.log(getTemp(AVG_TEMP));

const [g,k,l,,u]= [1,3,4,5,6,7];
console.log(g,k,l,u);

const stats = {
    max : 56.78,
    std : 4.45,
    median : 34,
    mode : 23.87,
    min : -0.75,
    average : 35.58
};
const half = (function(){
    return function half({max, min}){
        return (max+min)/2.0;
    }
})();

console.log(stats);
console.log(half(stats));

//TEMPLATE LITERALS
const person = {
    name:"Rohan",
    age:55
}
const greet = `Hello, my name is ${person.name}\nI'm ${person.age} years old.`;
console.log(greet);

const result = {
    success : ["max-length", "no-amd"],
    failure : ["no-var","linebreak"],
    skipped : ["id-blacklist", "no-dup-keys"]
};

function makeList(arr){
    const res=[];
    for (let i=0; i<arr.length; i++){
        res.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return res;
}

console.log(makeList(result.success));

class Space {
    constructor(targetPlanet){
        this.targetPlanet =targetPlanet;
    }
}
var zeus = new Space('Jupiter');
console.log(zeus.targetPlanet);


//GETTER and SETTER
class Book {
    constructor(author){
        this.author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updatedAuthor){
        this.author = updatedAuthor;
    }
}

var book = new Book("ASDF");
console.log(book.author);
book.writer="afsh";
console.log(book.author);

