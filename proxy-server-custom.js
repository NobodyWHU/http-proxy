var http = require('http'), httpProxy = require('http-proxy');

//create your custom server logic
httpProxy.createServer(function(req, res, proxy){
	//custom server logic
	proxy.proxyRequest(req, res, {
		host:'localhost',
		port:9000
	});
}).listen(8000);


http.createServer(function(req, res){
	res.writeHeda(200, {'Content-type': 'text/plain'});
	res.write('request successfully proxied: ' +req.url + '\n' + JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);