
/* eslint-env browser, serviceworker, es6 */

'use strict';

self.addEventListener('install', function(event) {
    //self.skipWaiting();
    //console.log('Installed new', event);
});
self.addEventListener('activate', function(event) {
    //console.log('Activatednew', event);
});

self.addEventListener('notificationclick', function(event) {
    //console.log('[Service Worker] Notification click Received.');
    //console.log( event.notification );
    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://onemax.com.vn')
    );
});

self.addEventListener('push', function(event) {
    var response = {};
    try{
        response = event.data.json();
    }catch(e){
        console.log( e );
    }
    console.log( response );
    const title = response.title || 'OneMax';
    const options = {
        body: response.body || 'Notification.',
        icon: response.icon || 'https://st.onemax.com.vn/img/bg/bg.png',
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
