import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
console.log('Home', Home)

render(
    (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
)
