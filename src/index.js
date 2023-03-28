const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, mom');
});


app.post('/', (req, res) => {
    res.send('Moo moo ha');
});

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});