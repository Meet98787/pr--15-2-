import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../Firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Routes = ({ res, logIn, setLogIn }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setLogIn(uid)
            } else {
                setLogIn(null)
            }
        });
    }, [])

    useEffect(() => {
        if (!logIn) {
            navigate('/login')
        }
    }, [logIn])

    return (
        res
    )

}

export default Routes