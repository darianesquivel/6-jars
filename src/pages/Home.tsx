
// React
import { useEffect } from 'react'

// Firebase
import { db } from '../api/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { logOut } from '../api/useFirebase'

// Components
import Navbar from '../components/Navbar'
import Jars from '../components/Jars'

// Zustand
import useStore from '../context/store'

// MUI
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '70px 1fr' // navbar 70px  + content 1fr
    },
    content: {
        width: '100%',
    }
}))

export default function Home() {
    const { authUser, setAuthUser, userData, setUserData }: any = useStore()
    const classes = useStyles()

    useEffect(() => {
        const getUserData = async () => {
            const userDocRef = collection(db, 'users')
            const userQuery = query(userDocRef, where('email', '==', authUser));
            const userDocSnap = await getDocs(userQuery);
            if (!userDocSnap.empty) {
                const data = userDocSnap.docs[0].data();
                setUserData(data);
            }
        }
        getUserData()

    }, [authUser, setAuthUser, setUserData])

    const handleLogOut = () => {
        logOut()
        setAuthUser(null) // clean user auth
        setUserData(null) // clean data
    }

    return (
        <Box className={classes.container}>
            <Navbar avatar={userData?.avatar} onLogOut={handleLogOut} />
            <Box className={classes.content}>
                Hola {authUser} Bienvenido
                <Jars />
            </Box>
        </Box>
    )
}
