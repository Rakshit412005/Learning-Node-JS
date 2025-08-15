const express = require('express');
const app = express();
const usermodel = require('./models/user');
const postmodel = require('./models/posts');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/register', async (req,res)=>{
    let {email,username,name,age,password} = req.body;
    let user = await usermodel.findOne({email});
    if(user){
        return res.status(500).send("User already registered");
    }
    else{
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt, async (err,hash)=>{
                let user = await usermodel.create({
                    username:username,
                    name:name,
                    age:age,
                    password:hash,
                    email:email
                });
               let token = jwt.sign({email : email, useriid : user._id}, "secret key");
               res.cookie("token",token);
               res.send("registered");
            })
        })
    }

})
app.listen(3000);