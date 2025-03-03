const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Node JS</title></head>');
        res.write('<body> <h1>Enter your Details </h1>');
        res.write('<form action="/Submit details" method="POST">');
        res.write('<input type= "text" name = "username" placeholder= "Enter your name"><br>');
        res.write('<label for="male"> MALE </label>')
        res.write('<input type= "radio" name = "gender" id="male"> <br>');
        res.write('<label for="female"> FEMALE </label>')
        res.write('<input type= "radio" name = "gender" id="female" ><br>');
        res.write('<input type= "submit" value="Submit">')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/products'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Node JS</title></head>');
        res.write('<body> <h1>welcome to products page </h1></body>');
        res.write('</html>');
        return res.end();
    }
    else{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Node JS</title></head>');
    res.write('<body> <h1>heloooooooo nosejs </h1></body>');
    res.write('</html>');
    res.end();
    }
    
});
//run by writing node first.js in terminal.

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
