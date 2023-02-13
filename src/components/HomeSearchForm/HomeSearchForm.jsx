import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomeSearchForm.css';
//mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function HomeSearchForm() {
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
        <>
            <form className='homeSearchInput' onSubmit={submitSearch}>
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
                    size="large"
                    sx={{backgroundColor: '#42373A', color: '#C79A96'}}
                >
                    Search
                </Button>
            </form>
        </>
    )

}

export default HomeSearchForm;