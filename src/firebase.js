import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4y_UiuUZI1GUaRxiJTT7iSMDahpwj_Bc",
    authDomain: "nevermind-ad1ae.firebaseapp.com",
    databaseURL: "https://nevermind-ad1ae.firebaseio.com",
    projectId: "nevermind-ad1ae",
    storageBucket: "nevermind-ad1ae.appspot.com",
    messagingSenderId: "1077643302463"
  };
  firebase.initializeApp(config);

  export default firebase;