import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        newTodo: "",
        editingTodoId: null
    },
    reducers: {
        getTodos: (state,action) => {
            state.todos = action.payload
        },
        setNewTodo: (state,action) => {
            state.newTodo = action.payload
        },
        addTodo: (state,action) => {
            state.todos.push(action.payload)
            state.newTodo = ""
        },
        editTodo: (state,action) => {
            state.editingTodoId = action.payload
            state.newTodo = action.payload.tittle
        },
        updateTodo: (state,action) => {
            const {id,tittle,userId} = action.payload
            const todoToUpdate = state.todos.find((todo) => todo.id === id)
            if (todoToUpdate) {
                todoToUpdate.tittle = tittle;
                todoToUpdate.userId = userId;
                state.editingTodoId = null;
                state.newTodo = "";
              }
        
        },
        deleteTodo: (state,action) => {
            const id = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id)
            state.newTodo = ""
            state.editingTodoId = null
        }
    }
})
export const {getTodos,setNewTodo,addTodo,editTodo,updateTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer