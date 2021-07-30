// require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")
const port = process.env.PORT || 3001
app.use(express.json())
app.use(express.static("client/build"))

// "mongodb+srv://admin-mca:pR67z0zK6eSnKby6@cluster0.o2g5y.mongodb.net/cloudCuisineDb?retryWrites=true&w=majority"

mongo_uri = process.env.MONGO_URI; 

mongoose.connect("mongodb://localhost:27017/cloudcuisineDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true   
});

const userSchema = new mongoose.Schema({
    fullName:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const User = new mongoose.model("User", userSchema)

app.get("/", function(req,res){
    res.send("happy")
});

app.post("/signup",function(req,res){
    userDetail = req.body;
    User.create(userDetail, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});

app.get("/users",function(req,res){
    User.find((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
});


app.listen(port, ()=> console.log("Cloud Cuisine backend started on Port "+port))
