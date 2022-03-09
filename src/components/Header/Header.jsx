import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import './Header.scss'

import history from '../../history'

import { User } from '../../assets/iconComponents/User'
import { Modal } from '../Modal/Modal'
import { FormLogin } from '../FormLogin/FormLogin'

import { Button } from '../Button/Button'


import { Context } from '../../context/AuthContext'

export function Header() {

    const [showModal, setShowModal] = useState(false)

    const { user, authenticated, handleLogout } = useContext(Context)

    function toggleModal() {
        console.log(!showModal)
        setShowModal(!showModal)
    }

    return (
        <div className="header">
            <div className="logp-area">
                <Link to='/'>HOME</Link>
            </div>
            <div className="input-area">
                <input
                    type="text"
                    placeholder="Buscar produtos" />
            </div>
            <div className="user-area">
                <div className="login-area">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <User width='25px' height='25px' />
                        {user && <span>{user.name.split(' ')[0]}</span>}
                    </div>
                    <div className="card-user">
                        {!authenticated
                            ? <Button onClick={() => { history.push('/login') }} estilo='btn2'>
                                <span>LOGIN</span>
                            </Button>
                            : <Button
                                onClick={() => handleLogout()}
                                estilo='btn2'>
                                Logout
                            </Button>
                        }
                    </div>
                </div>
            </div>
            <div className="cart-area">
                <button onClick={() => toggleModal()}>SACOLA</button>
            </div>

            {showModal &&
                <Modal closeModal={toggleModal}>
                    <FormLogin />
                </Modal>
            }
        </div>
    )
}