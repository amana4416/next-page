import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './WantToReadOpen.css';
//mui imports
import Paper from '@mui/material/Paper';

function WantToReadOpen() {

    const dispatch = useDispatch();


    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'want to read' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_WANT_TO_READ'
        })
    }, [])

    return (
        <>
            <h2>Want to Read</h2>
            <section className="wantToReadOpenBackground">

            </section>
        </>
    )
}

export default WantToReadOpen;