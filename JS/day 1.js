//Day 1(in line comment)
var a=9;/* (multiline code)*/var b=6; //declare ,intialize and assign 
let y=7;//let used insted of var if we have to use within the scope 
console.log(a)//to display output 
var f;//uninitialize var means any values can be assigned
//js is case sensitive lunguage it gives reference error

var sum=60+60;
console.log(sum)
var diff=70-50;
console.log(diff)
var mul=6*8;
console.log(mul)
var division=70/35;
console.log(division)

var e=5;
e ++;
console.log(e)//increment
var e=5;
e --;
console.log(e)//decrement

//decimal operations
var dec=7.5;
add =7.5+2.5;
console.log(add)
sub=7.5-2.5;
console.log(sub)
multi=7.5*2;
console.log(multi)
divi=6.0/3.0;
console.log(divi)

// reminder find 
var reminder=30%4;
console.log(reminder)

//argumented maths operations
var r=60;
r=r-5;//can be written as r-=5
r=r+5;//can be written as r+=5
r=r*5;//can be written as r*=5
r=r/5;// can be written as r/=5

 
//declare string variable
var fname="purva";
console.log(fname)

//escaping literals 
var intro='hello "purva" this side';// used single quote for escaping literals
var intro="hello/"purva"/ this side";// secomd method to use

//plus operator
var fname="purva" +"ghatage";
console.log(fname)

// concating of string
var fname= "purva";
fname+="ghatage";
console.log(fname)

lname="ghatage"+fname;
console.log(lname)

//finding length
var fnamelength=0;
var fname="purva";
fnamelength=fname.length;
console.log(fnamelength)

//firstletter
var firstletter=" ";
firstletter=fname[0];
console.log(firstletter)

//any n^th number
var anyletter=" ";
anyletter=fname[3];
console.log(anyletter)

//for changing the strings
var fname="durva";
fname[0]="p";
console.log(fname)

// finding last letter 
var lastletter= fname[fname.length-1];
console.log(lastletter)
