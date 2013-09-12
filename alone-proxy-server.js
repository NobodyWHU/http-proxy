var http = require('http'), httpProxy = require('http-proxy');

//create your proxy server
httpProxy.createServer(9000, 'localhost').listen(8000);

//create target server
http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);