const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const firebase = require('firebase');

const fbconfig = {
    apiKey: process.env.FIREBASE_API_KEY || "apiKey",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "projectId.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "https://databaseName.firebaseio.com",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "bucket.appspot.com"
};

firebase.initializeApp(fbconfig);

const database = firebase.database();

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
    //console.log('Received:', params);
    currentTime = ( new Date() ).getTime();
    database.ref('web-push-auth-' + currentTime).set(params);
    res.send(params);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on port ' + port)
});
