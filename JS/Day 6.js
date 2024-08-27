// promises
const ticket = new Promise(function(resolve,reject){
    const isboarded=false;
    if(isboarded){
        resolve("you are not in the train");
    }
    else{
        reject("your train has been cancelled")
    }
})//promise created
ticket.then((data)=>{
    console.log("yess",data);// call back method catch the data passed on resolve
}).catch((data)=>{
    console.log("ohhhh",data);

})
.finally((data)=>{
    console.log("whoo",data);
})// promise used above
//if error ocurred or its rejected then it will go to catch
// finally block executed everytime