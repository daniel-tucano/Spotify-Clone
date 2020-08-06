// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const fireApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAFK-YJqI9upPYMcs5Pyq7xtOBwS4VBWAs",
        authDomain: "spotify-clone-96417.firebaseapp.com",
        databaseURL: "https://spotify-clone-96417.firebaseio.com",
        projectId: "spotify-clone-96417",
        storageBucket: "spotify-clone-96417.appspot.com",
        messagingSenderId: "697419421449",
        appId: "1:697419421449:web:9d56aefb65964478f1e5d8",
        measurementId: "G-JGM9M8KJ2E"
    }
)

export default fireApp
