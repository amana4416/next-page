import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './WantToRead.css';
//mui imports
import Paper from '@mui/material/Paper';

function WantToRead() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call the books marked as 'want to read' from the redux store


    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_WANT_TO_READ'
        })
    }, [])

    return (
        <>
           <section className="wantToReadBackground">
                <h2 className="bookshelfHeading">Want To Read:</h2>

            </section>
        </>
    )
}

export default WantToRead;