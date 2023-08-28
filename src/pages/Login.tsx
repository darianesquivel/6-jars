import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { UserAuth } from '../context/AuthContext'
import useStore from '../context/store'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    LoginContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

export default function Login() {
    const navigate = useNavigate()
    const classes = useStyles()
    const { setAuthUser }: any = useStore()
    const { user, googleSignIn } = UserAuth()

    useEffect(() => {
        if (user) {
            setAuthUser(user.email)
            navigate('/')
        }
    }, [navigate, setAuthUser, user])


    return (

        <Box className={classes.LoginContainer} >
            <Typography>6 JARS</Typography>
            <Button variant="contained" size='large' onClick={googleSignIn}>
                Login with Google
            </Button>
        </Box>

    )
}