var iit = "narhe"

function college(){
    var iit = "zeal"
    return iit;
}

console.log(college())
console.log(iit)

// returning values from function

function ms(num){
    return num-7
}
console.log(ms(10))


function ms1(num){
    return num*5
}
console.log(ms1(10))



// removing and inserting and element in array OR STAND IN LINE

function nextInLine(arr,item){
    arr.push(item)
    return arr.shift()
}

// DOUBT???????????????????????????????
var testarr = [1,2,3,4,5]

console.log("before: "+ JSON.stringify(testarr))
console.log(nextInLine(testarr,6))
console.log("After: "+ JSON.stringify(testarr))

// BOOLEAN

function welcome(){
    return true;
}