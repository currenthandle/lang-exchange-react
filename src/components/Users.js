import React from 'react'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4  && xhr.status === 200 ) {
                this.state.users = xhr.responseText
                this.setState({ users: JSON.parse(xhr.responseText) })
            }
        }
        xhr.open('get', '/user', true)
        xhr.send()
    }
    render() {
        const users = this.state.users.map((user, index) => {
            return (
                <div key={index}>
                   <span>{user.username}</span>  
                   <span>{user.nativeLang}</span>  
                   <span>{user.learning}</span>  
                   <span>{user.skillLevel}</span>  
                    
                </div>
            )
        })
        return (
            <div>
                {users}
            </div>
        )
    }
}
export default Users
