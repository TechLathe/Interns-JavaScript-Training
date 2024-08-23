function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
     result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

/*ARRAY*/
var ourArray = ["Om",24];
console.log(ourArray[0]);
ourArray[2]="Roll no.";
console.log(ourArray);
var multiDimensional = [["Book1",55],["Book2",77]];
console.log(multiDimensional[0][0]+" : "+multiDimensional[0][1]+"rs");

//push
ourArray.push("TE");
console.log(ourArray);
//pop
var removed = ourArray.pop();
console.log(removed);

//shift
var shiftElem = multiDimensional.shift();
console.log(shiftElem);

//unshift
multiDimensional.unshift(["Book7",73]);

console.log(multiDimensional);

/*FUNCTIONS*/
function fun(){
    console.log("In Function");
}

fun();
fun();
fun();

//passing arguments
function addNum(a , b){
    console.log(a+b);
}
addNum(11,10);
addNum(3,4);

//Global Scope

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined")
        output += "myGlobal : "+myGlobal;
    if(typeof oopsGlobal != "undefined")
        output += "oopsGlobal : "+oopsGlobal;
    console.log(output);
}

fun2();
fun1();
fun2();