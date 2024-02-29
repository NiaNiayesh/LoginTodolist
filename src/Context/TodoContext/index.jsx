import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: [],
  newTodo: "",
  editingTodo: null,
  
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            tittle: action.payload.tittle,
            userId: action.payload.userId
          },
        ],
        newTodo: "",
      };
    case "EDIT_TODO":
      const editingTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      return {
        ...state,
        newTodo: editingTodo.tittle,
        editingTodo,
      };
    case "UPDATE_TODO":
      const updatedTodos = state.todos.map((todo) =>
        todo.id === state.editingTodo.id
          ? { ...todo, tittle: state.newTodo }
          : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        newTodo: "",
        editingTodo: null,
      };

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos,
        newTodo: "",
        editingTodo: null,
      };
    case "SET_NEW_TODO":
      return {
        ...state,
        newTodo: action.payload,
      };
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const TodoProvider =({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    return <TodoContext.Provider value={{state,dispatch}}>{children}</TodoContext.Provider>
}