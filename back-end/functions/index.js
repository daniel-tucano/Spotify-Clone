const functions = require('firebase-functions');
const firebase = require('firebase-admin');

firebase.initializeApp(
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

const firestore_users = firebase.firestore().collection('users')

const firestore_musics = firebase.firestore().collection('musics')

const objectBuilder = functions.storage.object();

exports.addUserToDatabase = functions.auth.user().onCreate( (user) => {

    firestore_users.doc(`${user.uid}`).set({
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        providers: user.providerData.map(providerData => providerData.providerId),
        creationTime: user.metadata.creationTime,
        favoriteMusics: [],
        playlists: [],
    }).then( () => {
        return
    }).catch( error => {
        return
    })

    return
})

exports.addMusicToDatabase = objectBuilder.onFinalize( async (object) => {

    if (object.contentType.startsWith('audio/')){
        firestore_musics.doc(object.generation).set({
            name: object.name,
            album: String(),
            artist: String(),
            url: object.mediaLink,
            duration: Number(),
            contentType: object.contentType
        }).then( () => {
            return
        }).catch( () => {
            return
        })
    }
    return
})

