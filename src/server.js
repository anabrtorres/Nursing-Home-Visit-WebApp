// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express()


server
    // arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // criar uma rota
    .get('/', pages.index)
    .get('/nursing-home', pages.nursingHome)
    .get('/find-nursing-home', pages.findNursingHome)
    .get('/create-nursing-home', pages.createNursingHome)


// ligar o servidor
server.listen(5500)