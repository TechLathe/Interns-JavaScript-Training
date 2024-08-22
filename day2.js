//decimal
var deciNum = 7.7777;

var decProd = 2.9 * 7.5;
console.log(decProd);

var decDiv = 0.5/1.5;
console.log(decDiv);

var rem = 11%3;
console.log(rem);

//Augumented math operations 
var a=3;
var b=11;
var c=7;
var d=33;

a+=12;  //a=a+12;
b-=9;   //b=b-9;
c*=7;   //c=c*7;
d/=10;  //d=d/10;

/*String*/ 
var name = "Smitesh";

//Escaping Literal Quotes
var myStr = "I am a \"double \nquoted\" string";
console.log(myStr);

var mySTR = 'Without \t "double quote"';
console.log(mySTR);

var str=`using \b backticks\\ "hello" 'Hi' `;
console.log(str);

/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return 
\t tab
\b backspace
\f form feed
*/

//concate string 
var conString = "My name is "+"Smitesh ";
console.log(conString);

conString += "\nThis is on new line";
console.log(conString);

//using variables
var str1 = "Hello. ";
var str2 = "How are you?"
console.log(str1+str2);