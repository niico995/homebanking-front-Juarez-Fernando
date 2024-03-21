import { createAction } from "@reduxjs/toolkit";

export const current = createAction('CURRENT', (data) => {

    const dataFixed = {
        name: data.name + ' ' + data.lastName,
        email: data.email
    }

    return{
        payload: {
            ...dataFixed,
            loggedIn: true,
        }
    }
})
export const login = createAction('LOGIN', (token) => {
    localStorage.setItem('token', token)
    return{
        payload: {
            token,
            timetamps: Date.now() 
        }
    }
})
const actions = {
    current,
    login
}
export default {actions};