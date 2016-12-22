import React from 'react'

class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state = { users: [] }
    }
    handleSubmit = e => {
        e.preventDefault()

        const usernameElm = e.target.querySelector('#username')
        const passwordElm = e.target.querySelector('#password')
        const nativeLangElm = e.target.querySelector('#native-lang')
        const learningElm = e.target.querySelector('#learning')
        const skillLevelElm = e.target.querySelector('#skill-level')

        const username = usernameElm.value
        const password = passwordElm.value
        const nativeLang = nativeLangElm.value
        const learning = learningElm.value 
        const skillLevel = skillLevelElm.value 

        usernameElm.value = passwordElm.value = ''
        learningElm.value = 'english'
        skillLevelElm.value = '0'

        let payload = {
            username,
            password,
            nativeLang,
            learning,
            skillLevel
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
                    <label htmlFor='username'>Username:</label>
                    <input id='username' type='text'/>
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password'/>
                    <br/>
                    <label htmlFor='native-lang'>Native Language:</label>
                    <select id='native-lang'>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                    <br/>
                    <label htmlFor='learning'>Learning:</label>
                    <select id='learning'>
                        <option value='english'>English</option>
                        <option value='spanish'>Spanish</option>
                        <option value='french'>French</option>
                    </select>
                    <br/>
                    <label htmlFor='skill-level'>Skill Level:</label>
                    <select id='skill-level'>
                        <option value='0'>0 - Nothing</option>
                        <option value='1'>1 - Toddler</option>
                        <option value='2'>2 - Beginner</option>
                        <option value='3'>3 - Intermediate</option>
                        <option value='4'>4 - Advanced</option>
                        <option value='5'>5 - Fluent</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
}

export default SignUp
