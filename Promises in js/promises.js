// Promises in JAVA SCRIPT

function getCheses(){
    setTimeout (() =>{
        const cheese = '🧀';
        return cheese;
    },2000)
}

const ticket = new Promise(function(resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('You are not in the flight');
    }else{
        reject('Your flight has been cancelled');
    }
})

ticket.then((data)=>{
    console.log('wohoo');
}).catch((data)=>{
    console.log('oh no');
}).finally(()=>{
    console.log('i will always be executed');
});