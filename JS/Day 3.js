// nested array
var name=[
    {
        type:"intro",
        list:["fname","lname","add"]
    },
    {
        type:"info",
        list:["purva","ghatage","solapur"  ]
    } 
     
]
var tell= ["my name is " +name[1].list[0]]
console.log(tell)

// while loop
var arr=[];
var i =0;
while (i<6){
    arr.push(i);
    i++;
}
console.log(arr)

var arr=[];
var i=100;
while (i>79) {
    arr.push(i);
    i--;
}
console.log(arr)

// for loop
var arr=[];
for (var i=100;i>=50;i--){
    arr.push(i)
}
console.log(arr)

var arr=[ ];
for (var i=0;i<20;i++){
    arr.push(i);
}
console.log(arr)
for (i=10;i<20;i++)
    {
    arr.shift(i)
}console.log(arr)

var arr=[0,1,2,3,4,5,6,7,8,9]
var total=0;
for (var i=0;i<arr.length;i++){
    total+=arr[i];
}
console.log(total)