const express = require('express')
const mongoose=require('mongoose')
const Product = require('./models/product.model.js');
const productRoutes=require("./routes/product.route.js")

const app=express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoutes);


app.get('/',(req,res)=>{
    res.send("Hello from Node API");
});


//db connection
mongoose.connect("mongodb+srv://ibtisamahmad0051:TUqm94hQg5444ynW@cluster0.m09ch.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to Database!");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection Failed!");
});

