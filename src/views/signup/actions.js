export function setSignupFlash(flashText) {
    return {
        type: 'SET_SIGNUP_FLASH',
        payload: flashText 
    }
}

export function activateLoginSession(user) {
    return {
        type: 'ACTIVATE_LOGIN_SESSION',
        payload: user
    }
}
