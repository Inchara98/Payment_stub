'use strict';

var path = require('path');
var http = require('http');
var host = '192.168.1.123';

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port (http://%s:%d)', host, serverPort);
    console.log('Swagger-ui is available on http://%s:%d/docs', host, serverPort);
});

