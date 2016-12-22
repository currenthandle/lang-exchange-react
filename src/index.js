import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Users from './components/Users'

render(
    (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='signup' components={SignUp} />
                <Route path='users' components={Users} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
)
