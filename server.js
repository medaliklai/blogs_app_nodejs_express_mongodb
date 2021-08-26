const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
let domain = 'localhost';
let port = 3000;
http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');

    path = './views/';
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
           path += '404.html';
           res.statusCode = 404;
           break;
    }
    // read html file
    fs.readFile(path, (err,data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
}).listen(port, domain, () => {
    console.log('sever run on port ', port);
});

