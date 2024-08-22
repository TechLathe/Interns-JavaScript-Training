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
var str1 = "Hello. ";s
var str2 = "How are you?"
var str3="\nIm fine.";
str2+=str3;
console.log(str1+str2);

console.log(str3.length); //Returns the number of characters in the string

console.log(str3[1]); //Returns the character at index 1 but index start from 0

var lang = "CavaScript";
lang[0]="J";            // here individual character can not be changes
console.log(lang);
lang = "JavaScript";    //Complete string can be change
console.log(lang);

console.log("Last Character in '"+lang+"' is '"+lang[lang.length-1]+"'");