'use strict';

const express = require('express');
const server = express();

server.use(express.static('public', {
    extensions: ['html']
}));

// Abfragen können mit Hilfe einer Route verarbeitet werden
server.get('/anfrage', (request, response) => {
    console.log('Anfrage!');
    response.send('Anfrage erhalten. Vielen Dank.')
})

server.get('/servertime', (request, response) => {

    // Zeit setzen
    let now = new Date();
    now.setHours(now.getHours() + 2);

    // Parameter lesen
    let part = request.query.part;

    switch (part) {
        case 'date':
            response.send(now.toLocaleDateString());
            break;
        case 'day':
            let days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
            let day = days[now.getDay()];
            response.send(day);
            break;
        default:
            response.send(now.toLocaleTimeString());
            break;
    }

})

const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();