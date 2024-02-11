import React, { createContext, useEffect, useState } from "react";
import { Container, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem/index";
import { PageLayout } from "../../layouts/PageLayout";
import SButton from "../../component/SButton";
import STextFiled from "../../component/STextFiled";
import SBox from "../../component/SBox";


export const TodoContext = createContext();

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: newTodo,
        },
      ]);
      setNewTodo("");
    }
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setNewTodo(todo.title);
      setEditingTodo(todo);
    }
  };

  const updateTodo = () => {
    if (editingTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, title: newTodo } : todo
      );
      setTodos(updatedTodos);
      setNewTodo("");
      setEditingTodo(null);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{todos,addTodo,editTodo,deleteTodo}}>
    <PageLayout>
      <Container className="container" maxWidth="sm">

        <SBox
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <STextFiled
            label="Add a new todo"
            variant="outlined"
            value={newTodo}
            sx={{ mt: 2, width: "450px" }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          {editingTodo ? (
            <SButton
              variant="contained"
              sx={{
                mt: 1,
                ml: 1,
                height: "3.4rem",
              }}
              endIcon={<EditIcon />}
              onClick={updateTodo}
            >
              Update
            </SButton>
          ) : (
            <SButton
              variant="contained"
              sx={{
                mt: 1,
                ml: 1,
                height: "3.4rem",
              }}
              endIcon={<AddIcon />}
              onClick={addTodo}
            >         
              Add
            </SButton>
          )}
        </SBox>
        <List sx={{ margin: 1, width: "450px" }}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </List>
      </Container>
    </PageLayout>
    </TodoContext.Provider>
  );
}
