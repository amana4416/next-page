import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';
//mui imports
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Paper 
        sx={{backgroundColor: '#42373A', width: '400px', maxWidth: '100%', padding: '25px', margin: '0 auto 20px', borderRadius: '3px'}}
      >
        <h2 className="registerHeading">Register User</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
        <TextField 
          value={username}
          label="username:"
          varient="standard"
          required
          sx={{backgroundColor: '#E6CEC7', margin: '15px', marginRight: '30px', width: '300px', height: 'auto'}}
          onChange={(event) => setUsername(event.target.value)}
        />
        </div>
        <div>
        <TextField 
          value={password}
          label="password:"
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
            value="Register"
            varient='contained'
            color="secondary"
            size="large"
            sx={{backgroundColor: '#C79A96', color: '#E6CEC7', marginTop: '15px', marginLeft: '15px' }}
          >
            Register
          </Button>
        </div>
      </Paper>
    </form>
  );
}

export default RegisterForm;
