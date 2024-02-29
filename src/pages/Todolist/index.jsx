import React, { useContext, useEffect } from "react";
import { Container, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from '@mui/icons-material/Logout';

import TodoItem from "./TodoItem/index";
import { PageLayout } from "../../Components/Layouts/PageLayout";
import SButton from "../../Components/SButton";
import SInput from "../../Components/SInput";
import SBox from "../../Components/SBox";
import { TodoContext } from "../../Context/TodoContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const { todos, newTodo, editingTodo } = state;
  const navigate = useNavigate()

  useEffect(() => {
    const getLoginToken = Cookies.get("loginToken")
    if(!getLoginToken){
      navigate('/')
    }
    const getALLTodos = async () => {
      try {
        const res = await axios.get("https://niyayesh.birkar.ir/Note/GetAll");

        dispatch({
          type: "GET_TODOS",
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getALLTodos();
  }, [todos]);

  const addTodo = async () => {
    try {
      if (newTodo.trim()) {
        const response = await axios.post(
          "https://niyayesh.birkar.ir/Note/CreateNote",
          {
            id: 0,
            tittle: newTodo,
            userId: 5,
          }
        );

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: response.data.id,
            tittle: newTodo,
            userId: 5,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editTodo = (id) => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id,
      },
    });
  };

  const updateTodo = async () => {
    if (editingTodo) {
      try {
        const response = await axios.put(
          "https://niyayesh.birkar.ir/Note/UpdateNote",
          {
            id: editingTodo.id,
            tittle: newTodo,
            userId: editingTodo.userId,
          }
        );
        dispatch({
          type: "UPDATE_TODO",
          id: response.data.id,
          tittle: response.data.tittle,
          userId: response.data.userId,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://niyayesh.birkar.ir/Note/DeleteNote?id=${id}`);
      dispatch({
        type: "DELETE_TODO",
        payload: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const setNewTodo = (value) => {
    dispatch({
      type: "SET_NEW_TODO",
      payload: value,
    });
  };
  const logout = () => {
    Cookies.remove("loginToken")
  }
  return (
    <PageLayout>
              <Container className="container"  maxWidth="xl"  sx={{display: "flex", justifyContent:"flex-end",mt: "140px" }}>
        <SButton
              logout
              variant="contained"
              sx={{
                ml: "5px",
              }}
              endIcon={<LogoutIcon />}
              onClick={logout}
            >
              Logout
            </SButton>
        </Container>
      <Container className="container" maxWidth="sm" sx={{ mt: "5px" }}>

        <SBox todoBox>
          <SInput
            text
            label="Add a todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          {editingTodo ? (
            <SButton
              edit
              variant="contained"
              sx={{
                ml: "5px",
              }}
              endIcon={<EditIcon />}
              onClick={updateTodo}
            >
              Edit
            </SButton>
          ) : (
            <SButton
              add
              variant="contained"
              sx={{
                ml: "5px",
              }}
              endIcon={<AddIcon />}
              onClick={addTodo}
            >
              Add
            </SButton>
          )}
        </SBox>
        <List sx={{ m: 1, width: "450px" }}>
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
  );
}
