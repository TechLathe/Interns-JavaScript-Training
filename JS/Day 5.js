//destructing assignments
const months={"jan":31,"feb":28,"march":31};
function day (monthscount){
    "use strict";
    const { "march" : days}=monthscount;// here its besically telling that take march keys values to months count and then assign it to the days 
    return days;// then we are returning days
}
console.log(day(months))// we are calling day function and in it months

// nested destructing assignments
const months1={"jan":{days1:31,index:1},"feb":{days1:28,index:2},"march":{days1:31,index:3}};
function day (monthscount){
    "use strict";
    const { "march" : {days1 : day2}}=monthscount;// here its besically telling that take march keys values to months count and then assign it to the days and also to the index of the month
    return day2;// then we are returning days and index
}
console.log(day(months1))// we are calling day function and in it months

// 
const s=[9,8,7,6,5,4,3,2,1,0];
function removefirst(a){
    const[, , , , ...arr]=a;
    return arr;
}
const arr= removefirst(s)
console.log(s)
console.log(arr)

// template literals// not getting desired output
const name={
    fname:"purva",
    lname:"ghatage",
    edu:"undergraduate student"
};
const info=`hello my name is ${name.fname}${name.lname}! i am currerntly a ${name.edu}`;
console.log (info)

//simple feilds
const p=(year,month,date) =>({year,month,date});
console.log(2004,"September",7)

//class syntax
function name1 (){
    class fname{
        constructor(names){
            this.names=names;
        }
    }
    return fname
}
const fname=name1();
const purva=new fname('purva');
console.log(purva.names)

// getter and setter 
function name2(){
    class lname{
        constructor(firstletter){
            this._firstletter=firstletter+2;
        }
        get name3(){
            return this._firstletter;
        }
        set name3(updated)
    }
}