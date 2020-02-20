import { auth, provider, firestore } from 'firebase/firebase.utils';

export function signInWithGoogle() {
  auth.signInWithPopup(provider);
}

export async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {}
  }

  return userRef;
}

export async function signUp(user) {
  const { email, password, displayName } = user;
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
  } catch (error) {
    alert(error.message);
    return;
  }
}

export function signOut() {
  auth.signOut();
}
