export default function reducer(state = {
    signupFlash: '',
    user: {}
}, action) {
    switch (action.type){
        case 'SET_SIGNUP_FLASH': 
            return {...state, signupFlash: action.payload }
        case 'ACTIVATE_LOGIN_SESSION':
            return {...state, user: action.payload }
        default: 
            return state
    
    }
}

