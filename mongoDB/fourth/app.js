const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user');
let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/create',  (req,res)=>{
    let {username,age,email,password} = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async (err,hash)=>{
              let user = await usermodel.create({
                  password:hash,
                  age:age,
                  email:email,
                  username:username
             });
            let token= jwt.sign({email},"secret key");
            res.cookie("token",token);
             res.send(user);

        })
    })
 
   
})

app.listen(3000);