var http = require('http'), httpProxy = require('http-proxy');

//create a proxy server with custom application logic
httpProxy.createServer(function(req, res, proxy){

	//buffer the request so that 'data' and 'end' events
	//are not lost during async operations
	var buffer = httpProxy.buffer(req);

	//wait for two seconds then respond
	setTimeout(function() {
		proxy.proxyRequest(req, res, {
			host: 'localhost',
			port: 9000,
			buffer: buffer
		});
	}, 2000);
}).listen(8000);

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);