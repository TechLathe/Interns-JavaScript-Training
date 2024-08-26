// Welcome to the day 6 of javascript course

// We can create an object of an array

var objarr = [
    {   // this is firsrt object
        "name": "nishant",
        "surname": "galande",
        "formats": [
            "CD",
            "DVD",
            "MXPLAYER"
        ]
    },
    { // this is second object

        "intern": "TechLathe",
        "duration": "90_days"
    }
]

// accesing nested objects

var myStorage = {
    "car": {
        "inside": {
            "glovebox": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack",
        }
    }
};

console.log(myStorage.car.inside.glovebox);
console.log(myStorage.car.inside["passenger seat"]); // here there is a space between the two names so we need to put it in bracket notation


var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
        type: "trees",
        list: [
            "pine",
            "birch"
        ]
    }
];

console.log(myPlants[0].list[0])