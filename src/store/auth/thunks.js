import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = ( email, password) => {

    return async( dispatch ) => {
        dispatch( checkingCredentials());
    }
}

export const starGoogleSingIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials());
    }
}