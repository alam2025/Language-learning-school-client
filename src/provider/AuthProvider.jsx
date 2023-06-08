import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
      //user create using email and password
      const createUser = (email, pass) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, pass);
      }

      //Sign in User using  email pass
      const logIn = (email, pass) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, pass);
      }

      //sign in using google
      const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      //log out
      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      }

      //profile setUp
      const setProfile = (name, photoUrl) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);

                  // if (currentUser) {
                  //       axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                  //             .then(data => {
                  //                   localStorage.setItem('Access_token', data.data.token)
                  //                   setLoading(false)
                  //             })
                  // }
                  // else {
                  //       localStorage.removeItem('Access_token')
                  //       setLoading(false)
                  // }

                  setLoading(false)
            })

            return () => {
                  return unsubscribe()
            }
      }, [])





      const authInfo = {
            createUser,
            logIn,
            logOut,
            googleSignIn,
            setProfile,
            user,
            loading
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;