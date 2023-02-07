import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CurrentlyReading.css';
//mui imports
import Paper from '@mui/material/Paper';

function CurrentlyReading() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call the books marked as currently reading from the redux store
    const currentlyReading = useSelector(store => store.bookshelves.currentlyReading);
    console.log('here are the books we are currently reading:', currentlyReading)

    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'currently reading' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_CURRENTLY_READING'
        })
    }, [])


    return (
        <>
            <section className="currentlyReadingBackground">
                <h2 className="bookshelfHeading">Currently Reading:</h2>
                {currentlyReading.map(currently => {
                    return (
                        <Paper
                        key={currently.book_ibsn}
                        sx={{backgroundColor: '#B7B4A2', height:'auto', width: '160px', margin: '15px', marginBottom: '15px'}}
                        >
                            <img 
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

export default CurrentlyReading;