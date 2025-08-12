const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie("name","Rakshit"); // send krne ke liye res use hota h
    res.send("cookie stored");
    // bcrypt.genSalt(10, function(err, salt) {
    // bcrypt.hash("rakshit07", salt, function(err, hash) {
    //     // Store hash in your password DB.
    //     console.log(salt);
    // });
    bcrypt.compare("rakshit07","$2b$10$8kt24vv6Rh40/TBN4YF5je" , function(err, result) {
    // result == true
    console.log(result);
    });

});
 //})
app.get('/read',(req,res)=>{
    console.log(req.cookies); // read krne ke liye req use hota h
    res.send("read page");
 })
console.log("server listening at port 3000");
app.listen(3000);
