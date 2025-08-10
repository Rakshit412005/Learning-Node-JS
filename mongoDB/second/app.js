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
    let users = await userModel.find();

    res.render("read",{users});
})
app.get('/delete', async (req, res) => {
   
  try {
    let deletedUsers = await userModel.deleteMany({ name: "Nishchay Kumar" });
    res.send(`Deleted ${deletedUsers.deletedCount} users named Rakshit Kumar.`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting users");
  }
});

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
