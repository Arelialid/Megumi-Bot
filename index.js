const { createConnection } = require('./connection')
const { core } = require('./lib');
var express = require('express');
var app = express();

createConnection.then(sock => {
    sock.ev.on('messages.upsert', async m => await core(sock, m))	
})
<<<<<<< HEAD
app.listen(process.env.PORT || 8080);
createConnection.catch(erro => console.log(erro, 'Conn'))
=======

worker:  node index.js

createConnection.catch(erro => console.log(erro, 'Conn'))
>>>>>>> 9dac8812f9c8388a9d3647419aece7b1b2104540
