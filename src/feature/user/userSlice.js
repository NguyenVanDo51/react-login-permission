import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'user',
    initialState: {
        user_id: '',
        email: '',
        role: 'Guard'
    },
    reducers: {
        setUser: (state, action) => {
            state.user_id = action.payload.user_id
            state.email = action.payload.email
            state.role = action.payload.role
        }
    }
})

export const { setUser } = slice.actions

export const selectUser = state => {
    return {
        userId : state.user.user_id,
        email: state.user.email,
        role: state.user.role
        }
    }

export default slice.reducer