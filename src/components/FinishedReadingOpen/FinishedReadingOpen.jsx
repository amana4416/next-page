import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './FinishedReadingOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function FinishedReadingOpen() {

    const dispatch = useDispatch();

    //using useEffect so all books marked as 'finished reading' can be loaded as soon
    //you 'open' the bookshelf
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ALL_FINISHED_READING'
        })
    })


    return (
        <>
            <h2>Finished Reading</h2>
            <section className="finishedReadingOpenBackground">

            </section>
        </>
    )
}

export default FinishedReadingOpen;