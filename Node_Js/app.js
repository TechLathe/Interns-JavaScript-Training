const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/order');

// app.use((req, res, next)=> {
//     res.status(200).json({
//         messsage:'It Works!'
//     });
// });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// Routes which should handle request
app.use(
    '/product', productRoutes
);
app.use(
    '/order', orderRoutes
);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status(404);
    next(error); 
})

app.use((req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;