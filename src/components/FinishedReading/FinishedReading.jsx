import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FinishedReading.css';
//mui imports
import Paper from '@mui/material/Paper';

function FinishedReading() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call the books marked as 'finished reading' from the redux store
    const finishedReading = useSelector(store => store.bookshelves.finishedReading);
    console.log('here are the books you have finished reading:', finishedReading);

    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'finished reading' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_FINISHED_READING'
        })
    }, [])


    return (
        <>
            <section className="finishedReadingBackground">
                <h2 className="bookshelfHeading">Finished Reading:</h2>
                
            </section>
        </>
    )
}

export default FinishedReading;