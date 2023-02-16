import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import BookNotesForm from "../BookNotesForm/BookNotesForm";
//mui import 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function BookNotes({bookDetails}) {

    const dispatch = useDispatch();
    const params = useParams();




    //calling bookNotes from the redux store
    const bookNotes = useSelector(store => store.bookNotes)

    //useEffect to retrieve any previous notes that have been left on a book
    useEffect(() => {
        const book_id = params.id
        dispatch({
            type: 'SAGA/FETCH_NOTES',
            payload: book_id
        })
    }, [params.id])

    


    return (
        <>
            

            {bookNotes.map(notes => {
                return (
                    <h2 key={notes.id}>{notes.note}</h2>
                )
            })}
        </>
    )
}

export default BookNotes;