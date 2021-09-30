import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { signInWithGithub, signInWithGoogle } from '../service/firebase';
import * as Api from '../service/api';
import ToDoList from './ToDoList';

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
          <form>
            <input placeholder="ToDo Name" value={inputName} onChange={e => setInputName(e.target.value)} />
            <button type="button" onClick={() => post()}>
              追加
            </button>
          </form>
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
    <>
      {todoForm()}
      <ToDoList todos={todos} fetch={fetch} />
    </>
  );
};

export default Dashbord;
