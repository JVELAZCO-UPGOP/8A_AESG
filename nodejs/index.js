const http = require('http');
const requestHandler = require("./request-handler");
const server = http.createServer(requestHandler);

/*const callbackDelServidor =(req, res) => {
    res.end('hola mundo en un server http');
};
const server = http.createServer(callbackDelServidor);*/


server.listen(5000 , ()=>{
    console.log('El servidor esta escuchando peticiones en http://localhost:5000/');
});