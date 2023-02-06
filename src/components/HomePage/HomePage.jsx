import React from 'react';
import {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function HomePage() {

  const dispatch = useDispatch();
  const history = useHistory();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  //assinging input a piece of state
  const [search, setSearch] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAGA/SEARCH_BOOKS',
      payload: search
    })
    //when the search goes through:
    //clear inputs
    setSearch('');
    //and move to the search page
    history.push('/search');
  }

  return (
   <>
    <form className='searchInput' onSubmit={submitSearch}>
      <TextField 
        value={search}
        label="search"
        varient="standard"
        sx={{color: '#42373A'}}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button 
        type='submit'
        varient='contained'
        color="secondary"
        sx={{backgroundColor: '#42373A', color: '#C79A96'}}
      >
        Search
      </Button>
    </form>
   </>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
