import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { signInWithGithub, signInWithGoogle } from '../service/firebase';
import * as Api from '../service/api';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactDOM from 'react-dom';

const ToDoList = ({ todos, fetch }) => {
  const deleteHandle = id => {
    Api.todoDelete(id);
    fetch();
  };

  const todoList = todos.map(todo => {
    return (
      <li key={todo.id}>
        {todo.content}
        <button type="button" onClick={() => deleteHandle(todo.id)}>
          <DeleteIcon />
        </button>
      </li>
    );
  });
  return (
    <div>
      <h2>あなたのToDo</h2>
      <ul>{todoList}</ul>
    </div>
  );
};

export default ToDoList;
