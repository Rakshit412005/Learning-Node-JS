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

app.get('/create/post', async (req,res)=>{
    let post = await postModel.create({
        postdata: "hello how are you",
        user: "689e21be2f5cf1de59362359"
    })

    let user = await userModel.findOne({_id: "689e21be2f5cf1de59362359"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(3000);