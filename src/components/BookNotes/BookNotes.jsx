import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
//mui import 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function BookNotes({bookDetails}) {

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
    }

    return (
        <>
            <TextField 
                value={note}
                label="Add Note"
                varient="standard"
                sx={{color: '#42373A', width: '300px', height: '500px', margin: '15px', marginRight: '30px', height: 'auto'}}
                onChange={(event) => setNote(event.target.value)}
            />
            <Button
                color="secondary"
                size="large"
                sx={{backgroundColor: '#42373A', color: '#C79A96', marginTop: '20px', marginBottom: '25px', marginLeft:'15px' }}
                onClick={() => {addNote(bookDetails.id)}}
            >
                Leave a Note
            </Button>
        </>
    )
}

export default BookNotes;