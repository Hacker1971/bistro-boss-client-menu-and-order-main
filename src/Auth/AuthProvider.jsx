import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line no-unused-vars
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googlesingIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [])
const authInfo = {
    user,
    loading,
    createUser,
    googlesingIn,
    signIn,
    logOut,
    updateUserProfile
}
  return <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>;
};

export default AuthProvider;
