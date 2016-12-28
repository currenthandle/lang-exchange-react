//export const SET_SIGNUP_FLASH = 'SET_SIGNUP_FLASH'

export function setSignupFlash() {
    return { 
        type: 'SET_SIGNUP_FLASH',
        payload: 'Username already in use'
    }
}
