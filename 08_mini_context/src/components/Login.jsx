import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import Profile from './Profile'

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const onClickSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})  // passing user data through context
    }

    return (
        <div>
            <div style={{ margin: '1rem' }}>
                <label htmlFor="username">Username:</label>
                <input
                    name='username'
                    id='username'
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    name='password'
                    id='password'
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                style={{ margin: '2rem' }}
                onClick={onClickSubmit}
            > Submit
            </button>

            <Profile style={{marginTop:'2rem'}} />
        </div>
    )
}

export default Login