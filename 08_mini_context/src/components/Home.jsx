import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='header'>
                <Link to="/login" className="login-button">
                    <button>Login</button>
                </Link>
            </div>
            <h1>Tirth Here!...learning context in React</h1>
        </div>
    )
}

export default Home