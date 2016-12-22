import React from 'react'

class SignUp extends React.Component {
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
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='name' />
                    <input className='lang'/>
                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
}

export default SignUp
                
