import Firebase from '@react-native-firebase/app';

  let config = {
    appId: "1:11644613761:ios:affb1c1a7ffc15f1e80",
    apiKey: "AIzaSyA7jCPfwYbEq0iNJPexn4xk7RvqMywU",
    authDomain: "react-native-firebase-3bde9.firebaseapp.com",
    databaseURL: "https://bramhagyan-666.firebaseio.com",
    projectId: "bramhagyan-666",
    storageBucket: "bramhagyan-666.appspot.com",
     messagingSenderId: "1164406131"
};
export const appAuth1 = Firebase.initializeApp(config);