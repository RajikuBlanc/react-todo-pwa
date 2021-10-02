import React from 'react';
import * as Api from '../service/api';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const ToDoList = ({ todos, fetch }) => {
  const deleteHandle = id => {
    Api.todoDelete(id);
    fetch();
  };
  const checkHandle = async id => {
    await Api.toggleComplete(id);
    fetch();
  };

  const todoList = todos.map(todo => {
    return (
      <ListItemStyle
        key={todo.id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" type="button" onClick={() => deleteHandle(todo.id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <Checkbox checked={todo.isComplete} onClick={() => checkHandle(todo.id)} />
        <ListItemText primary={todo.content} />
      </ListItemStyle>
    );
  });

  return (
    <div>
      <h2>あなたのToDo</h2>
      <ul>{todoList}</ul>
    </div>
  );
};

// --------------- Styled ---------------
const ListItemStyle = styled(ListItem)({
  maxWidth: '400px'
});
export default ToDoList;
