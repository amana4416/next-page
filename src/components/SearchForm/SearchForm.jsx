import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function SearchForm() {

    const dispatch = useDispatch();
  
    //assinging input a piece of state
    const [search, setSearch] = useState('');
  
    const submitSearch = (event) => {
      event.preventDefault();
      dispatch({
        type: 'SAGA/SEARCH_BOOKS',
        payload: search
      })
      //when the search goes through:
      //clear input
      setSearch('');
    }

    return (
        <>
            <form className='searchInput' onSubmit={submitSearch}>
                <Paper 
                    sx={{backgroundColor: '#B7B4A2', width: '450px', marginLeft: '480px'}}
                >
                    <TextField 
                        value={search}
                        label="search"
                        varient="standard"
                        sx={{color: '#42373A', margin: '15px', marginRight: '30px', width: '300px', height: 'auto'}}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <Button 
                        type='submit'
                        varient='contained'
                        color="secondary"
                        size="large"
                        sx={{backgroundColor: '#42373A', color: '#C79A96', marginTop: '20px'}}
                    >
                        Search
                    </Button>
                </Paper>
            </form>
        </>
    )
}

export default SearchForm;