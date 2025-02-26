import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebaseConfig'

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)


    const userRegisterSystem = async (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLoginSystem = async (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = async () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => unsubcribe()
    }, [])


    const userInfo = {
        user,
        loading,
        userRegisterSystem,
        userLoginSystem,
        userLogOut
    }

    return (
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    )
}

export default AuthProvider