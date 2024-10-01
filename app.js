const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./API/routes/products");
const orderRoutes = require("./API/routes/orders");
app.use(morgan("dev"));
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use((req, res, next)=>{
    consterror = new error("not found");
    error.status(404);
    next(error);
});
pp.use((error, req, res, next)=>{
res.status(err.status || 500);
res.json({
    error:{
        message:error.message
    }
});
});
module.exports = app;
