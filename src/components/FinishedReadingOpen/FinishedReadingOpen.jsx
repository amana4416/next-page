import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './FinishedReadingOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function FinishedReadingOpen() {

    const dispatch = useDispatch();

    //call all the books marked as finished reading from the redux store
    const finishedReading = useSelector(store => store.openBookshelf.finishedReading);

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
                {finishedReading.map(finished => {
                    return (
                        <Paper
                        key={finished.id}
                        sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', paddingLeft: '5px', display: 'inline-flex'}}
                        >
                            <img 
                                className="finishedOpen"
                                src={finished.book_cover} 
                                alt={finished.book_title}
                            />
                        </Paper>
                    )
                })}
            </section>
        </>
    )
}

export default FinishedReadingOpen;