const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hey");
})
console.log("server running at port 3000");
app.listen(3000);