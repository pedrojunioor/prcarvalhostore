import React, { createContext, useState, useEffect } from 'react';

import api from '../config/api'

import history from '../history'


const Context = createContext();

function AuthProvider({ children }) {

    const [user,setUser] = useState(undefined)
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(body) {

        const response = await api.post('login', body)
        if (response.data.message) {
            alert(response.data.message)
        }
        else if (response.data.token) {
            let token = response.data.token
            let user = {
                email: response.data.email,
                name: response.data.user_name,
                phone: response.data.phone
            }
           

            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            setUser(user);

            history.push('/')
            
        }
    }
    
    function handleLogout() {
        if (window.confirm("Você realmente quer sair?")) {
            setAuthenticated(false);
            localStorage.removeItem('token');
            api.defaults.headers.Authorization = undefined;
            setUser(undefined);
            history.push('/')
        }
    }

    return (
        <Context.Provider value={{ user, loading, authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };