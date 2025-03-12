const http= require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    res.send("<h1>helloooooo beta</h1>");
    next();

});
app.use((req,res,next)=>{
    console.log("came in 2nd middleware",req.url,req.method);
    res.send("<h1>byeeee beta</h1>");
    next();
})
const server = http.createServer(app);
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
