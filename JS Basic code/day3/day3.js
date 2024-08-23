// Arrays in JS are little different from other language arrays
// They can store any type of data such as String  , var , number , let;

var myArray = ["hello", 1]
console.log(myArray)

// NESTED ARRAY OR MULTIDIMENSIONAL ARRAY

var Array = [["hello", 1],["hii",2]]
console.log(Array)

// FINDING AN ELEMENT IN THE ARRAY

var indexing = [50,60,70]
console.log(indexing[4])

// MODIFYING THE ARRAY ELEMENTS USING INDEXING

var arr = [10,20,30,40]
arr[1] = 15
console.log(arr);

var arr1 = [[1,2,3],[4,5,6],[[7,8,9],10,11,12]]

console.log(arr1[2][0][1])
///  DOUBT ???????????????????????????????????????->
var arr2 = [1,2,3,4]
arr2.push(6,7)
console.log(arr2)

// POPING ELEMENT FROM AN ARRAY
/// DOUBT ???????????????????????????????

// CAN WE REMOVE AN ELEMENT FROM THE SPECIFIC INDEX OF AN ARRAY OR 
// DOES JAVASCRIPT CONTAIN ANY FUNCTION THAT WILL REMOVE THE ELEMENT THAT WE HAVE GIVEN AS INPUT IF PRESENT
var arr3 = [1,2,3,4,5]
arr3.pop()
console.log(arr3)

// REMOVING FIRST ELEMENT FROM AN ARRAY
var arr4 = [1,2,3,4,5]
arr4.shift()
console.log(arr4)

// ADDING ELEMENT TO FIRST INDEX OF THE ARRAY

var arr5 = [2,3,4,5]
arr5.unshift(1)
console.log(arr5)

// CREATING FUNCTIONS IN JS
function nishant(){
    console.log("Hello World")
}
nishant()

// PASSING PARAMETERS TO THE FUNCTION

function multi(x,y){
    console.log(x*y)

}
multi(2,3)

// SCOPE IN JS

// IF WE WRITE OUR VARIABLE IN JS OUTSIDE THE FUNCTION THEN IT HAS GLOBAL SCOPE MEANS IT CAN BE ACCESSED FROM 
// EVERYWHERE IN THE PROGRAM AND IF WE DECLARED THE VARIABLE IN THE FUNCTION THEN IT HAS LOCAL SCOPE AND CAN BE ACCESSED FROM ONLY THE FUNCTION

var myGlobal = 10

function fun1(){
    x = 10; // If we declare the variable with these type then it will have global scope and can be accesed from anywhere
    var z = 10 // these z have local scope becuase of it is been declared using var datatype
}
