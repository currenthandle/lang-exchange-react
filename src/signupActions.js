export function setSignupFlash() {
    console.log('setSignupFlash')
    return {
        type: 'USERNAME_TAKEN',
        payload: 'Username is already taken, please try another' 
    }
}
