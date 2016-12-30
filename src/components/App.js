import React from 'react'

import { connect } from 'react-redux'

import NavBar from './NavBar'

@connect((store) => {
    return {
        user: store.user
    }
})
class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.user && <div>Hello {this.props.user.user.username}</div>}
                {this.props.children}
            </div>
        )
    }
}

export default App
