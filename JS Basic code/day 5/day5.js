// IF ELSE LADDER

var names = ["Hole in one!!","Eagle","Birdie","Par","Bogey","Double Bogey","Go home"]
function golfscore(par,strokes){

    if(strokes==1){
        return names[0]
    }else if(strokes<= par-2){
        return names[1]
    }else if(strokes<=par-1){
        return names[2]
    }else if(strokes==par){
        return names[3]
    }else if(strokes<= par+1){
        return names[4]
    }else if(strokes<=par+2){
        return names[5]
    }else if(strokes==par+3){
        return names[6]
    }

}

console.log(golfscore(3,6))


// SWITCH STATEMENTS

function caseInSwitch(val){
    var answer = ""

    switch(val){
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "nope!!!!!!!"
            break
        default:
            answer = "rewrite the values"
            break
    }

    return answer
}

console.log(caseInSwitch(3))

// OBJECTS IN JS

var ourDog = {
    "name" : "quincy",
    "legs" : 4,
    "tails" : 1,
    "friends" : [] 
};

var hatvalue = ourDog.name
var legvalue = ourDog.legs

console.log(hatvalue);
console.log(legvalue);

// or

var namevalue = ourDog["name"]
var tailvalue = ourDog["tails"]

console.log(namevalue)
console.log(tailvalue)

ourDog.name = "Tommy"
console.log(ourDog.name);

// adding new object 

ourDog['bark'] = "woof"

// deleting the object
console.log(ourDog) 
delete ourDog.tails

console.log(ourDog)

var lookup = {
    "alpha" : "adams",
    "bravo" : "boston",
    "charlie" : "chicago"
};

console.log(lookup.charlie)


// testing objects for properties

function checkObj(checkprop){
    if(lookup.hasOwnProperty(checkprop)){
        return lookup[checkprop]
    }else{
        return " not found"
    }
}

console.log(checkObj("alpha"))