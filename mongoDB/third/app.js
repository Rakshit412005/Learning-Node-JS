const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie("name","Rakshit"); // send krne ke liye res use hota h
    res.send("cookie stored");
 })
app.get('/read',(req,res)=>{
    console.log(req.cookies); // read krne ke liye req use hota h
    res.send("read page");
 })
console.log("server listening at port 3000");
app.listen(3000);
