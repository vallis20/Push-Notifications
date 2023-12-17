import { initializeApp} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js' 
import { getMessaging,getToken } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyBX4TxWC7PP1XfQq3i_4vFda4FUNjWJKnU",
  authDomain: "webpush-98fd7.firebaseapp.com",
  projectId: "webpush-98fd7",
  storageBucket: "webpush-98fd7.appspot.com",
  messagingSenderId: "701188442571",
  appId: "1:701188442571:web:98db3db024b472d6db4e4e",
  measurementId: "G-JPVMMXEBP2"
};

console.log('1');


function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const app=initializeApp(firebaseConfig);
      const messaging= getMessaging(app);
      getToken(messaging,{ vapid: 'BHxMxGqZO1rOnUhc_LxJtGiMkyJ7gtM4glsRImoHg9l37yrTOmiIHOfTpQA37_HfZ7FnEclg2e055xjn90voEYw' }).then((currentToken) => {
      if (currentToken) {
      console.log('curretn Token:',currentToken);
    } else {
     console.log('no funciono:(')
      }
    });
    }else{
      console.log('no tenes permiso')
    }
  });
}
  requestPermission();