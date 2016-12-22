import React from 'react'
import ReactDOM from 'react-dom'
//import io from 'socket.io-client'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { users: [] }
    }
    handleSubmit = e => {
        e.preventDefault()
        const nameEle = e.target.querySelector('.name')
        const langEle = e.target.querySelector('.lang')
        const name = nameEle.value
        const lang = langEle.value
        nameEle.value = langEle.value = ''
        let payload = {
            name,
            lang
        }
        const xhr = new XMLHttpRequest()
        xhr.open('post', '/user', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(payload))
    }
    handleClick = e => {
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
            return <div key={index}>{user.name} wants to learn {user.lang}</div>
        })
        return (
            <div>
                <h1>Lang Exchange</h1>
                <p onClick= {this.handleClick}>Isnt it great!</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='name' />
                    <input className='lang'/>
                    <button>Submit</button>
                </form>
                {users}
            </div>
        )
    }
}

export default App
