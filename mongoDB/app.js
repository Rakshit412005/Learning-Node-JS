const express = require('express');
const app = express();
const userModel= require('./usermodel')
app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create', async (req,res)=>{
  let createduser = await userModel.create({
        name:"rakshit",
        username: "rakshit07",
        email: "rakshitkumar0401@gmail.com"
    })
    res.send(createduser);
})
app.get('/update', async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate(
        {username: "rakshit07"},{name:"rakshit kumar"},{new:true}
    )
    res.send(updateduser);
})
app.get('/read', async (req,res)=>{
    let users = await userModel.find();
    res.send(users);
})
app.get('/delete', async (req,res)=>{
    let deleteduser = await userModel.findOneAndDelete({name:"rakshit kumar"});
    res.send(deleteduser);
})
console.log("server running at port 3000");
app.listen(3000);