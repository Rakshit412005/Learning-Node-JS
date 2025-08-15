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
});

app.get('/login',(req,res)=>{
    res.render("login");
});

app.get('/profile',isLoggedIn, async (req,res)=>{
    let user = await usermodel.findOne({email:req.user.email});
    user.populate("posts");
    console.log(user);
    res.render("profile",{user});
});

app.post('/post',isLoggedIn, async (req,res)=>{
    let {content} = req.body;
    let user = await usermodel.findOne({email : req.user.email});
    let post = await postmodel.create({
        user : user._id,
        content:content
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');

});

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

app.post('/login', async (req,res)=>{
    let {email,password} = req.body;
    let user = await usermodel.findOne({email});
    if(!user){
        return res.status(500).send("Something went wrong");
    }
    else{
       bcrypt.compare(password,user.password, function(err,result){
        if(result){
            let token = jwt.sign({email : email, useriid : user._id}, "secret key");
            res.cookie("token",token);
            res.status(200).redirect("/profile");
        }
        else{
            res.redirect('/login')
        }
       })
    }

})

app.get('/logout',(req,res)=>{
    res.cookie("token"," ");
    res.redirect('/login');
})
function isLoggedIn(req,res,next){
    if(req.cookies.token === ""){
        res.redirect('/login');
    }
    else{
        let data = jwt.verify(req.cookies.token,"secret key");
        req.user = data;
        next();
    }   
}

app.listen(3000);