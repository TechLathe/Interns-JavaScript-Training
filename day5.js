function checkNum(num){
    if(num>0 && num<10){  //  &&->AND      ||->OR
        console.log("Number is in between 0 to 10");
    }else if(num>=10 && num<20){
        console.log("10 or between 10 to 20");
    }else{
        console.log("20 or Greater than 20");
    }

    return "checkNum executed";
}

num=11;
checkNum(num);
console.log(checkNum(20));

var arr=["Rohan","200000"];
function empData(val){
    if(val===1)
        return arr[0];
    else if(val===2)
        return arr[1];
    else
        return "Enter the valid input";
}

console.log(empData(0));

var arr1=["Alpha", "Beta", "Sigma", "Gamma"];
function switchCase(val){
    switch (val){
        case 1:
            return arr1[0];
        case 2:
            return arr1[1];
        case 3:
            return arr1[2];
        case 4:
            return arr1[3];
        case 5:
            console.log("That's it!!!");
            break;
        default: return "Enter valid data";
    }
}

console.log(switchCase(1));


function abTest(a,b){

    if(a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}

console.log(abTest(-2,2));