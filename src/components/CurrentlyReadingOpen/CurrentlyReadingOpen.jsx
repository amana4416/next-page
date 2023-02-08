import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyReadingOpen.css';

function CurrentlyReadingOpen() {

    const dispatch = useDispatch();

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
                <h1>heyo</h1>
            </section>
        </>
    )
}

export default CurrentlyReadingOpen;
