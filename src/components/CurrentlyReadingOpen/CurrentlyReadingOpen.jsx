import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyReadingOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function CurrentlyReadingOpen() {

    const dispatch = useDispatch();

    //call all the books marked as currently reading from the redux store
    const currentlyReading = useSelector(store => store.openBookshelf.currentlyReading);

    //using useEffect so all books marked as 'currently reading' can be loaded as soon
    //you 'open' the bookshelf
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ALL_CURRENTLY_READING'
        })
    }, [])


    return (
        <>
            <h2>Currently Reading</h2>
            <section className="currentlyReadingOpenBackground">
            {currentlyReading.map(currently => {
                    return (
                        <Paper
                        key={currently.id}
                        sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', paddingLeft: '5px', display: 'inline-flex'}}
                        >
                            <img 
                                className="currentlyOpen"
                                src={currently.book_cover} 
                                alt={currently.book_title}
                            />
                        </Paper>
                    )
                })}
            </section>
        </>
    )
}

export default CurrentlyReadingOpen;
