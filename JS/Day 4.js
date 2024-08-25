//ternary operator
function equal(a,b){
    return a===b;
}
console.log (equal(8,5))

//nested ternery operator
function twodigit(val){
    return val < 10 ? "one digit" : val > 9 && val<99 ? "two digit" : "three digit"

}
console.log(twodigit(77))

/* difference between var and let
let doesn't let you declare same variable twice in same scope
to catch coding mistake use strict */

//doubt
function checkscope(){
    "use strict";
    var i ="function scope";
    if(true){
        i = "block scope";
        console.log("block scope i is" ,i);

    }
    console.log("function scope i is",i);// ouput should be block scope (video time 2:39:45)
    return i
}
checkscope( );


function checkscope(){
    "use strict";
    let i ="function scope";// let i used twice
    if(true){
        let i = "block scope";
        console.log("block scope i is" ,i);

    }
    console.log("function scope i is",i);
    return i
}
checkscope( );

// mutate an array 
const arr =[0,1,2,3,4,5,6,7,8,9];
function edit (){
    "use strict";
    arr[0]  = 9;
    arr[1]  = 8;
    arr[2]  = 7;
    arr[3]  = 6;
    
}
edit();
console.log(arr)

//object freeze to freeze the object
// arrow function with array
const a=(arr1,arr2) => arr1.concat(arr2);//simply to faster the execution
console.log(a([1,2,3],[4,5,6,7]));

// defauly parameters
const decrease=(function(){
    return function decrease (num,val=4){
        return num*val ;
    };
})();
console.log(decrease(9,6));
console.log(decrease(2));

//rest operator 
const mul=(function(){
    return function mul (...arg){//... represent rest operator 
        
        return arg.reduce((z,y)=> z*y,1);
    };
})();
console.log(mul(2,3,4,7,5));

//spread operator
const arr1=[1,2,3,4,5];
let arr2;
(function(){
    arr2=[...arr1];
    arr1[0]="purva";
})();
console.log(arr2)