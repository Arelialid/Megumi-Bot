const { createConnection } = require('./connection')
const { core } = require('./lib');
var express = require('express');
var app = express();

createConnection.then(sock => {
    sock.ev.on('messages.upsert', async m => await core(sock, m))	
})
app.listen(process.env.PORT || 8080);
createConnection.catch(erro => console.log(erro, 'Conn'))