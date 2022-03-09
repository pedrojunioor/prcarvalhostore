import React, { useState, useContext } from 'react';

import { Context } from '../../context/AuthContext';


export function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleLogin } = useContext(Context)

    function handleJoinLogin(e) {
        e.preventDefault();
        let body = {
            email: email,
            password: password
        }
        handleLogin(body)
        // setEmail('');
        // setPassword('');
    }

    return (
        <div className='login-page'>
            <div className="login-area">
                <div className="login-content" >
                    <form onSubmit={event => handleJoinLogin(event)}>
                        <h1>Entrar</h1>
                        <input
                            type="email"
                            className="text"
                            value={email}
                            placeholder='Insira o seu e-mail'
                            onInput={event => setEmail(event.target.value)} />
                        <input
                            type="password"
                            className="text"
                            value={password}
                            placeholder='Senha'
                            onInput={event => setPassword(event.target.value)} />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}