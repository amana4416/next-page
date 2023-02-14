import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
//mui import
import Button from '@mui/material/Button';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2 className="landingPageHeading">{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Book lovers can use Next Page to keep track of all the books they're reading, want to read, 
          and have already finished. Readers are also able to update their reading log and leave notes 
          about why they loved the book after finishing it.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <Button
              type="submit"
              value="Log In"
              varient='contained'
              color="secondary"
              size="large"
              sx={{backgroundColor: '#42373A', color: '#C79A96'}}
              onClick={onLogin}
            >
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
