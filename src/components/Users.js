import React from 'react'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            console.log('state change')
            if (xhr.readyState === 4  && xhr.status === 200 ) {
                this.state.users = xhr.responseText
                this.setState({ users: JSON.parse(xhr.responseText) })
                //this.state = { users: JSON.parse(xhr.responseText) }
            }
        }
        xhr.open('get', '/user', true)
        xhr.send()
    }
    render() {
        const users = this.state.users.map((user, index) => {
            return <div key={index}>{user.name} wants to learn {user.lang}</div>
        })
        return (
            <div>
                {users}
            </div>
        )
    }
}

export default Users
