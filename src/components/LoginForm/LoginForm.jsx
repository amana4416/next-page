import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import './LoginForm.css';
//mui imports
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <Paper 
        sx={{backgroundColor: '#42373A', width: '400px', maxWidth: '100%', padding: '25px', margin: '0 auto 20px', borderRadius: '3px'}}
      >
        <h2 className="loginHeading">Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <TextField 
            value={username}
            label="Username:"
            varient="standard"
            required
            sx={{backgroundColor: '#E6CEC7', margin: '15px', marginRight: '30px', width: '300px', height: 'auto'}}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <TextField 
            value={password}
            label="Password:"
            type="password"
            varient="standard"
            required
            sx={{backgroundColor: '#E6CEC7', margin: '15px', marginRight: '30px', width: '300px', height: 'auto'}}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <Button
            type="submit"
            value="Log In"
            varient='contained'
            color="secondary"
            size="large"
            sx={{backgroundColor: '#C79A96', color: '#E6CEC7', marginTop: '15px', marginLeft: '15px' }}
          >
            Login
          </Button>
        </div>
      </Paper>
    </form>
  );
}

export default LoginForm;
