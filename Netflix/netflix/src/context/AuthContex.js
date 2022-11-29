import { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from "../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {setDoc, doc} from "firebase/firestore"

const AuthContex = createContext()

export function AuthContexProvider({children}) {
    const [user, setUser] = useState({});
    function singUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    })

    return(
        <AuthContex.Provider value={{singUp, logIn, logOut, user}}>
            {children}
        </AuthContex.Provider>
    )
}

export function UserAuth( ) {
    return useContext(AuthContex)

}