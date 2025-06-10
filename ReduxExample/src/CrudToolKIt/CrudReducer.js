import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  data:[]
}
const UserReducer = createSlice({
  name: 'User',
    initialState,
    reducers: {
        ins :(state, action) => {
            state.data = [...state.data, action.payload]
        },
        del :(state, action) => {
            state.data = state.data.filter((i,index) => index != action.payload)
        },
        upd:(state, action) => {
            state.data = state.data.map((i,index) => {
                if(index == action.payload.id) {
                    i = action.payload.info
                }
                return i
            })
        },
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { ins, del,upd,setData } = UserReducer.actions
export default UserReducer.reducer