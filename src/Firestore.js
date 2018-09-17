import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDILMIFPfNiJz347-rse_7G71e8MkaJ6A4",
    authDomain: "elaouele-alinerafa-com-br.firebaseapp.com",
    databaseURL: "https://elaouele-alinerafa-com-br.firebaseio.com",
    projectId: "elaouele-alinerafa-com-br",
    storageBucket: "elaouele-alinerafa-com-br.appspot.com",
    messagingSenderId: "265197758316"
};

firebase.initializeApp(config);

export default firebase;
