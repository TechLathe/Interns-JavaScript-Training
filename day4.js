//Return val
var sum = 0;

var resVal = 0;
function minusSev(num){
    return num - 7;
}

resVal = minusSev(11);

console.log(resVal);
console.log(minusSev(10));

function addFive(){
    sum+=5;
}
console.log(addFive());  //undefined 

/*Stand In Line*/
function nextInLine(arr, item){

    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

//BOOLEAN DataType

function welcome(data){
    if(data==0){ // == -> is valid for string as well
        return false;
    }
    else{
        return true;
    }
}

var dataT = 100;

if(dataT===100){             // === -> True only for the correct data with DataType
    console.log("Be supreme of the team");
}else if(welcome(dataT)){
    console.log("Welcome to the team");
}else{
    console.log("Better luck next time");
}

function testGreaterThan(val){
    if (val >= 100){
        return "100 or Over 100";
    }
    if (val > 10){
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));