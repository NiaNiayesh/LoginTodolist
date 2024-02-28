import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import SListItem from "../../../Components/SListItem";

export default function TodoItem({ todo,editTodo, deleteTodo }) {
  return (
    <SListItem 
     todosList
     key={todo.id} 
     disableGutters>
      <ListItemText primary={todo.tittle} />
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
