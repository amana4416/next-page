import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CurrentlyReading.css';
//mui imports
import Paper from '@mui/material/Paper';

function CurrentlyReading() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call the last 6 books marked as currently reading from the redux store
    const currentlyReading = useSelector(store => store.bookshelves.lastCurrentlyReading);

    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'currently reading' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_CURRENTLY_READING'
        })
    }, [])

    //when you click anywhere on the currently reading bookshelf,
    //you will be navigated to a new page that shows every book 
    //that is marked as currently reading
    const openCurrentlyReading = () => {
        console.log('you opened the currently reading bookshelf');
        history.push(`/currentlyReadingOpen`)
    }

    return (
        <>
            <section className="currentlyReadingBackground" onClick={openCurrentlyReading}>
                <Paper
                    sx={{backgroundColor: '#808274', height: 'auto', width: '1200px', margin: 'auto', marginTop: '25px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '15px',}}
                >
                    <h2 className="bookshelfHeading">Currently Reading:</h2>
                    {currentlyReading.map(currently => {
                        return (
                            <Paper
                            key={currently.id}
                            sx={{backgroundColor: '#B7B4A2', height:'auto', width: '160px', margin: '15px', marginBottom: '15px', display: 'inline-flex'}}
                            >
                                <img 
                                    className="profileCurrentlyLast"
                                    src={currently.book_cover} 
                                    alt={currently.book_title}
                                />
                            </Paper>
                        )
                    })}
                </Paper>
            </section>
        </>
    )
}

export default CurrentlyReading;