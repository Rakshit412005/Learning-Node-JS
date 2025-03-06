const sumRequestHandler=(req,res)=>{
     console.log("Sum page",req.url,req.method)
     const body=[];
     req.on('data',chunk=>body.push(chunk));
     req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const first= new URLSearchParams(parsedBody).get('first');
        const second= new URLSearchParams(parsedBody).get('second');
        const result = Number(first) + Number(second);

        res.setHeader('Context-type','text/html');
       res.write(`
        <html>
        <html>
        <head><title>Result page</title></head>
        <body><h1>Calculator Page</h1>
        <br>
        <h1>The sum is ${result}<h1>
        <br>
        <h3><a href="/">Go to home</a></h3>
        </body>
        </head>
        </html>
    `);
    return res.end();
     })
     
}
exports.sumRequestHandler=sumRequestHandler;