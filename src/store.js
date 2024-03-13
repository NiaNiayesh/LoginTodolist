import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";
import todoReducer from "./Features/todo/todoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export default store;
