import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CurrentlyReadingOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function CurrentlyReadingOpen() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call all the books marked as currently reading from the redux store
    const currentlyReading = useSelector(store => store.openBookshelf.currentlyReading);

    //using useEffect so all books marked as 'currently reading' can be loaded as soon
    //you 'open' the bookshelf
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ALL_CURRENTLY_READING'
        })
    }, [])

    //when you click on a book cover in the opened currently reading bookshelf,
    //you will be navigated to a details page
    const showBookDetails = (currently) => {
        console.log(currently.id)
        history.push(`/bookDetails/${currently.id}`)
    }

    return (
        <>
            <Paper
                sx={{backgroundColor: '#808274', height: 'auto', width: '1200px', margin: 'auto', marginTop: '25px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '15px',}}
            >
                <h2 className="openBookshelfHeading">Currently Reading</h2>
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
                                    onClick={(e) => {showBookDetails(currently)}} 
                                />
                            </Paper>
                        )
                    })}
                </section>
            </Paper>
        </>
    )
}

export default CurrentlyReadingOpen;
