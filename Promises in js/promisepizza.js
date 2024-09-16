function getCheese(){
    return new Promise((resolve,reject)=>{
        // resolve('data');
        // reject('data');
        
        setTimeout(()=>{
            const cheese = '🧀';
            //console.log('here is the cheese',cheese);
            resolve(cheese);
        },2000);
    });
}

// console.log(getCheese);

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        // resolve('data');
        // reject('data');
        
        setTimeout(()=>{
            const dough = cheese + '🧇';
            // console.log('here is the dough',dough);
            resolve(dough);
            //reject('bad cheese');
        },2000);
    });
}


function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        // resolve('data');
        // reject('data');
        
        setTimeout(()=>{
            const pizza = dough + '🍕';
            //console.log('here is the pizza',pizza);
            resolve(pizza);
        },2000);
    });
}

// getCheese((cheese)=>{
//     makeDough(cheese,(dough)=>{
//         bakePizza(dough,(pizza)=>{
//             console.log('got my pizza',pizza);
//         });
//     });
// });

// pizza -> dough -> cheese

// getCheese()
//     .then((cheese)=>{
//         console.log('here is the cheese',cheese);
//         return makeDough(cheese);
//     }).then((dough)=>{
//         console.log('here is the dough',dough);
//         return bakePizza(dough);
//     }).then((pizza)=>{
//         console.log('here is the pizza',pizza);
//     }).catch((data)=>{
//         console.log('error occured',data);
//     }).finally(() =>{
//         console.log('Process Ended');
//     });

async function orderpizza() {
    try{
        const cheese = await getCheese();
        console.log('here is the cheese',cheese);
        const dough = await makeDough(cheese);
        console.log('here is the dough',dough);
        const pizza= await bakePizza(dough);
        console.log('here is the pizza',pizza);
    }catch(err){
        console.log('error occured',err);
    }
}

orderpizza();