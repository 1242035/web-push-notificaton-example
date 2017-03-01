/**
* @Author: Onemax <onemax>
* @Date:   2017-03-01T08:49:07+07:00
* @Email:  hotro@onemax.com.vn
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2017-03-01T11:04:34+07:00
* @Copyright: Onemax.ltd.co
*/

const webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();

apiKey = process.env.FIREBASE_API_KEY || "";

webpush.setGCMAPIKey(apiKey);

webpush.setVapidDetails(
  'mailto:chidungdekiemtra@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

module.exports = webpush;
