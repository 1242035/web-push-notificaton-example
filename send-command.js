const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('<FCM-API-KEY>');
webpush.setVapidDetails(
  'mailto:example@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  	'endpoint': '',
  	'keys' : {
    	'p256dh' : '',
    	'auth' : '',
  	}
};
var notification = {
	'title': 'this is title',
	//'body': "this is body",
	//'icon':'https://st.onemax.com.vn/img/bg/bg.png'
};

webpush.sendNotification(pushSubscription, JSON.stringify( notification) );
