import React from 'react'

import NavBar from './NavBar'

import { connect } from 'react-redux'
import store from '../store'

@connect((store) => {
    return {
        user: store.user
    }
})
class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.user && <div>Hi {this.props.user.username}</div> }
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

export default App
