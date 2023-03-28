const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world');
});


app.post('/', (req, res) => {
    res.send('Moo moo ha');
});

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});