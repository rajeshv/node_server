var http = require('http');
function handleRequest(req, res){
	res.end("Hello World!");
}
var server = http.createServer(handleRequest);

server.listen(8080, function(){
	console.log("Listening to 8080 port");
	console.log("Server is running...")
});