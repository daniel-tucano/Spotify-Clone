import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from './pages/login'
import Main from './pages/main'

export default class Routes extends Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        {this.props.user ? <Redirect to='/main' /> : <Redirect to='/login' />}
                    </Route>

                    <Route path='/login' render={routeProps => (
                        <LoginPage {...routeProps} />
                    )} />

                    <Route path='/main'>
                        {this.props.user ? <Main /> : <Redirect to='/login' />}
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}



