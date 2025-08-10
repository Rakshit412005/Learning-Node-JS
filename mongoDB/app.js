const express = require('express');
const app = express();
const userModel= require('./usermodel')
app.get('/',(req,res)=>{
    res.send("hey");
})
console.log("server running at port 3000");
app.listen(3000);