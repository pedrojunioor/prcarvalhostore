import React, { useContext } from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Context } from './context/AuthContext';

import history from './history'

import {Home} from './pages/Home/Home'
import {LoginPage} from './pages/Login/Login'


export function AppRoutes() {

    function CustomRoute({ isPrivate, ...rest }) {

        const { loading, authenticated } = useContext(Context);

        if (loading) {
            return <h1>Loading...</h1>;
        }

        if (isPrivate && !authenticated) {
            return <Redirect to="/login" />
        }

        return <Route {...rest} />;
    }
    

    return (
        <Router history={history}>
            <Switch>
                <CustomRoute exact path="/" component={Home} />
                <CustomRoute exact path="/login" component={LoginPage} />
                {/* <CustomRoute isPrivate exact path="/users" component={Users} />
                <CustomRoute exact path="/register" component={FormUsers} />
                <CustomRoute isPrivate exact path="/browse" component={Catalog} /> */}
            </Switch>
        </Router>
    )
}