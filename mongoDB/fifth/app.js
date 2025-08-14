const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/',(req,res)=>{
    res.send("hey");
});

app.get("/create", async (req,res)=>{
   let user = await userModel.create ({
    username : "rakshit07",
    email : "rakshitkumar0401@gmail.com",
    age : 20
   })
   res.send(user);
});

app.get('/create/post',(req,res)=>{
    
})

app.listen(3000);