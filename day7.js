//Nested Array
var myPlants = [
    {
        type : "flowers",
        list : ["rose","tulip","dandelion"]
    },
    {
        type : "trees",
        list : ["fir","pine","birch"]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var collection = {
    "2548" : {
        "album" : "",
        "artist" : "",
        "track" : [
            ""
        ]
    },
    "2468" : {
        "album" : "",
        "artist" : "",
        "track" : [
            ""
        ]
    }
}

function updateRec(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection;
}
updateRec("2548","track","test")
console.log(updateRec("2548","artist","ABBA"));

//1 to 10
var i = 1;
while(i<=10){
    console.log(i++);
}

//5 Table
console.log("");
for (var i = 1; i <= 10; i++){
    console.log(i*5);
}

//pattern
var arr = [];
for (var i = 1; i < 5; i++){
    arr = [];
    for (var j = 1; j < 5; j++){
        arr.push("# ");
    }
    console.log(arr);
}
console.log(arr);

var check=0;
do{
    console.log("In while loop "+check);
}while(check!==0);


contacts = [
    {
        "firstName" :   "Harry",
        "lastName"  :   "Potter",
        "number"    :   "9897739302",
        "likes"     :   ["Hogwarts", "Magic", "Hagrid"]
    }
]
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName===name)
            return contacts[i][prop];
    }
    return "No Such Contact";
}
console.log(lookUpProfile("Harry","likes"));
console.log(lookUpProfile("Naruto","likes"));

//Random Generate

console.log(Math.random()); //0 to 0.9
console.log(Math.floor(Math.random()*20)); //Whole Number 0 to 19

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(5,15));