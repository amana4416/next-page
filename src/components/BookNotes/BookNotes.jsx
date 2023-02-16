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

    const deleteNote = (id) => {
        console.log('trying to delete a note with this id:', id);
    }

    return (
        <>
            {bookNotes.map(notes => {
                return (
                    <section className="previousNote">
                    <li
                        key={notes.id}
                    >
                        {notes.note}
                    </li>
                        <DeleteForeverIcon
                            fontSize="medium"
                            sx={{color: '#42373A', display:'inline-flex'}}
                            onClick={() => deleteNote(notes.id)}
                        >
                        </DeleteForeverIcon >
                    </section>
                )
            })}
        </>
    )
}

export default BookNotes;