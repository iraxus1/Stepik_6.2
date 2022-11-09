const express = require('express');
const request = require('request');
const app = express();
const port = 9000;

let counter = 0;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
//auto ping
app.get('/ping', (req, res) => {
    counter++;
    request('http://localhost:3000', (error, response, body) => {
        res.send(`The server has been hit ${counter} times`);
    });
});

app.get('/counter', (req, res) => {
    res.send(`The server has been hit ${counter} times`);
});


app.listen(port, (res) => {
    console.log(`Example app listening on port ${port}!`);
    request('http://localhost:3000', (error, response, body) => {
        console.log(body);
    });
});
