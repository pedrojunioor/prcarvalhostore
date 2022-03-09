import React from 'react';

import { Header } from '../../components/Header/Header'
import { FormLogin } from '../../components/FormLogin/FormLogin'

export function LoginPage() {
    return (
        <div className="login">
            <Header />
            <FormLogin />
        </div>
    )
}