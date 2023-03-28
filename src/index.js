const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, mom');
});


app.post('/', (req, res) => {
    res.send('Moo moo ha');
});

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});