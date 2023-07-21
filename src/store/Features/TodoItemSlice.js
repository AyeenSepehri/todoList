import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const todoItemSlice = createSlice({
    name: "todoItems",
    initialState,
    reducers: {
        addTodoItem: (state , action) => {
            state.value = action.payload
        }
    }
})

export const { addTodoItem } = todoItemSlice.actions

export default todoItemSlice.reducer
