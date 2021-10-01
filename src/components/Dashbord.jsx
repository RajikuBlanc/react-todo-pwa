import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { signInWithGithub, signInWithGoogle } from '../service/firebase';
import * as Api from '../service/api';
import ToDoList from './ToDoList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Container from './Container';

const Dashbord = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const fetch = async () => {
    if (currentUser) {
      const data = await Api.initGet(currentUser.uid);
      await setTodos(data);
    }
  };

  const todoForm = () => {
    let dom;
    if (currentUser) {
      dom = (
        <div>
          <FormItem>
            <TextField
              id="outlined-basic"
              label="ToDo Name"
              variant="outlined"
              value={inputName}
              onChange={e => setInputName(e.target.value)}
            ></TextField>
            <ButtnStyle
              variant="contained"
              type="button"
              onClick={() => post()}
              disabled={inputName.length > 0 ? false : true}
            >
              追加
            </ButtnStyle>
          </FormItem>
        </div>
      );
    } else {
      dom = (
        <div>
          <button onClick={signInWithGoogle}>Googleログイン</button>
          <button onClick={signInWithGithub}>GitHubログイン</button>
        </div>
      );
    }
    return dom;
  };

  const post = async () => {
    await Api.addTodo(inputName, currentUser.uid);
    await setInputName('');
    fetch();
  };

  return (
    <Container>
      {todoForm()}
      <ToDoList todos={todos} fetch={fetch} />
    </Container>
  );
};

// --------------- Styled ---------------
const FormItem = styled('form')({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  input: {
    width: '300px',
    padding: '1rem'
  }
});
const ButtnStyle = styled(Button)({
  display: 'block',
  height: '56px',
  width: '100px'
});
export default Dashbord;
