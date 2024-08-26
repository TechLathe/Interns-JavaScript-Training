//Build Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myPet = {
    "name": "Kuruma",
    "legs": 4,
    "tails": 9,
    "friends": ["everything!"]
};

console.log("Name : " + myPet.name); //Dot notation

console.log("Tails : " + myPet["tails"]); //Bracket notation

var frnd = "friends";
console.log("friends : " + myPet[frnd]); //Using variable

//updating object value

myPet["friends"] = "Naruto";
console.log("friends : " + myPet[frnd]);

//Adding properties in object

myPet.color = "Red";
console.log("color : " + myPet["color"]);

//delete

delete myPet.color;
console.log("color : " + myPet["color"]);

function checkObj(checkProp) {
    if (myPet.hasOwnProperty(checkProp)) {
        return myPet[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("village"));

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YT video"
        ],
        "gold": true
    }
];

var myStorage = {
    "car": {
        "inside":
        {
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

console.log(myStorage.car.inside["glove box"]);