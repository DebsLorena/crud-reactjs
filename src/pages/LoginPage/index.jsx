import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
// import { createSession } from '../../services/api';
import "./style.css"

const LoginPage = () => {

    // const { authenticated, user, login } = useContext(AuthContext)
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        console.log('login');
        console.log(email);
        console.log(password);
        login(email, password);

        // const response = await createSession (email, password);
        // console.log('login', response.data);
    }

    return (
        <div id='login'>
            <h1 className="title">Login</h1>
            {/* <p>Authenticated: { JSON.stringify(authenticated)}</p>
            <p>Email: { JSON.stringify(user)}</p> */}
            <div className="form">
                <div className="field">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Senha"value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="actions">
                    <button onClick={handleLogin} >Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage