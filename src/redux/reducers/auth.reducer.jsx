import { createReducer} from "@reduxjs/toolkit";
import {current, login} from '../../redux/actions/auth.actions'
//const {login, current} = actions

const initialState ={
    user: {
        name: '',
        email: '',
        loggedIn: false,
    },
    token: null,
    timetamps: null
}
const authReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(login, (state, action)=>{
        return{
            ...state,
            token: action.payload.token,
            timetamps: action.payload.timetamps
        }
    })
    .addCase(current, (state, action)=>{
        return{
            ...state,
            user: action.payload
        }
    })
}
)

export default authReducer;