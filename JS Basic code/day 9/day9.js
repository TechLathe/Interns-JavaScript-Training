const ab="constant"
const arr = [4,5,6];

console.log(arr);
arr[0]=9;
arr[1]=7;
console.log(arr);



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

var myconcat = (arr1,arr2) => arr1.concat(arr2)

console.log(myconcat([1,2],[3,4,5]))

var voxel = {x:3.6,y:7.4,z:6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;


const {x:a,y:b,z:c} = voxel;

const AVG_TEMPERATURES = {
    today : 77.5,
    tommorow : 79
};

function getTempoftmrw(avgTemperatures){
    "use strict";

    const {tommorow :tempofTommorow }= avgTemperatures;
    return tempofTommorow;

}

console.log(getTempoftmrw(AVG_TEMPERATURES));

const source = [1,2,3,4,5,6,7,8,9,10]

function removeFirstTwo(list){

    const [ , ,...array] = list;

    return array;
}

const array = removeFirstTwo(source);

console.log(array);
console.log(source);

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

const person = {
    name:"Ram",
    age:44
}
const greet = `Hello, my name is ${person.name}\nI'm ${person.age} years old.`;
console.log(greet);

const result = {
    success :["max-length","no-amd","prefer-arrow-functions"],
    failure :["no-var","var-on-top","linebreak"],
    skipped : ["id-blacklist","no-dup-keys"]
};

function makeList(arr12){
    const resultDisplayArray = [];
    for(let i=0;i<arr.length;i++){
            resultDisplayArray.push(`<li class= "textWarning">${arr[i]}</li>`)
    }

    return resultDisplayArray
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

const createPerson= (name,age,gender) => ({name , age , gender});

console.log(createPerson("Selmon Bhai" , 48 , "Male"));


class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet =targetPlanet;
    }
}
var zeus = new SpaceShuttle('Neptune');
console.log(zeus.targetPlanet);


class Book {
    constructor(author){
        this.author = author;
    }
    get Writer(){
        return this._author;
    }
    set Writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

var book = new Book("gopal");
console.log(book.author);
book.writer="vikram";
console.log(book.author);