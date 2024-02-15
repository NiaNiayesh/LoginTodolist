import React, { useContext } from "react";
import { Container, List} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem/index";
import { PageLayout } from "../../Components/Layouts/PageLayout";
import SButton from "../../Components/SButton";
import SInput from "../../Components/SInput";
import SBox from "../../Components/SBox";
import { TodoContext } from "../../Context/TodoContext";


export default function TodoList() {
  const {state,dispatch} = useContext(TodoContext)
  const {todos,newTodo,editingTodo} = state
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState("");
  // const [editingTodo, setEditingTodo] = useState(null);

  // useEffect(() => {
  //   setTodos(todos);
  // }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: uuidv4(),
          title: newTodo
        }
      })
      // setTodos([
      //   ...todos,
      //   {
      //     id: uuidv4(),
      //     title: newTodo,
      //   },
      // ]);
      // setNewTodo("");
    }
  };

  const editTodo = (id) => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id
      }
    })
    // const todo = todos.find((todo) => todo.id === id);
    // if (todo) {
    //   setNewTodo(todo.title);
    //   setEditingTodo(todo);
    // }
  };

  const updateTodo = () => {
    if (editingTodo) {
      dispatch({
        type: "UPDATE_TODO"
      })
      // const updatedTodos = todos.map((todo) =>
      //   todo.id === editingTodo.id ? { ...todo, title: newTodo } : todo
      // );
      // setTodos(updatedTodos);
      // setNewTodo("");
      // setEditingTodo(null);
    }
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id
      }
    })
    // const updatedTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);
  };
  const setNewTodo = (value) => {
    dispatch({
      type: "SET_NEW_TODO",
      payload: value,
    });
  };
  return (
      <PageLayout>
        <Container
          className="container"
          maxWidth="sm"
          sx={{ mt: "150px" }}
        >
          <SBox todoBox>
            <SInput
              text
              label="Add a todo"
              variant="filled"
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
