import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
// import to do reducer
import todoReducer from './features/todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // add todo reducer
        todos: todoReducer
    }
})