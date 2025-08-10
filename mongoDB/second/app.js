const express = require('express');
const app = express();;
const path= require('path');
const userModel = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/read', async (req,res)=>{
    let allUsers = await userModel.find();

    res.render(allUsers)
})
app.post('/create', async (req,res)=>{
    let {name,email,image}=req.body;
    let createduser= await
    userModel.create({
        name :  name,
        email : email,
        image: image
    })
    res.send(createduser);
})
console.log("server running at port 3000")
app.listen(3000);
