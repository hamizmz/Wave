var log: any = require('terminal-kit').terminal;
var http: any = require('http');

var zmq: any = require('zmq');
var app: any = require('express')();

var server: any = http.Server(app);
var io: any = require('socket.io')(server);

log.white('\n************************************************************\n');
log.white("* ").yellow("code").white('\n');
log.white("* ").red('Generated: ').white((new Date()).toString()).white("\n");
log.white('************************************************************\n\n');

