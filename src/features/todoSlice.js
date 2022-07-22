// import createSlice
import { createSlice } from '@reduxjs/toolkit'

// establish initial state
const initialState = {
    items: []
}

// to do slice
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // returns new item plus rest of array
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        // removes one item
        removeOne: (state, action) => {
            console.log(action)
            // variables
            let array = [...state.items]
            let index = action.payload
            // splices chosen item out of array
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        // returns empty array
        clearTodo: () => {
            return { items: [] }
        }
    }
})

// export actions
export const { addTodo, removeOne, clearTodo } = todoSlice.actions

// export reducer
export default todoSlice.reducer