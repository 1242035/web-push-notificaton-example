# web-push-notificaton-example
this is example for web push notification

Step:
  1. Put service-worker.js at root directory of website
  2. Include notification.js at your location: example index.html
  3. Create route for /notification/register ( you can change this path )
  4. Handle route and receive a subcription with format
    array (
      'endpoint' => 'https://android.googleapis.com/gcm/send/cUmHrE_n3Hs:APA91bG4t4UOlLaQ5D-Gcau9bgwvjYm-MVnvsC3jRXyW2txFQVgqzYjkCCHh_jMPesGC4NV6w3h0if4VyG2Ay1NZYxyCmx2vWL4wcsqCTNgFF9Y5dpwoHYNF1AHU6nV-A2-M5iEdFvvJ',
      'keys' => 
        array (
          'p256dh' => 'BOewDe18DjTsIJwCJWWk2lnT3n8CI_Hg1yU5g3286DnUjTiZ49xnLiXMIc_VvCodb_8rtIe1gAI1pObEkgPJT7U=',
          'auth' => '8UfM3AJMRsXShhMGxuazIw==',
        ),
    ),
  5. npm install
  6. Fill subcription( step 4 ) to send-command.js
  7. Get FCM-API-KEY at https://console.firebase.google.com/
  8. Run node `send-command.js`
