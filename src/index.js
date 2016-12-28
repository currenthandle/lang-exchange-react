import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Users from './components/Users'

render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='signup' components={SignUp} />
                    <Route path='signin' components={SignIn} />
                    <Route path='users' components={Users} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
