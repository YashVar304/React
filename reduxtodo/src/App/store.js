import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from '../features/todo/todoSlice'

const store = configureStore({
    reducer:TodoReducer
})

export default store;