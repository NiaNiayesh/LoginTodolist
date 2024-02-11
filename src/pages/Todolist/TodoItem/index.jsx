import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { TodoContext } from "..";
import SListItem from "../../../component/SListItem";

export default function TodoItem({ todo }) {
  const { editTodo, deleteTodo } = useContext(TodoContext);
  return (
    <SListItem 
     todosList
     key={todo.id} 
     disableGutters>
      <ListItemText primary={todo.title} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => editTodo(todo.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </SListItem>
  );
}
