import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5GeK9CrNliAI57p9z3mQLq6TSOR0NTUg",
  authDomain: "crwn-db-8c250.firebaseapp.com",
  projectId: "crwn-db-8c250",
  storageBucket: "crwn-db-8c250.appspot.com",
  messagingSenderId: "91806415752",
  appId: "1:91806415752:web:84165c6cc530ecf53ed83d",
  measurementId: "G-DQHLLT48KD",
};


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //check user exists or not
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        //CRUD operation using documentRef object
        //create new user and store in DB

        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {

            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })

        } catch (err) {
            console.log('Error creating user', err.message);
        }

    }

    return userRef;


} 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Google Authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;