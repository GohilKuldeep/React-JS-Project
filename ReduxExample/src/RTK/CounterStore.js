import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CounterReducer from './CounterReducer'

const CounterStore = configureStore({
    reducer: {
        Couter:CounterReducer
    }
})

export default CounterStore
