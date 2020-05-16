const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

messages = ['hello', 'hi'];

//app.use(express.static(__dirname));

app.post('/api/post/mess', (req, res) => {
    console.log("POST API: " + JSON.stringify(req.body))
    if (req.body.message) messages.push(req.body.message);
    res.send('Message added');
});

app.get('/api/get/mess', (req, res) => {
    console.log("GET API: " + JSON.stringify(req.url));
    res.send(messages);
});
app.get('/js/8004.js', function(req, res) {
    console.log(req.url);
    res.sendfile('./js/8004.js');
});
app.get('/css/app.css', function(req, res) {
    console.log(req.url);
    res.sendfile('./css/app.css');
});
app.use(function(req, res) {
    if (req.query && req.query.query) messages.push(decodeURIComponent(req.query.query));
    console.log(req.url);
    res.sendfile('./index.html');
});
app.listen(8004, () => console.log('App listening on port 8004'));