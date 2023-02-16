import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
//mui import 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function BookNotesForm({bookDetails}) {

    const dispatch = useDispatch();

    //assigning input a piece of state
    const [note, setNote] = useState('');

    //calling user from the redux store
    const user = useSelector(store => store.user);

    const addNote = (id) => {
        console.log('you left a note on book with id:', id)
        dispatch({
            type: 'SAGA/ADD_NOTE',
            payload: {
                book_id: bookDetails.id,
                note: note,
                user_id: user.id
            }
        })
        //empty input
        setNote('');
    }

    return (
        <form>
            <TextField 
                value={note}
                label="Add Note"
                varient="standard"
                sx={{color: '#42373A', width: '250px', height: 'auto', marginLeft: '15px',}}
                onChange={(event) => setNote(event.target.value)}
            />
            <Button
                color="secondary"
                size="large"
                sx={{backgroundColor: '#42373A', color: '#C79A96', marginTop: '5px', marginBottom: '25px', marginLeft:'10px' }}
                onClick={() => {addNote(bookDetails.id)}}
            >
                Leave Note
            </Button>
        </form>
    )
}

export default BookNotesForm;