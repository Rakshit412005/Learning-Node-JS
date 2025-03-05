const requestHandler=(req,res)=>{
console.log(req.url,req.method);
const { sumRequestHandler }= require('./sum');
if (req.url==='/'){
    res.setHeader('Content-type','text/html');
    res.write(`
        <html>
        <head><title>Home Page</title></head>
        <body><h1>Home Page</h1>
        <br>
        <h3><a href="./calculator">Go to Calculator</a></h3>
        </body>
        </html>
        `);
        return res.end();
}
else if(req.url==='/calculator'){
    res.setHeader('Context-type','text/html');
    res.write(`
        <html>
        <html>
        <head><title>Calculator page</title></head>
        <body><h1>Calculator Page</h1>
        <br>
        <form action="/result" method="POST">
        <input type="number" placeholder="First Num" name="first"/>
        <input type="number" placeholder="Second Num" name="second"/>
        <input type="submit" placeholder="Sum" />
        </form>
        <br>
        <h3><a href="/">Go to home</a></h3>
        </body>
        </html>

        `)
        return res.end();
}
else if(req.url==='/result' && req.method==='POST'){
      return sumRequestHandler(req,res);
      
}
}
exports.requestHandler=requestHandler;