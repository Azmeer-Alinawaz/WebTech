var http = require("http");


http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.write('hi friends how are you\n');
    
    res.end('hello world');
}
).listen(8080, () => {
    console.log("program created")

})
