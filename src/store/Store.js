import { configureStore } from '@reduxjs/toolkit'
import todoItemStatus from "./Features/TodoItemSlice"

export const store = configureStore({
  reducer: {
    todoItems: todoItemStatus,
  },
})