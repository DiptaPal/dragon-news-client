import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth);
    }

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const updateUserProfile = (profile) =>{
        setLoader(true)
       return updateProfile(auth.currentUser, profile)
    }
    
    const verifyEmail = () =>{ 
        setLoader(true)
        return sendEmailVerification(auth.currentUser)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoader(false)
        })
        return () => unsubscribe
    },[])

    const authInfo = {
        user, 
        loader, 
        signInWithGoogle, 
        signInWithGithub, 
        logOut, createUser, 
        logIn, 
        updateUserProfile,
        verifyEmail,
        setLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;