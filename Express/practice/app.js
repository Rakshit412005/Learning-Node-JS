const http = require('http');
const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
console.log('first middleware ',req.url,req.method);
res.send('<h1>first middleware</h1>')

});
const server=http.createServer(app);
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})