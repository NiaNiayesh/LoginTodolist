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
import { useDispatch, useSelector } from "react-redux";
import { removeLoginToken } from "../../Features/user/userSlice";
import { setNewTodo, addTodo, editTodo, getTodos, updateTodo,deleteTodo} from "../../Features/todo/todoSlice";


export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos)
  const newTodo = useSelector((state) => state.todo.newTodo)
  const editingTodoId = useSelector((state) => state.todo.editingTodoId)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const getLoginToken = Cookies.get("loginToken")
    if(!getLoginToken){
      navigate('/')
      dispatch(removeLoginToken())
    }
    const getALLTodos = async () => {
      try {
        const res = await axios.get("https://niyayesh.birkar.ir/Note/GetAll");

        dispatch(getTodos(res.data))
      } catch (error) {
        console.error(error);
      }
    };
    getALLTodos();
  }, [todos]);

  const handleAddTodo = async () => {
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
        dispatch(addTodo({
          id: response.data.id,
          tittle: newTodo,
          userId: 5
        }))
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTodo = (id) => {
    const editingTodoId = todos.find((todo) => todo.id === id)
    if(editingTodoId){
      dispatch(editTodo(editingTodoId))
    }

  };

  const handleUpdateTodo = async () => {
    if (editingTodoId) {
      try {
        const response = await axios.put(
          "https://niyayesh.birkar.ir/Note/UpdateNote",
          {
            id: editingTodoId.id,
            tittle: newTodo,
            userId: editingTodoId.userId,
          }
        );
        dispatch(updateTodo({
          id: response.data.id,
          tittle: response.data.tittle,
          userId: response.data.userId
        }))
  
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`https://niyayesh.birkar.ir/Note/DeleteNote?id=${id}`);
      dispatch(deleteTodo(id))
    
    } catch (error) {
      console.error(error);
    }
  };
  const handleSetNewTodo = (value) => {
    dispatch(setNewTodo(value))
 
  };
  const logout = () => {
    Cookies.remove("loginToken")
    dispatch(removeLoginToken())

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
            onChange={(e) => handleSetNewTodo(e.target.value)}
          />
          {editingTodoId ? (
            <SButton
              edit
              variant="contained"
              sx={{
                ml: "5px",
              }}
              endIcon={<EditIcon />}
              onClick={handleUpdateTodo}
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
              onClick={handleAddTodo}
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
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </List>
      </Container>
    </PageLayout>
  );
}
