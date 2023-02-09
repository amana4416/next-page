import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './WantToReadOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function WantToReadOpen() {

    const dispatch = useDispatch();

    //call all the books marked as want to read from the redux store
    const wantToRead = useSelector(store => store.openBookshelf.wantToRead);


    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'want to read' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ALL_WANT_TO_READ'
        })
    }, [])

    return (
        <>
            <h2>Want to Read</h2>
            <section className="wantToReadOpenBackground">
                {wantToRead.map(want => {
                    return (
                        <Paper
                        key={want.id}
                        sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', paddingLeft: '5px', display: 'inline-flex'}}
                        >
                            <img 
                                className="wantOpen"
                                src={want.book_cover} 
                                alt={want.book_title}
                            />
                        </Paper>
                    )
                })}
            </section>
        </>
    )
}

export default WantToReadOpen;