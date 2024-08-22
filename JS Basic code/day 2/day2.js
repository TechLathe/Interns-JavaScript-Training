// here the modulus operator is same as of other languages

var remainder = 13%2;
console.log(remainder);

// augmented math operations

var a = 10;
a +=10;
var b = 20;
b -=10;
var c = 5;
c *=15;
var d = 10;
d /=2;

// creating a string im javascript

var myName = "Nishant";

//------VIMP-----

// ESCAPE CHARACTER :
//                   The escape character menas that if we want to print the double coat in 
//                   the string then it helps us just by adding backward slash at the end if the
//                   each double coat and dont add at the last double coat then it will consider it
//                   it as a string

var str1= "Hello my name is \"Nishant\" \"Chandrabhan\" \"Galande\""
console.log(str1);

// the second way to declare the string is that use single quote

var str2 = 'Hello I am studying in "Third Year Engineering"'
console.log(str2);

// Now the third way to declare the string is that use  use backticks

var str3 = `Hello I am now studying 'Javascript'  & further I will study "NODEJS"`
console.log(str3);

// ------- ESCAPE SEQUENSES---------
/**********
CODE OUTPUT

   \`  single quote
   \"  double quote
   \\  backslash
   \n  new line
   \r  carriage return
   \t  tab
   \b  backspace
   \f  form feed

 *******/

var str4 = "FirstLine\n\t\\SecondLine\f\fThirdLine"
console.log(str4)


// CONCATINATING STRINGS    

var str5 = "I am Happy" + "Beause I am feeling good today"
console.log(str5);

var str6 = "Hello"
str6 += " Interns"
console.log(str6);

var str7 = "morning "
var str8 = "Good "+ str7 +"TechLathe"
console.log(str8);

var str9 = "awesome!!"
var str10 = "Learning coding is "
str10+=str9
console.log(str10);

var str11 = "Nishant"
console.log(str11.length);

var str12 = "Galande"
console.log(str12[2]);

// String in the JavaScript is immutable that means even if we try to change any letter from the string we will get the error 
// so hence we need to assign new values to the string

var str13 = "Jello"
str13[0] = "h"; // Error
str13 = "Hello"
console.log(str13);

var str14 = "India"
str15 = (str14[str14.length-1]);
console.log(str15);


// Writing a function in the JS

function myFunction(str16,str17,str18,str19){
    var schedule = ""
    schedule += "I " + str16 + " " + str17 + " " + str18 +" " + str19
    return schedule
}
console.log(myFunction("go","to","college","everyday"))