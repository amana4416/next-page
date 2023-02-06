import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchForm() {
    const dispatch = useDispatch();
    const history = useHistory();
  
  
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
    )

}

export default SearchForm;