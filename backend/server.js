const express = require("express")
const mongoose = require("mongoose")
const Cors = require("cors")
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())
app.use(Cors())

mongoose.connect("mongodb+srv://admin-mca:pR67z0zK6eSnKby6@cluster0.o2g5y.mongodb.net/cloudCuisineDb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true   
});

const userSchema = new mongoose.Schema({
    fullName:String,
    email:String
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
