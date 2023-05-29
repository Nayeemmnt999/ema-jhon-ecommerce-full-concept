import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../api/Firebase/Firebase';


export const AuthContext = createContext()
const UserContex = ({ children }) => {

    const auth = getAuth(app)
    // for user
    const [user, SetUser] = useState()
    // email sign up
    const createEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email login
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth ,email, password)
    }
    // signOut
    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser)
        })
    },[])

    const authInfo = { createEmailUser, emailLogin, user , SetUser, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContex;