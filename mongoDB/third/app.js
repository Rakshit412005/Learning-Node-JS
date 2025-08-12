const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get('/',(req,res)=>{

    let token = jwt.sign({email:"rakshitkumar0401@gmail.com"},"secret");
    console.log(`\nJWT string - ${token}\n`);

    res.cookie("token",token); // send krne ke liye res use hota h
    res.send(token);

    bcrypt.genSalt(10,  function(err, salt) {
    bcrypt.hash("rakshit07", salt, async function(err, hash) {
        // Store hash in your password DB.
        await console.log(`Hashed string - ${hash}\n`);
    bcrypt.compare("rakshit07","$2b$10$lnaNS.9s7yIoBSL1TjZz/ONrK2h5pb.JwGNRl7yla57cfxXBFHgS6" , function(err, result) {
    // result == true
    console.log(result);
    });
    });
    console.log("Cookie stored - ",req.cookies,"\n");
    

    });
})
app.get('/read',(req,res)=>{
    //console.log(req.cookies); // read krne ke liye req use hota h
    let data = jwt.verify(req.cookies.token,"secret");
    console.log("data - ",data);
    res.send("read page");
 });
 

console.log("server listening at port 3000");
app.listen(3000);
