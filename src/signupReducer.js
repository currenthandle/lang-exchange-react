export default function reducer(state = {
    signupFlash: ''
}, action) {
    switch (action.type){
        case 'USERNAME_TAKEN': 
            return {...state, signupFlash: 'Username already taken, try another'}
        default: 
            return state
    
    }
}
