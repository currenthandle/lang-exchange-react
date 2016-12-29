import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'

import Home from './views/home/component'
import Signup from './views/signup/component'
import Signin from './views/signin/component'
import Users from './views/users/component'

render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='signup' components={Signup} />
                    <Route path='signin' components={Signin} />
                    <Route path='users' components={Users} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
