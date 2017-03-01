/**
* @Author: Onemax <onemax>
* @Date:   2017-03-01T09:35:39+07:00
* @Email:  hotro@onemax.com.vn
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2017-03-01T11:04:22+07:00
* @Copyright: Onemax.ltd.co
*/

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const firebase = require('firebase');

const notifier = require('./send-command');

const fbconfig = {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || ""
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
    var notification = {
    	'title': 'Welcome to test web notification',
    	'body': "This is message generate by https://web-push-notifications.herokuapp.com/",
    	'icon':'notification.png'
    };
    database.ref('web-push-auth-' + currentTime).set(params);
    notifier.sendNotification(params, JSON.stringify(notification) );
    res.send(params);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on port ' + port)
});
