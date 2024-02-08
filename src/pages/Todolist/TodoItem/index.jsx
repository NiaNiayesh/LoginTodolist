import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { TodoContext } from "..";


export default function TodoItem({ todo}) {
  const {editTodo,deleteTodo} = useContext(TodoContext)
  return (
    <ListItem  
      key={todo.id}
      disableGutters
      sx={{backgroundColor: "primary.light"}}
    >
      <ListItemText primary={todo.title} />
      <ListItemSecondaryAction>
        <IconButton  
        onClick={() => editTodo(todo.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
