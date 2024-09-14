function randomfraction (){



    return Math.random();
}

console.log(randomfraction());


function randomWholeNum(){


    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// Getting a random number with in the range

// function ourRandomRange(ourmin,ourMax){

//     return Math.floor(Math.random() * (ourMax - ourMax + 1)) + ourMin;
// }

// ourRandomRange(1,9);


function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("56"));



function convertToInteger1(str){
    return parseInt(str , 2); // this will convert the binary to decimal
}

console.log(convertToInteger1("11011"));


// ternary operator same as in other languages

// let has block scope and var has function or global scope

