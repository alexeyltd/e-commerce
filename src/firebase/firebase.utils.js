import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB11GFFfRM5ZUWWj1570sFIBRYcE1SlgQM",
  authDomain: "javascript-udemy.firebaseapp.com",
  databaseURL: "https://javascript-udemy.firebaseio.com",
  projectId: "javascript-udemy",
  storageBucket: "javascript-udemy.appspot.com",
  messagingSenderId: "54146227656",
  appId: "1:54146227656:web:4e7a1abee885b1141734fd",
  measurementId: "G-2VJV1PWSJZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
