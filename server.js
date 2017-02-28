var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.post('/notification/register', function(req, res) {
    var params = req.body;
    console.log('Received:', params);
    res.send(params);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
