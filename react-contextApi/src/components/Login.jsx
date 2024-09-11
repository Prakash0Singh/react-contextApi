import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser}=useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder='username' value={username} onChange={(event) => { setUsername(event.target.value) }} />
            {" "}
            <input type="text" placeholder='password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
