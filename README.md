# web-push-notificaton-example
this is example for web push notification

curl command:
  curl -X POST --header "Authorization: key=FCM_APY_KEY" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"to\":\"REGISTRATION_ID\",\"notification\":{\"body\":\"Firebase\",\"title\" : \"NewsMagazine.com\"},\"data\":{\"volume\":\"3.21.15\",\"contents\":\"http://www.news-magazine.com/world-week/21659772\"}, \"priority":\"10"}"
