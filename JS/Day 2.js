var array=[[1,"a"],[2,"b"],[3,"C"]] // nested array
console.log(array)

//for accessing the desired data using index
var array=[[1,"a"],[2,"b"],[3,"C"]]
var op=array[0][0];
console.log(op)

//to modify the array
var arr=[1,2,3,4,5,6]
arr[3]=8;
console.log(arr)

// push command (push at the end)
var arr=[1,2,3,4,5,6]
arr.push("hello purva this side")
console.log(arr)

// pop command(remove last element)
var arr=[1,2,3,4,5,6]
arr.pop("hello purva this side")
console.log(arr)

// shift command(remove first elemnt)
var arr=[1,2,3,4,5,6]
modifyarray1=arr.shift();
console.log(modifyarray1)

//unshift command(remove in beginning )
var arr=[1,2,3,4,5,6]
modifyarray2=arr.unshift(0);
console.log(modifyarray2)

//functions
var name="purva";// global 
function fname() {
    var name="durva";//local
    return  name;
}
console.log(fname( ))
console.log(name)

// ifelse statement
function diff(x,y) {
    if (x>y){
        return (x-y);
    }
    return (y-x);
 }
console.log(7,5)

// equality operators
function same(val) {
    if(val===" "){                   // "===" checks if the input and the given output is same datatype or not . it doesn't support the type coversion
        return ("this is string");
    }
    return ("not a string");

}
console.log(same("purva"))

// and operator
function compare(val){
    if (val<10){
        return("value is one digit");
    }
    else if (val>= 10 && val<100){
        return ("value is two digit");
    }
    else{
        return("value is greater than 3 digit");
    }

}
console.log(compare(89))

// switching cases
function switching(val){
    var a =" ";
    switch (val){
        case 1:
            a="ones";
        break ;
        case 2:
            a="tens";
        break ;
        case 3:
            a="hunderds";
        break ;
        case 4:
        case 5:
        case 6:
            a="not defined";// if multiple caeses give same value
        break;
        default:
            a="null";
        break;

        
    }
    return a;
}
console.log(switching(3))

// function compare
function compare(a,b){
    return a<=b ;
}
console.log(compare(5,9))


//building object 
var name={
    "fname":"purva",
    "lname":"ghatage",
    "home add":"pune",
    "weight":38

};
var fullname= name.fname + name.lname;//dot operation
var add=name["home add"];//because "home add" has space in between 
name.fname="durva";// for changing values
name.id=1234;// modification
delete name.id;// for deleting id

//for looking up values
function unit_values(val){
    var result=" ";
    var look={
        1:"ones",
        2:"tense",
        3:"hundreds",
        4:"thousands",
        5:"ten thousands",
        6:"lakhs",

    };
    result=look[val];
    return result;
}
console.log(unit_values(3))

