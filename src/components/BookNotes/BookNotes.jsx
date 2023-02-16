import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './BookNotes.css';
//mui import
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function BookNotes() {

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
                    <>
                    <h4 
                        className="previousNote"
                        key={notes.id}
                    >
                        {notes.note}
                    </h4>
                        <DeleteForeverIcon
                            className="deleteNoteButton"
                            fontSize="medium"
                            sx={{color: '#42373A'}}
                            // onClick={() => deleteFromBookshelf(bookDetails.id)}
                        >
                        </DeleteForeverIcon >
                    </>
                )
            })}
        </>
    )
}

export default BookNotes;